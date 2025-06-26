import { TableCardContent } from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

import { GOOGLE_CLOUD_STORAGE_PRODUCTS } from "@/configs";

interface Props {
  lng: string;
}

const StorageComponent = ({ lng }: Props) => {
  return (
    <Fragment>
      <TableCardContent products={GOOGLE_CLOUD_STORAGE_PRODUCTS} lng={lng} />
    </Fragment>
  );
};

export const Storage = memo(StorageComponent);
