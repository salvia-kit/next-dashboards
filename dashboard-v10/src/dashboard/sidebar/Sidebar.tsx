import css from "../style.module.css";
import { SidebarItems } from "./SidebarItems";
import { useDashboardContext } from "../Provider";

interface SidebarProps {
  mobileOrientation: "start" | "end";
}

const style = {
  mobileOrientation: {
    start: "left-0",
    end: "right-0",
  },
  container: "pb-32 lg:pb-6",
  close: "hidden lg:block lg:w-80 lg:z-auto",
  open: "w-10/12 absolute z-40 sm:w-5/12 lg:w-24",
  default: "overflow-y-auto top-0 lg:relative",
};

export function Sidebar(props: SidebarProps) {
  const { sidebarOpen } = useDashboardContext();
  return (
    <aside
      className={`${style.default} 
        ${style.mobileOrientation[props.mobileOrientation]} 
        ${sidebarOpen ? style.open : style.close} ${css.scrollbar}`}
    >
      <div className="h-screen w-full">
        <SidebarItems />
      </div>
    </aside>
  );
}
