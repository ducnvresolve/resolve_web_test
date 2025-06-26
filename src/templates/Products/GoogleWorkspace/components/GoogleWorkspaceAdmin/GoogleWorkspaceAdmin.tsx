import {
  ContentCardLong,
  DividerContent,
} from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";
import { GoogleWorkspaceAdminContent } from "../../../../../configs/products_solutions/GoogleWorkspace/GoogleWorkspaceAdmin.config";

interface GoogleWorkspaceAdminComponentProps {
  lng: string;
}

const GoogleWorkspaceAdminComponent = ({
  lng,
}: GoogleWorkspaceAdminComponentProps) => {
  return (
    <Fragment>
      <ContentCardLong content={GoogleWorkspaceAdminContent} lng={lng} />

      <DividerContent />
    </Fragment>
  );
};

export const GoogleWorkspaceAdmin = memo(GoogleWorkspaceAdminComponent);
