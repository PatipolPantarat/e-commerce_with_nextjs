import { NavLinks } from "@/app/ui_components/dashboard/nav-links";
import Link from "next/link";
export default function SideNav() {
  return (
    <div className="flex flex-col h-screen w-60 bg-white p-2">
      <Link
        className="text-3xl text-indigo-600 text-center p-3 font-bold"
        href="/dashboard"
      >
        LOGO
      </Link>
      <div>
        <NavLinks />
      </div>
    </div>
  );
}
