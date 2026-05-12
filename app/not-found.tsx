import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ridge-navy flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-8xl font-black text-white/5 mb-4 font-mono">404</div>
        <h1 className="text-3xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-white/50 mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button variant="primary" href="/">
          Return Home
        </Button>
      </div>
    </div>
  );
}
