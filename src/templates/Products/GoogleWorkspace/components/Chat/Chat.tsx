import {
  ContentCardLong,
  ContentGridCard,
  DividerContent,
} from "@/templates/Products/Sisense/components";
import { Fragment, memo } from "react";
import {
  GEMINI_IN_CHAT,
  CHAT_FEATURES_SECTION,
  CHAT_FEATURES,
} from "../../../../../configs/products_solutions/GoogleWorkspace/ChatContent.configs";
import { ColumFeatureCards } from "@/templates/Products/Sisense/components/ColumFeatureCard";

interface ChatComponentProps {
  lng: string;
}

const ChatComponent = ({ lng }: ChatComponentProps) => {
  return (
    <Fragment>
      <ContentCardLong content={GEMINI_IN_CHAT} lng={lng} />

      <DividerContent />

      {/* <ColumFeatureCards section={CHAT_FEATURES_SECTION} lng={lng} /> */}
      <ContentGridCard content={CHAT_FEATURES} lng={lng} />
    </Fragment>
  );
};

export const Chat = memo(ChatComponent);
