import Link from "next/link";
import { data } from "./data";
import { useRouter } from "next/router";
import { useDashboardContext } from "../Provider";

const style = {
  title: "mx-4 text-sm whitespace-pre",
  active: "bg-gray-700 rounded-full",
  link: "flex items-center justify-start my-1 p-3 w-full hover:text-white",
  close:
    "lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all",
  open: "lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto",
};

export function SidebarItems() {
  const { pathname } = useRouter();
  const { sidebarOpen } = useDashboardContext();

  return (
    <ul className="md:pl-3">
      {data.map((item) => (
        <li key={item.title}>
          <Link href={item.link}>
            <span className={style.link}>
              <div
                className={`p-2 ${item.link === pathname ? style.active : ""}`}
              >
                <span>{item.icon}</span>
              </div>
              <span
                className={`${style.title} ${
                  sidebarOpen ? style.open : style.close
                }`}
              >
                {item.title}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
