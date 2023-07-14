import React from "react";
import { useRouter } from "next/router";

interface DashboardProviderProps {
  children: React.ReactNode;
}

interface ProviderValues {
  sidebarOpen?: boolean;
  openSidebar?: () => void;
  closeSidebar?: () => void;
}

// create new context
const Context = React.createContext<ProviderValues>({});

export function DashboardProvider({ children }: DashboardProviderProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const router = useRouter();

  const openSidebar = React.useCallback(() => {
    setSidebarOpen(true);
  }, []);

  const closeSidebar = React.useCallback(() => {
    setSidebarOpen(false);
  }, []);

  // set the html tag overflow to hidden
  React.useEffect(() => {
    document.documentElement.style.overflow = "hidden";
  }, []);

  // close Sidebar on route changes when viewport is less than 1024px
  React.useEffect(() => {
    document.documentElement.style.overflow = "hidden";
  }, []);

  // close side navigation when route changes
  React.useEffect(() => {
    if (sidebarOpen) {
      router.events.on("routeChangeStart", () => setSidebarOpen(false));
    }

    return () => {
      if (sidebarOpen) {
        router.events.off("routeChangeStart", () => setSidebarOpen(false));
      }
    };
  }, [sidebarOpen, router]);

  return (
    <Context.Provider value={{ sidebarOpen, openSidebar, closeSidebar }}>
      {children}
    </Context.Provider>
  );
}

// custom hook to consume all context values { open, ref, toggle }
export function useDashboardContext() {
  return React.useContext(Context);
}
