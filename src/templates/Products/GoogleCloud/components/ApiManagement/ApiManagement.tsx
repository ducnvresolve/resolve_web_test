import { TableCardContent } from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

import { GOOGLE_CLOUD_API_MANAGEMENT_PRODUCTS } from "@/configs";

interface Props {
  lng: string;
}

const ApiManagementComponent = ({ lng }: Props) => {
  return (
    <Fragment>
      <TableCardContent
        products={GOOGLE_CLOUD_API_MANAGEMENT_PRODUCTS}
        lng={lng}
      />
    </Fragment>
  );
};

export const ApiManagement = memo(ApiManagementComponent);
