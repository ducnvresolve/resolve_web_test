import {
  ContentCardLong,
  ContentGridCard,
  DividerContent,
} from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";
import {
  SHAREABLE_ONLINE_CALENDAR,
  TASKS_FEATURES_SECTION,
  CALENDAR_FEATURES_SECTION,
  TASKS_FEATURES,
  CALENDAR_FEATURES,
} from "../../../../../configs/products_solutions/GoogleWorkspace/CalendarContent.configs";
import { ColumFeatureCards } from "@/templates/Products/Sisense/components/ColumFeatureCard";

interface CalendarComponentProps {
  lng: string;
}

const CalendarComponent = ({ lng }: CalendarComponentProps) => {
  return (
    <Fragment>
      <ContentCardLong content={SHAREABLE_ONLINE_CALENDAR} lng={lng} />

      <DividerContent />

      {/* <ColumFeatureCards section={TASKS_FEATURES_SECTION} lng={lng} /> */}
      <ContentGridCard content={TASKS_FEATURES} lng={lng} />

      <DividerContent />

      {/* <ColumFeatureCards section={CALENDAR_FEATURES_SECTION} lng={lng} /> */}
      <ContentGridCard content={CALENDAR_FEATURES} lng={lng} />
    </Fragment>
  );
};

export const Calendar = memo(CalendarComponent);
