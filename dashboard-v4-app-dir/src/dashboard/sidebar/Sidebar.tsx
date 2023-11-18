'use client';
import css from '../style.module.css';
import { SidebarItems } from './SidebarItems';
import { SidebarHeader } from './SidebarHeader';
import { useDashboardContext } from '../Provider';

interface SidebarProps {
  mobileOrientation: 'start' | 'end';
}

const style = {
  mobileOrientation: {
    start: 'left-0 ',
    end: 'right-0 lg:left-0',
  },
  container: 'pb-32 lg:pb-12',
  close: 'duration-700 ease-out hidden transition-all lg:w-24',
  open: 'absolute duration-500 ease-in transition-all w-8/12 z-40 sm:w-5/12 md:w-64',
  default: 'h-screen overflow-y-auto text-white top-0 lg:absolute bg-gray-900 lg:block lg:z-40',
};

export function Sidebar(props: SidebarProps) {
  const { isOpen } = useDashboardContext();
  return (
    <aside
      className={`${style.default} 
        ${style.mobileOrientation[props.mobileOrientation]} 
        ${isOpen ? style.open : style.close} ${css.scrollbar}`}
    >
      <div className={style.container}>
        <SidebarHeader />
        <SidebarItems />
      </div>
    </aside>
  );
}
