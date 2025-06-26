import { TableCardContent } from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

import { GOOGLE_CLOUD_CONTAINERS_PRODUCTS } from "@/configs";

interface Props {
  lng: string;
}

const ContainersComponent = ({ lng }: Props) => {
  return (
    <Fragment>
      <TableCardContent products={GOOGLE_CLOUD_CONTAINERS_PRODUCTS} lng={lng} />
    </Fragment>
  );
};

export const Containers = memo(ContainersComponent);
