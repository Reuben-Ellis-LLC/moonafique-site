import { AuthKitProvider } from '@workos-inc/authkit-nextjs/components';
import { getSignInUrl, signOut } from '@workos-inc/authkit-nextjs';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/siteHeader';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Inter } from 'next/font/google';
import { CartProvider } from '@/lib/cart-context';

const inter = Inter({ subsets: ['latin'] });
import './globals.css';

export const metadata = {
  title: 'Moonafique',
  description:
    'Welcome to Moonafique! High quality 3D prints. We are a small team of 3D printing enthusiasts who love to create and share our work with the world.',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get the URL to redirect the user to AuthKit to sign in
  const signInUrl = await getSignInUrl();
  return (
    <html lang="en">
      <body
        className={cn('flex min-h-svh flex-col antialiased', inter.className)}
      >
        <AuthKitProvider>
          <CartProvider>
            <TooltipProvider delayDuration={0}>
              <SiteHeader signInUrl={signInUrl} signOut={signOut} />
              <main className="flex-1">{children}</main>
            </TooltipProvider>
          </CartProvider>
        </AuthKitProvider>
      </body>
    </html>
  );
}
