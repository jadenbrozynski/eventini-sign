import { cn } from '@documenso/ui/lib/utils';

// AGPL-3.0 section 13: users interacting with this modified build over a network must be
// offered its Corresponding Source. Keep this link visible on public pages.
export const EVENTINI_SIGN_SOURCE_URL = 'https://github.com/jadenbrozynski/eventini-sign';

export type EventiniSourceFooterProps = {
  className?: string;
};

export const EventiniSourceFooter = ({ className }: EventiniSourceFooterProps) => {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground',
        className,
      )}
    >
      <span>Eventini Sign</span>
      <span aria-hidden="true">·</span>
      <span>
        Built on{' '}
        <a
          href="https://github.com/documenso/documenso"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground hover:underline"
        >
          Documenso
        </a>{' '}
        (AGPL-3.0)
      </span>
      <span aria-hidden="true">·</span>
      <a
        href={EVENTINI_SIGN_SOURCE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-foreground hover:underline"
      >
        Source
      </a>
    </div>
  );
};
