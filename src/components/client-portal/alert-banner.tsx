import { CircleAlert, TriangleAlert, Info } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import type { PortalAlert } from "@/data/client-portal/alerts";

const severityConfig = {
  critical: {
    icon: CircleAlert,
    dot: "bg-red-500",
    badge: "bg-red-500/10 text-red-600",
  },
  warning: {
    icon: TriangleAlert,
    dot: "bg-amber-500",
    badge: "bg-amber-500/10 text-amber-600",
  },
  info: {
    icon: Info,
    dot: "bg-emerald-500",
    badge: "bg-emerald-500/10 text-emerald-600",
  },
} as const;

export function AlertBanner({ alerts }: { alerts: PortalAlert[] }) {
  return (
    <Reveal>
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-7">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Últimos alertas
        </h2>
        <ul className="mt-4 space-y-3">
          {alerts.map((alert) => {
            const config = severityConfig[alert.severity];
            const Icon = config.icon;
            return (
              <li
                key={alert.title}
                className="flex items-start gap-3 rounded-xl border border-border p-4"
              >
                <span
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${config.badge}`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="font-medium">{alert.title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{alert.description}</p>
                </div>
                <span className={`ml-auto mt-1.5 h-2 w-2 shrink-0 rounded-full ${config.dot}`} />
              </li>
            );
          })}
        </ul>
      </div>
    </Reveal>
  );
}
