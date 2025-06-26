"use client";

import { memo, useMemo, useEffect, useRef, useState } from "react";
import { Gmail } from "./components/Gmail/Gmail";
import { GOOGLE_WORKSPACE_FEATURES } from "../../../configs/products_solutions/GoogleWorkspace/GoogleWorkspaceFeatures";
import { useRouter, usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { Drive } from "./components/Drive/Drive";
import { Meet } from "./components/Meet/Meet";
import { Chat } from "./components/Chat/Chat";
import { Calendar } from "./components/Calendar/Calendar";
import { Docs } from "./components/Docs/Docs";
import { Sheets } from "./components/Sheets/Sheets";
import { Slides } from "./components/Slides/Slides";
import { Forms } from "./components/Forms/Forms";
import { Sites } from "./components/Sites/Sites";
import { Gemini } from "./components/Gemini/Gemini";
import { Vids } from "./components/Vids/Vids";
import { NotebookLM } from "./components/NotebookLM/NotebookLM";
import { Keep } from "./components/Keep/Keep";
import { AppSheet } from "./components";
const TableOfContents = dynamic(
  () =>
    import("@/components/TableOfContents").then((mod) => mod.TableOfContents),
  {
    ssr: false,
  }
);
interface Props {
  activeFeature?: string;
  lng: string;
}
const GoogleWorkspaceContentComponent = ({ activeFeature, lng }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const feature = useMemo(() => {
    return GOOGLE_WORKSPACE_FEATURES.find((f) => f.slug === activeFeature);
  }, [activeFeature]);
  const workspaceContent = useMemo(() => {
    switch (feature?.slug) {
      case "gmail":
        return <Gmail lng={lng} />;
      case "drive":
        return <Drive lng={lng} />;
      case "meet":
        return <Meet lng={lng} />;
      case "chat":
        return <Chat lng={lng} />;
      case "calendar":
        return <Calendar lng={lng} />;
      case "docs":
        return <Docs lng={lng} />;
      case "sheets":
        return <Sheets lng={lng} />;
      case "slides":
        return <Slides lng={lng} />;
      case "forms":
        return <Forms lng={lng} />;
      case "sites":
        return <Sites lng={lng} />;
      case "gemini":
        return <Gemini lng={lng} />;
      case "notebooklm":
        return <NotebookLM lng={lng} />;
      case "vids":
        return <Vids lng={lng} />;
      case "keep":
        return <Keep lng={lng} />;
      case "appsheet":
        return <AppSheet lng={lng} />;
      default:
        return <></>;
    }
  }, [feature, lng]);
  const introText =
    lng === "vi"
      ? "Google Workspace là bộ công cụ năng suất tích hợp gồm Gmail, Drive, Docs, Sheets, Meet... Được thiết kế cho cộng tác, Google Workspace giúp các nhóm làm việc cùng nhau theo thời gian thực, bất kể vị trí."
      : "Google Workspace is an integrated suite of productivity tools that includes Gmail, Google Drive, Docs, Sheets, and Meet. Designed for collaboration, Google Workspace allows teams to work together in real-time, regardless of their location.";
  return (
    <div className="flex flex-col items-center  min-h-screen py-10 px-2">
      <div className="max-w-6xl w-full flex flex-col gap-8 md:gap-12">
        {feature ? (
          <>
            <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-8 flex flex-col items-center gap-4">
              <img
                src={feature.icon}
                alt={feature.name}
                className="w-12 h-12 mb-2"
              />
              <h2 className="text-2xl font-bold text-center text-purple-700 mb-2">
                {feature.name}
              </h2>
              <p className="text-gray-700 text-justify mb-2 text-lg">
                {lng === "vi" ? feature.desc_vn : feature.desc}
              </p>
              {/* Placeholder: bài viết hoặc content chi tiết về tính năng */}
            </div>
            {/* <TableOfContents /> */}
            {/* <Gmail />  */}
            {workspaceContent}
          </>
        ) : (
          <>
            {/* Giới thiệu tổng quan */}
            <div className="text-center mb-2">
              <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-2 drop-shadow">
                Google Workspace
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto text-justify">
                {introText}
              </p>
            </div>
            {/* Tính năng chính */}
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              {/* Fade-in logic for each card */}
              {(() => {
                const [visible, setVisible] = useState<{
                  [key: number]: boolean;
                }>({});
                const observerRef = useRef<IntersectionObserver | null>(null);
                useEffect(() => {
                  observerRef.current = new IntersectionObserver(
                    (entries) => {
                      entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                          const idx = parseInt(
                            entry.target.getAttribute("data-idx") || "0"
                          );
                          setVisible((prev) => ({ ...prev, [idx]: true }));
                        }
                      });
                    },
                    { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
                  );
                  const elements = document.querySelectorAll(
                    ".fade-in-workspace-card"
                  );
                  elements.forEach((el) => observerRef.current?.observe(el));
                  return () => {
                    elements.forEach((el) =>
                      observerRef.current?.unobserve(el)
                    );
                    observerRef.current?.disconnect();
                  };
                }, []);
                return GOOGLE_WORKSPACE_FEATURES.map((f, idx) => (
                  <div
                    key={f.name}
                    className={`bg-white rounded-xl shadow-lg border border-blue-100 p-6 flex flex-col items-center h-[240px] transition-transform duration-200 hover:scale-105 hover:-translate-y-1 active:scale-95 cursor-pointer fade-in-workspace-card transition-all duration-700 ${visible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    data-idx={idx}
                    onClick={() => {
                      if (activeFeature === f.slug) {
                        router.replace(pathname);
                      } else {
                        router.replace(`${pathname}?feature=${f.slug}`);
                      }
                    }}
                  >
                    <img src={f.icon} alt={f.name} className="w-10 h-10 mb-2" />
                    <h2 className="text-xl font-bold text-center text-purple-700 mb-2">
                      {f.name}
                    </h2>
                    <p className="text-gray-700 text-justify mb-2 overflow-hidden text-ellipsis line-clamp-4">
                      {lng === "vi" ? f.desc_vn : f.desc}
                    </p>
                  </div>
                ));
              })()}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export const GoogleWorkspaceContent = memo(GoogleWorkspaceContentComponent);
