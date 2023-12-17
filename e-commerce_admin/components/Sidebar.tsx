import {
  ArchiveBoxIcon,
  Squares2X2Icon,
  ShoppingCartIcon,
  UsersIcon,
  BanknotesIcon,
  Cog6ToothIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

interface Menu {
  id: number;
  icon: JSX.Element;
  menu: string;
  link: string;
}

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const menus: Menu[] = [
    {
      id: 1,
      icon: <Squares2X2Icon className="w-6 h-6 me-2" />,
      menu: "Dashboard",
      link: "/dashboard",
    },
    {
      id: 2,
      icon: <ArchiveBoxIcon className="w-6 h-6 me-2" />,
      menu: "Products",
      link: "/products",
    },
    {
      id: 3,
      icon: <ShoppingCartIcon className="w-6 h-6 me-2" />,
      menu: "Orders",
      link: "/orders",
    },
    {
      id: 4,
      icon: <UsersIcon className="w-6 h-6 me-2" />,
      menu: "Customers",
      link: "/customers",
    },
    {
      id: 5,
      icon: <BanknotesIcon className="w-6 h-6 me-2" />,
      menu: "Transactions",
      link: "/transactions",
    },
  ];
  const accountMenus: Menu[] = [
    // {
    //   id: 1,
    //   icon: <Cog6ToothIcon className="w-6 h-6 me-2" />,
    //   menu: "Setting",
    // },
    {
      id: 2,
      icon: <UserIcon className="w-6 h-6 me-2" />,
      menu: "Account",
      link: "/account",
    },
  ];
  return (
    <>
      <div className="min-h-screen w-60 bg-white fixed">
        <div className="h-16 border-b border-gray-300 flex justify-center items-center">
          <p className="font-bold text-2xl cursor-pointer">LOGO</p>
        </div>
        <div className="px-4 py-1 border-b border-gray-300">
          <ul>
            {menus.map(({ id, icon, menu, link }) => (
              <Link key={id} href={link}>
                <li className="bg-white hover:bg-blue-100 p-3 my-3 text-bold text-lg cursor-pointer rounded-lg flex items-center duration-300">
                  {icon}
                  {menu}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="px-4 py-1">
          <ul>
            {accountMenus.map(({ id, icon, menu, link }) => (
              <Link key={id} href={link}>
                <li className="bg-white hover:bg-blue-100 p-3 my-3 text-bold text-lg cursor-pointer rounded-lg flex items-center duration-300">
                  {icon}
                  {menu}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="ml-60">{children}</div>
    </>
  );
}
