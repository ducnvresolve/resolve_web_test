"use client";
import { memo } from "react";

interface StoryContent {
  description: string;
}

interface StoryData {
  en: StoryContent;
  vi: StoryContent;
}

interface CompanyStoryBannerProps {
  storyData?: StoryData;
  lng?: string;
  className?: string;
}

const CompanyStoryBannerComponent = ({
  storyData,
  lng = "en",
  className = "",
}: CompanyStoryBannerProps) => {
  if (!storyData) {
    return null; // Don't render if no data is passed
  }

  const data = storyData[lng as keyof typeof storyData] || storyData.en;

  if (!data || !data.description) {
    return null; // Don't render if description for the language is missing
  }

  return (
    <div className="relative w-full flex justify-center items-center">
      <div className="bg-gradient-to-br from-white via-white to-purple-100 md:from-white md:via-purple-50 md:to-purple-200 rounded-2xl shadow-xl border border-purple-100 px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto flex items-center justify-center min-h-[unset]">
        <div className="relative z-10 w-full text-center">
          <p className="text-base text-gray-800 leading-relaxed font-medium inline-block m-0">
            <span className="text-purple-400 font-serif align-middle">“</span>
            <span
              dangerouslySetInnerHTML={{ __html: data.description }}
              className="inline"
            />
            <span className="text-purple-400 font-serif align-middle">”</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export const CompanyStoryBanner = memo(CompanyStoryBannerComponent);
