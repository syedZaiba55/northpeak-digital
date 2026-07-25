import About from "../components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "../components/Contact";
import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main
        id="home"
        className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition"
      >
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-100 dark:bg-emerald-900/30 rounded-full blur-3xl opacity-60 -translate-x-20 -translate-y-20"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 dark:bg-teal-900/30 rounded-full blur-3xl opacity-60 translate-x-20 translate-y-20"></div>

        <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>
            <span className="inline-block bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-semibold px-4 py-2 rounded-full mb-6">
              🚀 Digital Heroes
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Build Your
              <span className="text-emerald-600"> Digital Future</span>
            </h1>

            <p className="mt-8 text-lg text-slate-600 dark:text-slate-300 leading-8 max-w-xl">
              We design beautiful digital experiences that help startups,
              businesses and brands grow faster through modern web development,
              UI/UX design and innovative digital solutions.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#contact"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Get Started
              </a>

              <a
                href="#services"
                className="border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 px-8 py-4 rounded-xl font-semibold text-slate-800 dark:text-white transition"
              >
                Our Services
              </a>

            </div>
          </div>


          {/* Right Side */}
          <div className="flex justify-center">
            <Image
              src="/hero.svg"
              alt="Digital Agency Illustration"
              width={600}
              height={600}
              priority
              className="w-full max-w-lg h-auto drop-shadow-2xl"
            />
          </div>

        </section>
      </main>


      <FadeIn>
        <About />
      </FadeIn>

      <FadeIn>
        <Services />
      </FadeIn>

      <FadeIn>
        <Stats />
      </FadeIn>

      <FadeIn>
        <WhyChooseUs />
      </FadeIn>

      <FadeIn>
        <Testimonials />
      </FadeIn>

      <FadeIn>
        <Contact />
      </FadeIn>

      <FadeIn>
        <CTA />
      </FadeIn>
    </>
  );
} 