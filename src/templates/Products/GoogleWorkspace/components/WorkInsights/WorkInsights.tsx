import { GoogleWorkspaceVoiceContent } from "@/configs";
import { GoogleWorkspaceWorkInsightsContent } from "@/configs/products_solutions/GoogleWorkspace/WorkInsights.config";
import { ContentGridCard } from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

interface WorkInsightsComponentProps {
  lng: string;
}

const WorkInsightsComponent = ({ lng }: WorkInsightsComponentProps) => {
  return (
    <Fragment>
      <ContentGridCard content={GoogleWorkspaceWorkInsightsContent} lng={lng} />

      {/* <DividerContent /> */}
    </Fragment>
  );
};

export const WorkInsights = memo(WorkInsightsComponent);
