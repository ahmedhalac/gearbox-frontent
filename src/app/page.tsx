import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Home</h2>
      <Link href="/login">Login</Link>
    </main>
  );
}
