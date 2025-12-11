export default function GalleryPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-black">
      <main className="w-full max-w-4xl px-8 py-16 font-mono space-y-6">
        <h1 className="text-3xl font-semibold">Gallery</h1>
        <p className="text-lg">
          Arrange photos, artwork, or embedded video reels here.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="aspect-square rounded-lg border border-black/10 bg-black/5" />
          <div className="aspect-square rounded-lg border border-black/10 bg-black/5" />
          <div className="aspect-square rounded-lg border border-black/10 bg-black/5" />
        </div>
      </main>
    </div>
  );
}

