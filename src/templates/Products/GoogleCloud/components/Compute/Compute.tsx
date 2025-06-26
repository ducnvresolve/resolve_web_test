import { TableCardContent } from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

import { Compute_PRODUCTS } from "@/configs";
interface Props {
  lng: string;
}

const ComputeComponent = ({ lng }: Props) => {
  return (
    <Fragment>
      <TableCardContent products={Compute_PRODUCTS} lng={lng} />
    </Fragment>
  );
};

export const Compute = memo(ComputeComponent);
