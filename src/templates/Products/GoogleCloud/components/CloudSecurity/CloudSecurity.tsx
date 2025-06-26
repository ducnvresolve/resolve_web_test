import { TableCardContent } from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

import { GOOGLE_CLOUD_SECURITY_PRODUCTS } from "@/configs";

interface Props {
  lng: string;
}

const CloudSecurityComponent = ({ lng }: Props) => {
  return (
    <Fragment>
      <TableCardContent products={GOOGLE_CLOUD_SECURITY_PRODUCTS} lng={lng} />
    </Fragment>
  );
};

export const CloudSecurity = memo(CloudSecurityComponent);
