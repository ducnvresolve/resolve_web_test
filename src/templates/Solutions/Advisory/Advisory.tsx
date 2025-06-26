import { CompanyStoryBanner } from "@/components/CompanyStoryBanner/CompanyStoryBanner";
import { ContentCardLong } from "@/templates/Products/Sisense/components";
import { memo } from "react";
import {
  ADVISORY_CONFIG,
  ADVISORY_CONFIG2,
  ADVISORY_STORY,
} from "@/configs";
interface Props {
  lng: string;
}
const AdvisorySolutionComponent = ({ lng }: Props) => {
  return (
    <main className="flex flex-col items-center  min-h-screen py-10 px-2">
      <div className="max-w-6xl w-full flex flex-col gap-8 md:gap-12 relative">
        {/* <CompanyStoryBanner storyData={DATA_ANALYTICS_STORY} lng={lng} /> */}
        <ContentCardLong content={ADVISORY_CONFIG} lng={lng} />
        <ContentCardLong content={ADVISORY_CONFIG2} lng={lng} />
        <CompanyStoryBanner storyData={ADVISORY_STORY} lng={lng} />
      </div>
    </main>
  );
};

export const AdvisorySolution = memo(AdvisorySolutionComponent);
