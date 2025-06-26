"use client";
import { memo, useEffect, useState } from "react";

interface TocItem {
  id: string;
  title: string;
}

const getTocItems = (): TocItem[] => {
  // Lấy tất cả các element có id bắt đầu bằng 'toc-'
  const nodes = Array.from(
    document.querySelectorAll('[id^="toc-"]')
  ) as HTMLElement[];
  return nodes.map((el) => ({
    id: el.id,
    title:
      el.querySelector("h2, h3, h1, .toc-title")?.textContent?.trim() ||
      el.getAttribute("data-title") ||
      el.id
        .replace("toc-", "")
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
  }));
};

const TableOfContentsComponent = () => {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [active, setActive] = useState<string>("");
  console.log("TableOfContentsComponent: ");
  useEffect(() => {
    setToc(getTocItems());
    const onScroll = () => {
      const scrollY = window.scrollY + 100;
      let found = "";
      for (const item of getTocItems()) {
        const el = document.getElementById(item.id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            found = item.id;
            break;
          }
        }
      }
      setActive(found);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => {
    if (id === "toc-overview") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  if (!toc.length) return null;

  // Thêm mục Overview đầu tiên nếu có toc
  const tocWithOverview = [
    { id: "toc-overview", title: "Overview" },
    ...toc.filter((item) => item.id !== "toc-overview"),
  ];

  return (
    <nav className="fixed right-0 top-1/2 -translate-y-1/2 z-30 hidden lg:block pr-8">
      <ul className="border-l border-purple-200 pl-6 flex flex-col gap-1 bg-transparent">
        {tocWithOverview.map((item) => (
          <li key={item.id} className="relative">
            <button
              onClick={() => handleClick(item.id)}
              className={`
                text-justify w-full py-1 px-0 text-base font-normal transition-none bg-transparent
                ${active === item.id ? "font-bold text-orange-500" : "text-gray-700"}
                hover:text-purple-600
              `}
              style={{ background: "none", boxShadow: "none" }}
            >
              {active === item.id && (
                <span className="absolute -left-6 top-1/2 -translate-y-1/2 h-6 w-1 bg-orange-500 rounded" />
              )}
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const TableOfContents = memo(TableOfContentsComponent);
