type LovableErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type LovableEvents = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: LovableErrorOptions,
  ) => void;
};

let globalErrorLoggingInstalled = false;

declare global {
  interface Window {
    __lovableEvents?: LovableEvents;
  }
}

export function reportLovableError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
}

export function logAndReportError(error: unknown, context: Record<string, unknown> = {}) {
  console.error("[Chiya Party]", context.boundary ?? "app_error", error);
  reportLovableError(error, context);
}

export function installGlobalErrorLogging() {
  if (typeof window === "undefined" || globalErrorLoggingInstalled) return;
  globalErrorLoggingInstalled = true;

  window.addEventListener("error", (event) => {
    logAndReportError(event.error ?? event.message, {
      boundary: "window_error",
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
    });
  });

  window.addEventListener("unhandledrejection", (event) => {
    logAndReportError(event.reason, { boundary: "window_unhandledrejection" });
  });
}
