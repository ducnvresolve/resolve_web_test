import { ColumFeature } from "@/templates/Products/Sisense/components";
import { IContent } from "@/templates/Products/Sisense/components/ContentCardLong/interface";

const GoogleWorkspaceAppsScriptContent: ColumFeature[] = [
  {
    id: "build-quickly-and-easily",
    title: "Build quickly and easily",
    title_vn: "Xây dựng nhanh chóng và dễ dàng",
    desc: "With Apps Script, business users can quickly create custom solutions to address the problems they experience every day—without relying on professional software development resources.",
    desc_vn:
      "Với Apps Script, người dùng doanh nghiệp có thể nhanh chóng tạo ra các giải pháp tùy chỉnh để giải quyết các vấn đề hàng ngày mà không cần phụ thuộc vào đội ngũ phát triển phần mềm chuyên nghiệp.",
    img: "/assets/images/image157.png",
  },
  {
    id: "scale-your-productivity",
    title: "Scale your productivity",
    title_vn: "Tăng cường hiệu suất của bạn",
    desc: "Apps Script empowers users to focus on what matters and get the most out of Google Workspace by automating time-consuming, tedious tasks, creating integrations that connect the applications they use every day and adding functionality or customizations where and when needed.",
    desc_vn:
      "Apps Script giúp người dùng tập trung vào những việc quan trọng và tận dụng tối đa Google Workspace bằng cách tự động hóa các tác vụ tốn thời gian, tạo tích hợp giữa các ứng dụng sử dụng hàng ngày và bổ sung chức năng hoặc tùy chỉnh khi cần thiết.",
    img: "/assets/images/image6.png",
  },
  {
    id: "build-quickly-and-easily",
    title: "Use popular web languages",
    title_vn: "Xây dựng nhanh chóng và dễ dàng",
    desc: "Apps Script lets you build with HTML, CSS and JavaScript—no need to learn a new proprietary framework.",
    desc_vn:
      "Apps Script cho phép bạn lập trình với HTML, CSS và JavaScript—không cần phải học một framework độc quyền mới.",
    img: "/assets/images/image237.png",
  },
];

export const APPS_SCRIPT_CONTENT: IContent = {
  id: "Example solutions",
  title: "Example solutions",
  title_vn: "Ví dụ về giải pháp",
  desc: "",
  desc_vn: ``,
  img: [],
  bullets: [
    {
      title: "Create a mail merge using Gmail and Sheets",
      title_vn: "Tạo một mail merge sử dụng Gmail và Sheets",
      desc: "Create and distribute visually rich mail merges with Gmail and Sheets",
      desc_vn: "Tạo và phân phối mail merge trực quan với Gmail và Sheets",
    },
    {
      title: "Sign up for sessions at an event",
      title_vn: "Đăng ký tham dự hội thảo",
      desc: "Enable event attendees to sign up for sessions at an event, then automatically create and email a personalized itinerary by integrating Sheets, Docs, Forms, and Gmail.",
      desc_vn:
        "Cho phép người tham dự đăng ký tham dự hội thảo, sau đó tự động tạo và email một hành trình cá nhân hóa bằng cách tích hợp Sheets, Docs, Forms và Gmail.",
    },
    {
      title: "Analyze sentiment of open-ended feedback",
      title_vn: "Phân tích cảm xúc của phản hồi mở",
      desc: "Analyze text data, such as open-ended feedback, at scale by performing entity and sentiment analysis, leveraging Cloud Natural Language directly in Sheets.",
      desc_vn:
        "Phân tích dữ liệu văn bản, chẳng hạn như phản hồi mở, theo quy mô bằng cách thực hiện phân tích thực thể và cảm xúc, sử dụng Cloud Natural Language trực tiếp trong Sheets.",
    },
  ],
};

export { GoogleWorkspaceAppsScriptContent };
