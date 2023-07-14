import React from "react";
import { TopBar } from "./TopBar";
import { Overlay } from "./Overlay";
import { Sidebar } from "./sidebar/Sidebar";
import { DashboardProvider } from "./Provider";

interface LayoutProps {
  children: React.ReactNode;
}

const style = {
  container: "bg-[#0E141B] h-screen overflow-hidden relative",
  mainContainer:
    "flex flex-col h-screen pl-0 w-full lg:space-y-4 lg:w-[calc(100%-16rem)]",
  main: "h-screen overflow-auto pb-36 pt-8 px-2 md:pb-8 md:pt-4 md:px-8 lg:pt-0",
};

export function DashboardLayout(props: LayoutProps) {
  return (
    <DashboardProvider>
      <div className={style.container}>
        <div className="flex items-start">
          <Overlay />
          <Sidebar mobileOrientation="end" />
          <div className={style.mainContainer}>
            <TopBar />
            <main className={style.main}>{props.children}</main>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}
