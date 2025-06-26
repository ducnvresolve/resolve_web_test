import { TableCardContent } from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

import { GOOGLE_CLOUD_DATABASE_PRODUCTS } from "@/configs";
interface Props {
  lng: string;
}

const DatabaseComponent = ({ lng }: Props) => {
  return (
    <Fragment>
      <TableCardContent products={GOOGLE_CLOUD_DATABASE_PRODUCTS} lng={lng} />
    </Fragment>
  );
};

export const Database = memo(DatabaseComponent);
