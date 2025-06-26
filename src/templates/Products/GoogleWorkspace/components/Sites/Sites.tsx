import {
  ContentCardLong,
  ContentGridCard,
  DividerContent,
} from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";
import { ColumFeatureCards } from "@/templates/Products/Sisense/components/ColumFeatureCard";
import {
  Impactful_team_sites_made_easy,
  SITES_MANAGEMENT_FEATURES_SECTION,
  SITES_MANAGEMENT_FEATURES,
} from "../../../../../configs/products_solutions/GoogleWorkspace/SitesContent.configs";

interface SitesComponentProps {
  lng: string;
}

const SitesComponent = ({ lng }: SitesComponentProps) => {
  return (
    <Fragment>
      <ContentCardLong content={Impactful_team_sites_made_easy} lng={lng} />

      <DividerContent />
      {/* <ColumFeatureCards
        section={SITES_MANAGEMENT_FEATURES_SECTION}
        lng={lng}
      />  */}
      <ContentGridCard content={SITES_MANAGEMENT_FEATURES} lng={lng} />
    </Fragment>
  );
};

export const Sites = memo(SitesComponent);
