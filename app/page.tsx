import Link from "next/link";
import { searchDropzones } from "@/lib/dropzones";

type HomeProps = {
  searchParams?: Promise<{ q?: string; country?: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = (await searchParams) ?? {};
  const query = params.q ?? "";
  const country = params.country ?? "";
  const dropzones = searchDropzones({ query, country });

  return (
    <main className="container">
      <h1>Dropzone Atlas</h1>
      <p className="muted">Search dropzones by name and country.</p>

      <form className="search" method="get">
        <label>
          Name
          <input name="q" defaultValue={query} placeholder="Skydive" />
        </label>
        <label>
          Country (ISO)
          <input name="country" defaultValue={country} placeholder="US" maxLength={2} />
        </label>
        <button type="submit">Search</button>
      </form>

      <ul className="list">
        {dropzones.map((dz) => (
          <li key={dz.id}>
            <Link href={`/dropzones/${dz.slug}`}>{dz.name}</Link>
            <span className="muted">
              {dz.city}, {dz.country}
            </span>
          </li>
        ))}
      </ul>

      {dropzones.length === 0 && <p>No dropzones found.</p>}
    </main>
  );
}
