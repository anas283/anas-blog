import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata = {
  title: "Page not found | Anas",
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <div className="container-page flex min-h-[60vh] flex-col justify-center py-16 sm:py-24">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-4 font-display text-[5rem] font-semibold leading-none tracking-tight sm:text-[8rem]">
            404
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-muted-foreground sm:text-base">
            This page doesn&apos;t exist, or it moved somewhere better. Let&apos;s
            get you back to something worth reading.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link href="/">
                <ArrowLeft className="mr-1.5 h-4 w-4" />
                Back home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/projects">
                View my work
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
