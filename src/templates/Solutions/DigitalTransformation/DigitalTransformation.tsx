import { CompanyStoryBanner } from "@/components/CompanyStoryBanner/CompanyStoryBanner";
import {
  DIGITAL_TRANSFORMATION_CONFIG,
  DIGITAL_TRANSFORMATION_CONFIG1,
  DIGITAL_TRANSFORMATION_CONFIG2,
  DIGITAL_TRANSFORMATION_CONFIG3,
  DIGITAL_TRANSFORMATION_CONTENT3_1,
  DIGITAL_TRANSFORMATION_FEATURE_HIGHLIGHT,
  DIGITAL_TRANSFORMATION_FEATURE_HIGHLIGHT2,
  DIGITAL_TRANSFORMATION_FEATURE_HIGHLIGHT3,
  DIGITAL_TRANSFORMATION_FEATURE_HIGHLIGHT_SME,
  DIGITAL_TRANSFORMATION_STORY,
} from "@/configs/products_solutions/Solutions/DigitalTransformation.config";
import { ContentCardLong } from "@/templates/Products/Sisense/components";
import { FeatureHighlight } from "@/templates/Products/Sisense/components/FeatureHighlight/FeatureHighlight";
import { memo } from "react";

interface Props {
  lng: string;
}
const DigitalTransformationComponent = ({ lng }: Props) => {
  return (
    <main className="flex flex-col items-center  min-h-screen py-10 px-2">
      <div className="max-w-6xl w-full flex flex-col gap-8 md:gap-12 relative">
        <ContentCardLong content={DIGITAL_TRANSFORMATION_CONFIG} lng={lng} />
        <ContentCardLong content={DIGITAL_TRANSFORMATION_CONFIG1} lng={lng} />

        <FeatureHighlight
          content={DIGITAL_TRANSFORMATION_FEATURE_HIGHLIGHT}
          lng={lng}
        />
        <ContentCardLong content={DIGITAL_TRANSFORMATION_CONFIG2} lng={lng} />
        <FeatureHighlight
          content={DIGITAL_TRANSFORMATION_FEATURE_HIGHLIGHT2}
          lng={lng}
        />
        <ContentCardLong content={DIGITAL_TRANSFORMATION_CONFIG3} lng={lng} />
        <ContentCardLong
          content={DIGITAL_TRANSFORMATION_CONTENT3_1}
          lng={lng}
        />
        <FeatureHighlight
          content={DIGITAL_TRANSFORMATION_FEATURE_HIGHLIGHT3}
          lng={lng}
        />
        <FeatureHighlight
          content={DIGITAL_TRANSFORMATION_FEATURE_HIGHLIGHT_SME}
          lng={lng}
        />
        <CompanyStoryBanner
          storyData={DIGITAL_TRANSFORMATION_STORY}
          lng={lng}
        />
      </div>
    </main>
  );
};

export const DigitalTransformation = memo(DigitalTransformationComponent);
