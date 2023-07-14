import React from "react";
import { TopBar } from "./TopBar";
import { Overlay } from "./Overlay";
import { Sidebar } from "./sidebar/Sidebar";
import { DashboardProvider } from "./Provider";

interface LayoutProps {
  children: React.ReactNode;
}

const style = {
  container: "bg-gray-100 h-screen overflow-hidden relative",
  main: "h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 lg:px-4",
  mainContainer: "flex flex-col h-screen pl-0 w-full lg:pl-24 lg:space-y-4",
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
