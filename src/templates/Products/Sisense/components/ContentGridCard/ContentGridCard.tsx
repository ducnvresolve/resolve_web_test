"use client";
import { memo, useEffect, useRef, useState } from "react";
import { LazyImage } from "@/components/LazyImage/LazyImage";

export interface IGridCard {
  id: string;
  title: string;
  title_vn?: string;
  desc: string;
  desc_vn?: string;

  img?: string | undefined;
}

interface Props {
  content: IGridCard[];
  lng?: string;
  maxDescHeight?: number;
}

const ContentGridCardComponent = (props: Props) => {
  const { content, lng, maxDescHeight = 180 } = props;
  const [visible, setVisible] = useState<{ [key: number]: boolean }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute("data-idx") || "0");
            setVisible((prev) => ({ ...prev, [idx]: true }));
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );
    const elements = document.querySelectorAll(".fade-in-grid-card");
    elements.forEach((el) => observerRef.current?.observe(el));
    return () => {
      elements.forEach((el) => observerRef.current?.unobserve(el));
      observerRef.current?.disconnect();
    };
  }, []);

  // Custom bounce scale animation
  const bounceScale = `transition-transform duration-300 will-change-transform hover:animate-bounce-scale`;
  return (
    <div className="flex flex-col gap-8 md:gap-12 px-4 md:px-0">
      {content.map((item: any, idx: number) => {
        const rowClass =
          idx % 2 === 0
            ? "flex flex-col md:flex-row items-center gap-4 md:gap-8"
            : "flex flex-col md:flex-row-reverse items-center gap-4 md:gap-8";
        return (
          <div
            key={item.id}
            id={`toc-${item.id?.replace("toc-", "")}`}
            className={`${rowClass} fade-in-grid-card transition-all duration-700 ${
              visible[idx]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            data-idx={idx}
          >
            {item.img && (
              <div className="w-full md:w-1/2 flex items-center justify-center mb-3 md:mb-0">
                <div className="w-full max-w-[300px] md:max-w-[450px] h-[180px] md:h-[200px] rounded-lg md:rounded-xl overflow-hidden border border-blue-100 shadow-xl md:shadow-2xl bg-white flex items-center justify-center transition-transform duration-300 hover:scale-105">
                  <LazyImage
                    src={item.img}
                    alt={lng === "en" ? item.title : item.title_vn}
                    width={450}
                    height={200}
                    className="w-full h-full object-contain bounce-scale-img"
                  />
                </div>
              </div>
            )}
            <div className="w-full md:w-1/2">
              <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 text-left md:text-justify">
                {lng === "en" ? item.title : item.title_vn}
              </h3>
              {(() => {
                const [expanded, setExpanded] = useState(false);
                const contentRef = useRef<HTMLDivElement>(null);
                const [showReadMore, setShowReadMore] = useState(false);
                useEffect(() => {
                  if (
                    contentRef.current &&
                    contentRef.current.scrollHeight > maxDescHeight
                  ) {
                    setShowReadMore(true);
                  }
                }, [item, maxDescHeight]);
                return (
                  <div className="relative">
                    <div
                      ref={contentRef}
                      className={
                        expanded
                          ? "transition-all duration-500 max-h-[2000px]"
                          : `transition-all duration-500 max-h-[${maxDescHeight}px] overflow-hidden relative`
                      }
                    >
                      <div
                        className="text-base md:text-lg text-gray-700 text-justify"
                        dangerouslySetInnerHTML={{
                          __html: lng === "en" ? item.desc : item.desc_vn,
                        }}
                      />
                    </div>
                    {showReadMore && (
                      <>
                        <div
                          className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"
                          style={{ display: expanded ? "none" : "block" }}
                        />
                        <button
                          className="absolute  w-10 h-10 p-0 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:bg-gray-100 transition-all duration-200 z-20"
                          onClick={() => setExpanded((v) => !v)}
                          style={{
                            bottom: "-24px",
                            right: "0px",
                            backgroundColor: "transparent",
                          }}
                          aria-label={
                            expanded
                              ? lng === "vi"
                                ? "Thu gọn"
                                : "Collapse"
                              : lng === "vi"
                                ? "Đọc thêm"
                                : "Read more"
                          }
                        >
                          {expanded ? (
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 14l5-5 5 5"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 10l5 5 5-5"
                              />
                            </svg>
                          )}
                        </button>
                      </>
                    )}
                  </div>
                );
              })()}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const ContentGridCard = memo(ContentGridCardComponent);
