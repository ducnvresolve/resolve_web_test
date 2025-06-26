"use client";

import PageHeader from "@/components/PageHeader";
import OurMission from "./OurMission";
import OurTeam from "./OurTeam";
import OurValues from "./OurValues";
import MeetOurCeo from "./MeetOurCeo";
import CtaSection from "@/components/CtaSection";
import type { BaseProps } from "@/types/base.types";
import OurAchievements from "./OurAchievements";

export default function AboutUs({ params }: BaseProps) {
  return (
    <main className="flex flex-col items-center bg-white">
      <PageHeader params={params} />
      <OurMission params={params} />
      <OurTeam params={params} />
      <OurValues params={params} />
      <OurAchievements params={params} />
      <MeetOurCeo params={params} />
      <CtaSection params={params} />
    </main>
  );
}
