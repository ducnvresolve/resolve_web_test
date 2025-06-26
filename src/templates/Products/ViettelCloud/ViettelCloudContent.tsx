"use client";
import { Fragment, memo, useMemo, useEffect, useRef, useState } from "react";
import { VIETTEL_CLOUD_FEATURES } from "@/configs";
import {
  ViettelCloudCompute,
  ViettelCloudDatabase,
  ViettelCloudNetworking,
  ViettelCloudStorage,
  ViettelCloudBackup,
} from "./components";
import { useRouter, usePathname } from "next/navigation";

interface Props {
  activeFeature?: string;
  lng: string;
}

const ViettelCloudContentComponent = ({ activeFeature, lng }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const feature = useMemo(() => {
    return VIETTEL_CLOUD_FEATURES.find((f) => f.slug === activeFeature);
  }, [activeFeature]);
  const content = useMemo(() => {
    switch (feature?.slug) {
      case "compute":
        return <ViettelCloudCompute lng={lng} />;
      case "storage":
        return <ViettelCloudStorage lng={lng} />;
      case "networking":
        return <ViettelCloudNetworking lng={lng} />;
      case "database":
        return <ViettelCloudDatabase lng={lng} />;
      case "backup":
        return <ViettelCloudBackup lng={lng} />;
      default:
        return null;
    }
  }, [feature]);

  const introText = useMemo(() => {
    if (lng === "vi") {
      return "Viettel Cloud là nền tảng đám mây bền bỉ được thiết kế để phục vụ doanh nghiệp Việt Nam, cung cấp một loạt các dịch vụ bao gồm tính toán, lưu trữ và quản lý dữ liệu.";
    }
    return `Viettel Cloud is a robust cloud platform tailored for businesses
                in Vietnam, offering a range of services including cloud
                computing, storage, and data management solutions.`;
  }, [lng]);
  return (
    <main className="flex flex-col items-center  min-h-screen py-10 px-2">
      <div className="max-w-6xl w-full flex flex-col gap-8 md:gap-12">
        {/* Giới thiệu */}
        {!feature ? (
          <Fragment>
            <div className="text-center mb-2">
              <p className="text-lg text-gray-600 max-w-2xl mx-auto text-justify">
                {introText}
              </p>
            </div>
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
                    ".fade-in-viettel-card"
                  );
                  elements.forEach((el) => observerRef.current?.observe(el));
                  return () => {
                    elements.forEach((el) =>
                      observerRef.current?.unobserve(el)
                    );
                    observerRef.current?.disconnect();
                  };
                }, []);
                return VIETTEL_CLOUD_FEATURES.map((f, idx) => (
                  <div
                    key={f.name}
                    className={`bg-white rounded-xl shadow-lg border border-blue-100 p-6 flex flex-col items-center h-[240px] transition-transform duration-200 hover:scale-105 hover:-translate-y-1 active:scale-95 cursor-pointer fade-in-viettel-card transition-all duration-700 ${visible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    data-idx={idx}
                    onClick={() => {
                      if (activeFeature === f.slug) {
                        router.replace(pathname);
                      } else {
                        router.replace(`${pathname}?feature=${f.slug}`);
                      }
                    }}
                  >
                    <img
                      src={f.icon}
                      alt={lng === "vi" && f.name_vn ? f.name_vn : f.name}
                      className="w-10 h-10 mb-2"
                    />
                    <h2 className="text-xl font-bold text-center text-purple-700 mb-2">
                      {lng === "vi" && f.name_vn ? f.name_vn : f.name}
                    </h2>
                    <p className="text-gray-700 text-justify mb-2 overflow-hidden text-ellipsis line-clamp-4">
                      {lng === "vi" && f.desc_vn ? f.desc_vn : f.desc}
                    </p>
                  </div>
                ));
              })()}
            </div>
          </Fragment>
        ) : (
          <>
            <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-8 flex flex-col items-center gap-4">
              <img
                src={feature.icon}
                alt={
                  lng === "vi" && feature.name_vn
                    ? feature.name_vn
                    : feature.name
                }
                className="w-12 h-12 mb-2"
              />
              <h2 className="text-2xl font-bold text-center text-purple-700 mb-2">
                {lng === "vi" && feature.name_vn
                  ? feature.name_vn
                  : feature.name}
              </h2>
              <p className="text-gray-700 text-center">
                {lng === "vi" && feature.desc_vn
                  ? feature.desc_vn
                  : feature.desc}
              </p>
            </div>
            {/* <TableOfContents /> */}
            {/* <Gmail />  */}
            {content}
          </>
        )}
      </div>
    </main>
  );
};

export const ViettelCloudContent = memo(ViettelCloudContentComponent);
