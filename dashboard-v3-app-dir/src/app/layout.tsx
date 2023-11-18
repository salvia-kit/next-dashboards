import 'tailwindcss/tailwind.css';
import React from 'react';
import type { Metadata } from 'next';
import { DashboardLayout } from '@/dashboard/Layout';

export const metadata: Metadata = {
  title: 'Salvia-kit Dashboard V3 App Router',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
