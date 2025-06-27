import {
  ContentCardLong,
  ContentGridCard,
  DividerContent,
} from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";
import {
  Build_beautiful_presentations_together,
  SLIDES_FEATURES_SECTION,
  SLIDES_FEATURES,
} from "../../../../../configs/products_solutions/GoogleWorkspace/SlidesContent.configs";
import { ColumFeatureCards } from "@/templates/Products/Sisense/components/ColumFeatureCard";

interface SlidesComponentProps {
  lng: string;
}

const SlidesComponent = ({ lng }: SlidesComponentProps) => {
  return (
    <Fragment>
      {/* <ContentCardLong
        content={Build_beautiful_presentations_together}
        lng={lng}
      /> */}

      <DividerContent />
      {/* <ColumFeatureCards section={SLIDES_FEATURES_SECTION} lng={lng} /> */}
      <ContentGridCard content={SLIDES_FEATURES} lng={lng} />
    </Fragment>
  );
};

export const Slides = memo(SlidesComponent);
