export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-center transition"
    >
      <h2 className="text-4xl font-bold mb-6">
        About Us
      </h2>

      <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
        Digital Heroes helps businesses transform their ideas into powerful
        digital experiences. We create modern websites, intuitive designs,
        and innovative solutions that help brands grow in the digital world.
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        <div className="bg-stone-50 dark:bg-slate-900 p-8 rounded-2xl shadow-md border border-stone-200 dark:border-slate-700 hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-3 text-emerald-700 dark:text-emerald-400">
            Innovation
          </h3>

          <p className="text-slate-600 dark:text-slate-300">
            Creating smart and creative solutions that solve real business
            challenges.
          </p>
        </div>


        <div className="bg-stone-50 dark:bg-slate-900 p-8 rounded-2xl shadow-md border border-stone-200 dark:border-slate-700 hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-3 text-emerald-700 dark:text-emerald-400">
            Quality
          </h3>

          <p className="text-slate-600 dark:text-slate-300">
            Delivering reliable digital products with clean design and
            attention to detail.
          </p>
        </div>


        <div className="bg-stone-50 dark:bg-slate-900 p-8 rounded-2xl shadow-md border border-stone-200 dark:border-slate-700 hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-3 text-emerald-700 dark:text-emerald-400">
            Growth
          </h3>

          <p className="text-slate-600 dark:text-slate-300">
            Helping businesses grow through effective digital solutions.
          </p>
        </div>

      </div>
    </section>
  );
}