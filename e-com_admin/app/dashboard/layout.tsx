import SideNav from "@/app/ui_components/dashboard/sidenav";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <div>
        <SideNav />
      </div>
      <div className="p-5 overflow-y-auto">{children}</div>
    </div>
  );
}
