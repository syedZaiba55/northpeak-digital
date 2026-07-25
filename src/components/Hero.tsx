export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[80vh] flex items-center justify-center text-center px-6 bg-white dark:bg-slate-950 transition"
    >
      <div className="max-w-3xl">

        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
          Build Your Digital Future
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300">
          Digital Heroes helps businesses grow with modern web solutions,
          creative designs, and powerful digital strategies.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition">
            Get Started
          </button>

          <button className="border border-emerald-600 text-emerald-600 dark:text-emerald-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-50 dark:hover:bg-slate-800 transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}