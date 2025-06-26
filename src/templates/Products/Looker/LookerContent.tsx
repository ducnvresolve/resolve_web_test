import dynamic from "next/dynamic";
import {
  LookerAdvancedFeatures,
  firstOverview,
  lookerMainFeatures,
} from "@/configs";
import {
  ContentCardLong,
  ContentGridCard,
  DividerContent,
} from "../Sisense/components";
import { memo } from "react";

const TableOfContents = dynamic(
  () =>
    import("@/components/TableOfContents").then((mod) => mod.TableOfContents),
  {
    ssr: false,
  }
);
interface Props {
  lng: string;
}

const LookerContentComponent = ({ lng }: Props) => {
  return (
    <main className="flex flex-col items-center  min-h-screen py-10 px-2">
      {/* <TableOfContents /> */}
      <div className="max-w-6xl w-full flex flex-col gap-8 md:gap-12">
        {/* Giới thiệu */}
        <div className="text-center mb-2">
          <h1 className="text-4xl font-extrabold text-purple-700 mb-2 drop-shadow">
            Google Looker
          </h1>
        </div>
        <ContentCardLong content={firstOverview} lng={lng} />

        <DividerContent />
        <ContentCardLong content={lookerMainFeatures} lng={lng} />

        <DividerContent />
        <ContentGridCard content={LookerAdvancedFeatures} lng={lng} />
      </div>
    </main>
  );
};

export const LookerContent = memo(LookerContentComponent);
