import React from 'react';
import { useRouter } from 'next/router';

// create new context
const Context = React.createContext({});

export default function DashboardProvider({ children }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const router = useRouter();

  const toggle = React.useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  // set the html tag overflow to hidden
  // close side navigation when route starts changing
  React.useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    if (open) {
      router.events.on('routeChangeStart', () => setOpen(false));
    }

    return () => {
      if (open) {
        router.events.off('routeChangeStart', () => setOpen(false));
      }
    };
  }, [open, router]);

  // close side navigation on click outside
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (!open) return;
        setOpen(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [open, ref]);

  return (
    <Context.Provider value={{ open, ref, toggle }}>
      {children}
    </Context.Provider>
  );
}

// custom hook to consume all context values { open, ref, toggle }
export function useToggle() {
  return React.useContext(Context);
}
