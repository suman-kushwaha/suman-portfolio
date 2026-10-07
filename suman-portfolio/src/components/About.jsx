function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f7f3ff] px-6 py-28 md:py-36"
    >
      {/* Decorative background shapes */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-purple-300/30 blur-3xl" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">

        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-3xl font-semibold tracking-[0.25em] text-purple-700">
            ABOUT ME
          </span>

          <span className="h-px w-20 bg-purple-300"></span>

          <span className="text-sm text-gray-400">
            Get to know the person behind the work
          </span>
        </div>


        {/* Main About Area */}
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">

          {/* LEFT */}
          <div className="relative">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-600 mb-5">
              Digital Experience
            </p>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[0.95] text-gray-900">
              More than
              <span className="block text-gray-400">
                just code.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg md:text-xl text-gray-600 leading-8">
              I create digital experiences that connect
              <span className="font-semibold text-gray-900">
                {" "}technology, design and business.
              </span>
            </p>


            {/* Floating Identity Card */}
            <div
              className="relative mt-12 w-full max-w-md
                         rounded-[2rem] bg-white
                         border border-white
                         shadow-[0_20px_60px_rgba(80,50,120,0.12)]
                         p-6
                         hover:-translate-y-2
                         transition-all duration-500"
            >

              <div className="flex items-start justify-between">

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">
                    My Approach
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900">
                    Think. Build. Improve.
                  </h3>
                </div>

                <div
                  className="w-12 h-12 rounded-2xl
                             bg-gradient-to-br from-purple-600 to-fuchsia-500
                             flex items-center justify-center
                             text-white text-xl shadow-lg"
                >
                  ✦
                </div>

              </div>

              <div className="mt-6 flex flex-wrap gap-2">

                <span className="px-3 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium">
                  User Experience
                </span>

                <span className="px-3 py-2 rounded-full bg-orange-50 text-orange-700 text-sm font-medium">
                  Business Thinking
                </span>

                <span className="px-3 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium">
                  Technology
                </span>

              </div>

            </div>
          </div>


          {/* RIGHT */}
          <div className="relative">

            {/* Decorative number */}
            <div
              className="absolute -top-16 -right-4
                         text-[9rem] font-black
                         text-purple-100
                         leading-none
                         select-none
                         pointer-events-none"
            >
              01
            </div>


            <div className="relative space-y-6 text-gray-600 text-base md:text-lg leading-8">

              <p>
                I'm
                <span className="font-semibold text-gray-900">
                  {" "}Suman Kushwaha
                </span>
                , a digital experience and web solutions specialist who enjoys
                turning ideas into clean, functional and engaging digital
                experiences.
              </p>

              <p>
                My approach goes beyond simply writing code. I focus on
                understanding what a business actually needs and then building
                solutions that are practical, responsive and easy to use.
              </p>

              <p>
                From developing a website to improving its user experience,
                integrating business tools and keeping it updated, I enjoy
                being involved in the complete journey.
              </p>

            </div>


            {/* Quote / Positioning */}
            <div className="mt-10 pl-6 border-l-2 border-purple-400">
              <p className="text-lg md:text-xl font-medium text-gray-800 leading-8">
                "I don't just build websites.
                <span className="text-purple-700">
                  {" "}I understand the business behind them.
                </span>"
              </p>
            </div>

          </div>

        </div>


        {/* STATS */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">

          {/* Stat 1 */}
          <div
            className="group relative overflow-hidden
                       rounded-3xl bg-white
                       border border-purple-100
                       p-6 md:p-7
                       shadow-sm
                       hover:-translate-y-2
                       hover:shadow-xl
                       hover:shadow-purple-200/40
                       transition-all duration-500"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-purple-400">
              01
            </span>

            <p className="mt-5 text-4xl font-bold text-gray-900 group-hover:text-purple-700 transition">
              01+
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Real Client Project
            </p>

            <div className="absolute -right-6 -bottom-6 w-20 h-20 rounded-full bg-purple-100/60 group-hover:scale-150 transition-transform duration-500" />
          </div>


          {/* Stat 2 */}
          <div
            className="group relative overflow-hidden
                       rounded-3xl bg-white
                       border border-orange-100
                       p-6 md:p-7
                       shadow-sm
                       hover:-translate-y-2
                       hover:shadow-xl
                       hover:shadow-orange-200/40
                       transition-all duration-500"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-orange-400">
              02
            </span>

            <p className="mt-5 text-4xl font-bold text-gray-900 group-hover:text-orange-600 transition">
              03+
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Projects Built
            </p>

            <div className="absolute -right-6 -bottom-6 w-20 h-20 rounded-full bg-orange-100/60 group-hover:scale-150 transition-transform duration-500" />
          </div>


          {/* Stat 3 */}
          <div
            className="group relative overflow-hidden
                       rounded-3xl bg-white
                       border border-green-100
                       p-6 md:p-7
                       shadow-sm
                       hover:-translate-y-2
                       hover:shadow-xl
                       hover:shadow-green-200/40
                       transition-all duration-500"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-green-500">
              03
            </span>

            <p className="mt-5 text-4xl font-bold text-gray-900 group-hover:text-green-600 transition">
              100%
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Client Focus
            </p>

            <div className="absolute -right-6 -bottom-6 w-20 h-20 rounded-full bg-green-100/60 group-hover:scale-150 transition-transform duration-500" />
          </div>


          {/* Stat 4 */}
          <div
            className="group relative overflow-hidden
                       rounded-3xl bg-gray-900
                       p-6 md:p-7
                       shadow-sm
                       hover:-translate-y-2
                       hover:shadow-xl
                       transition-all duration-500"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-purple-300">
              04
            </span>

            <p className="mt-5 text-4xl font-bold text-white">
              ∞
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Curiosity to Learn
            </p>

            <div className="absolute -right-6 -bottom-6 w-20 h-20 rounded-full bg-purple-600/30 group-hover:scale-150 transition-transform duration-500" />
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;

