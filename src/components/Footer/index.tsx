import FooterContact from "./Contact";
import FooterSection from "./Section";
import FooterCopyright from "./Copyright";
import type { BaseProps } from "@/types/base.types";

export default function Footer({ params }: BaseProps) {
  return (
    <footer className="w-full flex flex-col items-center bg-neutral-800 text-white pt-12 z-40 relative">
      <div className="w-full max-w-screen-2xl flex flex-col md:flex-row justify-between gap-6">
        <FooterContact params={params} />
        <div className="w-fit flex flex-col lg:flex-row gap-6 md:px-6">
          <div className="w-fit flex flex-col gap-6">
            <FooterSection lng={params.lng} section={"about"} />
            <FooterSection lng={params.lng} section={"solutions"} />
          </div>
          <div className="w-fit flex flex-col gap-6">
            <FooterSection lng={params.lng} section={"platform"} />
            <FooterSection lng={params.lng} section={"resources"} />
          </div>
        </div>
      </div>
      <FooterCopyright params={params} />
    </footer>
  );
}
