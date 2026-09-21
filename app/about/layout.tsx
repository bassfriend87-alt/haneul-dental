import { MetaPixelLeadCustom } from "@/app/components/MetaPixelLeadCustom";

export default function AboutLayout({
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
