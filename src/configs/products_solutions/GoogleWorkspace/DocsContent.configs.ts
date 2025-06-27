import { ColumFeature } from "../../../templates/Products/Sisense/components/ColumFeatureCard";
import { IContent } from "../../../templates/Products/Sisense/components/ContentCardLong/interface";

const Online_collaborative_documents: IContent = {
  id: "online-collaborative-documents",
  title: "Online, collaborative documents",
  title_vn: "Tài liệu trực tuyến, cộng tác",
  desc: `Online, collaborative documents AI-powered documents to help you and your team create and collaborate on content. `,
  desc_vn: `Tài liệu trực tuyến, cộng tác được hỗ trợ bởi AI để giúp bạn và nhóm của bạn tạo và cộng tác trên nội dung.`,
  bullets: [
    // {
    //   title: "Get more done with Gemini in Docs",
    //   title_vn: "Hoàn thành nhiều việc hơn với Gemini trong Docs",
    //   desc: "Using a few simple prompts, create professional, stylized, and structured documents with images, tables, and more. Get help refining your content, see the latest summary of your work, and ask questions to improve and finalize your document. Try Google Workspace with Gemini today.",
    //   desc_vn:
    //     "Sử dụng một vài lời nhắc đơn giản, tạo tài liệu chuyên nghiệp, được tạo kiểu và có cấu trúc với hình ảnh, bảng và hơn thế nữa. Nhận trợ giúp tinh chỉnh nội dung của bạn, xem bản tóm tắt mới nhất về công việc của bạn và đặt câu hỏi để cải thiện và hoàn thiện tài liệu của bạn. Thử Google Workspace với Gemini ngay hôm nay.",
    // },
    // {
    //   title: `Effortlessly create documents`,
    //   title_vn: "Tạo tài liệu dễ dàng",
    //   desc: "Never start a document from scratch - get started with templates and building blocks to get a professional look from the start.",
    //   desc_vn:
    //     "Không bao giờ bắt đầu một tài liệu từ đầu - bắt đầu với các mẫu và khối xây dựng để có giao diện chuyên nghiệp ngay từ đầu.",
    //   img: ["/assets/images/image270.png"],
    // },
    // {
    //   title: "Get a jumpstart on your document with smart canvas",
    //   title_vn: "Bắt đầu nhanh tài liệu của bạn với smart canvas",
    //   desc: "Instantly build formatted emails, calendar invites, review trackers, meeting notes, and more in Docs when you type '@.'",
    //   desc_vn:
    //     "Ngay lập tức tạo email được định dạng, lời mời lịch, trình theo dõi đánh giá, ghi chú cuộc họp và hơn thế nữa trong Docs khi bạn nhập '@.'",
    //   img: ["/assets/images/image200.png"],
    // },
    // {
    //   title: "Easily populate your document with rich details",
    //   title_vn: "Dễ dàng điền tài liệu của bạn với các chi tiết phong phú",
    //   desc: "Use smart chips to add names, files, calendar events, dropdown menus, and more when you type '@.'",
    //   desc_vn:
    //     "Sử dụng smart chips để thêm tên, tệp, sự kiện lịch, menu thả xuống và hơn thế nữa khi bạn nhập '@.'",
    //   img: ["/assets/images/image190.png"],
    // },
    // {
    //   title: "Remove page breaks and write without limits",
    //   title_vn: "Loại bỏ ngắt trang và viết không giới hạn",
    //   desc: "Choose pageless mode to create content - continuously write and scroll without interruption.",
    //   desc_vn:
    //     "Chọn chế độ không trang để tạo nội dung - liên tục viết và cuộn mà không bị gián đoạn.",
    // },
    // {
    //   title: "Stay organized with document tabs",
    //   title_vn: "Giữ tổ chức với các tab tài liệu",
    //   desc: "Create a tab for each part of a project, plan, or report and keep everything in one place - never lose track of your documents again.",
    //   desc_vn:
    //     "Tạo một tab cho mỗi phần của dự án, kế hoạch hoặc báo cáo và giữ mọi thứ tại một nơi - không bao giờ mất dấu tài liệu của bạn nữa.",
    //   img: ["/assets/images/image167.png"],
    // },
    // {
    //   title: "Collaborate on and refine your document, from anywhere",
    //   title_vn: "Cộng tác và tinh chỉnh tài liệu của bạn, từ bất kỳ đâu",
    //   desc: "Stay in sync with edits and comments from internal and external teams on your phone, tablet, or web browser.",
    //   desc_vn:
    //     "Luôn đồng bộ với các chỉnh sửa và nhận xét từ các nhóm nội bộ và bên ngoài trên điện thoại, máy tính bảng hoặc trình duyệt web của bạn.",
    // },
    // {
    //   title: "Control access to your documents",
    //   title_vn: "Kiểm soát quyền truy cập vào tài liệu của bạn",
    //   desc: "Easy-to-manage permissions gives you granular control over who can edit, comment, download, share, or view your documents.",
    //   desc_vn:
    //     "Quyền dễ quản lý cho phép bạn kiểm soát chi tiết ai có thể chỉnh sửa, nhận xét, tải xuống, chia sẻ hoặc xem tài liệu của bạn.",
    //   img: ["/assets/images/image26.png"],
    // },
    // {
    //   title: "Meet directly in your documents",
    //   title_vn: "Họp trực tiếp trong tài liệu của bạn",
    //   desc: "Collaborate in context by meeting in Google Docs, Sheets, or Slides.",
    //   desc_vn:
    //     "Cộng tác trong ngữ cảnh bằng cách họp trong Google Docs, Sheets hoặc Slides.",
    //   img: ["/assets/images/image203.png"],
    // },
    // {
    //   title:
    //     "Collaborate with your partners and make decisions, all in one place",
    //   title_vn:
    //     "Cộng tác với đối tác của bạn và đưa ra quyết định, tất cả tại một nơi",
    //   desc: "Use comments and emojis to give feedback to your teams and assign tasks to keep projects moving forward, without ever leaving your document.",
    //   desc_vn:
    //     "Sử dụng nhận xét và emoji để đưa ra phản hồi cho nhóm của bạn và giao nhiệm vụ để giữ cho dự án tiến triển, mà không cần rời khỏi tài liệu của bạn.",
    //   img: ["/assets/images/image41.png"],
    // },
    // {
    //   title: "Review changes with flexibility",
    //   title_vn: "Xem lại các thay đổi một cách linh hoạt",
    //   desc: "You and your stakeholders can reference previous versions of a document at any time and reinstate them.",
    //   desc_vn:
    //     "Bạn và các bên liên quan có thể tham khảo các phiên bản trước của tài liệu bất cứ lúc nào và khôi phục chúng.",
    // },
    // {
    //   title: "Get more done with Gemini in Docs",
    //   title_vn: "Hoàn thành nhiều việc hơn với Gemini trong Docs",
    //   desc: "Using a few simple prompts, create professional, stylized, and structured documents with images, tables, and more. Get help refining your content, see the latest summary of your work, and ask questions to improve and finalize your document. Try Google Workspace with Gemini today.",
    //   desc_vn:
    //     "Sử dụng một vài lời nhắc đơn giản, tạo tài liệu chuyên nghiệp, được tạo kiểu và có cấu trúc với hình ảnh, bảng và hơn thế nữa. Nhận trợ giúp tinh chỉnh nội dung của bạn, xem bản tóm tắt mới nhất về công việc của bạn và đặt câu hỏi để cải thiện và hoàn thiện tài liệu của bạn. Thử Google Workspace với Gemini ngay hôm nay.",
    // },
    // {
    //   title: "Stay safe",
    //   title_vn: "Luôn an toàn",
    //   desc: "Your data is encrypted by default, and an array of safety measures – like advanced client-side encryption, anti-abuse measures, and privacy controls – keep your data private.",
    //   desc_vn:
    //     "Dữ liệu của bạn được mã hóa theo mặc định, và một loạt các biện pháp an toàn – như mã hóa phía máy khách nâng cao, biện pháp chống lạm dụng và kiểm soát quyền riêng tư – giữ cho dữ liệu của bạn được bảo mật.",
    //   img: ["/assets/images/image72.png"],
    // },
  ],
};

const DOCS_FEATURES: ColumFeature[] = [
  {
    id: "get-more-done-with-gemini-in-docs",
    title: "Get more done with Gemini in Docs",
    title_vn: "Hoàn thành nhiều việc hơn với Gemini trong Docs",
    desc: "Using a few simple prompts, create professional, stylized, and structured documents with images, tables, and more. Get help refining your content, see the latest summary of your work, and ask questions to improve and finalize your document. Try Google Workspace with Gemini today.",
    desc_vn:
      "Sử dụng một vài lời nhắc đơn giản, tạo tài liệu chuyên nghiệp, được tạo kiểu và có cấu trúc với hình ảnh, bảng và hơn thế nữa. Nhận trợ giúp tinh chỉnh nội dung của bạn, xem bản tóm tắt mới nhất về công việc của bạn và đặt câu hỏi để cải thiện và hoàn thiện tài liệu của bạn. Thử Google Workspace với Gemini ngay hôm nay.",
    img: "https://cdn.gowinston.ai/wp-content/uploads/2024/03/Untitled-design-26-1024x576.jpg",
  },
  {
    id: "effortlessly-create-documents",
    title: `Effortlessly create documents`,
    title_vn: "Tạo tài liệu dễ dàng",
    desc: "Never start a document from scratch - get started with templates and building blocks to get a professional look from the start.",
    desc_vn:
      "Không bao giờ bắt đầu một tài liệu từ đầu - bắt đầu với các mẫu và khối xây dựng để có giao diện chuyên nghiệp ngay từ đầu.",
    img: "/assets/images/image270.png",
  },
  {
    id: "get-a-jumpstart-on-your-document-with-smart-canvas",
    title: "Get a jumpstart on your document with smart canvas",
    title_vn: "Bắt đầu nhanh tài liệu của bạn với smart canvas",
    desc: "Instantly build formatted emails, calendar invites, review trackers, meeting notes, and more in Docs when you type '@.'",
    desc_vn:
      "Ngay lập tức tạo email được định dạng, lời mời lịch, trình theo dõi đánh giá, ghi chú cuộc họp và hơn thế nữa trong Docs khi bạn nhập '@.'",
    img: "/assets/images/image200.png",
  },
  {
    id: "easily-populate-your-document-with-rich-details",
    title: "Easily populate your document with rich details",
    title_vn: "Dễ dàng điền tài liệu của bạn với các chi tiết phong phú",
    desc: "Use smart chips to add names, files, calendar events, dropdown menus, and more when you type '@.'",
    desc_vn:
      "Sử dụng smart chips để thêm tên, tệp, sự kiện lịch, menu thả xuống và hơn thế nữa khi bạn nhập '@.'",
    img: "/assets/images/image190.png",
  },
  {
    img: "https://media.geeksforgeeks.org/wp-content/uploads/20230825162039/removepagebreaks_pagelesstab.png",
    id: "remove-page-breaks-and-write-without-limits",
    title: "Remove page breaks and write without limits",
    title_vn: "Loại bỏ ngắt trang và viết không giới hạn",
    desc: "Choose pageless mode to create content - continuously write and scroll without interruption.",
    desc_vn:
      "Chọn chế độ không trang để tạo nội dung - liên tục viết và cuộn mà không bị gián đoạn.",
  },
  {
    id: "stay-organized-with-document-tabs",
    title: "Stay organized with document tabs",
    title_vn: "Giữ tổ chức với các tab tài liệu",
    desc: "Create a tab for each part of a project, plan, or report and keep everything in one place - never lose track of your documents again.",
    desc_vn:
      "Tạo một tab cho mỗi phần của dự án, kế hoạch hoặc báo cáo và giữ mọi thứ tại một nơi - không bao giờ mất dấu tài liệu của bạn nữa.",
    img: "/assets/images/image167.png",
  },
  {
    img: "/assets/images/image1208.webp",
    id: "collaborate-on-and-refine-your-document-from-anywhere",
    title: "Collaborate on and refine your document, from anywhere",
    title_vn: "Cộng tác và tinh chỉnh tài liệu của bạn, từ bất kỳ đâu",
    desc: "Stay in sync with edits and comments from internal and external teams on your phone, tablet, or web browser.",
    desc_vn:
      "Luôn đồng bộ với các chỉnh sửa và nhận xét từ các nhóm nội bộ và bên ngoài trên điện thoại, máy tính bảng hoặc trình duyệt web của bạn.",
  },
  {
    id: "control-access-to-your-documents",
    title: "Control access to your documents",
    title_vn: "Kiểm soát quyền truy cập vào tài liệu của bạn",
    desc: "Easy-to-manage permissions gives you granular control over who can edit, comment, download, share, or view your documents.",
    desc_vn:
      "Quyền dễ quản lý cho phép bạn kiểm soát chi tiết ai có thể chỉnh sửa, nhận xét, tải xuống, chia sẻ hoặc xem tài liệu của bạn.",
    img: "/assets/images/image26.png",
  },
  {
    id: "meet-directly-in-your-documents",
    title: "Meet directly in your documents",
    title_vn: "Họp trực tiếp trong tài liệu của bạn",
    desc: "Collaborate in context by meeting in Google Docs, Sheets, or Slides.",
    desc_vn:
      "Cộng tác trong ngữ cảnh bằng cách họp trong Google Docs, Sheets hoặc Slides.",
    img: "/assets/images/image203.png",
  },
  {
    id: "collaborate-with-your-partners-and-make-decisions-all-in-one-place",
    title:
      "Collaborate with your partners and make decisions, all in one place",
    title_vn:
      "Cộng tác với đối tác của bạn và đưa ra quyết định, tất cả tại một nơi",
    desc: "Use comments and emojis to give feedback to your teams and assign tasks to keep projects moving forward, without ever leaving your document.",
    desc_vn:
      "Sử dụng nhận xét và emoji để đưa ra phản hồi cho nhóm của bạn và giao nhiệm vụ để giữ cho dự án tiến triển, mà không cần rời khỏi tài liệu của bạn.",
    img: "/assets/images/image41.png",
  },
  {
    img: "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2022/02/Tracked-changes-in-Google-Docs..png?q=50&fit=crop&w=825&dpr=1.5",
    id: "review-changes-with-flexibility",
    title: "Review changes with flexibility",
    title_vn: "Xem lại các thay đổi một cách linh hoạt",
    desc: "You and your stakeholders can reference previous versions of a document at any time and reinstate them.",
    desc_vn:
      "Bạn và các bên liên quan có thể tham khảo các phiên bản trước của tài liệu bất cứ lúc nào và khôi phục chúng.",
  },
  {
    img: "/assets/images/image1209.jpg",
    id: "get-more-done-with-gemini-in-docs",
    title: "Get more done with Gemini in Docs",
    title_vn: "Hoàn thành nhiều việc hơn với Gemini trong Docs",
    desc: "Using a few simple prompts, create professional, stylized, and structured documents with images, tables, and more. Get help refining your content, see the latest summary of your work, and ask questions to improve and finalize your document. Try Google Workspace with Gemini today.",
    desc_vn:
      "Sử dụng một vài lời nhắc đơn giản, tạo tài liệu chuyên nghiệp, được tạo kiểu và có cấu trúc với hình ảnh, bảng và hơn thế nữa. Nhận trợ giúp tinh chỉnh nội dung của bạn, xem bản tóm tắt mới nhất về công việc của bạn và đặt câu hỏi để cải thiện và hoàn thiện tài liệu của bạn. Thử Google Workspace với Gemini ngay hôm nay.",
  },
  {
    id: "stay-safe",
    title: "Stay safe",
    title_vn: "Luôn an toàn",
    desc: "Your data is encrypted by default, and an array of safety measures – like advanced client-side encryption, anti-abuse measures, and privacy controls – keep your data private.",
    desc_vn:
      "Dữ liệu của bạn được mã hóa theo mặc định, và một loạt các biện pháp an toàn – như mã hóa phía máy khách nâng cao, biện pháp chống lạm dụng và kiểm soát quyền riêng tư – giữ cho dữ liệu của bạn được bảo mật.",
    img: "/assets/images/image72.png",
  },
  {
    id: "meeting-notes",
    title: "Capture meeting notes with ease and speed",
    title_vn: "Ghi chú cuộc họp dễ dàng và nhanh chóng",
    desc: "Draft polished, structured meeting notes with event details straight from a Google Calendar event using the meeting notes building block in Docs.",
    desc_vn:
      "Soạn thảo ghi chú cuộc họp được cấu trúc và hoàn thiện với chi tiết sự kiện trực tiếp từ sự kiện Google Calendar bằng cách sử dụng khối xây dựng ghi chú cuộc họp trong Docs.",
    img: "/assets/images/image3016.png",
  },
  {
    id: "e-signature",
    title: "Streamline your workflows with electronic signatures",
    title_vn: "Tối ưu hóa quy trình làm việc của bạn với chữ ký điện tử",
    desc: "Draft agreements, request signatures, and manage contract templates all in one place with eSignature in Docs.",
    desc_vn:
      "Soạn thảo thỏa thuận, yêu cầu chữ ký và quản lý mẫu hợp đồng tất cả tại một nơi với eSignature trong Docs.",
    img: "/assets/images/image3017.png",
  },
  {
    id: "custom-building-blocks",
    title: "Save time by easily adding content you reuse often",
    title_vn:
      "Tiết kiệm thời gian bằng cách dễ dàng thêm nội dung bạn thường xuyên tái sử dụng",
    desc: "Create a custom building block for pieces of text like a bio, signature, address, and more – simply type '@' to insert instead of endlessly copying and pasting the same content.",
    desc_vn:
      "Tạo một khối xây dựng tùy chỉnh cho các đoạn văn bản như tiểu sử, chữ ký, địa chỉ và hơn thế nữa – chỉ cần nhập '@' để chèn thay vì liên tục sao chép và dán cùng một nội dung.",
    img: "/assets/images/image3018.png",
  },
];

const DOCS_FEATURES_SECTION = {
  title: "Docs Features",
  title_vn: "Tính năng Docs",
  features: DOCS_FEATURES,
};

export { Online_collaborative_documents, DOCS_FEATURES_SECTION, DOCS_FEATURES };
