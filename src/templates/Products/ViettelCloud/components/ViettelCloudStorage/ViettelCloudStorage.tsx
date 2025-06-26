import { ContentCardLong } from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

import { viettelCloudStorage } from "@/configs";

const ViettelCloudStorageComponent = ({ lng }: { lng: string }) => {
  return (
    <Fragment>
      <ContentCardLong content={viettelCloudStorage} lng={lng} />
    </Fragment>
  );
};

export const ViettelCloudStorage = memo(ViettelCloudStorageComponent);
