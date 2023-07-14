import React from "react";
import { TopBar } from "./TopBar";
import { Overlay } from "./Overlay";
import { Sidebar } from "./sidebar/Sidebar";
import { DashboardProvider, useDashboardContext } from "./Provider";

interface ChildrenProps {
  children: React.ReactNode;
}

/*	lg:w-[calc(100%-18rem)] class get the remained width of the main tag from lg:viewport by subtracting
(the total width by the width of the Sidebar component which is w-80 = 18rem)*/

const style = {
  open: "lg:w-full",
  close: "lg:lg:w-[calc(100%-18rem)]",
  mainContainer: "flex flex-col w-full h-screen pl-0 lg:space-y-4",
  container: "h-screen overflow-hidden relative bg-[#f7fafc]",
  main: "h-screen overflow-auto pb-36 pt-8 px-2 md:px-4 md:pb-8 md:pt-4 lg:pt-0",
};

const Content = (props: ChildrenProps) => {
  const { sidebarOpen } = useDashboardContext();
  return (
    <div className={style.container}>
      <div className="flex items-start">
        <Overlay />
        <Sidebar mobileOrientation="end" />
        <div
          className={`${style.mainContainer} 
          ${sidebarOpen ? style.open : style.close}`}
        >
          <TopBar />
          <main className={style.main}>{props.children}</main>
        </div>
      </div>
    </div>
  );
};

export function DashboardLayout(props: ChildrenProps) {
  return (
    <DashboardProvider>
      <Content>{props.children}</Content>
    </DashboardProvider>
  );
}
