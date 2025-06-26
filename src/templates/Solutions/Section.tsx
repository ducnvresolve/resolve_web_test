import { SOLUTION_LIST } from "@/configs/routes.conf"
import type { BaseProps, BaseRecord } from "@/types/base.types"

type SolutionSectionProps = BaseProps & {
  solutionNumber: number
}

export const SOLUTION_NAME = SOLUTION_LIST.map((solution: BaseRecord<string>) =>
  solution.path?.replace("/solutions#", "").trim()
)

export default function SolutionSection({
  params: { t },
  solutionNumber,
}: SolutionSectionProps) {
  return (
    <section
      className={`
        w-full max-w-screen-xl px-6 flex flex-col items-start gap-12 md:gap-6 md:text-lg animate-slideup-long-delayed
        ${solutionNumber % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}
      `}
    >
      <div className="w-full md:max-w-[40%] h-auto flex justify-center items-center select-none">
        <img
          src={`/images/solutions-${SOLUTION_NAME[solutionNumber]}-ext.svg`}
          alt={`solutions-${SOLUTION_NAME[solutionNumber]}-ext`}
          className="w-[90%] md:w-full max-w-[700px]"
        />
      </div>
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl text-purple-600 font-bold mb-6">
          {t[`${SOLUTION_NAME[solutionNumber]}.title`]}
        </h2>
        {[...Array(solutionNumber === 2 ? 2 : 3).keys()].map((i: number) => (
          <p key={i + 1} className="leading-7 md:leading-8 mt-6 text-justify">
            {t[`${SOLUTION_NAME[solutionNumber]}.p.${i + 1}`]}
          </p>
        ))}
        <div className="flex flex-col lg:flex-row gap-6 mt-12 select-none">
          {[...Array(3).keys()].map((i: number) => (
            <div
              key={i + 1}
              className="w-full flex flex-row lg:flex-col items-center gap-6 p-3 rounded-lg border-2 border-gray-300 bg-white text-gray-500 hover:border-purple-600 hover:text-purple-700 duration-200"
            >
              <div className="flex justify-center items-center min-w-[110px]">
                <img
                  src={`/images/solutions-${
                    SOLUTION_NAME[solutionNumber]
                  }-ext-${i + 1}.svg`}
                  className="h-[70px] lg:max-h-[100px] lg:-mt-6 lg:absolute bg-white p-2"
                  alt={`solutions-${SOLUTION_NAME[solutionNumber]}-ext-${
                    i + 1
                  }`}
                />
              </div>
              <p className="font-semibold ml-3 lg:ml-0 lg:text-center">
                {t[`${SOLUTION_NAME[solutionNumber]}.li.${i + 1}`]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
