export default function NotesPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-black">
      <main className="w-full max-w-4xl px-8 py-16 font-mono space-y-6">
        <h1 className="text-3xl font-semibold">Notes</h1>
        <p className="text-lg">
          A flexible space for essays, references, or embedded media.
        </p>
        <div className="rounded-lg border border-black/10 p-4">
          <p className="text-sm uppercase tracking-wide text-black/60">
            Add Content
          </p>
          <p className="text-base">
            Drop in long-form text, images, or video links as needed.
          </p>
        </div>
      </main>
    </div>
  );
}

