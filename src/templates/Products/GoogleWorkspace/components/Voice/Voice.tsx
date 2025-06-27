import { GoogleWorkspaceVoiceContent } from "@/configs";
import { ContentGridCard } from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

interface VoiceComponentProps {
  lng: string;
}

const VoiceComponent = ({ lng }: VoiceComponentProps) => {
  return (
    <Fragment>
      <ContentGridCard content={GoogleWorkspaceVoiceContent} lng={lng} />

      {/* <DividerContent /> */}
    </Fragment>
  );
};

export const Voice = memo(VoiceComponent);
