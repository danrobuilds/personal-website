export default function RoleBPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-black">
      <main className="w-full max-w-4xl px-8 py-16 font-mono space-y-6">
        <h1 className="text-3xl font-semibold">Role B</h1>
        <p className="text-lg">
          Another space for work experience details. Mix text, images, and
          embedded videos to tell the story of this role.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-black/10 p-4">
            <p className="text-sm uppercase tracking-wide text-black/60">
              Highlights
            </p>
            <p className="text-base">Summarize key achievements.</p>
          </div>
          <div className="rounded-lg border border-black/10 p-4">
            <p className="text-sm uppercase tracking-wide text-black/60">
              Media
            </p>
            <p className="text-base">Embed demos or supporting visuals.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

