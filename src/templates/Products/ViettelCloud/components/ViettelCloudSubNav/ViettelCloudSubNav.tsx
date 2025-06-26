"use client";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { memo, useRef, useState } from "react";
import { VIETTEL_CLOUD_FEATURES } from "@/configs";

const ViettelCloudSubNavComponent = ({ active }: { active?: string }) => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  // Drag to scroll logic
  const onMouseDown = (e: React.MouseEvent) => {
    isDown = true;
    startX = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft = scrollRef.current?.scrollLeft || 0;
    document.body.style.userSelect = "none";
  };
  const onMouseLeave = () => {
    isDown = false;
    document.body.style.userSelect = "";
  };
  const onMouseUp = () => {
    isDown = false;
    document.body.style.userSelect = "";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Infinity loop: khi scroll đến cuối, nhảy về đầu
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    if (scrollLeft < 10) {
      scrollRef.current.scrollLeft = scrollWidth - clientWidth - 10;
    } else if (scrollLeft > scrollWidth - clientWidth - 10) {
      scrollRef.current.scrollLeft = 11;
    }
  };
  const pathname = usePathname();
  const handleClick = (slug: string) => {
    console.log(slug, active);
    if (active === slug) {
      router.replace(`${pathname}`);
    } else {
      router.replace(`${pathname}?feature=${slug}`);
    }
  };

  return (
    <nav className="w-full flex justify-center my-6 z-40 sticky transition-all duration-300 top-[100px]">
      <div
        ref={scrollRef}
        className="flex flex-row gap-2 bg-white rounded-full shadow px-2 py-2 border border-gray-200 overflow-x-auto scrollbar-hide max-w-full md:max-w-screen-xl w-full md:w-auto select-none"
        style={{ WebkitOverflowScrolling: "touch" }}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onScroll={handleScroll}
      >
        {VIETTEL_CLOUD_FEATURES.map((f) => {
          const isActive = active === f.slug;
          const isHover = hovered === f.slug;
          const showText = isActive || isHover;
          return (
            <button
              key={f.slug}
              className={clsx(
                "group flex items-center justify-center transition-all duration-200 cursor-pointer relative flex-shrink-0 text-nowrap",
                showText
                  ? "bg-white border-2 border-blue-600 text-purple-700 shadow-lg scale-105 px-6 py-2 md:px-8 md:py-2 rounded-full z-10"
                  : "bg-white border-2 border-transparent text-gray-700 hover:border-blue-300 px-2 py-2 md:px-3 md:py-2 rounded-full"
              )}
              onClick={() => handleClick(f.slug)}
              style={{
                minWidth: showText ? 120 : 48,
                minHeight: 44,
                fontWeight: 600,
                fontSize: 16,
                borderRadius: 9999,
              }}
              onMouseEnter={() => setHovered(f.slug)}
              onMouseLeave={() => setHovered(null)}
              tabIndex={0}
            >
              <img
                src={f.icon}
                alt={f.name}
                className={clsx(
                  showText
                    ? "w-7 h-7 md:w-8 md:h-8 mr-2"
                    : "w-7 h-7 md:w-8 md:h-8",
                  showText ? "" : "mx-auto"
                )}
                style={{ filter: showText ? undefined : undefined }}
              />
              {showText && (
                <span className="font-semibold text-base transition-all duration-200 text-nowrap">
                  {f.name}
                </span>
              )}
            </button>
          );
        })}
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </nav>
  );
};

export const ViettelCloudSubNav = memo(ViettelCloudSubNavComponent);
