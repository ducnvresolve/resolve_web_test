export interface IFeature {
  slug: string;
  icon: string;
  name: string;
  desc: string;
  desc_vn: string;
}
export interface HighlightStat {
  id: string;
  value: string;
  desc: string;
  desc_vn?: string;
  bgClass?: string | undefined;
}
export interface IStatContent {
  title: string;
  title_vn?: string;
  desc: string;
  desc_vn?: string;
  stats: HighlightStat[];
}

const GOOGLE_WORKSPACE_FEATURES: IFeature[] = [
  {
    slug: "gmail",
    icon: "/images/google-workspace/gmail.svg",
    name: "Gmail",
    desc: "Gmail is available on your computer, phone, watch or tablet, so you can stay connected when it matters most. Count on Google's secure, resilient global infrastructure to keep the lights on all day and night.",
    desc_vn:
      "Gmail có sẵn trên máy tính, điện thoại, đồng hồ hoặc máy tính bảng của bạn, vì vậy bạn có thể duy trì kết nối khi cần thiết nhất. Hãy tin tưởng vào cơ sở hạ tầng toàn cầu an toàn, linh hoạt của Google để duy trì hoạt động suốt ngày đêm.",
  },
  {
    slug: "drive",
    icon: "/images/google-workspace/drive.svg",
    name: "Drive",
    desc: "Get the most out of Drive right from your computer. Automatically keep all your Drive files up to date. Available for Windows and MacOS. ",
    desc_vn:
      "Tận dụng tối đa Drive ngay từ máy tính của bạn. Tự động cập nhật tất cả tệp Drive của bạn. Có sẵn cho Windows và MacOS.",
  },
  {
    slug: "meet",
    icon: "/images/google-workspace/meet.svg",
    name: "Meet",
    desc: "Stay connected and collaborate with friends, family, and colleagues no matter where you are.",
    desc_vn:
      "Duy trì kết nối và cộng tác với bạn bè, gia đình và đồng nghiệp bất kể bạn ở đâu.",
  },
  {
    slug: "chat",
    icon: "/images/google-workspace/chat.svg",
    name: "Chat",
    desc: "Real-time or anytime – Chat helps Workspace users connect and collaborate to get things done.",
    desc_vn:
      "Thời gian thực hoặc bất cứ lúc nào – Chat giúp người dùng Workspace kết nối và cộng tác để hoàn thành công việc.",
  },
  {
    slug: "calendar",
    icon: "/images/google-workspace/calendar.svg",
    name: "Calendar",
    desc: "Spend less time planning and more time doing with a shareable calendar that works across Google Workspace.",
    desc_vn:
      "Dành ít thời gian lên kế hoạch và nhiều thời gian hơn để thực hiện với lịch có thể chia sẻ hoạt động trên toàn bộ Google Workspace.",
  },
  {
    slug: "docs",
    icon: "/images/google-workspace/docs.svg",
    name: "Docs",
    desc: `Online, collaborative documents
      AI-powered documents to help you and your team create and collaborate on content.
    `,
    desc_vn: `Tài liệu trực tuyến, cộng tác
      Tài liệu được hỗ trợ bởi AI để giúp bạn và nhóm của bạn tạo và cộng tác trên nội dung.
    `,
  },
  {
    slug: "sheets",
    icon: "/images/google-workspace/sheets.svg",
    name: "Sheets",
    desc: "AI-powered spreadsheets help you and your team manage, visualize and analyze data.",
    desc_vn:
      "Bảng tính được hỗ trợ bởi AI giúp bạn và nhóm của bạn quản lý, trực quan hóa và phân tích dữ liệu.",
  },
  {
    slug: "slides",
    icon: "/images/google-workspace/slides.svg",
    name: "Slides",
    desc: "Create and deliver impactful presentations in your browser, from anywhere - no installation required.",
    desc_vn:
      "Tạo và trình bày bài thuyết trình ấn tượng trong trình duyệt của bạn, từ bất kỳ đâu - không cần cài đặt.",
  },
  {
    slug: "forms",
    icon: "/images/google-workspace/forms.svg",
    name: "Forms",
    desc: "Create and collect online forms and surveys with AI-powered tools.",
    desc_vn:
      "Tạo và thu thập biểu mẫu trực tuyến và khảo sát với các công cụ được hỗ trợ bởi AI.",
  },
  {
    slug: "sites",
    icon: "/images/google-workspace/sites.svg",
    name: "Sites",
    desc: "Create sites for your team, project or event that look great on any device.",
    desc_vn:
      "Tạo trang web cho nhóm, dự án hoặc sự kiện của bạn trông tuyệt vời trên mọi thiết bị.",
  },
  {
    slug: "gemini",
    icon: "/images/google-workspace/gemini.svg",
    name: "Gemini",
    desc: "Google Workspace plans now include access to the Gemini app, NotebookLM, and Gemini in Gmail, Docs, Meet, and more.",
    desc_vn:
      "Các gói Google Workspace hiện bao gồm quyền truy cập vào ứng dụng Gemini, NotebookLM và Gemini trong Gmail, Docs, Meet và hơn thế nữa.",
  },
  {
    slug: "notebooklm",
    icon: "/images/google-workspace/notebooklm.svg",
    name: "NotebookLM",
    desc: "AI-powered research assistant that can help you get to critical insights faster and easier, all grounded in the information you provide.",
    desc_vn:
      "Trợ lý nghiên cứu được hỗ trợ bởi AI có thể giúp bạn đạt được những hiểu biết quan trọng nhanh hơn và dễ dàng hơn, tất cả đều dựa trên thông tin bạn cung cấp.",
  },
  {
    slug: "vids",
    icon: "/images/google-workspace/vids.svg",
    name: "Vids",
    desc: "Tell more engaging stories at work through easy-to-use, collaborative video creation with Gemini.",
    desc_vn:
      "Kể những câu chuyện hấp dẫn hơn tại nơi làm việc thông qua việc tạo video cộng tác dễ sử dụng với Gemini.",
  },
  {
    slug: "keep",
    icon: "/images/google-workspace/keep.svg",
    name: "Keep",
    desc: "Shopping lists, to-do's, or brainstorm ideas? Keep will help you stay organized so that you can focus on the moment knowing that you won't forget a thing.",
    desc_vn:
      "Danh sách mua sắm, việc cần làm, hoặc ý tưởng động não? Keep sẽ giúp bạn luôn có tổ chức để bạn có thể tập trung vào hiện tại mà biết rằng bạn sẽ không quên điều gì.",
  },
  {
    slug: "appsheet",
    icon: "/images/google-workspace/appsheet.svg",
    name: "AppSheet",
    desc: "Applications and automation workflows without coding",
    desc_vn: "Ứng dụng và quy trình làm việc tự động hóa mà không cần viết mã",
  },
  {
    slug: "admin",
    icon: "/images/google-workspace/admin.svg",
    name: "Admin",
    desc: "Easily add users, manage devices, and configure security and settings so your data stays safe. Administration shouldn't need a manual.",
    desc_vn:
      "Dễ dàng thêm người dùng, quản lý thiết bị và cấu hình bảo mật và cài đặt để dữ liệu của bạn an toàn. Quản trị không cần thiết phải là tay máy.",
  },
  {
    slug: "endpoint-management",
    icon: "/images/google-workspace/endpoint-management.svg",
    name: "Endpoint Management",
    desc: "Keep things simple—and moving. Endpoint management for Android, iOS, Windows, Chrome OS, MacOS, and Linux is easy to set up and use.",
    desc_vn:
      "Giữ thứ tự đơn giản—và di chuyển. Quản lý điểm cuối cho Android, iOS, Windows, Chrome OS, MacOS và Linux dễ dàng thiết lập và sử dụng.",
  },
  {
    slug: "vault",
    icon: "/images/google-workspace/vault.svg",
    name: "Vault",
    desc: "Keep track of what matters. Retain, search, and export your organization’s data from select apps with Vault for Google Workspace Business and Enterprise editions.",
    desc_vn:
      "Giữ theo dõi những điều quan trọng. Giữ lại, tìm kiếm và xuất dữ liệu của tổ chức của bạn từ các ứng dụng được lựa chọn với Vault cho Google Workspace Business và Enterprise.",
  },
  {
    slug: "voice",
    icon: "/images/google-workspace/voice.svg",
    name: "Voice",
    desc: "Stay connected and save time with an easy-to-use business phone solution that fits organizations of any size.",
    desc_vn:
      "Duy trì kết nối và tiết kiệm thời gian với giải pháp điện thoại kinh doanh dễ sử dụng phù hợp với tất cả các tổ chức.",
  },
  {
    slug: "appsscript",
    icon: "/images/google-workspace/appsscript.svg",
    name: "AppsScript",
    desc: "Apps Script is the only low-code platform that makes it quick and easy to build business solutions that integrate, automate, and extend Google Workspace. With Apps Script, business users can build custom solutions on top of Google Workspace —no professional development experience required. Apps Script is available to everyone with a Gmail account.",
    desc_vn:
      "Apps Script là nền tảng low-code duy nhất làm cho việc xây dựng giải pháp kinh doanh nhanh chóng và dễ dàng, tích hợp, tự động hóa và mở rộng Google Workspace. Với Apps Script, người dùng kinh doanh có thể xây dựng các giải pháp tùy chỉnh trên Google Workspace — không cần kinh nghiệm phát triển chuyên sâu. Apps Script có sẵn cho tất cả mọi người với tài khoản Gmail.",
  },
  {
    slug: "work-insights",
    icon: "/images/google-workspace/WorkInsights.svg",
    name: "WorkInsights",
    desc: "Understand how Google Workspace impacts your organization in real time. Surface insights on adoption, work patterns, and collaboration across different Google Workspace apps.",
    desc_vn:
      "Hiểu rõ cách Google Workspace ảnh hưởng đến tổ chức của bạn trong thời gian thực. Hiển thị các thông tin về sự chấp thuận, mẫu làm việc và cộng tác trên các ứng dụng Google Workspace khác nhau.",
  },
];

export { GOOGLE_WORKSPACE_FEATURES };
