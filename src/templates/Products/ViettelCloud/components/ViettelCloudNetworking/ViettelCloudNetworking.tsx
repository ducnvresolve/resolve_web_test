import { ContentCardLong } from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

import { viettelCloudNetworking } from "@/configs";

const ViettelCloudNetworkingComponent = ({ lng }: { lng: string }) => {
  return (
    <Fragment>
      <ContentCardLong content={viettelCloudNetworking} lng={lng} />
    </Fragment>
  );
};

export const ViettelCloudNetworking = memo(ViettelCloudNetworkingComponent);
