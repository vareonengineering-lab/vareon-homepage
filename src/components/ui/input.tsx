import * as React from "react";
import { cn } from "@/lib/utils";

const base = "w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-navy placeholder:text-slate-400 dark:border-white/15 dark:bg-white/5 dark:text-white";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...p }, ref) => (
  <input ref={ref} className={cn(base, "h-11", className)} {...p} />
));
Input.displayName = "Input";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className, ...p }, ref) => (
  <textarea ref={ref} className={cn(base, "min-h-[120px] py-3", className)} {...p} />
));
Textarea.displayName = "Textarea";
