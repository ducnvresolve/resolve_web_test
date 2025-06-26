"use client";

import Link from "next/link";
import { useState, memo } from "react";
import { DATA_SOLUTIONS_MENU } from "@/configs/dataSolutionsMenu.conf";
import { Button } from "@/components/Button";
import type { BaseProps } from "@/types/base.types";
import clsx from "clsx";
import { useRouter } from "next/navigation";

// Add types for product and solution items
interface ProductItem {
  name: string;
  name_vn?: string;
  description: string;
  description_vn?: string;
  image: string;
}
interface SolutionItem {
  name: string;
  name_vn?: string;
  description: string;
  description_vn?: string;
  image: string;
  slug: string;
}

interface PlatformNavSectionProps extends BaseProps {
  onCloseNav?: () => void;
}

export default function PlatformNavSection({
  params: { lng, t },
  onCloseNav,
}: PlatformNavSectionProps) {
  const productList: ProductItem[] = DATA_SOLUTIONS_MENU.products.flatMap(
    (g) => g.items
  );
  const solutionList: SolutionItem[] = DATA_SOLUTIONS_MENU.solutions;
  const sisenseItem = productList.find((item) => item.name === "Sisense");
  const [mainTab, setMainTab] = useState<"product" | "solution" | null>(
    "product"
  );
  const [hoveredItem, setHoveredItem] = useState<any>(sisenseItem);
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState<{
    product: boolean;
    solution: boolean;
  }>({ product: false, solution: false });

  return (
    <>
      {/* Desktop/tablet UI */}
      <div className="hidden lg:block">
        <div className="w-full flex justify-center">
          <div className="w-[95vw] max-w-[1700px] flex flex-row h-[380px] md:h-[440px] bg-white rounded-2xl shadow-xl border border-purple-200 overflow-hidden">
            {/* Cột 1: Chọn Product/Solution */}
            <div
              style={{ flexBasis: "20%" }}
              className="flex flex-col gap-2 p-3 px-4 bg-gray-50 border-r border-purple-200 justify-center text-center"
            >
              <div
                className={clsx(
                  "cursor-pointer p-3 rounded-lg font-bold text-purple-700 border-2 transition-all duration-150 mb-2",
                  mainTab === "product"
                    ? "bg-white border-purple-500 shadow-md scale-105"
                    : "border-transparent hover:bg-purple-100"
                )}
                onMouseEnter={() => {
                  setMainTab("product");
                  setHoveredItem(sisenseItem);
                }}
              >
                {lng === "vi" ? "Sản phẩm" : "Products"}
              </div>
              <div
                className={clsx(
                  "cursor-pointer p-3 rounded-lg font-bold text-purple-700 border-2 transition-all duration-150",
                  mainTab === "solution"
                    ? "bg-white border-purple-500 shadow-md scale-105"
                    : "border-transparent hover:bg-purple-100"
                )}
                onMouseEnter={() => {
                  setMainTab("solution");
                  setHoveredItem(null);
                }}
              >
                {lng === "vi" ? "Giải pháp" : "Solutions"}
              </div>
            </div>
            {/* Cột 2: Danh sách item theo tab */}
            <div
              style={{ flexBasis: "20%" }}
              className="flex flex-col gap-1 p-3 px-4 bg-white border-r border-purple-100 justify-center  text-center"
            >
              {mainTab === "product" && (
                <ul className="w-full flex flex-col">
                  {productList.map((item) => {
                    const slug = encodeURIComponent(
                      item.name.toLowerCase().replace(/\s+/g, "-")
                    );
                    return (
                      <li
                        key={item.name}
                        className={clsx(
                          "cursor-pointer p-3 rounded-md border-2 transition-all duration-150 mb-1",
                          hoveredItem?.name === item.name
                            ? "bg-purple-50 border-purple-400 text-purple-700 shadow"
                            : "border-transparent hover:bg-purple-50 hover:border-purple-200"
                        )}
                        onMouseEnter={() => setHoveredItem(item)}
                        tabIndex={0}
                      >
                        <Link
                          href={`/${lng}/products/${slug}`}
                          className="text-sm lg:text-base font-medium block w-full text-center"
                          onClick={onCloseNav}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
              {mainTab === "solution" && (
                <ul className="w-full flex flex-col">
                  {solutionList.map((item) => {
                    const slug = item.slug;
                    return (
                      <li
                        key={item.name}
                        className={clsx(
                          "cursor-pointer p-3 rounded-md border-2 transition-all duration-150 mb-1",
                          hoveredItem?.name === item.name
                            ? "bg-purple-50 border-purple-400 text-purple-700 shadow"
                            : "border-transparent hover:bg-purple-50 hover:border-purple-200"
                        )}
                        onMouseEnter={() => setHoveredItem(item)}
                        tabIndex={0}
                      >
                        <Link
                          href={`/${lng}/solutions/${slug}`}
                          className="text-sm lg:text-base font-medium block w-full text-center"
                          onClick={onCloseNav}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            {/* Cột 3: Mô tả chi tiết */}
            <div
              style={{ flexBasis: "30%", minHeight: "380px" }}
              className="flex flex-col bg-gray-50 border-r border-purple-100 p-6 transition-all duration-200 overflow-y-auto text-justify justify-center"
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: hoveredItem
                    ? lng === "vi" && hoveredItem.description_vn
                      ? hoveredItem.description_vn
                      : hoveredItem.description
                    : "",
                }}
              />
            </div>
            {/* Cột 4: Ảnh minh hoạ */}
            <div
              style={{ flexBasis: "30%", minHeight: "380px" }}
              className="flex items-center justify-center p-4 bg-white"
            >
              {hoveredItem?.image ? (
                <img
                  src={hoveredItem.image || "/images/placeholder.png"}
                  alt="illustration"
                  className="rounded-xl object-contain shadow-lg border border-purple-100"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              ) : (
                <div className="w-[280px] h-[180px] bg-gray-100 rounded-xl border border-purple-50" />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile UI */}
      <div className="block lg:hidden">
        <div className="w-full flex flex-col items-center">
          <div className="w-full bg-white border border-purple-100 rounded-xl shadow-lg p-0 mb-4">
            <button
              className={clsx(
                "w-full flex items-center justify-between px-5 py-3 font-bold text-purple-700 text-base rounded-t-xl focus:outline-none",
                mobileOpen.product ? "bg-white" : "bg-purple-50"
              )}
              onClick={() =>
                setMobileOpen((prev) => ({ ...prev, product: !prev.product }))
              }
              style={{ minHeight: 48 }}
            >
              <span>{lng === "vi" ? "Sản phẩm" : "Products"}</span>
              <span className="text-purple-600 text-lg ml-2">
                {mobileOpen.product ? "▲" : "▼"}
              </span>
            </button>
            {mobileOpen.product && (
              <ul className="w-full px-5 pb-3 pt-1">
                {productList.map((item) => {
                  const slug = encodeURIComponent(
                    item.name.toLowerCase().replace(/\s+/g, "-")
                  );
                  return (
                    <li key={item.name} className="mb-1 w-full">
                      <Link
                        href={`/${lng}/products/${slug}`}
                        className="block w-full p-2 rounded text-gray-800 hover:bg-purple-100 text-justify"
                        onClick={onCloseNav}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
            <button
              className={clsx(
                "w-full flex items-center justify-between px-5 py-3 font-bold text-purple-700 text-base rounded-b-xl focus:outline-none border-t border-purple-100",
                mobileOpen.solution ? "bg-white" : "bg-purple-50"
              )}
              onClick={() =>
                setMobileOpen((prev) => ({ ...prev, solution: !prev.solution }))
              }
              style={{ minHeight: 48 }}
            >
              <span>{lng === "vi" ? "Giải pháp" : "Solutions"}</span>
              <span className="text-purple-600 text-lg ml-2">
                {mobileOpen.solution ? "▲" : "▼"}
              </span>
            </button>
            {mobileOpen.solution && (
              <ul className="w-full px-5 pb-3 pt-1">
                {solutionList.map((item) => {
                  const slug = encodeURIComponent(
                    item.name.toLowerCase().replace(/\s+/g, "-")
                  );
                  return (
                    <li key={item.name} className="mb-1 w-full">
                      <Link
                        href={`/${lng}/solutions/${slug}`}
                        className="block w-full p-2 rounded text-gray-800 hover:bg-purple-100 text-justify"
                        onClick={onCloseNav}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
