import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-6xl font-bold tracking-tight text-brand sm:text-7xl">404</p>
      <h1 className="mt-4 text-xl font-semibold text-text-main">Page not found</h1>
      <p className="mt-2 text-text-muted">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/contact" className="btn-secondary">
          Contact us
        </Link>
      </div>
    </div>
  );
}
