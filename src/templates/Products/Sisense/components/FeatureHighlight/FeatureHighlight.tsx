"use client";
import { memo, useEffect, useRef, useState } from "react";
import { IContent, IBullet } from "../ContentCardLong/interface";

export interface FeatureHighlightProps {
  content: IContent;
  lng?: string;
}

export const FeatureHighlight = memo(
  ({ content, lng = "en" }: FeatureHighlightProps) => {
    const getText = (en: string, vi: string) => (lng === "vi" ? vi || en : en);
    const [visible, setVisible] = useState<{ [key: number]: boolean }>({});
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
      if (!content.bullets?.length) return;
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const idx = Number(entry.target.getAttribute("data-idx"));
              setVisible((prev) => ({ ...prev, [idx]: true }));
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
      );
      cardRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
      return () => {
        cardRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
        observer.disconnect();
      };
    }, [content.bullets?.length]);

    return (
      <section className="w-full py-8">
        {content.title && (
          <h2 className="text-xl md:text-2xl font-bold text-purple-700 mb-2 text-center">
            {getText(content.title, content.title_vn)}
          </h2>
        )}
        {content.desc && (
          <p className="text-sm md:text-base text-gray-600 mb-6 text-center">
            {getText(content.desc, content.desc_vn)}
          </p>
        )}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {content.bullets.map((b: IBullet, idx: number) => (
            <div
              key={b.id || idx}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              data-idx={idx}
              className={`w-full h-[210px] md:h-[210px] bg-white rounded-xl p-4 flex flex-col items-start border transition-all duration-300
                border-gray-100 shadow-md opacity-0 translate-y-8
                hover:border-purple-500 hover:shadow-xl hover:scale-102 cursor-pointer overflow-hidden
                ${visible[idx] ? "opacity-100 translate-y-0" : ""}
              `}
              style={{
                transitionDelay: visible[idx] ? `${idx * 80}ms` : "0ms",
                transformOrigin: "center",
              }}
            >
              {/* Icon nếu có */}
              {b.img && b.img.length > 0 && (
                <img
                  src={Array.isArray(b.img[0]) ? b.img[0][0] : b.img[0]}
                  alt=""
                  className="w-8 h-8 mb-2"
                />
              )}
              <h3 className="w-full text-base font-semibold text-gray-900 mb-2 text-center">
                {getText(b.title, b.title_vn)}
              </h3>
              <p
                className="text-sm md:text-base text-gray-700 text-justify line-clamp-4 overflow-hidden"
                dangerouslySetInnerHTML={{ __html: getText(b.desc, b.desc_vn) }}
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
);
