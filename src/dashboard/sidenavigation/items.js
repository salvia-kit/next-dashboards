import Link from 'next/link';
import { useRouter } from 'next/router';

import data from './data';
import { useToggle } from '../provider/context';

const style = {
  title: `mx-4 text-sm`,
  active: `bg-gray-700 rounded-full`,
  link: `flex items-center justify-start my-1 p-3 w-full hover:text-white`,
  close: `lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all`,
  open: `lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto`,
};

export default function SidenavItems() {
  const { asPath } = useRouter();
  const { open } = useToggle();
  return (
    <ul className="md:pl-3">
      <li>
        {data.map((item) => (
          <Link href={item.link} key={item.title}>
            <a className={style.link}>
              <div
                className={`p-2 ${item.link === asPath ? style.active : ''}`}
              >
                <span>{item.icon}</span>
              </div>
              <span
                className={`${style.title} ${open ? style.open : style.close}`}
              >
                {item.title}
              </span>
            </a>
          </Link>
        ))}
      </li>
    </ul>
  );
}
