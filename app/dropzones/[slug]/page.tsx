import Link from "next/link";
import { notFound } from "next/navigation";
import { buildDropzoneMapModel, getDropzoneBySlug } from "@/lib/dropzones";

type DetailProps = {
  params: Promise<{ slug: string }>;
};

export default async function DropzoneDetail({ params }: DetailProps) {
  const { slug } = await params;
  const dropzone = getDropzoneBySlug(slug);

  if (!dropzone) {
    notFound();
  }

  const mapModel = buildDropzoneMapModel(dropzone, process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

  return (
    <main className="container page-shell">
      <div className="hero-card">
        <p>
          <Link className="subtle-link" href="/">
            ← Back to search
          </Link>
        </p>
        <h1>{dropzone.name}</h1>
        <p className="muted lead">
          {dropzone.city}, {dropzone.country}
        </p>
      </div>

      <section className="grid two-col">
        <article className="surface-card">
          <h2>Contact details</h2>
          <dl className="contact-list">
            {dropzone.website ? (
              <>
                <dt>Website</dt>
                <dd>
                  <a href={dropzone.website} target="_blank" rel="noreferrer">
                    {dropzone.website}
                  </a>
                </dd>
              </>
            ) : null}
            {dropzone.email ? (
              <>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${dropzone.email}`}>{dropzone.email}</a>
                </dd>
              </>
            ) : null}
            {dropzone.phone ? (
              <>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${dropzone.phone}`}>{dropzone.phone}</a>
                </dd>
              </>
            ) : null}
          </dl>
          {!dropzone.website && !dropzone.email && !dropzone.phone ? (
            <p className="muted">No contact details available for this dropzone yet.</p>
          ) : null}
        </article>

        <article className="surface-card">
          <h2>Location map</h2>
          {mapModel.status === "ready" && mapModel.embedUrl ? (
            <div className="map-frame-wrap">
              <iframe
                title={`Google map for ${dropzone.name}`}
                src={mapModel.embedUrl}
                className="map-frame"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ) : null}

          {mapModel.status === "missing-key" ? (
            <p className="muted">
              Map preview is unavailable because <code>NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> is not set.
              You can still use this page and open the location in Google Maps directly.
            </p>
          ) : null}

          {mapModel.status === "invalid-coordinates" ? (
            <p className="muted">Map preview is unavailable because this dropzone has invalid coordinates.</p>
          ) : null}

          <p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${dropzone.name} ${dropzone.city} ${dropzone.country}`)}`}
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps ↗
            </a>
          </p>
        </article>
      </section>
    </main>
  );
}
