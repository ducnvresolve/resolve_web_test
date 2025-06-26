import {
  ContentCardLong,
  DividerContent,
} from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";
import { capture_whats_important_and_get_things_done } from "../../../../../configs/products_solutions/GoogleWorkspace/KeepContent.configs";

interface KeepComponentProps {
  lng: string;
}

const KeepComponent = ({ lng }: KeepComponentProps) => {
  return (
    <Fragment>
      <ContentCardLong
        content={capture_whats_important_and_get_things_done}
        lng={lng}
      />

      <DividerContent />
    </Fragment>
  );
};

export const Keep = memo(KeepComponent);
