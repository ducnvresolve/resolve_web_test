import { memo } from "react";

export interface HighlightStat {
  id: string;
  value: string;
  desc: string;
  desc_vn?: string;
  bgClass?: string;
}

interface StatContent {
  title?: string;
  title_vn?: string;
  desc?: string;
  desc_vn?: string;
  stats: HighlightStat[];
}

interface Props {
  statContent: StatContent;
  lng?: string;
}

const bgColors = ["bg-red-50", "bg-blue-50", "bg-green-50"];

const HighlightStatsComponent = ({ statContent, lng = "en" }: Props) => {
  const { title, title_vn, desc, desc_vn, stats } = statContent;

  const getLocalizedContent = (en: string, vn?: string) => {
    return lng === "vi" && vn ? vn : en;
  };

  return (
    <div className="w-full flex flex-col items-center">
      {title && (
        <h2 className="text-xl md:text-3xl font-bold text-center text-purple-700 mb-3 md:mb-4">
          {getLocalizedContent(title, title_vn)}
        </h2>
      )}
      {desc && (
        <p className="text-sm md:text-base text-gray-700 text-justify max-w-3xl mb-6 md:mb-8 px-4 md:px-0">
          {getLocalizedContent(desc, desc_vn)}
        </p>
      )}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0">
        {stats.map((s, idx) => (
          <div
            key={s.id}
            className={`rounded-xl md:rounded-2xl shadow-lg md:shadow-xl border border-gray-100 p-6 md:p-8 flex flex-col items-center ${
              s.bgClass || bgColors[idx % bgColors.length]
            } transition-transform duration-200 hover:scale-105 hover:-translate-y-1 active:scale-95 will-change-transform`}
          >
            <div className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-2 md:mb-3">
              {s.value}
            </div>
            <div className="text-sm md:text-base text-gray-700 text-justify font-medium">
              {getLocalizedContent(s.desc, s.desc_vn)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const HighlightStats = memo(HighlightStatsComponent);
