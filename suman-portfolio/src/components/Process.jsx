const processSteps = [
  {
    number: "01",
    title: "Understand",
    label: "START WITH THE WHY",
    description:
      "Before building anything, I understand the business, the audience and the problem we actually need to solve.",
    side: "left",
  },
  {
    number: "02",
    title: "Shape",
    label: "FIND THE DIRECTION",
    description:
      "Ideas become clearer through structure, content and visual direction. This is where the experience starts taking shape.",
    side: "right",
  },
  {
    number: "03",
    title: "Build",
    label: "TURN IDEAS INTO REALITY",
    description:
      "I bring the experience to life with clean development, responsive layouts and attention to the details that matter.",
    side: "left",
  },
  {
    number: "04",
    title: "Improve",
    label: "KEEP MAKING IT BETTER",
    description:
      "A project doesn't stop when it goes live. I refine, improve and adapt based on how the solution works in the real world.",
    side: "right",
  },
];

function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#f8f5ff] px-6 py-28 md:py-36"
    >
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-[28rem] h-[28rem] rounded-full bg-purple-200/30 blur-3xl" />

      <div className="absolute bottom-20 -left-40 w-[26rem] h-[26rem] rounded-full bg-orange-200/25 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <div className="max-w-3xl mb-24">

          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold tracking-[0.25em] text-purple-700">
              03 / HOW I WORK
            </span>

            <span className="h-px w-20 bg-purple-300" />
          </div>

          <h2 className="text-5xl md:text-5xl lg:text-7xl font-bold tracking-[-0.04em] leading-[0.95] text-gray-900">
            From idea
            <span className="block text-gray-400">
              to something real.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg md:text-xl text-gray-600 leading-8">
            Good digital work is not just about writing code.
            It starts with understanding, evolves through ideas and
            gets better through iteration.
          </p>

        </div>


        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 md:-translate-x-1/2" />


          <div className="space-y-5 md:space-y-1">

            {processSteps.map((step, index) => (

              <div
                key={step.number}
                className="relative grid md:grid-cols-2 gap-10 md:gap-20 items-center"
              >

                {/* Number */}
                <div
                  className="
                    absolute
                    left-0
                    md:left-1/2
                    top-0
                    md:-translate-x-1/2
                    z-10
                    w-10
                    h-10
                    rounded-full
                    bg-gray-900
                    text-white
                    flex
                    items-center
                    justify-center
                    text-xs
                    font-bold
                    shadow-lg
                    group
                  "
                >
                  {step.number}
                </div>


                {/* Left content */}
                <div
                  className={`
                    pl-16 md:pl-0
                    ${
                      step.side === "left"
                        ? "md:text-right md:pr-16"
                        : "md:col-start-2 md:row-start-1 md:pl-16"
                    }
                  `}
                >

                  <p className="text-xs font-bold tracking-[0.2em] text-purple-600">
                    {step.label}
                  </p>

                  <h3 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-gray-600 leading-8 max-w-lg md:ml-auto">
                    {step.description}
                  </p>

                  <div
                    className={`
                      mt-6
                      text-3xl
                      text-gray-300
                      ${
                        step.side === "left"
                          ? "md:ml-auto"
                          : ""
                      }
                    `}
                  >
                    {step.side === "left" ? "↗" : "↙"}
                  </div>

                </div>


                {/* Empty opposite side */}
                <div
                  className={`
                    hidden md:block
                    ${
                      step.side === "left"
                        ? "md:col-start-2"
                        : "md:col-start-1 md:row-start-1"
                    }
                  `}
                >
                  <div
                    className="
                      h-32
                      rounded-full
                      opacity-40
                    "
                  />
                </div>

              </div>

            ))}

          </div>

        </div>


        {/* Closing statement */}
        <div className="mt-28 pt-10 border-t border-gray-300 flex flex-col md:flex-row md:items-end justify-between gap-8">

          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-purple-600">
              The mindset
            </p>

            <h3 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 max-w-2xl">
              Build with intention.
              <span className="text-gray-400">
                {" "}Improve with purpose.
              </span>
            </h3>
          </div>

          <div className="text-6xl text-purple-300 leading-none">
            ✦
          </div>

        </div>

      </div>
    </section>
  );
}

export default Process;