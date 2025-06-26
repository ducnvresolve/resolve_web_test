import {
  ContentCardLong,
  ContentGridCard,
  DividerContent,
} from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

import { ColumFeatureCards } from "@/templates/Products/Sisense/components/ColumFeatureCard";
import { Online_collaborative_spreadsheets } from "../../../../../configs/products_solutions/GoogleWorkspace/SheetsContent.configs";
import {
  SHEETS_FEATURES_SECTION,
  SHEETS_FEATURES,
} from "../../../../../configs/products_solutions/GoogleWorkspace/SheetsContent.configs";

interface SheetsComponentProps {
  lng: string;
}

const SheetsComponent = ({ lng }: SheetsComponentProps) => {
  return (
    <Fragment>
      <ContentCardLong content={Online_collaborative_spreadsheets} lng={lng} />

      <DividerContent />

      {/* <ColumFeatureCards section={SHEETS_FEATURES_SECTION} lng={lng} /> */}
      <ContentGridCard content={SHEETS_FEATURES} lng={lng} />
    </Fragment>
  );
};

export const Sheets = memo(SheetsComponent);
