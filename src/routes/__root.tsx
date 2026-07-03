import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { AppErrorBoundary, FriendlyNotFound, FriendlyRouteError } from "../components/fallback-screens";
import { installGlobalErrorLogging } from "../lib/lovable-error-reporting";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Chiya Party — कप सँग गफ | Lalitpur's Coziest Chiya Garden" },
      { name: "description", content: "Sip hot chiya under fairy lights at Chiya Party — a bamboo-and-thatch garden cafe in Lalitpur serving momos, thukpa, pakoda & more. कप सँग गफ!" },
      { name: "author", content: "Chiya Party" },
      { property: "og:title", content: "Chiya Party — कप सँग गफ | Lalitpur's Coziest Chiya Garden" },
      { property: "og:description", content: "Sip hot chiya under fairy lights at Chiya Party — a bamboo-and-thatch garden cafe in Lalitpur serving momos, thukpa, pakoda & more. कप सँग गफ!" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Chiya Party — कप सँग गफ | Lalitpur's Coziest Chiya Garden" },
      { name: "twitter:description", content: "Sip hot chiya under fairy lights at Chiya Party — a bamboo-and-thatch garden cafe in Lalitpur serving momos, thukpa, pakoda & more. कप सँग गफ!" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/7d5d0e1d-d623-4fe6-8d36-29d6374ac945" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/7d5d0e1d-d623-4fe6-8d36-29d6374ac945" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;0,800;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Caveat:wght@500;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: FriendlyNotFound,
  errorComponent: FriendlyRouteError,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    installGlobalErrorLogging();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AppErrorBoundary>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </AppErrorBoundary>
    </QueryClientProvider>
  );
}
