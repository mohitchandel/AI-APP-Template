import Sidebar from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={`flex`}>
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </section>
  );
}
