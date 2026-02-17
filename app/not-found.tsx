import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-text-main">404</h1>
      <p className="mt-2 text-text-muted">
        This page could not be found.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className="btn-primary">
          Home
        </Link>
        <Link href="/contact" className="btn-secondary">
          Contact
        </Link>
      </div>
    </div>
  );
}
