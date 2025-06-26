import {
  ContentCardLong,
  DividerContent,
} from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

import {
  How_NotebookLM_can_work_for_you_and_your_organization,
  The_best_of_google_ai_now_included_in_workspace_plans,
} from "../../../../../configs/products_solutions/GoogleWorkspace/NotebookLMContent.configs";

interface NotebookLMComponentProps {
  lng: string;
}

const NotebookLMComponent = ({ lng }: NotebookLMComponentProps) => {
  return (
    <Fragment>
      <ContentCardLong
        content={The_best_of_google_ai_now_included_in_workspace_plans}
        lng={lng}
      />

      <DividerContent />

      <ContentCardLong
        content={How_NotebookLM_can_work_for_you_and_your_organization}
        lng={lng}
      />
    </Fragment>
  );
};

export const NotebookLM = memo(NotebookLMComponent);
