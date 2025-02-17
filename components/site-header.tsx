'use client';
import { useId } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Menu, Search } from 'lucide-react';
import Link from 'next/link';
import { Cart } from '@/components/cart';
import { useCartContext } from '@/lib/cart-context';
import { Logo } from '@/components/logo';

export function SiteHeader() {
  const { items } = useCartContext();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className="bg-background sticky top-0 z-20 w-full">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Sidebar />
          <Link
            href="/"
            className="flex items-center gap-2 px-2 text-xl font-bold tracking-tighter"
          >
            <Logo className="size-5" style={{ zoom: 6 }} />
          </Link>
        </div>
        <nav className="text-muted-foreground hover:[&_a]:text-foreground hidden items-center gap-6 text-sm font-medium md:flex [&_a]:transition-colors">
          <Link href={`/?search=dragon`}>Dragons</Link>
          <Link href={`/?search=creature`}>Creatures</Link>
          <Link href={`/?search=fossil`}>Fossil</Link>
          <Link href={`/?search=misc`}>Misc</Link>
        </nav>
        <div className="flex items-center gap-2">
          <SearchBar className="hidden sm:block" />
          <Cart />
        </div>
      </div>
    </header>
  );
}

function SearchBar({ className }: { className?: string }) {
  const id = useId();
  const searchParams = useSearchParams();
  return (
    <form
      className={cn('relative max-w-lg lg:max-w-xs', className)}
      method="GET"
      action="/"
    >
      <Search className="text-muted-foreground absolute left-2 top-1/2 size-4 -translate-y-1/2" />
      <Input
        type="search"
        name="search"
        id={id}
        defaultValue={searchParams.get('search') ?? ''}
        placeholder="Search products..."
        className="h-9 w-full rounded-lg pl-8 pr-4 text-sm sm:w-[200px] md:w-[200px] lg:w-[200px]"
      />
    </form>
  );
}

function Sidebar() {
  return (
    <Sheet>
      <Tooltip>
        <SheetTrigger asChild>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="border-border size-8 shrink-0 border md:hidden"
            >
              <Menu className="size-4" />
              <span className="sr-only">Menu</span>
            </Button>
          </TooltipTrigger>
        </SheetTrigger>
        <TooltipContent align="start">Menu</TooltipContent>
        <SheetContent
          side="left"
          className="flex w-full flex-col p-4 pt-12 md:w-3/4"
        >
          <SearchBar className="w-full sm:hidden" />
          <Button className="justify-start" variant="ghost">
            <Link href="#">Women</Link>
          </Button>
          <Button className="justify-start" variant="ghost">
            <Link href="#">Men</Link>
          </Button>
          <Button className="justify-start" variant="ghost">
            <Link href="#">Kids</Link>
          </Button>
          <Button className="justify-start" variant="ghost">
            <Link href="#">Accessories</Link>
          </Button>
        </SheetContent>
      </Tooltip>
    </Sheet>
  );
}
