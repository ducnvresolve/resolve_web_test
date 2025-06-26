import { TableCardContent } from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

import { GOOGLE_CLOUD_PRODUCTS } from "@/configs";

interface Props {
  lng: string;
}

const AIMachineLearningComponent = ({ lng }: Props) => {
  return (
    <Fragment>
      <TableCardContent products={GOOGLE_CLOUD_PRODUCTS} lng={lng} />
    </Fragment>
  );
};

export const AIMachineLearning = memo(AIMachineLearningComponent);
