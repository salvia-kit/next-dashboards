import { useDashboardContext } from "./Provider";

const style = {
  overlay: `bg-black fixed h-screen left-0 opacity-40 top-0 w-screen z-30 lg:hidden`,
};

// The overlay will only be visible on small screens to emphasize the focus on the side navigation when it is open.
export function Overlay() {
  const { sidebarOpen, closeSidebar } = useDashboardContext();
  return (
    <div onClick={closeSidebar} className={sidebarOpen ? style.overlay : ""} />
  );
}
