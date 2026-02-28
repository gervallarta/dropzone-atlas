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
    <main className="container page-shell">
      <section className="hero-card">
        <p className="eyebrow">Dropzone Atlas v0.2</p>
        <h1>Find world-class dropzones with better detail, faster.</h1>
        <p className="muted lead">
          Search by name and country, then open a detail view with contact information and maps.
        </p>
      </section>

      <section className="surface-card">
        <form className="search" method="get">
          <label>
            Name
            <input name="q" defaultValue={query} placeholder="Skydive" />
          </label>
          <label>
            Country (ISO)
            <input name="country" defaultValue={country} placeholder="US" maxLength={2} />
          </label>
          <button type="submit">Search dropzones</button>
        </form>
      </section>

      {dropzones.length > 0 ? (
        <ul className="list cards-grid">
          {dropzones.map((dz) => (
            <li key={dz.id} className="surface-card dz-card">
              <div>
                <h2>{dz.name}</h2>
                <p className="muted">
                  {dz.city}, {dz.country}
                </p>
              </div>
              <Link href={`/dropzones/${dz.slug}`}>View details →</Link>
            </li>
          ))}
        </ul>
      ) : (
        <section className="surface-card">
          <p>No dropzones found. Try a broader search term or remove filters.</p>
        </section>
      )}
    </main>
  );
}
