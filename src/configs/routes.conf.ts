import { BaseRecord } from "@/types/base.types";

export const NAV_LIST: BaseRecord<string>[] = [
  {
    name: "about",
    name_en: "About us",
    name_vi: "Về chúng tôi",
    path: "",
  },
  {
    name: "platform",
    name_en: "Platform",
    name_vi: "Nền tảng",
    path: "",
  },
  {
    name: "resources",
    name_en: "Resources",
    name_vi: "Tài liệu",
    path: "",
  },
  {
    name: "blog",
    name_en: "Blog",
    name_vi: "Tin tức",
    path: "/blog",
  },
];

export const ABOUT_LIST: Array<BaseRecord<string>> = [
  {
    name: "resolve",
    name_en: "About us",
    name_vi: "Về chúng tôi",
    path: "/about",
  },
  {
    name: "brochure",
    name_en: "Brochure",
    name_vi: "Brochure",
    path: "/pdf/resolve-brochure.pdf",
  },
  {
    name: "partners",
    name_en: "Partners",
    name_vi: "Đối tác",
    path: "/about/partners",
  },
  {
    name: "contact",
    name_en: "Contact",
    name_vi: "Liên hệ",
    path: "/contact",
  },
  // {
  //   name: "jobs",
  //   path: "/jobs",
  // },
];

export const SOLUTION_LIST: Array<BaseRecord<string>> = [
  {
    name: "Data Analytics",
    name_en: "Data Analytics",
    name_vi: "Phân tích dữ liệu",
    path: "/solutions/data-analytics",
  },
  {
    name: "Data Management",
    name_en: "Data Management",
    name_vi: "Quản lý dữ liệu",
    path: "/solutions/data-management",
  },
  {
    name: "Advisory",
    name_en: "Advisory",
    name_vi: "Tư vấn",
    path: "/solutions/advisory",
  },
  {
    name: "Digital Transformation",
    name_en: "Digital Transformation",
    name_vi: "Chuyển đổi số",
    path: "/solutions/digital-transformation",
  },
  {
    name: "Geospatial Analytics",
    name_en: "Geospatial Analytics",
    name_vi: "Phân tích dữ liệu không gian",
    path: "/solutions/geospatial-analytics",
  },
  {
    name: "Sustainability ESG Solutions",
    name_en: "Sustainability ESG Solutions",
    name_vi: "Giải pháp bền vững",
    path: "/solutions/sustainability-esg-solutions",
  },
];

export const PLATFORM_LIST: Array<BaseRecord<string>> = [
  {
    name: "Sisense",
    name_en: "Sisense",
    name_vi: "Sisense",
    path: "/products/sisense",
  },
  {
    name: "Looker",
    name_en: "Looker",
    name_vi: "Looker",
    path: "/products/looker",
  },
  {
    name: "Google Workspace",
    name_en: "Google Workspace",
    name_vi: "Google Workspace",
    path: "/products/google-workspace",
  },
  {
    name: "Google Cloud",
    name_en: "Google Cloud",
    name_vi: "Google Cloud",
    path: "/products/google-cloud",
  },
  {
    name: "Viettel Cloud",
    name_en: "Viettel Cloud",
    name_vi: "Viettel Cloud",
    path: "/products/viettel-cloud",
  },
];

export const PLATFORM_LIST_2: Array<BaseRecord<string>> = [
  {
    name: "1",
    path: "/platform/seamless-integration",
  },
  {
    name: "2",
    path: "/platform/customized-data-experience",
  },
  {
    name: "3",
    path: "/platform/infused-analytics-everywhere",
  },
];

export const RESOURCE_LIST: Array<BaseRecord<string>> = [
  // {
  //   name: "articles",
  //   path: "/articles",
  // },
  {
    name: "customer-stories",
    name_en: "Customer Stories",
    name_vi: "Câu chuyện khách hàng",
    path: "/customer-stories",
  },
  {
    name: "showcase",
    name_en: "Showcase",
    name_vi: "Showcase",
    path: "/demo/showcase",
  },
  {
    name: "video",
    name_en: "Video",
    name_vi: "Video giới thiệu",
    path: "/demo/video",
  },
];
