import {
  ContentCardLong,
  DividerContent,
} from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";
import { AI_powered_video_creation_for_work } from "../../../../../configs/products_solutions/GoogleWorkspace/VidsContent.configs";

interface VidsComponentProps {
  lng: string;
}

const VidsComponent = ({ lng }: VidsComponentProps) => {
  return (
    <Fragment>
      <ContentCardLong content={AI_powered_video_creation_for_work} lng={lng} />

      <DividerContent />
    </Fragment>
  );
};

export const Vids = memo(VidsComponent);
