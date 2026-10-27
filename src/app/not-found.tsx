import Link from "next/link";
export default function NotFound() {
  return (
    <main className="p-16 text-center">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <Link href="/" className="btn btn-primary mt-6 inline-block">Voltar ao início</Link>
    </main>
  );
}