import Link from "next/link";
import { notFound } from "next/navigation";
import { getDropzoneBySlug } from "@/lib/dropzones";

type DetailProps = {
  params: Promise<{ slug: string }>;
};

export default async function DropzoneDetail({ params }: DetailProps) {
  const { slug } = await params;
  const dropzone = getDropzoneBySlug(slug);

  if (!dropzone) {
    notFound();
  }

  return (
    <main className="container">
      <p>
        <Link href="/">← Back to search</Link>
      </p>
      <h1>{dropzone.name}</h1>
      <p className="muted">
        {dropzone.city}, {dropzone.country}
      </p>
      {dropzone.website ? (
        <p>
          Website: <a href={dropzone.website}>{dropzone.website}</a>
        </p>
      ) : null}
    </main>
  );
}
