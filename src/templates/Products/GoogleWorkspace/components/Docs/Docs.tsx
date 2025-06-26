import {
  ContentCardLong,
  ContentGridCard,
  DividerContent,
} from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";
import {
  Online_collaborative_documents,
  DOCS_FEATURES_SECTION,
  DOCS_FEATURES,
} from "../../../../../configs/products_solutions/GoogleWorkspace/DocsContent.configs";
import { ColumFeatureCards } from "@/templates/Products/Sisense/components/ColumFeatureCard";

interface DocsComponentProps {
  lng: string;
}

const DocsComponent = ({ lng }: DocsComponentProps) => {
  return (
    <Fragment>
      <ContentCardLong content={Online_collaborative_documents} lng={lng} />
      <DividerContent />
      {/* <ColumFeatureCards section={DOCS_FEATURES_SECTION} lng={lng} /> */}
      <ContentGridCard content={DOCS_FEATURES} lng={lng} />
    </Fragment>
  );
};

export const Docs = memo(DocsComponent);
