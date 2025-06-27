import {
  APPS_SCRIPT_CONTENT,
  GoogleWorkspaceAppsScriptContent,
} from "@/configs";
import { ContentGridCard } from "@/templates/Products/Sisense/components";
import { FeatureHighlight } from "@/templates/Products/Sisense/components/FeatureHighlight";
import { Fragment, memo } from "react";

interface AppsScriptComponentProps {
  lng: string;
}

const AppsScriptComponent = ({ lng }: AppsScriptComponentProps) => {
  return (
    <Fragment>
      <ContentGridCard content={GoogleWorkspaceAppsScriptContent} lng={lng} />
      <FeatureHighlight content={APPS_SCRIPT_CONTENT} />
      {/* <DividerContent /> */}
    </Fragment>
  );
};

export const AppsScript = memo(AppsScriptComponent);
