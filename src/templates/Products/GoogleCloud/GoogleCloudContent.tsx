"use client";

import { memo, useMemo, useEffect, useRef, useState } from "react";
import { TableCardContent } from "../Sisense/components/TableCardContent";
import { GOOGLE_CLOUD_FEATURES } from "@/configs";

import { useRouter, usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { AIMachineLearning } from "./components/AIMachineLearning/AIMachineLearning";
import { CloudSecurity } from "./components/CloudSecurity/CloudSecurity";
import { Compute } from "./components";
import { Networking } from "./components/Networking/Networking";
import { Containers } from "./components/Containers/Containers";
import { ApiManagement } from "./components/ApiManagement/ApiManagement";
import { Storage } from "./components/Storage/Storage";
import { Database } from "./components/Database/Database";
import { DataAnalytics } from "./components/DataAnalytics/DataAnalytics";

interface IFeature {
  name: string;
  name_vn: string;
  desc: string;
  desc_vn: string;
  icon: string;
  slug: string;
}

interface Props {
  activeFeature?: string;
  lng: string;
}

interface ComponentProps {
  lng: string;
}

const GoogleCloudContentComponent = ({ activeFeature, lng }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const feature = useMemo(() => {
    return GOOGLE_CLOUD_FEATURES.find((f) => f.slug === activeFeature);
  }, [activeFeature]);
  const content = useMemo(() => {
    const props: ComponentProps = { lng };
    switch (feature?.slug) {
      case "ai-ml":
        return <AIMachineLearning {...props} />;
      case "security":
        return <CloudSecurity {...props} />;
      case "compute":
        return <Compute {...props} />;
      case "networking":
        return <Networking {...props} />;
      case "containers":
        return <Containers {...props} />;
      case "api-management":
        return <ApiManagement {...props} />;
      case "storage":
        return <Storage {...props} />;
      case "database":
        return <Database {...props} />;
      case "data-analytics":
        return <DataAnalytics {...props} />;
      default:
        return null;
    }
  }, [feature, lng]);

  const introText = useMemo(() => {
    if (lng === "vi") {
      return "Google Cloud cung cấp một loạt các dịch vụ đám mây toàn diện, bao gồm tính toán, lưu trữ, cơ sở dữ liệu, học máy. Cơ sở hạ tầng của nó được thiết kế cho hiệu suất cao và khả năng mở rộng, phù hợp với doanh nghiệp thuộc mọi quy mô.";
    }
    return "Google Cloud offers a comprehensive range of cloud services, including computing, storage, databases, machine learning. Its infrastructure is designed for high performance and scalability, making it suitable for businesses of all sizes.";
  }, [lng]);

  return (
    <main className="flex flex-col items-center bg-gradient-to-br  min-h-screen py-10 px-2">
      <div className="max-w-6xl w-full flex flex-col gap-8 md:gap-12">
        {!feature ? (
          <>
            {/* Giới thiệu */}
            <div className="text-center mb-2">
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
                    ".fade-in-cloud-card"
                  );
                  elements.forEach((el) => observerRef.current?.observe(el));
                  return () => {
                    elements.forEach((el) =>
                      observerRef.current?.unobserve(el)
                    );
                    observerRef.current?.disconnect();
                  };
                }, []);
                return GOOGLE_CLOUD_FEATURES.map((f, idx) => (
                  <div
                    key={f.name}
                    className={`bg-white rounded-xl shadow-lg border border-blue-100 p-6 flex flex-col items-center h-[240px] transition-transform duration-200 hover:scale-105 hover:-translate-y-1 active:scale-95 cursor-pointer fade-in-cloud-card transition-all duration-700 ${visible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
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
                      {lng === "vi" ? f.name_vn : f.name}
                    </h2>
                    <p className="text-gray-700 text-justify mb-2 overflow-hidden text-ellipsis line-clamp-4">
                      {lng === "vi" ? f.desc_vn : f.desc}
                    </p>
                  </div>
                ));
              })()}
            </div>
          </>
        ) : (
          <>
            <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-8 flex flex-col items-center gap-4">
              <img
                src={feature.icon}
                alt={lng === "vi" ? feature.name_vn : feature.name}
                className="w-12 h-12 mb-2"
              />
              <h2 className="text-2xl font-bold text-center text-purple-700 mb-2">
                {lng === "vi" ? feature.name_vn : feature.name}
              </h2>
              <p className="text-gray-700 text-center">
                {lng === "vi" ? feature.desc_vn : feature.desc}
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

export const GoogleCloudContent = memo(GoogleCloudContentComponent);
