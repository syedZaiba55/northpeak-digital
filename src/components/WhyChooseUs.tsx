export default function WhyChooseUs() {
  const features = [
    {
      title: "Modern Technology",
      description:
        "We use modern tools and technologies to create efficient digital solutions.",
    },
    {
      title: "Creative Approach",
      description:
        "We combine creativity and strategy to deliver meaningful experiences.",
    },
    {
      title: "Reliable Support",
      description:
        "We provide continuous support to help businesses grow confidently.",
    },
  ];

  return (
    <section
      className="py-20 px-6 bg-stone-100 dark:bg-slate-950 text-slate-900 dark:text-white text-center transition"
    >
      <h2 className="text-4xl font-bold mb-12">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-md border border-stone-200 dark:border-slate-700 hover:shadow-xl transition"
          >

            <h3 className="text-2xl font-bold mb-4 text-emerald-700 dark:text-emerald-400">
              {feature.title}
            </h3>

            <p className="text-slate-600 dark:text-slate-300">
              {feature.description}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}