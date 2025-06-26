import {
  ContentCardLong,
  DividerContent,
} from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";

import {
  GeminiStats,
  The_best_of_google_ai_now_included_in_workspace_plans,
} from "../../../../../configs/products_solutions/GoogleWorkspace/GeminiContent.configs";
import { HighlightStats } from "@/templates/Products/Sisense/components/HighlightStats";

interface GeminiComponentProps {
  lng: string;
}

const GeminiComponent = ({ lng }: GeminiComponentProps) => {
  return (
    <Fragment>
      <ContentCardLong
        content={The_best_of_google_ai_now_included_in_workspace_plans}
        lng={lng}
      />
      <DividerContent />
      <HighlightStats statContent={GeminiStats} />
    </Fragment>
  );
};

export const Gemini = memo(GeminiComponent);
