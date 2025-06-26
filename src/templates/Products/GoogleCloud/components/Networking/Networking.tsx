import { TableCardContent } from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

import { GOOGLE_CLOUD_NETWORKING_PRODUCTS } from "@/configs";

interface Props {
  lng: string;
}

const NetworkingComponent = ({ lng }: Props) => {
  return (
    <Fragment>
      <TableCardContent products={GOOGLE_CLOUD_NETWORKING_PRODUCTS} lng={lng} />
    </Fragment>
  );
};

export const Networking = memo(NetworkingComponent);
