import {
  ContentCardLong,
  ContentGridCard,
  DividerContent,
} from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

import {
  How_NotebookLM_can_work_for_you_and_your_organization,
  NOTEBOOKLM_FEATURES,
} from "../../../../../configs/products_solutions/GoogleWorkspace/NotebookLMContent.configs";

interface NotebookLMComponentProps {
  lng: string;
}

const NotebookLMComponent = ({ lng }: NotebookLMComponentProps) => {
  return (
    <Fragment>
      <ContentGridCard content={NOTEBOOKLM_FEATURES} lng={lng} />

      <DividerContent />

      <ContentCardLong
        content={How_NotebookLM_can_work_for_you_and_your_organization}
        lng={lng}
      />
    </Fragment>
  );
};

export const NotebookLM = memo(NotebookLMComponent);
