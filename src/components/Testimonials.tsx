export default function Testimonials() {
  return (
    <section className="py-20 bg-stone-100 dark:bg-slate-950 transition">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-10">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-md border border-stone-200 dark:border-slate-700 transition">
            <p className="text-slate-600 dark:text-slate-300 italic">
              "Digital Heroes transformed our online presence with a modern,
              responsive website."
            </p>

            <h4 className="mt-5 font-semibold text-emerald-700 dark:text-emerald-400">
              Sarah Johnson
            </h4>
          </div>


          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-md border border-stone-200 dark:border-slate-700 transition">
            <p className="text-slate-600 dark:text-slate-300 italic">
              "Professional team, timely delivery, and excellent support
              throughout the project."
            </p>

            <h4 className="mt-5 font-semibold text-emerald-700 dark:text-emerald-400">
              Michael Brown
            </h4>
          </div>

        </div>

      </div>
    </section>
  );
}