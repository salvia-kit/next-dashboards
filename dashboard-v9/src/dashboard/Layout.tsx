import React from "react";
import { TopBar } from "./TopBar";
import { Overlay } from "./Overlay";
import { Sidebar } from "./sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const style = {
  mainContainer:
    "flex flex-col w-full h-screen pl-0 lg:space-y-4 lg:w-[calc(100%-16rem)]",
  container: "bg-white h-screen overflow-hidden relative",
  main: "bg-white h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:px-4 lg:px-6 lg:rounded-tl-3xl",
};

export function DashboardLayout(props: LayoutProps) {
  return (
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
  );
}
