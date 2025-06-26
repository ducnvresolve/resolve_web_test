import { BaseRecord } from "@/types/base.types";

export const NAV_LIST: BaseRecord<string>[] = [
  {
    name: "about",
    path: "",
  },
  {
    name: "platform",
    path: "",
  },
  {
    name: "resources",
    path: "",
  },
  {
    name: "blog",
    path: "/blog",
  },
];
export const ABOUT_LIST: Array<BaseRecord<string>> = [
  {
    name: "resolve",
    path: "/about",
  },
  {
    name: "brochure",
    path: "/pdf/resolve-brochure.pdf",
  },
  {
    name: "partners",
    path: "/about/partners",
  },
  {
    name: "contact",
    path: "/contact",
  },
  // {
  //   name: "jobs",
  //   path: "/jobs",
  // },
];

export const SOLUTION_LIST: Array<BaseRecord<string>> = [
  {
    name: "1",
    path: "/solutions#data-driven-digital-transformation",
  },
  {
    name: "2",
    path: "/solutions#data-and-analytics",
  },
  {
    name: "3",
    path: "/solutions#embedded-analytics",
  },
];

export const PLATFORM_LIST: Array<BaseRecord<string>> = [
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
    path: "/customer-stories",
  },
  {
    name: "showcase",
    path: "/demo/showcase",
  },
  {
    name: "video",
    path: "/demo/video",
  },
];
