import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-rb-slate flex items-center justify-center px-6">
      <div className="text-center">
        <Image src="/images/logo.png" alt="Ridge Biologics" width={180} height={56} className="h-10 w-auto mx-auto mb-10" />
        <div className="text-7xl font-black text-rb-navy/10 mb-4 font-mono tracking-tight">404</div>
        <h1 className="text-2xl font-bold text-rb-navy mb-3">Page Not Found</h1>
        <p className="text-rb-text-body mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Button variant="primary" href="/">Return to Home</Button>
      </div>
    </div>
  );
}
