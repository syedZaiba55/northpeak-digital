import {
  MonitorSmartphone,
  Palette,
  Lightbulb,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <MonitorSmartphone size={42} />,
      title: "Web Development",
      description:
        "Modern, responsive, and high-performance websites built using the latest technologies like React, Next.js and Tailwind CSS.",
    },
    {
      icon: <Palette size={42} />,
      title: "UI / UX Design",
      description:
        "Beautiful, user-friendly interfaces that create exceptional digital experiences and improve customer engagement.",
    },
    {
      icon: <Lightbulb size={42} />,
      title: "Digital Solutions",
      description:
        "Innovative digital strategies, branding, automation and business solutions to accelerate your company's growth.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 px-6 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 transition"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <span className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full font-semibold">
            Our Expertise
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Services We Offer
          </h2>

          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We combine creativity, technology and innovation to build
            outstanding digital products that help businesses grow faster.
          </p>

        </div>


        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-white dark:bg-slate-900 p-8 shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white flex items-center justify-center mb-8 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                {service.icon}
              </div>


              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {service.title}
              </h3>


              <p className="text-slate-600 dark:text-slate-300 leading-8">
                {service.description}
              </p>


              <button className="mt-8 font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition">
                Learn More →
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}