'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { data } from './data';
import { useDashboardContext } from '../Provider';

const style = {
  title: 'mx-4 text-sm whitespace-pre',
  inactive: 'text-white',
  active: 'font-medium text-green-400 hover:text-green-400',
  link: 'flex items-center justify-start my-2 p-4 w-full hover:text-white',
  close: 'lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all',
  open: 'lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto',
};

export function SidebarItems() {
  const pathname = usePathname();
  const { isOpen } = useDashboardContext();
  return (
    <ul className="md:pl-5">
      {data.map((item) => (
        <li key={item.title}>
          <Link href={item.link}>
            <span
              className={`${style.link} ${item.link === pathname ? style.active : style.inactive}
             `}
            >
              <span>{item.icon}</span>
              <span className={`${style.title} ${isOpen ? style.open : style.close}`}>
                {item.title}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
