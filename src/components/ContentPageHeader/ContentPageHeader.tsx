import React, { memo } from "react";

interface ContentPageHeaderProps {
  title: string;
  subTitle: string;
}
const ContentPageHeaderComponent = ({
  title,
  subTitle,
}: ContentPageHeaderProps) => {
  return (
    <div className="w-full flex flex-col items-center relative bg-gray-50 overflow-hidden min-h-[186px] md:min-h-[236px] pt-[86px] border border-b-gray-300">
      <div className="max-w-screen-2xl w-full flex flex-col md:gap-3 p-6 py-10 pb-6 z-[5] drop-shadow-lg animate-slideup-long">
        <h1 className="w-full font-bold text-[40px] md:text-[52px] text-center text-orange-400 drop-shadow-[0_1px_1px_#000000bb] leading-[60px]">
          {title}
        </h1>
        {subTitle && (
          <p className="font-semibold w-full text-center text-lg md:text-xl">
            {subTitle}
          </p>
        )}
      </div>
    </div>
  );
};

export const ContentPageHeader = memo(ContentPageHeaderComponent);
