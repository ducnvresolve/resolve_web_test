"use client";

import { memo, useEffect, useRef, useState } from "react";
import { LazyImage } from "@/components/LazyImage/LazyImage";

export interface ColumFeature {
  id: string;
  title: string;
  title_vn?: string;
  desc: string;
  desc_vn?: string;
  img: string;
}

export interface ColumFeatureSection {
  title?: string;
  title_vn?: string;
  features: ColumFeature[];
}

interface Props {
  section: ColumFeatureSection;
  lng?: string;
}

const ColumFeatureCardsComponent = ({ section, lng = "en" }: Props) => {
  const { title, title_vn, features } = section;
  const [visible, setVisible] = useState<boolean[]>(
    Array(features.length).fill(false)
  );
  const [inView, setInView] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => {
      if (gridRef.current) observer.unobserve(gridRef.current);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (inView) {
      features.forEach((_, idx) => {
        setTimeout(() => {
          setVisible((prev) => {
            const next = [...prev];
            next[idx] = true;
            return next;
          });
        }, idx * 250);
      });
    }
  }, [inView, features.length]);

  return (
    <div className="w-full flex flex-col items-center">
      {title && (
        <h3 className="text-2xl md:text-3xl font-bold text-center text-purple-700 mb-8">
          {lng === "vi" && title_vn ? title_vn : title}
        </h3>
      )}
      <div
        ref={gridRef}
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((f, idx) => (
          <div
            key={f.id}
            className={`bg-white rounded-2xl shadow-xl border border-blue-100 p-6 flex flex-col items-center transition-all duration-700
              ${visible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            <div className="w-full flex justify-center mb-4">
              <LazyImage
                src={f.img}
                alt={lng === "vi" && f.title_vn ? f.title_vn : f.title}
                width={260}
                height={140}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900 text-center">
              {lng === "vi" && f.title_vn ? (
                f.title_vn.includes("<strong>") ? (
                  <span dangerouslySetInnerHTML={{ __html: f.title_vn }} />
                ) : (
                  f.title_vn
                )
              ) : f.title.includes("<strong>") ? (
                <span dangerouslySetInnerHTML={{ __html: f.title }} />
              ) : (
                f.title
              )}
            </h3>
            <div
              className="text-base text-gray-700 text-justify"
              dangerouslySetInnerHTML={{
                __html: lng === "vi" && f.desc_vn ? f.desc_vn : f.desc,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const ColumFeatureCards = memo(ColumFeatureCardsComponent);
