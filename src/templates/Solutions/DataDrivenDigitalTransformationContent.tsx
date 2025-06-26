"use client";

import { LazyImage } from "@/components/LazyImage/LazyImage";

const mainFeatures = [
  {
    title: "Tổng quan",
    desc: "We acknowledge that each stage of your data journey lays the foundation for success. From gaining a comprehensive understanding to streamlining data collection and analysis, we deliver actionable insights for making informed decisions. As the result, analytics can be incorporated directly into your products, regardless of your technical setup. It can be deployed on any cloud — single-tenant or multi-tenant — with complete control and security.",
    img: "/images/solutions-data-driven-digital-transformation-ext.svg",
  },
  {
    title: "Chuyên gia & giải pháp cá nhân hóa",
    desc: "Our analytics experts leverage data to craft unique, data-driven solutions tailored to your challenges. We extend beyond mere technology implementation, transforming your business processes, culture, and strategy to fully reap the benefits of digital transformation.",
    img: "/images/solutions-data-driven-digital-transformation-ext-1.svg",
  },
  {
    title: "Dịch vụ nổi bật",
    desc: "resolve provides some of the most unique data-driven digital transformation services for all industries in Vietnam. We transform data into insights, fuel growth, and ensure your business excels in the digital age through expert guidance, innovative solutions, and unwavering support.",
    img: "/images/solutions-data-driven-digital-transformation-ext-2.svg",
  },
];

const highlights = [
  {
    icon: "🔗",
    text: "Connect data from any source",
  },
  {
    icon: "☁️",
    text: "Deploy on any cloud",
  },
  {
    icon: "🔒",
    text: "Maintain data control & security",
  },
];

export const DataDrivenDigitalTransformationContent = () => {
  return (
    <main className="flex flex-col items-center bg-gradient-to-br from-white to-blue-50 min-h-screen py-10 px-2">
      <div className="max-w-6xl w-full flex flex-col gap-8 md:gap-12">
        {/* Giới thiệu & các section chính */}
        {mainFeatures.map((f, idx) => (
          <div
            key={f.title}
            className={`bg-white rounded-2xl shadow-xl border border-blue-100 p-6 flex flex-col md:flex-row ${idx % 2 === 1 ? "md:flex-row-reverse" : ""} gap-8 items-center`}
          >
            <div className="w-full md:w-1/2 flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-blue-800 mb-2">
                {f.title}
              </h2>
              <p className="text-gray-700 mb-2 text-justify">{f.desc}</p>
              {idx === 0 && (
                <ul className="flex flex-row gap-6 mt-4">
                  {highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg shadow text-blue-700 font-semibold"
                    >
                      <span className="text-xl">{h.icon}</span> {h.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="rounded-xl overflow-hidden border border-blue-200 shadow-md bg-white min-w-[220px]">
                <LazyImage src={f.img} alt={f.title} width={320} height={180} />
              </div>
            </div>
          </div>
        ))}
        {/* Call to action */}
        <div className="text-center mt-10">
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg transition"
          >
            Liên hệ tư vấn chuyển đổi số
          </a>
        </div>
      </div>
    </main>
  );
};
