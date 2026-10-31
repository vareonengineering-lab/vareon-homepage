import * as React from "react";
import { cn } from "@/lib/utils";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...p }, ref) => (
  <div ref={ref} className={cn("rounded-2xl border border-slate-200 bg-white shadow-soft dark:border-white/10 dark:bg-white/5", className)} {...p} />
));
Card.displayName = "Card";
