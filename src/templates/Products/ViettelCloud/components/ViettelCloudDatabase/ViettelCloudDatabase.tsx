import { ContentCardLong } from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

import { viettelCloudDatabase } from "@/configs";
const ViettelCloudDatabaseComponent = ({ lng }: { lng: string }) => {
  return (
    <Fragment>
      <ContentCardLong content={viettelCloudDatabase} lng={lng} />
    </Fragment>
  );
};

export const ViettelCloudDatabase = memo(ViettelCloudDatabaseComponent);
