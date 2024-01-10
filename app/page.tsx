import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/cheeses">Cheeses</Link>
    </main>
  );
}
