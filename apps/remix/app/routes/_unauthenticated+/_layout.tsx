import { Outlet } from 'react-router';

import { BrandingLogo } from '~/components/general/branding-logo';
import { EventiniSourceFooter } from '~/components/general/eventini-source-footer';
import { PublicLegalLinks } from '~/components/general/public-legal-links';

export default function Layout() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-background px-4 py-12 md:p-12 lg:p-24">
      <div className="flex w-full flex-1 flex-col items-center justify-center">
        <BrandingLogo className="mb-8 h-6 w-auto text-foreground" />

        <div className="relative flex w-full items-center justify-center">
          <Outlet />
        </div>
      </div>

      <footer className="z-10 mt-8 flex w-full flex-col gap-2">
        <PublicLegalLinks />
        <EventiniSourceFooter />
      </footer>
    </main>
  );
}
