import {
  ContentCardLong,
  DividerContent,
} from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";
import { supercharge_your_work_with_no_code } from "../../../../../configs/products_solutions/GoogleWorkspace/AppSheetContent.configs";

interface AppSheetComponentProps {
  lng: string;
}

const AppSheetComponent = ({ lng }: AppSheetComponentProps) => {
  return (
    <Fragment>
      <ContentCardLong content={supercharge_your_work_with_no_code} lng={lng} />

      {/* <DividerContent /> */}
    </Fragment>
  );
};

export const AppSheet = memo(AppSheetComponent);
