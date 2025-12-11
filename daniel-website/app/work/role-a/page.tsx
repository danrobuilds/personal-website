export default function RoleAPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-black">
      <main className="w-full max-w-4xl px-8 py-16 font-mono space-y-6">
        <h1 className="text-3xl font-semibold">Role A</h1>
        <p className="text-lg">
          Use this page to showcase your work experience. Add images, rich text,
          or embedded videos below.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-black/10 p-4">
            <p className="text-sm uppercase tracking-wide text-black/60">
              Images
            </p>
            <p className="text-base">Drop in project or workplace photos.</p>
          </div>
          <div className="rounded-lg border border-black/10 p-4">
            <p className="text-sm uppercase tracking-wide text-black/60">
              Video
            </p>
            <p className="text-base">Embed demos or presentations here.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

