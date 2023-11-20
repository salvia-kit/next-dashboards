'use client';
import React from 'react';
import { TopBar } from './TopBar';
import { Overlay } from './Overlay';
import { Sidebar } from './sidebar/Sidebar';
import { DashboardProvider, useDashboardContext } from './Provider';

type ContentProps = {
  children: React.ReactNode;
};

const style = {
  open: 'lg:w-full',
  close: 'lg:pl-4 lg:lg:w-[calc(100%-16rem)]',
  mainContainer: 'flex flex-col w-full h-screen pl-0 lg:space-y-4',
  container: 'bg-gray-100 h-screen overflow-hidden relative lg:p-4',
  main: 'h-screen overflow-auto pb-36 pt-8 px-2 md:pb-8 md:pt-4 lg:pt-0',
};

function Content(props: ContentProps) {
  const { isOpen } = useDashboardContext();
  return (
    <div className={style.container}>
      <div className="flex items-start">
        <Overlay />
        <Sidebar mobileOrientation="end" />
        <div
          className={`${style.mainContainer} 
             ${isOpen ? style.open : style.close}`}
        >
          <TopBar />
          <main className={style.main}>{props.children}</main>;
        </div>
      </div>
    </div>
  );
}

export function DashboardLayout(props: ContentProps) {
  return (
    <DashboardProvider>
      <Content>{props.children}</Content>
    </DashboardProvider>
  );
}
