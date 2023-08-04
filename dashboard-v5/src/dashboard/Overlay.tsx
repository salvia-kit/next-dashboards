import { useDashboardContext } from "./Provider";

// The overlay will only be visible on small screens to emphasize the focus on Sidebar when it is open.
export function Overlay() {
  const { closeSidebar, sidebarOpen } = useDashboardContext();
  return (
    <div
      onClick={closeSidebar}
      className={
        sidebarOpen
          ? "fixed left-0 top-0 z-30 h-screen w-screen bg-black opacity-40 lg:bg-transparent"
          : ""
      }
    />
  );
}
