"use client";
import { usePathname, useRouter } from "next/navigation";
import { GOOGLE_WORKSPACE_FEATURES } from "../../../../../configs/products_solutions/GoogleWorkspace/GoogleWorkspaceFeatures";
import clsx from "clsx";
import { memo, useRef, useState, useEffect } from "react";

const MAX_VISIBLE_MOBILE = 5;
const MAX_VISIBLE_DESKTOP = 7;

const GoogleWorkspaceSubNavComponent = ({ active }: { active?: string }) => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
    if (active === slug) {
      router.replace(`${pathname}`);
    } else {
      router.replace(`${pathname}?feature=${slug}`);
    }
  };

  return (
    <>
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
          {GOOGLE_WORKSPACE_FEATURES.slice(
            0,
            isMobile ? MAX_VISIBLE_MOBILE : MAX_VISIBLE_DESKTOP
          ).map((f) => {
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
          {GOOGLE_WORKSPACE_FEATURES.length >
            (isMobile ? MAX_VISIBLE_MOBILE : MAX_VISIBLE_DESKTOP) && (
            <button
              className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 bg-white hover:bg-gray-100 hover:shadow transition group ml-1 translate-y-[4px]"
              onClick={() => setShowAll(true)}
              aria-label="Show more apps"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <circle
                  cx="5"
                  cy="12"
                  r="1.5"
                  fill="#555"
                  className="group-hover:fill-blue-600 transition"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="1.5"
                  fill="#555"
                  className="group-hover:fill-blue-600 transition"
                />
                <circle
                  cx="19"
                  cy="12"
                  r="1.5"
                  fill="#555"
                  className="group-hover:fill-blue-600 transition"
                />
              </svg>
            </button>
          )}
        </div>
        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </nav>
      {showAll && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl w-full relative animate-fade-in mt-[120px] mx-4 h-[70vh] md:h-auto overflow-y-auto scrollbar-hide">
            <button
              onClick={() => setShowAll(false)}
              className="sticky top-4 right-4 float-right text-2xl text-gray-500 hover:text-gray-800 z-10"
              aria-label="Close"
            >
              ×
            </button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 clear-both pt-4">
              {GOOGLE_WORKSPACE_FEATURES.map((f) => (
                <button
                  key={f.slug}
                  onClick={() => {
                    handleClick(f.slug);
                    setShowAll(false);
                  }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition text-left"
                >
                  <img src={f.icon} alt={f.name} className="w-8 h-8" />
                  <div>
                    <div className="font-semibold">{f.name}</div>
                    <div className="text-xs text-gray-500 line-clamp-2">
                      {f.desc}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const GoogleWorkspaceSubNav = memo(GoogleWorkspaceSubNavComponent);
