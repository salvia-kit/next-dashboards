import Link from "next/link";
import { data } from "./data";
import { Collapse } from "./Collapse";
import { useRouter } from "next/router";

const style = {
  active: "font-normal mx-4 text-sm text-blue-600",
  inactive: "font-light mx-4 text-sm text-gray-900",
  link: "inline-flex items-center justify-start my-1 p-3 text-black",
};

export function SidebarItems() {
  const { pathname } = useRouter();
  return (
    <ul className="mt-6 md:pl-6">
      <li>
        {data.map(({ section, icon, content }) => (
          <Collapse key={section}>
            <div className="flex">
              <span>{icon}</span>
              <span className="pl-3">{section}</span>
            </div>
            {content.map((item) => (
              <div className="pl-5" key={item.title}>
                <Link href={item.link}>
                  <span className={style.link}>
                    <span
                      className={
                        item.link === pathname ? style.active : style.inactive
                      }
                    >
                      {item.title}
                    </span>
                  </span>
                </Link>
              </div>
            ))}
          </Collapse>
        ))}
      </li>
    </ul>
  );
}
