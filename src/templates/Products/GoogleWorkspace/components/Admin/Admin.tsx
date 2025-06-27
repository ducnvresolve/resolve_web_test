import { GoogleWorkspaceAdminContent } from "@/configs";
import { ContentGridCard } from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

interface AdminComponentProps {
  lng: string;
}

const AdminComponent = ({ lng }: AdminComponentProps) => {
  return (
    <Fragment>
      <ContentGridCard content={GoogleWorkspaceAdminContent} lng={lng} />

      {/* <DividerContent /> */}
    </Fragment>
  );
};

export const Admin = memo(AdminComponent);
