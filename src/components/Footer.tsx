export default function Footer() {
  return (
    <footer className="bg-slate-950 dark:bg-black text-slate-300 py-12 px-6 transition">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Digital Heroes
          </h3>

          <p className="text-slate-400 leading-7">
            Building modern digital experiences with innovative technology,
            creative design, and powerful solutions.
          </p>
        </div>


        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h4>

          <ul className="space-y-3">
            <li>
              <a href="#home" className="hover:text-emerald-400 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-emerald-400 transition">
                About
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-emerald-400 transition">
                Services
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-emerald-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>


        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">
            Contact
          </h4>

          <p>Email: contact@digitalheroes.com</p>
          <p className="mt-2">Phone: +91 98765 43210</p>
          <p className="mt-2">
            Available 24/7 for digital solutions.
          </p>
        </div>

      </div>


      <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Digital Heroes. All rights reserved.
      </div>

    </footer>
  );
}