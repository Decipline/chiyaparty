import { Component, useEffect, type ErrorInfo, type ReactNode } from "react";
import { Link, useRouter } from "@tanstack/react-router";

import { logAndReportError } from "../lib/lovable-error-reporting";

type ErrorFallbackProps = {
  error: Error;
  reset?: () => void;
};

function FallbackShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-sunset px-4 py-12 text-foreground">
      <section className="w-full max-w-lg rounded-xl border border-border bg-card/95 p-8 text-center shadow-warm">
        <p className="font-script text-2xl text-accent">{eyebrow}</p>
        <h1 className="mt-2 text-3xl font-bold text-card-foreground">{title}</h1>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{description}</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">{children}</div>
      </section>
    </main>
  );
}

export function FriendlyNotFound() {
  return (
    <FallbackShell
      eyebrow="Chiya Party"
      title="This page wandered off"
      description="The link may be old, but the chai is still warm. Head back to the main Chiya Party page."
    >
      <Link
        to="/"
        className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
      >
        Go home
      </Link>
    </FallbackShell>
  );
}

export function FriendlyRouteError({ error, reset }: ErrorFallbackProps) {
  const router = useRouter();

  useEffect(() => {
    logAndReportError(error, { boundary: "tanstack_route_error_component" });
  }, [error]);

  return (
    <FallbackShell
      eyebrow="Fresh cup coming"
      title="This page didn't load"
      description="Something went wrong for a moment. Try again, or return home and keep browsing."
    >
      <button
        type="button"
        onClick={() => {
          router.invalidate();
          reset?.();
        }}
        className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
      >
        Try again
      </button>
      <a
        href="/"
        className="inline-flex items-center justify-center rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-card-foreground transition hover:bg-muted"
      >
        Go home
      </a>
    </FallbackShell>
  );
}

function GlobalCrashFallback({ onReset }: { onReset: () => void }) {
  return (
    <FallbackShell
      eyebrow="Chiya Party"
      title="We caught a small glitch"
      description="The page stayed safe instead of going blank. Refresh the experience or return home."
    >
      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
      >
        Refresh view
      </button>
      <a
        href="/"
        className="inline-flex items-center justify-center rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-card-foreground transition hover:bg-muted"
      >
        Go home
      </a>
    </FallbackShell>
  );
}

export class AppErrorBoundary extends Component<
  { children: ReactNode },
  { error: Error | null }
> {
  state = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logAndReportError(error, {
      boundary: "global_react_error_boundary",
      componentStack: errorInfo.componentStack,
    });
  }

  reset = () => {
    this.setState({ error: null });
  };

  render() {
    if (this.state.error) {
      return <GlobalCrashFallback onReset={this.reset} />;
    }

    return this.props.children;
  }
}