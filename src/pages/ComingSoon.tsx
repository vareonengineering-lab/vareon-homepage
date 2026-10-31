import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ComingSoon() {
  const { pathname } = useLocation();
  const title = pathname.replace(/^\//, "").replace(/-/g, " ") || "Page";
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <h1 className="text-4xl capitalize">{title}</h1>
      <p className="mt-4 max-w-md">This page is coming soon.</p>
      <Button asChild className="mt-8"><Link to="/">Back to home</Link></Button>
    </section>
  );
}
