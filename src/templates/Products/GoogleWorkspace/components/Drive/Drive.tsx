import {
  ContentGridCard,
  DividerContent,
} from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";
import {
  DRIVE_FEATURES,
  driveAdvancedFeatures,
} from "../../../../../configs/products_solutions/GoogleWorkspace/DriveContentConfigs";

interface DriveComponentProps {
  lng: string;
}

const DriveComponent = ({ lng }: DriveComponentProps) => {
  return (
    <Fragment>
      <ContentGridCard content={driveAdvancedFeatures} lng={lng} />
      <DividerContent />
      {/* <ContentGridCard content={DRIVE_FEATURES} />
      <DividerContent /> */}
    </Fragment>
  );
};

export const Drive = memo(DriveComponent);
