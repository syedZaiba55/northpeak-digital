"use client";

import CountUp from "react-countup";

export default function Stats() {
  const stats = [
    {
      number: 100,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      number: 50,
      suffix: "+",
      label: "Happy Clients",
    },
    {
      number: 5,
      suffix: "+",
      label: "Years Experience",
    },
    {
      number: 24,
      suffix: "/7",
      label: "Support",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-700 dark:to-teal-700 text-white transition">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20 transition duration-300 hover:-translate-y-2 hover:bg-white/20"
            >

              <h3 className="text-5xl font-extrabold mb-3">
                <CountUp
                  end={item.number}
                  duration={2.5}
                />
                {item.suffix}
              </h3>

              <p className="text-lg text-emerald-100 dark:text-emerald-200">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}