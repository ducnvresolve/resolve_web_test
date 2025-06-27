import { GoogleWorkspaceEndpointManagementContent } from "@/configs";
import { ContentGridCard } from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

interface EndpointManagementComponentProps {
  lng: string;
}

const EndpointManagementComponent = ({
  lng,
}: EndpointManagementComponentProps) => {
  return (
    <Fragment>
      <ContentGridCard
        content={GoogleWorkspaceEndpointManagementContent}
        lng={lng}
      />

      {/* <DividerContent /> */}
    </Fragment>
  );
};

export const EndpointManagement = memo(EndpointManagementComponent);
