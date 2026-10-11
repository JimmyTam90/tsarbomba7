import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-slate-300">That page does not exist. Head back to the Tsar Bomba buying guide.</p>
      <Link href="/tsar-bomba" className="btn-primary mt-6 max-w-xs">Back to the guide</Link>
    </main>
  );
}
