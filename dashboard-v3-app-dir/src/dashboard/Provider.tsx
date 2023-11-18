'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

type DashboardProviderProps = {
  children: React.ReactNode;
};

type ProviderValues = {
  isOpen?: boolean;
  openSidebar?: () => void;
  closeSidebar?: () => void;
  toggleSidebar?: () => void;
};

const Context = React.createContext<ProviderValues>({});

export function DashboardProvider({ children }: DashboardProviderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  const openSidebar = () => {
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  // set the html tag overflow to hidden
  React.useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
  }, []);

  // close Sidebar on route changes
  React.useEffect(() => {
    return () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
  }, [isOpen, pathname]);

  return (
    <Context.Provider value={{ isOpen, openSidebar, closeSidebar, toggleSidebar }}>
      {children}
    </Context.Provider>
  );
}

// custom hook to consume all context values { isOpen, openSidebar, closeSidebar, toggleSidebar }
export function useDashboardContext() {
  return React.useContext(Context);
}
