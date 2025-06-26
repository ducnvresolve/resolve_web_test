import { ContentCardLong } from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

import { viettelCloudCompute } from "@/configs";

const ViettelCloudComputeComponent = ({ lng }: { lng: string }) => {
  return (
    <Fragment>
      <ContentCardLong content={viettelCloudCompute} lng={lng} />
    </Fragment>
  );
};

export const ViettelCloudCompute = memo(ViettelCloudComputeComponent);
