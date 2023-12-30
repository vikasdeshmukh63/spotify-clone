// fonts imports
import { Figtree } from 'next/font/google';

// types imports
import type { Metadata } from 'next';

// css imports
import './globals.css';

// component imports
import Sidebar from '@/components/Sidebar';
import SupabaseProvider from '@/providers/SupabaseProvider';
import UserProvider from '@/providers/UserProvider';

const font = Figtree({ subsets: ['latin'] });

// metadata
export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen to Music!'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <UserProvider>
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
