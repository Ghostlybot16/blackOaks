export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 via-red-950 to-zinc-800 text-white">
      <section className="min-h-screen px-8 pt-40">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-6xl font-bold">
            Testing Code
          </h1>

          <p className="mt-6 max-w-xl text-xl text-zinc-300">
            Scroll and resize the page to see how the transparent navbar behaves
            over different background areas.
          </p>

          <div className="mt-16 grid grid-cols-2 gap-8">
            <div className="h-80 rounded-3xl bg-red-600"/>
            <div className="h-80 rounded-3xl bg-white" />
            <div className="h-80 rounded-3xl bg-blue-600" />
            <div className="h-80 rounded-3xl bg-zinc-500" />
          </div>
        </div>
      </section>
    </main>
  );
}
