"use client";

import React from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import {
  BarChart3,
  Database,
  Users,
  Smartphone,
  MapPin,
  Leaf,
  FilePieChart,
  SquareDashedBottomCode,
} from "lucide-react";
import { SOLUTION_LIST } from "@/configs/routes.conf";
import { useMediaQuery, VIEWPOINT } from "@/hooks/useMediaQuery";
import { Button } from "@/components/Button";
import type { BaseProps } from "@/types/base.types";

// Import cấu hình solutions
const SOLUTIONS_CONFIG = [
  {
    name: "Data Analytics",
    name_vn: "Phân tích dữ liệu",
    description:
      "Unlock the power of your data with advanced analytics tools that transform raw information into actionable insights. Whether you're looking to visualize trends, make data-driven decisions, or build predictive models, our tools offer robust solutions tailored to your needs.",
    description_vn:
      "Khai phá sức mạnh dữ liệu với các công cụ phân tích hiện đại, chuyển đổi dữ liệu thô thành thông tin giá trị. Dễ dàng trực quan hóa xu hướng, ra quyết định dựa trên dữ liệu hoặc xây dựng mô hình dự báo phù hợp với nhu cầu doanh nghiệp.",
    slug: "data-analytics",
  },
  {
    name: "Data Management",
    name_vn: "Quản lý dữ liệu",
    description:
      "Effortlessly combine data sources, no specialized skills or complex tools required. Data modeling that scales with your app and your team. Easily connect data from cloud, on-prem systems, and third-party apps to create a unified source of truth for deeper, more reliable insights.",
    description_vn:
      "Kết hợp dữ liệu từ nhiều nguồn dễ dàng, không cần kỹ năng chuyên sâu hay công cụ phức tạp. Mô hình hóa dữ liệu linh hoạt, kết nối dữ liệu từ cloud, hệ thống nội bộ và ứng dụng bên thứ ba để tạo nguồn dữ liệu thống nhất, phục vụ phân tích chuyên sâu.",
    slug: "data-management",
  },
  {
    name: "Advisory",
    name_vn: "Tư vấn",
    description:
      "Our experts provide guidance and best practices to help you maximize the value of your data and analytics investments, ensuring your organization is set up for long-term success.",
    description_vn:
      "Các chuyên gia của chúng tôi cung cấp hướng dẫn và thực tiễn tốt nhất để giúp bạn tối đa hóa giá trị đầu tư vào dữ liệu và phân tích, đảm bảo tổ chức của bạn sẵn sàng cho thành công lâu dài.",
    slug: "advisory",
  },
  {
    name: "Digital Transformation",
    slug: "digital-transformation",
    name_vn: "Chuyển đổi số",
    description: `Drive innovation and efficiency in your organization by leveraging digital technologies to transform business processes, culture, and customer experiences.`,
    description_vn: `Thúc đẩy đổi mới và hiệu quả trong tổ chức của bạn bằng cách tận dụng công nghệ số để chuyển đổi quy trình kinh doanh, văn hóa và trải nghiệm khách hàng.`,
    image: "/assets/images/image1203.webp",
  },
  {
    name: "Geospatial Analytics (Geo Analytics)",
    slug: "geospatial-analytics",
    name_vn: "Phân tích không gian địa lý",
    description: `Gain location-based insights to make smarter decisions, optimize operations, and uncover new opportunities using advanced geospatial analytics.`,
    description_vn: `Khai thác thông tin dựa trên vị trí để ra quyết định thông minh hơn, tối ưu hóa hoạt động và khám phá cơ hội mới với các công cụ phân tích không gian địa lý tiên tiến.`,
    image: "/assets/images/image1204.jpeg",
  },
  {
    name: "Sustainability & ESG Solutions",
    slug: "sustainability-esg-solutions",
    name_vn: "Giải pháp phát triển bền vững & ESG",
    description: `Implement and track sustainability initiatives and ESG (Environmental, Social, Governance) metrics to meet regulatory requirements and achieve your organization's sustainability goals.`,
    description_vn: `Triển khai và theo dõi các sáng kiến phát triển bền vững cùng các chỉ số ESG (Môi trường, Xã hội, Quản trị) để đáp ứng yêu cầu pháp lý và đạt được mục tiêu phát triển bền vững của tổ chức bạn.`,
    image: "/assets/images/image1205.jpeg",
  },
];

export default function AboutUs({ params: { lng, t } }: BaseProps) {
  const isDesktop = useMediaQuery(VIEWPOINT.MD);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const icons = [
    <BarChart3
      width={isDesktop ? 44 : 32}
      height={isDesktop ? 44 : 32}
      className="text-purple-600"
    />,
    <Database
      width={isDesktop ? 44 : 32}
      height={isDesktop ? 44 : 32}
      className="text-purple-600"
    />,
    <Users
      width={isDesktop ? 44 : 32}
      height={isDesktop ? 44 : 32}
      className="text-purple-600"
    />,
    <Smartphone
      width={isDesktop ? 44 : 32}
      height={isDesktop ? 44 : 32}
      className="text-purple-600"
    />,
    <MapPin
      width={isDesktop ? 44 : 32}
      height={isDesktop ? 44 : 32}
      className="text-purple-600"
    />,
    <Leaf
      width={isDesktop ? 44 : 32}
      height={isDesktop ? 44 : 32}
      className="text-purple-600"
    />,
  ];

  return (
    <section className="w-full bg-white flex flex-col items-center">
      <div
        ref={ref}
        className={`
          w-full max-w-screen-2xl flex flex-col items-center gap-6 md:gap-12 px-6 py-12
          ${inView ? "animate-slideup-long" : "opacity-0"}
        `}
      >
        <div
          id="about"
          className="w-full max-w-screen-lg flex flex-col items-center gap-6 md:gap-12"
        >
          <img
            src={"/images/logo.svg"}
            className={"w-[100px] h-[100px] select-none"}
            loading={"lazy"}
            alt={"resolve-logo"}
          />
          <div className="w-full flex flex-col items-center gap-6">
            <h2 className="font-bold text-xl md:text-[32px] text-purple-700 text-center">
              {t["about.title"]}
            </h2>
            <p className="text-center md:text-lg leading-7 md:leading-8">
              {t["about.description"]}
            </p>
            <Button variant={"outline"} size={"lg"} asChild>
              <Link href={`${lng}/about`} className="font-semibold w-fit">
                {t["base.learn-more"]}
              </Link>
            </Button>
          </div>
        </div>
        <div
          id="our-partners"
          className="w-full flex flex-col items-start justify-center gap-6 md:gap-12 mt-3"
        >
          <p className="w-full font-semibold text-center text-lg lg:text-xl select-none">
            {t["about.authorized-partners"]}
          </p>
          <div className="relative min-h-[90px] overflow-hidden">
            {/* <div className="flex flex-row items-center gap-6 animate-partners-infinite-carousel">
              <Link
                href="https://sisense.com"
                target={"_blank"}
                className="flex-shrink-0 relative select-none"
              >
                <img
                  src={"/images/sisense-logo.png"}
                  className="hover:scale-105 duration-100"
                  style={{ height: "60px", width: "auto" }}
                  alt="sisense-company"
                />
              </Link>
              <Link
                href="https://viettelcloud.vn"
                className="flex-shrink-0 hover:scale-105 duration-100 select-none"
                target={"_blank"}
              >
                <img
                  src="/images/viettel-cloud.svg"
                  style={{ height: "45px", width: "auto" }}
                  alt="viettel-cloud"
                />
              </Link>
              <Link
                href="https://dnbvietnam.com"
                className="flex-shrink-0 hover:scale-105 duration-100 select-none"
                target={"_blank"}
              >
                <img
                  src="/images/dnbvietnam.jpg"
                  style={{ height: "60px", width: "auto" }}
                  alt="dnb-vietnam"
                />
              </Link>
              <Link
                href="https://www.vcci.com.vn"
                className="flex-shrink-0 hover:scale-105 duration-100 select-none"
                target={"_blank"}
              >
                <img
                  src="/images/vcci.jpg"
                  style={{ height: "60px", width: "auto" }}
                  alt="vcci"
                />
              </Link>
              <Link
                href="https://www.vinasa.org.vn"
                className="flex-shrink-0 hover:scale-105 duration-100 select-none"
                target={"_blank"}
              >
                <img
                  src="/images/vinasa.jpg"
                  style={{ height: "60px", width: "auto" }}
                  alt="vinasa"
                />
              </Link>
              <Link
                href="https://sisense.com"
                target={"_blank"}
                className="flex-shrink-0 relative select-none"
              >
                <img
                  src={"/images/sisense-logo.png"}
                  className="hover:scale-105 duration-100"
                  style={{ height: "60px", width: "auto" }}
                  alt="sisense-company"
                />
              </Link>
              <Link
                href="https://viettelcloud.vn"
                className="flex-shrink-0 hover:scale-105 duration-100 select-none"
                target={"_blank"}
              >
                <img
                  src="/images/viettel-cloud.svg"
                  style={{ height: "45px", width: "auto" }}
                  alt="viettel-cloud"
                />
              </Link>
              <Link
                href="https://dnbvietnam.com"
                className="flex-shrink-0 hover:scale-105 duration-100 select-none"
                target={"_blank"}
              >
                <img
                  src="/images/dnbvietnam.jpg"
                  style={{ height: "60px", width: "auto" }}
                  alt="dnb-vietnam"
                />
              </Link>
              <Link
                href="https://www.vcci.com.vn"
                className="flex-shrink-0 hover:scale-105 duration-100 select-none"
                target={"_blank"}
              >
                <img
                  src="/images/vcci.jpg"
                  style={{ height: "60px", width: "auto" }}
                  alt="vcci"
                />
              </Link>
              <Link
                href="https://www.vinasa.org.vn"
                className="flex-shrink-0 hover:scale-105 duration-100 select-none"
                target={"_blank"}
              >
                <img
                  src="/images/vinasa.jpg"
                  style={{ height: "60px", width: "auto" }}
                  alt="vinasa"
                />
              </Link>
            </div> */}
            <div className="flex flex-row items-center gap-12 animate-customer-infinite-carousel">
              <img
                src={"/images/customer-bank-vpbank_logo.svg"}
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "60px", width: "auto" }}
                alt="techcombank"
              />
              <img
                src="/images/customer-bank-techcombank_logo.svg"
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "45px", width: "auto" }}
                alt="vpbank"
              />
              <img
                src="/images/customer-bank-sacombank_logo.svg"
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "60px", width: "auto" }}
                alt="sacombank"
              />
              <img
                src="/images/customer-bank-commerzbank_logo.svg"
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "60px", width: "auto" }}
                alt="commerzbank"
              />
              <img
                src="/images/customer-bank-standardcharteredbank_logo.svg"
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "60px", width: "auto" }}
                alt="standard-chartered-bank"
              />
              <img
                src="/images/customer-bank-royalbankofscotland_logo.svg"
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "60px", width: "auto" }}
                alt="royal-bank-of-scotland"
              />
              <img
                src={"/images/customer-bank-techcombank_logo.svg"}
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "60px", width: "auto" }}
                alt="techcombank"
              />
              <img
                src="/images/customer-bank-vpbank_logo.svg"
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "45px", width: "auto" }}
                alt="vpbank"
              />
              <img
                src="/images/customer-bank-sacombank_logo.svg"
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "60px", width: "auto" }}
                alt="sacombank"
              />
              <img
                src="/images/customer-bank-commerzbank_logo.svg"
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "60px", width: "auto" }}
                alt="commerzbank"
              />
              <img
                src="/images/customer-bank-standardcharteredbank_logo.svg"
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "60px", width: "auto" }}
                alt="standard-chartered-bank"
              />
              <img
                src="/images/customer-bank-royalbankofscotland_logo.svg"
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "60px", width: "auto" }}
                alt="royal-bank-of-scotland"
              />
            </div>
          </div>
        </div>
        <div
          id="solutions"
          className="w-full flex flex-col items-start md:items-center gap-12 mt-12"
        >
          <h2 className="font-bold text-xl md:text-3xl text-purple-700">
            {t["solutions.title"]}
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {SOLUTIONS_CONFIG.map((solution, i: number) => {
              return (
                <div key={i} className="w-full flex flex-col gap-3">
                  {icons[i]}
                  <Button variant={"link"} className="w-fit p-0" asChild>
                    <p className="font-semibold md:text-lg hover:text-purple-600 after:bg-purple-600">
                      <Link href={`/${lng}/solutions/${solution.slug}`}>
                        {lng === "vi" ? solution.name_vn : solution.name}
                      </Link>
                    </p>
                  </Button>

                  <p
                    className="text-justify text-sm md:text-base"
                    style={{ lineHeight: isDesktop ? "32px" : "24px" }}
                  >
                    {lng === "vi"
                      ? solution.description_vn
                      : solution.description}
                  </p>
                </div>
              );
            })}
          </div>
          {/* <Button variant={"outline"} size={"lg"} asChild>
            <Link href={`${lng}/solutions`} className="font-semibold w-fit">
              {t["solutions.see-all-solutions"]}
            </Link>
          </Button> */}
        </div>
      </div>
    </section>
  );
}
