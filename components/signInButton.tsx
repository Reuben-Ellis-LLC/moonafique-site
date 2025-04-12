'use client';

import { Button } from '@radix-ui/themes';
import { cn } from '@/lib/utils';
import { User } from '@workos-inc/node';
import { handleSignOut } from '@/app/actions/auth';

export function SignInButton({
  large,
  user,
  signInUrl,
  variant = 'classic',
  classNames,
}: {
  large?: boolean;
  user: User | null;
  signInUrl: string;
  variant?:
    | 'surface'
    | 'classic'
    | 'soft'
    | 'outline'
    | 'solid'
    | 'ghost'
    | undefined;
  classNames?: string;
}) {
  if (user) {
    return (
      <form action={handleSignOut} className="flex items-center">
        <Button
          size={large ? '3' : '2'}
          type="submit"
          className="text-sm h-5 cursor-pointer font-medium hover:underline underline-offset-4"
          variant={variant}
          role="button"
          title="Sign Out"
        >
          Sign Out
        </Button>
      </form>
    );
  }

  return (
    <Button
      asChild
      title="Sign In"
      size={large ? '3' : '2'}
      className={cn(
        'text-sm h-5 cursor-pointer font-medium hover:underline underline-offset-4',
        classNames
      )}
    >
      <a href={signInUrl}>Sign In {large && 'with AuthKit'}</a>
    </Button>
  );
}
