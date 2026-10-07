function Navbar() {
  return (
    <nav className="relative z-10 max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="text-xl font-semibold tracking-tight">
        SK<span className="text-purple-400">.</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
        <a href="#about" className="hover:text-white transition">
          About
        </a>

        <a href="#services" className="hover:text-white transition">
          Services
        </a>

        <a href="#projects" className="hover:text-white transition">
          Projects
        </a>

        <a href="#contact" className="hover:text-white transition">
          Contact
        </a>
      </div>

      <a
        href="#contact"
        className="hidden md:block border border-white/20 rounded-full px-5 py-2 text-sm hover:bg-white hover:text-black transition"
      >
        Let's Talk
      </a>
    </nav>
  );
}

export default Navbar;