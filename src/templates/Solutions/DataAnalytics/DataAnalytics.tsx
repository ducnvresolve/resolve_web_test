import { ContentCardLong } from "@/templates/Products/Sisense/components";
import { memo } from "react";
import {
  DATA_ANALYTICS_CONFIG,
  DATA_ANALYTICS_CONFIG_2,
  DATA_ANALYTICS_CONFIG_3,
  DATA_ANALYTICS_STORY,
} from "@/configs";
import { CompanyStoryBanner } from "@/components/CompanyStoryBanner/CompanyStoryBanner";
interface Props {
  lng: string;
}
const DataAnalyticsSolutionComponent = ({ lng }: Props) => {
  return (
    <main className="flex flex-col items-center  min-h-screen py-10 px-2">
      <div className="max-w-6xl w-full flex flex-col gap-8 md:gap-12 relative">
        <ContentCardLong content={DATA_ANALYTICS_CONFIG} lng={lng} />
        <ContentCardLong content={DATA_ANALYTICS_CONFIG_2} lng={lng} />
        <ContentCardLong content={DATA_ANALYTICS_CONFIG_3} lng={lng} />
        <CompanyStoryBanner storyData={DATA_ANALYTICS_STORY} lng={lng} />
      </div>
    </main>
  );
};

export const DataAnalyticsSolution = memo(DataAnalyticsSolutionComponent);
