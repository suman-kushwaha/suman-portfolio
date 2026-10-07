
const services = [
  {
    number: "01",
    title: "Website Experiences",
    description:
      "Modern, responsive websites designed around your brand, audience and business goals.",
    tag: "Web",
    accent: "purple",
  },
  {
    number: "02",
    title: "Business Solutions",
    description:
      "Practical digital solutions that connect your website with the way your business actually works.",
    tag: "Business",
    accent: "orange",
  },
  {
    number: "03",
    title: "Website Management",
    description:
      "Ongoing updates, content changes, product updates, improvements and technical support.",
    tag: "Support",
    accent: "green",
  },
  {
    number: "04",
    title: "UI & Frontend",
    description:
      "Clean, intuitive interfaces with attention to responsiveness, usability and visual details.",
    tag: "Design",
    accent: "pink",
  },
  {
    number: "05",
    title: "WhatsApp Integration",
    description:
      "Simple customer enquiry and communication flows that make it easier for businesses to connect with customers.",
    tag: "Connect",
    accent: "blue",
  },
  {
    number: "06",
    title: "Website Optimization",
    description:
      "Improving existing websites for better usability, mobile experience, performance and overall presentation.",
    tag: "Improve",
    accent: "yellow",
  },
  {
    number: "07",
    title: "Technical Troubleshooting",
    description:
      "Diagnosing and resolving common technical issues across software, systems, browsers, connectivity and everyday digital tools.",
    tag: "Fix",
    accent: "dark",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#fffaf5] px-6 py-28 md:py-36"
    >
      {/* Background decoration */}
      <div className="absolute top-20 -right-32 w-80 h-80 rounded-full bg-purple-200/30 blur-3xl" />
      <div className="absolute bottom-10 -left-32 w-80 h-80 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <div className="max-w-3xl mb-20">

          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-semibold tracking-[0.25em] text-purple-700">
               WHAT I DO
            </span>

            <span className="h-px w-20 bg-purple-300" />
          </div>

          <h2 className="text-5xl md:text-5xl lg:text-7xl font-bold tracking-[-0.04em] leading-[0.95] text-gray-900">
            Digital solutions
            <span className="block text-gray-400">
              built with purpose.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg md:text-xl text-gray-600 leading-8">
            I combine development, design and practical problem-solving to
            help businesses create a stronger digital presence.
          </p>

        </div>


        {/* Services */}
        <div className="grid md:grid-cols-2 gap-5">

          {services.map((service, index) => {

            const isLast = index === services.length - 1;

            return (
              <div
                key={service.number}
                className={`
                  group relative overflow-hidden rounded-[2rem]
                  border p-7 md:p-9
                  transition-all duration-500
                  hover:-translate-y-2 hover:shadow-2xl
                  ${
                    isLast
                      ? "md:col-span-2 bg-gray-900 border-gray-800 text-white"
                      : "bg-white border-gray-200"
                  }
                `}
              >

                {/* Accent glow */}
                <div
                  className={`
                    absolute -right-16 -top-16
                    w-40 h-40 rounded-full blur-2xl
                    opacity-40 group-hover:opacity-70
                    group-hover:scale-150
                    transition-all duration-700
                    ${
                      service.accent === "purple"
                        ? "bg-purple-400"
                        : service.accent === "orange"
                        ? "bg-orange-400"
                        : service.accent === "green"
                        ? "bg-green-400"
                        : service.accent === "pink"
                        ? "bg-pink-400"
                        : service.accent === "blue"
                        ? "bg-blue-400"
                        : service.accent === "yellow"
                        ? "bg-yellow-400"
                        : "bg-purple-600"
                    }
                  `}
                />

                <div className="relative">

                  {/* Top row */}
                  <div className="flex items-center justify-between">

                    <span
                      className={`text-sm font-bold tracking-[0.2em]
                        ${
                          isLast
                            ? "text-purple-300"
                            : "text-gray-400"
                        }`}
                    >
                      {service.number}
                    </span>

                    <span
                      className={`w-11 h-11 rounded-full
                        flex items-center justify-center
                        border
                        group-hover:rotate-45
                        transition-all duration-500
                        ${
                          isLast
                            ? "border-white/20 text-white"
                            : "border-gray-200 text-gray-500"
                        }`}
                    >
                      ↗
                    </span>

                  </div>


                  {/* Tag */}
                  <div className="mt-8">
                    <span
                      className={`
                        inline-flex px-3 py-1.5 rounded-full
                        text-xs font-semibold uppercase tracking-wider
                        ${
                          isLast
                            ? "bg-white/10 text-purple-200"
                            : "bg-gray-100 text-gray-600"
                        }
                      `}
                    >
                      {service.tag}
                    </span>
                  </div>


                  {/* Title */}
                  <h3
                    className={`
                      mt-6 text-2xl md:text-3xl font-bold
                      tracking-tight
                      ${
                        isLast
                          ? "text-white"
                          : "text-gray-900 group-hover:text-purple-700"
                      }
                      transition-colors duration-300
                    `}
                  >
                    {service.title}
                  </h3>


                  {/* Description */}
                  <p
                    className={`
                      mt-4 max-w-xl leading-7
                      ${
                        isLast
                          ? "text-gray-400"
                          : "text-gray-500"
                      }
                    `}
                  >
                    {service.description}
                  </p>


                  {/* Bottom interaction */}
                  <div
                    className={`
                      mt-8 flex items-center gap-2
                      text-sm font-semibold
                      ${
                        isLast
                          ? "text-purple-300"
                          : "text-gray-400 group-hover:text-gray-900"
                      }
                      transition-colors duration-300
                    `}
                  >
                    Explore service

                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </div>

                </div>
              </div>
            );
          })}

        </div>


        {/* Bottom statement */}
        <div className="mt-16 flex flex-col md:flex-row md:items-center justify-between gap-6">

          <p className="text-gray-500 max-w-xl leading-7">
            Need something specific? I can work with your existing setup,
            understand the problem and find a practical digital solution.
          </p>

          <div className="shrink-0 px-5 py-3 rounded-full bg-gray-900 text-white text-sm font-medium">
            Let's build something useful ↗
          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;

