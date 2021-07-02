import 'tailwindcss/tailwind.css';
import DashboardLayout from '../src/dashboard/layout';

function MyApp({ Component, pageProps }) {
  return (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  );
}

export default MyApp;
