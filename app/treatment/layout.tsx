import { MetaPixelLeadCustom } from "@/app/components/MetaPixelLeadCustom";

export default function TreatmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MetaPixelLeadCustom />
      {children}
    </>
  );
}
