import {
  ContentCardLong,
  ContentGridCard,
  DividerContent,
} from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";
import {
  no1EmailUsedWorldwide,
  MORE_TOOLS_TO_HELP_YOU_GROW_YOUR_BUSINESS,
  secureCloudStorageSection,
  gmailStats,
  GMAIL_FEATURES_SECTION,
  gmailAdvancedFeatures,
  GMAIL_GRID_FEATURES,
  secureCloudStorage,
  no1EmailUsedWorldwide_2,
  MORE_TOOLS_TO_HELP_YOU_GROW_YOUR_BUSINESS_2,
} from "../../../../../configs/products_solutions/GoogleWorkspace";
import { ColumFeatureCards } from "@/templates/Products/Sisense/components/ColumFeatureCard";
import { HighlightStats } from "@/templates/Products/Sisense/components/HighlightStats";

interface GmailComponentProps {
  lng: string;
}

const GmailComponent = ({ lng }: GmailComponentProps) => {
  const content = [
    ...no1EmailUsedWorldwide_2,
    ...GMAIL_GRID_FEATURES,
    ...MORE_TOOLS_TO_HELP_YOU_GROW_YOUR_BUSINESS_2,
  ];
  return (
    <Fragment>
      {/* <ContentCardLong content={no1EmailUsedWorldwide} lng={lng} /> */}

      <ContentGridCard content={content} lng={lng} />

      {/* <ColumFeatureCards section={GMAIL_FEATURES_SECTION} lng={lng} /> */}
      {/* <ContentGridCard content={} lng={lng} /> */}

      {/* <ContentCardLong
        content={MORE_TOOLS_TO_HELP_YOU_GROW_YOUR_BUSINESS}
        lng={lng}
      /> */}

      <HighlightStats statContent={gmailStats} lng={lng} />

      <ContentGridCard content={secureCloudStorage} lng={lng} />
    </Fragment>
  );
};

export const Gmail = memo(GmailComponent);
