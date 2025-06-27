import { GoogleWorkspaceVaultContent } from "@/configs";
import { ContentGridCard } from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

interface VaultComponentProps {
  lng: string;
}

const VaultComponent = ({ lng }: VaultComponentProps) => {
  return (
    <Fragment>
      <ContentGridCard content={GoogleWorkspaceVaultContent} lng={lng} />

      {/* <DividerContent /> */}
    </Fragment>
  );
};

export const Vault = memo(VaultComponent);
