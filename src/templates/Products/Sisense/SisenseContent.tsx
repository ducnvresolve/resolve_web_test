"use client";

import dynamic from "next/dynamic";
import { ContentCardLong, ContentGridCard, DividerContent } from "./components";
import {
  advancedFeatures,
  AIFeaturesForModernAnalytics,
  composeSDK,
  connectYourData,
  dataExploration,
  embeddedAnalyticsPlatform,
  powerfulDataModeling,
  sisenseCloud,
  trustDataSecurity,
} from "@/configs";

interface Props {
  lng: string;
}

const TableOfContents = dynamic(
  () =>
    import("@/components/TableOfContents").then((mod) => mod.TableOfContents),
  {
    ssr: false,
  }
);

export const SisenseContent = ({ lng }: Props) => {
  return (
    <main className="flex flex-col items-center  min-h-screen py-10 px-2">
      {/* <TableOfContents /> */}
      <div className="max-w-6xl w-full flex flex-col gap-8 md:gap-12 relative">
        <div className="text-center mb-2">
          <h1 className="text-4xl font-extrabold text-purple-700 mb-2 drop-shadow">
            {lng === "en"
              ? "Sisense Analytics Platform"
              : "Nền tảng Phân tích Sisense"}
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto text-balance text-justify">
            {lng === "en"
              ? "Sisense is a leading analytics platform that simplifies complex data analysis allowing users to quickly build and deploy analytics with an intuitive, secure, and scalable platform, It allows users to create interactive dashboards and reports without needing extensive technical expertise. Sisense's unique In-Chip technology optimizes data processing, enabling faster analytics and real-time insights. With its user-friendly interface, businesses can easily integrate data from various sources, empowering teams to make informed decisions quickly. Sisense also offers robust API capabilities, allowing for seamless integration into existing workflows and applications."
              : "Sisense là nền tảng phân tích hàng đầu giúp đơn giản hóa phân tích dữ liệu phức tạp, cho phép người dùng nhanh chóng xây dựng và triển khai phân tích với nền tảng trực quan, an toàn và có khả năng mở rộng. Nó cho phép người dùng tạo bảng điều khiển và báo cáo tương tác mà không cần kiến thức kỹ thuật chuyên sâu. Công nghệ In-Chip độc đáo của Sisense tối ưu hóa xử lý dữ liệu, cho phép phân tích nhanh hơn và thông tin chi tiết theo thời gian thực. Với giao diện thân thiện với người dùng, doanh nghiệp có thể dễ dàng tích hợp dữ liệu từ nhiều nguồn khác nhau, giúp các nhóm đưa ra quyết định nhanh chóng. Sisense cũng cung cấp khả năng API mạnh mẽ, cho phép tích hợp liền mạch vào các quy trình làm việc và ứng dụng hiện có."}
          </p>
        </div>

        <ContentCardLong content={sisenseCloud} lng={lng} />

        <ContentCardLong content={composeSDK} lng={lng} />

        <ContentCardLong content={embeddedAnalyticsPlatform} lng={lng} />

        <ContentCardLong content={connectYourData} lng={lng} />

        <ContentCardLong content={powerfulDataModeling} lng={lng} />

        <ContentCardLong content={AIFeaturesForModernAnalytics} lng={lng} />

        <ContentCardLong content={dataExploration} lng={lng} />

        <ContentCardLong content={trustDataSecurity} lng={lng} />
      </div>
    </main>
  );
};
