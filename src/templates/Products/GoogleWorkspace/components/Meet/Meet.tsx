import { ContentGridCard } from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";
import { MEET_FEATURES } from "../../../../../configs/products_solutions/GoogleWorkspace/MeetContentConfigs";

interface MeetComponentProps {
  lng: string;
}

const MeetComponent = ({ lng }: MeetComponentProps) => {
  return (
    <Fragment>
      <ContentGridCard content={MEET_FEATURES} lng={lng} />
    </Fragment>
  );
};

export const Meet = memo(MeetComponent);
