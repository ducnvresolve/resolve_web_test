"use client";

import { LazyImage } from "@/components/LazyImage/LazyImage";

const mainFeatures = [
  {
    title: "Unlock the power of your data",
    desc: "Unlock the power of your data with advanced analytics tools that transform raw information into actionable insights. Whether you're looking to visualize trends, make data-driven decisions, or build predictive models, our tools offer robust solutions tailored to your needs.",
    img: "/images/solutions-data-and-analytics-ext.svg",
  },
  {
    title: "Seamless data integration",
    desc: "Effortlessly combine data sources, no specialized skills or complex tools required. Data modeling that scales with your app and your team. Easily connect data from cloud, on-prem systems, and third-party apps to create a unified source of truth for deeper, more reliable insights.",
    img: "/images/solutions-data-and-analytics-ext-1.svg",
  },
  {
    title: "Actionable insights",
    desc: "Our analytics solutions help you visualize trends, make data-driven decisions, and build predictive models, empowering your organization to stay ahead in a data-driven world.",
    img: "/images/solutions-data-and-analytics-ext-2.svg",
  },
];

const highlights = [
  {
    icon: "📊",
    text: "Visualize trends",
  },
  {
    icon: "📈",
    text: "Make data-driven decisions",
  },
  {
    icon: "🤖",
    text: "Build predictive models",
  },
];

export const DataAndAnalyticsContent = () => {
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
            Liên hệ tư vấn Data & Analytics
          </a>
        </div>
      </div>
    </main>
  );
};
