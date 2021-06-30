import React from 'react';
import { useRouter } from 'next/router';

// create new context
const Context = React.createContext({});

export default function DashboardProvider({ children }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef();
  const router = useRouter();

  const toggle = React.useCallback(() => {
    setOpen(!open);
  }, [open]);

  // set the html tag overflow to hidden
  // close side navigation on mobile when route starts changing
  // it's triggered when viewport is less than 1024px
  React.useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    if (open && window.innerWidth < 1024) {
      router.events.on('routeChangeStart', () => setOpen(false));
    }

    return () => {
      if (open && window.innerWidth < 1024) {
        router.events.off('routeChangeStart', () => setOpen(false));
      }
    };
  }, [open, router]);

  // close side navigation on click outside when viewport is less than 1024px
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (window.innerWidth < 1024) {
        if (!ref.current?.contains(event.target)) {
          if (!open) return;
          setOpen(false);
        }
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
