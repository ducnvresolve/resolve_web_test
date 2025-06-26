import { memo } from "react";
import {
  GEOSPATIAL_ANALYTICS_CONFIG,
  GEOSPATIAL_ANALYTICS_CONFIG2,
  GEOSPATIAL_ANALYTICS_CONFIG3,
  GEO_ANALYTICS_CONTENT4,
  GEOSPATIAL_ANALYTICS_STORY,
} from "@/configs";
import { ContentCardLong } from "@/templates/Products/Sisense/components";
import { CompanyStoryBanner } from "@/components/CompanyStoryBanner/CompanyStoryBanner";
import { FeatureHighlight } from "@/templates/Products/Sisense/components/FeatureHighlight/FeatureHighlight";

interface Props {
  lng: string;
}
const GeospatialAnalyticsSolutionComponent = ({ lng }: Props) => {
  return (
    <main className="flex flex-col items-center  min-h-screen py-10 px-2">
      <div className="max-w-6xl w-full flex flex-col gap-8 md:gap-12 relative">
        <ContentCardLong content={GEOSPATIAL_ANALYTICS_CONFIG} lng={lng} />
        <ContentCardLong content={GEOSPATIAL_ANALYTICS_CONFIG2} lng={lng} />
        <ContentCardLong content={GEOSPATIAL_ANALYTICS_CONFIG3} lng={lng} />
        <FeatureHighlight content={GEO_ANALYTICS_CONTENT4} lng={lng} />
        <CompanyStoryBanner storyData={GEOSPATIAL_ANALYTICS_STORY} lng={lng} />
      </div>
    </main>
  );
};

export const GeospatialAnalyticsSolution = memo(
  GeospatialAnalyticsSolutionComponent
);
