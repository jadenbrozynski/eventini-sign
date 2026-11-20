import { cn } from '@documenso/ui/lib/utils';

import { BrandingLogo } from '~/components/general/branding-logo';

export type EventiniPublicHeaderProps = {
  className?: string;
};

// Matches the authenticated app header (h-16, max-w-screen-xl, h-6 logo) so the Eventini
// lockup sits in the same place on every page a signer can reach without an account.
export const EventiniPublicHeader = ({ className }: EventiniPublicHeaderProps) => {
  return (
    <header className={cn('h-16 w-full border-border border-b bg-background', className)}>
      <div className="mx-auto flex h-full w-full max-w-screen-xl items-center px-4 md:px-8">
        <BrandingLogo className="h-6 w-auto text-foreground" />
      </div>
    </header>
  );
};
