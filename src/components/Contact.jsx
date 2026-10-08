function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gray-900 px-6 py-28 md:py-36"
    >
      {/* Decorative glow */}
      <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full bg-purple-600/20 blur-3xl" />

      <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">

        {/* Label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm font-semibold tracking-[0.25em] text-purple-300">
            04 / LET'S WORK TOGETHER
          </span>

          <span className="h-px w-20 bg-purple-400/40" />
        </div>


        {/* Main heading */}
        <div className="max-w-5xl">

          <p className="text-gray-400 text-lg md:text-xl mb-6">
            Have an idea, a business problem or a website that needs some
            attention?
          </p>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.05em] leading-[0.9] text-white">
            Let's make
            <span className="block text-gray-500">
              something useful.
            </span>
          </h2>

        </div>


        {/* Contact CTA */}
        <div className="mt-16 flex flex-col md:flex-row gap-4">

          <a
            href="mailto:your@email.com"
            className="
              group
              inline-flex
              items-center
              justify-between
              gap-10
              px-7
              py-5
              rounded-full
              bg-white
              text-gray-900
              font-semibold
              hover:bg-purple-500
              hover:text-white
              transition-all
              duration-500
            "
          >
            Start a conversation

            <span className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              ↗
            </span>
          </a>


          <a
            href="#services"
            className="
              inline-flex
              items-center
              justify-center
              px-7
              py-5
              rounded-full
              border
              border-white/20
              text-white
              font-medium
              hover:bg-white/10
              transition
            "
          >
            Explore my services
          </a>

        </div>


        {/* Contact details */}
        <div className="mt-24 pt-8 border-t border-white/10 grid md:grid-cols-3 gap-8">

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Email
            </p>

            <p className="mt-3 text-white font-medium">
              your@email.com
            </p>
          </div>


          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Availability
            </p>

            <p className="mt-3 text-white font-medium">
              Open for selected projects
            </p>
          </div>


          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Focus
            </p>

            <p className="mt-3 text-white font-medium">
              Web · UI · Business Solutions
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;