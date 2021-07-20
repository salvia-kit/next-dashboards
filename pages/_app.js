import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import DashboardLayout from '../src/dashboard/layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          {process.env.NODE_ENV === 'development'
            ? 'Salvia-kit Dashboard v4 Next.js'
            : 'Salvia-kit Dashboard v4 Demo'}
        </title>
      </Head>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </>
  );
}

export default MyApp;
