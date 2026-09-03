import { NextResponse } from "next/server";

const QUERY = `query hourlySchedule($scheduleParams: ScheduleParams) {
  schedule(input: $scheduleParams) {
    bizItemSchedule {
      hourly {
        unitStartTime
        unitBookingCount
        occupiedBookingCount
        isUnitBusinessDay
        isUnitSaleDay
      }
    }
  }
}`;

export async function GET() {
  try {
    const now = new Date();
    const kst = new Date(now.getTime() + 9 * 3600 * 1000);
    const dateStr = "2026-09-15"; // TODO: 테스트 후 제거 — kst.toISOString().slice(0, 10)

    const res = await fetch(
      "https://booking.naver.com/graphql?opName=hourlySchedule",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: "https://booking.naver.com",
          Referer: `https://booking.naver.com/booking/13/bizes/1555012/items/7265789?startDate=${dateStr}`,
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36",
        },
        body: JSON.stringify({
          operationName: "hourlySchedule",
          variables: {
            scheduleParams: {
              businessTypeId: 13,
              businessId: "1555012",
              bizItemId: "7265789",
              startDateTime: `${dateStr}T00:00:00`,
              endDateTime: `${dateStr}T23:59:59`,
              fixedTime: true,
              includesHolidaySchedules: true,
            },
          },
          query: QUERY,
        }),
        cache: "no-store",
      }
    );

    if (!res.ok) return NextResponse.json({ hasBooking: false, error: true }, { status: 502 });

    const json = await res.json();
    const slots: {
      unitStartTime: string;
      unitBookingCount: number;
      occupiedBookingCount: number;
      isUnitBusinessDay: boolean;
      isUnitSaleDay: boolean;
    }[] = json?.data?.schedule?.bizItemSchedule?.hourly ?? [];

    const eveningSlots = slots.filter((slot) => {
      const timePart = slot.unitStartTime.split(" ")[1];
      const [h, m] = timePart.split(":").map(Number);
      const min = h * 60 + m;
      return min >= 18 * 60 && min < 20 * 60 + 30;
    });

    // 18:00~20:30 슬롯 중 영업일이면서 예약 불가(막힌 슬롯)가 하나라도 있으면 야간 진료 중
    const hasBooking = eveningSlots.some(
      (slot) => slot.isUnitBusinessDay && !slot.isUnitSaleDay
    );

    return NextResponse.json({ hasBooking, _debug: eveningSlots });
  } catch {
    return NextResponse.json({ hasBooking: false, error: true }, { status: 500 });
  }
}
