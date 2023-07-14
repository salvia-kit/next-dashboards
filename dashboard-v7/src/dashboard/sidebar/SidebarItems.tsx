import Link from "next/link";
import { useRouter } from "next/router";
import { data } from "./data";

const style = {
  title: "mx-4 text-sm",
  section: "font-thin pl-5 text-white mb-6 uppercase lg:pl-6",
  active: "border-l-4 border-white lg:border-l-0 lg:border-r-4",
  link: "flex items-center text-gray-200 justify-start my-9 px-3 w-full hover:text-white",
};

export function SidebarItems() {
  const { pathname } = useRouter();
  return (
    <ul className="md:pl-6">
      {data.map(({ section, content }) => (
        <li key={section}>
          <div className="mb-12">
            <div className={style.section}>{section}</div>
            {content.map((item) => (
              <Link href={item.link} key={item.title}>
                <span
                  className={`${style.link} 
                    ${item.link === pathname ? style.active : ""}`}
                >
                  <span>{item.icon}</span>
                  <span className={style.title}>{item.title}</span>
                </span>
              </Link>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
