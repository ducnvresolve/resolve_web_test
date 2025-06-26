import { TableCardContent } from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

import { GOOGLE_CLOUD_DATA_ANALYTICS_PRODUCTS } from "@/configs";

interface Props {
  lng: string;
}

const DataAnalyticsComponent = ({ lng }: Props) => {
  return (
    <Fragment>
      <TableCardContent
        products={GOOGLE_CLOUD_DATA_ANALYTICS_PRODUCTS}
        lng={lng}
      />
    </Fragment>
  );
};

export const DataAnalytics = memo(DataAnalyticsComponent);
