"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import {
  HomeIcon,
  ComputerDesktopIcon,
  ClipboardDocumentIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const links = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <HomeIcon />,
  },
  {
    title: "Products",
    path: "/dashboard/products",
    icon: <ComputerDesktopIcon />,
  },
  {
    title: "Transactions",
    path: "/dashboard/transactions",
    icon: <ClipboardDocumentIcon />,
  },
];
export function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map(({ title, path, icon }) => {
        return (
          <Link
            key={title}
            href={path}
            className={clsx(
              "flex rounded-md p-3 text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 my-2 duration-200",
              {
                "bg-indigo-50 text-indigo-600": pathname === path,
              }
            )}
          >
            <p className="h-5 w-5 me-2">{icon}</p>
            <p>{title}</p>
          </Link>
        );
      })}
    </>
  );
}
