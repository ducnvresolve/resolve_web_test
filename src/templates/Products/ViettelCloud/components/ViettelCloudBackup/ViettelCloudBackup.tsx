import { ContentCardLong } from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

import { viettelCloudBackup } from "@/configs";
const ViettelCloudBackupComponent = ({ lng }: { lng: string }) => {
  return (
    <Fragment>
      <ContentCardLong content={viettelCloudBackup} lng={lng} />
    </Fragment>
  );
};

export const ViettelCloudBackup = memo(ViettelCloudBackupComponent);
