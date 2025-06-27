"use client";
import { memo, useEffect, useRef, useState } from "react";
import { LazyImage } from "@/components/LazyImage/LazyImage";
import { ProductDescWithReadMore } from "./ProductDescWithReadMore";

const icon = (
  <span className="inline-block w-5 h-5 mr-2 align-middle text-purple-600">
    🔹
  </span>
);

interface Props {
  products: ITableCardContent[];
  lng: string;
  maxDescHeight?: number;
}

export interface ITableCardContent {
  product: string;
  desc: string;
  features: string[];
  img?: string[];
  video?: string[];
  product_vn?: string;
  desc_vn?: string;
  features_vn?: string[];
}

const TableCardContentComponent = ({
  products,
  lng,
  maxDescHeight = 250,
}: Props) => {
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
    const elements = document.querySelectorAll(".fade-in-table-card");
    elements.forEach((el) => observerRef.current?.observe(el));
    return () => {
      elements.forEach((el) => observerRef.current?.unobserve(el));
      observerRef.current?.disconnect();
    };
  }, [products.length]);

  return (
    <div className="flex flex-col gap-8 md:gap-12 px-4 md:px-0">
      {products.map((row, idx) => {
        // Ưu tiên video, nếu không có thì lấy ảnh đầu tiên
        const hasVideo = Array.isArray(row.video) && row.video.length > 0;
        const hasImg = Array.isArray(row.img) && row.img.length > 0;
        const hasMedia = hasVideo || hasImg;

        // Logic xen kẽ dựa vào có/không có media
        const prevRow = idx > 0 ? products[idx - 1] : null;
        const prevHasVideo =
          prevRow && Array.isArray(prevRow.video) && prevRow.video.length > 0;
        const prevHasImg =
          prevRow && Array.isArray(prevRow.img) && prevRow.img.length > 0;
        const prevHasMedia = prevHasVideo || prevHasImg;

        // Chỉ áp dụng layout xen kẽ khi cả hai row liên tiếp có media
        const rowClass =
          hasMedia && prevHasMedia
            ? idx % 2 === 1
              ? "flex flex-col md:flex-row-reverse gap-4 md:gap-8"
              : "flex flex-col md:flex-row gap-4 md:gap-8"
            : "flex flex-col md:flex-row gap-4 md:gap-8";

        const itemAlign =
          hasMedia && prevHasMedia
            ? idx % 2 === 1
              ? "justify-start"
              : "justify-end"
            : "justify-end";

        return (
          <div
            key={row.product}
            className={`${rowClass} fade-in-table-card transition-all duration-700 ${
              visible[idx]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            data-idx={idx}
          >
            {/* Left/Right: Title + Desc + Features */}
            <div className="flex-1 md:w-1/2 flex flex-col gap-2 justify-center">
              {/* Read more logic */}
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
                }, [row, maxDescHeight]);
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
                      <div className="text-lg md:text-2xl font-bold text-gray-900 mb-1">
                        {/* {row.product} */}
                        {lng === "en"
                          ? row.product
                          : row.product_vn || row.product}
                      </div>
                      <ProductDescWithReadMore
                        desc={lng === "en" ? row.desc : row.desc_vn || row.desc}
                        lng={lng}
                      />
                      {row.features && row.features.length > 0 && (
                        <ul className="list-disc ml-5 space-y-2">
                          {(lng === "en"
                            ? row.features
                            : row.features_vn || row.features
                          ).map((f, i) => (
                            <li key={i} className="flex items-start gap-2">
                              {icon}
                              <span
                                className="text-gray-800 text-base text-justify"
                                dangerouslySetInnerHTML={{ __html: f }}
                              />
                            </li>
                          ))}
                        </ul>
                      )}
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
                            bottom: "4px",
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
                              {/* <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 18l5-5 5 5"
                              /> */}
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
                              {/* <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 16l5 5 5-5"
                              /> */}
                            </svg>
                          )}
                        </button>
                      </>
                    )}
                  </div>
                );
              })()}
            </div>

            {hasMedia && (
              <div className="flex-1 md:w-1/2 flex flex-col gap-4">
                {/* Hiển thị tất cả video (YouTube link sẽ render thành iframe) */}
                {hasVideo && (
                  <div className="flex flex-col gap-3 w-full items-center">
                    {row.video!.map((v, vi) => (
                      <div
                        key={vi}
                        className="w-full max-w-[340px] md:max-w-[450px] h-[190px] md:h-[200px] rounded-lg md:rounded-xl overflow-hidden border border-blue-100 shadow-xl md:shadow-2xl bg-white"
                      >
                        <iframe
                          width="100%"
                          height="100%"
                          src={v}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                )}
                {/* Hiển thị tất cả ảnh lớn */}
                {hasImg && (
                  <div className="flex flex-wrap gap-3 w-full items-center justify-center">
                    {row.img!.map((img, ii) => (
                      <div
                        key={ii}
                        className="w-[340px] max-w-full max-h-[190px] md:w-[450px] md:max-h-[200px] flex items-center justify-center overflow-hidden border border-blue-100 shadow-xl md:shadow-2xl bg-white rounded-lg md:rounded-xl transition-transform duration-300 hover:scale-105"
                      >
                        <LazyImage
                          src={img}
                          alt={
                            lng === "en"
                              ? row.product
                              : row.product_vn || row.product
                          }
                          width={450}
                          height={200}
                          className="rounded-lg object-contain w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export const TableCardContent = memo(TableCardContentComponent);
