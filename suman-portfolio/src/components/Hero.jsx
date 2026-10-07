function Hero() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-32 md:pt-40">

      <div className="max-w-4xl">

        <p className="text-purple-400 text-sm font-medium tracking-[0.25em] uppercase mb-6">
          Digital Experience & Web Solutions
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-[-0.04em] leading-[0.95]">
          Hi, I'm{" "}
          <span className="text-gray-400">
            Suman.
          </span>
          <br />

          I build{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
            digital experiences
          </span>
          .
        </h1>

        <p className="mt-8 max-w-2xl text-base md:text-lg leading-8 text-gray-400">
          I design, build and manage modern websites that help businesses
          turn their ideas into meaningful digital experiences.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="#projects"
            className="rounded-full bg-white text-black px-7 py-3.5 text-sm font-medium hover:scale-105 transition"
          >
            View My Work →
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition"
          >
            Let's Work Together
          </a>

        </div>

      </div>

      <div className="mt-28 border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <p className="text-sm text-gray-500">
          I don't just build websites.
        </p>

        <p className="text-sm text-gray-300">
          I understand the business behind them.
        </p>

      </div>

    </section>
  );
}

export default Hero;