import {
  ContentCardLong,
  ContentGridCard,
  DividerContent,
} from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

import { ColumFeatureCards } from "@/templates/Products/Sisense/components/ColumFeatureCard";
import {
  FORMS_SECURITY_FEATURES,
  FORMS_SECURITY_FEATURES_SECTION,
} from "../../../../../configs/products_solutions/GoogleWorkspace/FormsContent.configs";
import { Online_forms_to_get_insights_quickly } from "../../../../../configs/products_solutions/GoogleWorkspace/FormsContent.configs";

interface FormsComponentProps {
  lng: string;
}

const FormsComponent = ({ lng }: FormsComponentProps) => {
  return (
    <Fragment>
      <ContentCardLong
        content={Online_forms_to_get_insights_quickly}
        lng={lng}
      />

      <DividerContent />
      {/* <ColumFeatureCards section={FORMS_SECURITY_FEATURES_SECTION} lng={lng} /> */}
      <ContentGridCard content={FORMS_SECURITY_FEATURES} lng={lng} />
    </Fragment>
  );
};

export const Forms = memo(FormsComponent);
