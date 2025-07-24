// src/app/layout.tsx

import '../components/NavBar.css';
import '../components/TheGraph.css';

import NavBar, { Footer } from '../components/NavBar';

import type { ReactNode } from 'react';

export const metadata = {
  title: 'graphs-nextJS',
  description: 'learning react and nextJS',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="body-wrap">
          <NavBar />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
