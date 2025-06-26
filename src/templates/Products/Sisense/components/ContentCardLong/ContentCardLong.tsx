"use client";

import { memo, useEffect, useRef, useState } from "react";
import { LazyImage } from "@/components/LazyImage/LazyImage";
import { BulletDescWithReadMore } from "./BulletDescWithReadMore";
import { IContent } from "./interface";
interface Props {
  content: IContent;
  lng?: string;
  maxDescHeight?: number;
}

const MAX_DESC_HEIGHT = 250; // Chiều cao tối đa cho mô tả trước khi hiện Read more

const ContentCardLongComponent = ({
  content,
  lng = "en",
  maxDescHeight = 180,
}: Props) => {
  const { id, title, title_vn, desc, desc_vn, img, bullets } = content;
  const [visibleBullets, setVisibleBullets] = useState<{
    [key: number]: boolean;
  }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleBullets((prev) => ({
              ...prev,
              [index]: true,
            }));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const elements = document.querySelectorAll(".bullet-item");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      elements.forEach((el) => observerRef.current?.unobserve(el));
      observerRef.current?.disconnect();
    };
  }, []);

  const getLocalizedContent = (en: string, vn?: string) => {
    return lng === "vi" && vn ? vn : en;
  };
  // console.log(content, lng);
  return (
    <div
      id={`toc-${id?.replace("toc-", "")}`}
      className="w-full bg-white rounded-2xl shadow-xl border border-blue-100 p-4 md:p-8"
    >
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-2 md:mb-4">
            {getLocalizedContent(title, title_vn)}
          </h3>
          <div
            className="text-base text-justify text-gray-700 -mb-2"
            dangerouslySetInnerHTML={{
              __html: getLocalizedContent(desc, desc_vn),
            }}
          />
        </div>
        {img && img.length > 0 && (
          <div className="w-full max-w-full md:w-[340px] xl:w-[450px] max-h-[180px] md:max-h-[200px] flex flex-col gap-2 md:gap-4 mx-auto md:mx-0">
            {img.map((imageUrl, index) => (
              <div
                key={index}
                className="w-full max-w-full md:w-[340px] xl:w-[450px] max-h-[180px] md:max-h-[200px] flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <LazyImage
                  src={Array.isArray(imageUrl) ? imageUrl[0] : imageUrl}
                  imgClassName={
                    Array.isArray(imageUrl) && imageUrl.length > 1
                      ? imageUrl[1]
                      : ""
                  }
                  alt={getLocalizedContent(title, title_vn)}
                  width={450}
                  height={200}
                  className="rounded-lg object-contain w-full h-full max-w-full"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {bullets && bullets.length > 0 && (
        <div className="mt-4 md:mt-10 space-y-6 md:space-y-10">
          {bullets.map((bullet: any, index: any) => {
            // Kiểm tra xem bullet hiện tại và bullet trước đó có hình ảnh không
            const hasCurrentImage = bullet.img && bullet.img.length > 0;
            const prevImg = index > 0 ? bullets[index - 1]?.img : undefined;
            const hasPrevImage = Array.isArray(prevImg) && prevImg.length > 0;

            // Chỉ áp dụng layout so le khi cả hai bullet liên tiếp có hình ảnh
            const rowClass =
              hasCurrentImage && hasPrevImage
                ? index % 2 === 1
                  ? "flex flex-col md:flex-row-reverse gap-4 md:gap-8"
                  : "flex flex-col md:flex-row gap-4 md:gap-8"
                : "flex flex-col md:flex-row gap-4 md:gap-8";

            const textAlign =
              hasCurrentImage && hasPrevImage
                ? index % 2 === 1
                  ? "text-justify"
                  : "text-justify"
                : "text-justify";

            const itemAlign =
              hasCurrentImage && hasPrevImage
                ? index % 2 === 1
                  ? "justify-start"
                  : "justify-end"
                : "justify-end";

            return (
              <div
                key={index}
                className={`${rowClass} bullet-item transition-all duration-700 ${
                  visibleBullets[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                data-index={index}
              >
                <div className="flex-1 md:w-1/2">
                  <h4 className="text-base md:text-xl font-semibold text-gray-900 mb-1 md:mb-3 text-justify">
                    {getLocalizedContent(bullet.title, bullet.title_vn)}
                  </h4>
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
                    }, [bullet, maxDescHeight]);
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
                            className="text-base text-gray-700 text-justify"
                            dangerouslySetInnerHTML={{
                              __html: getLocalizedContent(
                                bullet.desc,
                                bullet.desc_vn
                              ),
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
                              aria-label={
                                expanded
                                  ? lng === "vi"
                                    ? "Thu gọn"
                                    : "Collapse"
                                  : lng === "vi"
                                    ? "Đọc thêm"
                                    : "Read more"
                              }
                              style={{
                                bottom: "-24px",
                                right: "0px",
                                backgroundColor: "transparent",
                              }}
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
                                    d="M7 19l5-5 5 5"
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
                                    d="M7 17l5 5 5-5"
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
                {bullet.img && bullet.img.length > 0 && (
                  <div
                    className={`flex-1 md:w-1/2 flex justify-center md:${itemAlign}`}
                  >
                    {bullet.img.map((imageUrl: any, imgIndex: any) => (
                      <div
                        key={imgIndex}
                        className="w-[340px] max-w-full max-h-[150px] md:w-[450px] md:max-h-[200px] flex items-center justify-center overflow-hidden border border-blue-100 shadow-xl md:shadow-2xl bg-white rounded-lg md:rounded-xl transition-transform duration-300 hover:scale-105"
                      >
                        <LazyImage
                          src={Array.isArray(imageUrl) ? imageUrl[0] : imageUrl}
                          imgClassName={
                            Array.isArray(imageUrl) && imageUrl.length > 1
                              ? imageUrl[1]
                              : ""
                          }
                          alt={getLocalizedContent(
                            bullet.title,
                            bullet.title_vn
                          )}
                          width={
                            imgIndex >= 0
                              ? typeof window !== "undefined" &&
                                window.innerWidth >= 768
                                ? 450
                                : 450
                              : 450
                          }
                          height={
                            imgIndex >= 0
                              ? typeof window !== "undefined" &&
                                window.innerWidth >= 768
                                ? 200
                                : 200
                              : 200
                          }
                          className="rounded-lg object-contain w-full h-full max-w-full"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const ContentCardLong = memo(ContentCardLongComponent);
