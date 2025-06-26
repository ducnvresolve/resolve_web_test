import { memo } from "react";
import {
  SUSTAINABILITY_ESG_SOLUTIONS_CONFIG,
  SUSTAINABILITY_ESG_SOLUTIONS_CONFIG2,
  SUSTAINABILITY_ESG_SOLUTIONS_KEY_BENEFITS,
  SUSTAINABILITY_ESG_SOLUTIONS_STORY,
} from "@/configs";
import { ContentCardLong } from "@/templates/Products/Sisense/components";
import { CompanyStoryBanner } from "@/components/CompanyStoryBanner";
import { FeatureHighlight } from "@/templates/Products/Sisense/components/FeatureHighlight";
interface Props {
  lng: string;
}
const SustainabilityESGSolutionsComponent = ({ lng }: Props) => {
  return (
    <main className="flex flex-col items-center  min-h-screen py-10 px-2">
      <div className="max-w-6xl w-full flex flex-col gap-8 md:gap-12 relative">
        <ContentCardLong
          content={SUSTAINABILITY_ESG_SOLUTIONS_CONFIG}
          lng={lng}
        />
        <ContentCardLong
          content={SUSTAINABILITY_ESG_SOLUTIONS_CONFIG2}
          lng={lng}
        />
        <FeatureHighlight
          content={SUSTAINABILITY_ESG_SOLUTIONS_KEY_BENEFITS}
          lng={lng}
        />
        <CompanyStoryBanner
          storyData={SUSTAINABILITY_ESG_SOLUTIONS_STORY}
          lng={lng}
        />
      </div>
    </main>
  );
};

export const SustainabilityESGSolutions = memo(
  SustainabilityESGSolutionsComponent
);
