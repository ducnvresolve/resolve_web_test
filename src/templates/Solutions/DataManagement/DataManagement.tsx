import { ContentCardLong } from "@/templates/Products/Sisense/components";
import { CompanyStoryBanner } from "@/components/CompanyStoryBanner/CompanyStoryBanner";
import { memo } from "react";
import { DATA_MANAGEMENT_CONFIG, DATA_MANAGEMENT_STORY } from "@/configs";
interface Props {
  lng: string;
}
const DataManagementSolutionComponent = ({ lng }: Props) => {
  return (
    <main className="flex flex-col items-center  min-h-screen py-10 px-2">
      <div className="max-w-6xl w-full flex flex-col gap-8 md:gap-12 relative">
        <ContentCardLong content={DATA_MANAGEMENT_CONFIG} lng={lng} />
        <CompanyStoryBanner storyData={DATA_MANAGEMENT_STORY} lng={lng} />
      </div>
    </main>
  );
};

export const DataManagementSolution = memo(DataManagementSolutionComponent);
