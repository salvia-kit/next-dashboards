import React from "react";
import { TopBar } from "./TopBar";
import { Overlay } from "./Overlay";
import { Sidebar } from "./sidebar/Sidebar";
import css from "./style.module.css";
import { DashboardProvider } from "./Provider";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

/* lg:w-[calc(100%-16rem)] class is the remained width of the main tag from lg:viewport by subtracting
(the total width(100%) by the width of the Sidebar component which is w-64 = 16rem) */

const style = {
  container: "h-screen overflow-hidden w-full lg:p-4",
  content: "h-screen overflow-hidden relative lg:rounded-2xl",
  main: "h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:px-4 lg:px-6",
  mainContainer:
    "flex flex-col h-screen pl-0 w-full lg:space-y-4 lg:w-[calc(100%-16rem)]",
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <DashboardProvider>
      <div className={`${css.background} ${style.container}`}>
        <div className={`${style.content} ${css.content}`}>
          <div className="flex items-start">
            <Overlay />
            <Sidebar mobileOrientation="end" />
            <div className={style.mainContainer}>
              <TopBar />
              <main className={`${style.main} ${css.main}`}>{children}</main>
            </div>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}
