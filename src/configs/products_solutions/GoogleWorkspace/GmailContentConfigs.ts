import { IContent } from "@/templates/Products/Sisense/components/ContentCardLong/interface";
import { ColumFeature } from "../../../templates/Products/Sisense/components/ColumFeatureCard";
import { IContentGridCard } from "../../../templates/Products/Sisense/components/ContentGridCard/interface";
import { IStatContent } from "./GoogleWorkspaceFeatures";
import { IGridCard } from "../../../templates/Products/Sisense/components/ContentGridCard/ContentGridCard";

const no1EmailUsedWorldwide: IContent = {
  id: "no1-email-used-worldwide",
  title: "#1 email used worldwide. Trusted by billions.",
  title_vn:
    "#1 email được sử dụng trên toàn thế giới. Được tin tưởng bởi hàng tỷ người.",
  desc: `AI-powered, secure, and easy to use email trusted by billions of people and businesses.
    <br/>
    <br/>
    <strong>Gemini in Gmail:</strong> 
    <br/>`,
  desc_vn: `Email được hỗ trợ bởi AI, an toàn và dễ sử dụng, được tin tưởng bởi hàng tỷ người dùng và doanh nghiệp.
    <br/>
    <br/>
    <strong>Gemini trong Gmail:</strong> 
    <br/>`,
  bullets: [
    // {
    //   title: "Your AI powered writing assistant",
    //   title_vn: "Trợ lý viết được hỗ trợ bởi AI của bạn",
    //   desc: `Get help drafting and replying with a personal writing partner always by your side.`,
    //   desc_vn: `Nhận trợ giúp soạn thảo và trả lời với một đối tác viết cá nhân luôn bên cạnh bạn.`,
    //   img: ["/assets/images/image108.png"],
    // },
    // {
    //   title: "Effortless search",
    //   title_vn: "Tìm kiếm dễ dàng",
    //   desc: "Instantly find answers to specific questions in your inbox or Google Drive with a quick prompt.",
    //   desc_vn:
    //     "Tìm ngay câu trả lời cho các câu hỏi cụ thể trong hộp thư đến hoặc Google Drive của bạn với một lời nhắc nhanh.",
    //   img: ["/assets/images/image254.png"],
    // },
    // {
    //   title: "Get caught up in a glance",
    //   title_vn: "Nắm bắt thông tin trong nháy mắt",
    //   desc: "Catch up on long email threads with concise summaries of the key points.",
    //   desc_vn:
    //     "Cập nhật các chuỗi email dài với bản tóm tắt ngắn gọn về các điểm chính.",
    //   img: ["/assets/images/image23.png"],
    // },
  ],
};

const no1EmailUsedWorldwide_2: ColumFeature[] = [
  {
    id: "your-ai-powered-writing-assistant",
    title: "Your AI powered writing assistant",
    title_vn: "Trợ lý viết được hỗ trợ bởi AI của bạn",
    desc: `Get help drafting and replying with a personal writing partner always by your side.`,
    desc_vn: `Nhận trợ giúp soạn thảo và trả lời với một đối tác viết cá nhân luôn bên cạnh bạn.`,
    img: "/assets/images/image254.png",
  },
  {
    id: "effortless-search",
    title: "Effortless search",
    title_vn: "Tìm kiếm dễ dàng",
    desc: "Instantly find answers to specific questions in your inbox or Google Drive with a quick prompt.",
    desc_vn:
      "Tìm ngay câu trả lời cho các câu hỏi cụ thể trong hộp thư đến hoặc Google Drive của bạn với một lời nhắc nhanh.",

    img: "/assets/images/image254.png",
  },
  {
    id: "get-caught-up-in-a-glance",
    title: "Get caught up in a glance",
    title_vn: "Nắm bắt thông tin trong nháy mắt",
    desc: "Catch up on long email threads with concise summaries of the key points.",
    desc_vn:
      "Cập nhật các chuỗi email dài với bản tóm tắt ngắn gọn về các điểm chính.",
    img: "/assets/images/image23.png",
  },
];

const GMAIL_FEATURES: ColumFeature[] = [
  {
    id: "smart-reply",
    title: "Smart Reply and Smart Compose",
    title_vn: "Trả lời thông minh và Soạn thảo thông minh",
    desc: "Used over 180 billion times a year, see how Gmail can suggest responses or fill in the blanks of your sentence to save you time.",
    desc_vn:
      "Được sử dụng hơn 180 tỷ lần mỗi năm, xem cách Gmail có thể đề xuất câu trả lời hoặc điền vào chỗ trống trong câu của bạn để tiết kiệm thời gian.",
    img: "/assets/images/image3001.png",
  },
  {
    id: "nudges",
    title: "Don't miss emails with Nudges",
    title_vn: "Không bỏ lỡ email với Nudges",
    desc: "Get peace of mind with automatic reminders to respond or follow up on emails.",
    desc_vn: "Yên tâm với các lời nhắc tự động để trả lời hoặc theo dõi email.",
    img: "/assets/images/image3002.png",
  },
  {
    id: "info-glance",
    title: "Important info at a glance",
    title_vn: "Thông tin quan trọng trong nháy mắt",
    desc: "Gmail helps surface trip details, reservations, purchases, and more so you can get all the important details.",
    desc_vn:
      "Gmail giúp hiển thị chi tiết chuyến đi, đặt chỗ, mua sắm và hơn thế nữa để bạn có thể nắm được tất cả các chi tiết quan trọng.",
    img: "/assets/images/image3003.png",
  },
];

const MORE_TOOLS_TO_HELP_YOU_GROW_YOUR_BUSINESS: IContent = {
  id: "more-tools-to-help-you-grow-your-business",
  title: "More tools to help you grow your business",
  title_vn: "Thêm công cụ để giúp doanh nghiệp của bạn phát triển",
  desc: "",
  desc_vn: ``,
  bullets: [
    {
      title: "Custom business email",
      title_vn: "Email doanh nghiệp tùy chỉnh",
      desc: "Build a polished look with professional email addresses at your domain, like priya@yourcompany or sales@yourcompany.",
      desc_vn:
        "Xây dựng hình ảnh chuyên nghiệp với địa chỉ email doanh nghiệp tại tên miền của bạn, như priya@yourcompany hoặc sales@yourcompany.",
      img: ["/assets/images/image61.png"],
    },
    {
      title: "Personalize your marketing emails with mail merge",
      title_vn: "Cá nhân hóa email tiếp thị của bạn với trộn thư",
      desc: "Save time while personalizing every email you send. Merge tags work with Google Contacts or from a linked spreadsheet.",
      desc_vn:
        "Tiết kiệm thời gian khi cá nhân hóa mỗi email bạn gửi. Thẻ trộn hoạt động với Google Contacts hoặc từ bảng tính được liên kết.",
      img: ["/assets/images/image38.png"],
    },
    {
      title: "Get more done with Gmail",
      title_vn: "Hoàn thành nhiều việc hơn với Gmail",
      desc: "Keep your customers informed about upcoming events, offers, and announcements while showcasing your brand's identity.",
      desc_vn:
        "Giữ cho khách hàng của bạn được cập nhật về các sự kiện sắp tới, ưu đãi và thông báo trong khi thể hiện bản sắc thương hiệu của bạn.",
      img: ["/assets/images/image230.png"],
    },
  ],
};

const MORE_TOOLS_TO_HELP_YOU_GROW_YOUR_BUSINESS_2: IContentGridCard[] = [
  {
    id: "custom-business-email",
    title: "Custom business email",
    title_vn: "Email doanh nghiệp tùy chỉnh",
    desc: "Build a polished look with professional email addresses at your domain, like priya@yourcompany or sales@yourcompany.",
    desc_vn:
      "Xây dựng hình ảnh chuyên nghiệp với địa chỉ email doanh nghiệp tại tên miền của bạn, như priya@yourcompany hoặc sales@yourcompany.",
    img: "/assets/images/image61.png",
  },
  {
    id: "personalize-your-marketing-emails-with-mail-merge",
    title: "Personalize your marketing emails with mail merge",
    title_vn: "Cá nhân hóa email tiếp thị của bạn với trộn thư",
    desc: "Save time while personalizing every email you send. Merge tags work with Google Contacts or from a linked spreadsheet.",
    desc_vn:
      "Tiết kiệm thời gian khi cá nhân hóa mỗi email bạn gửi. Thẻ trộn hoạt động với Google Contacts hoặc từ bảng tính được liên kết.",
    img: "/assets/images/image38.png",
  },
  {
    id: "Get more done with Gmail",
    title: "Get more done with Gmail",
    title_vn: "Hoàn thành nhiều việc hơn với Gmail",
    desc: "Keep your customers informed about upcoming events, offers, and announcements while showcasing your brand's identity.",
    desc_vn:
      "Giữ cho khách hàng của bạn được cập nhật về các sự kiện sắp tới, ưu đãi và thông báo trong khi thể hiện bản sắc thương hiệu của bạn.",
    img: "/assets/images/image230.png",
  },
];

const gmailStats: IStatContent = {
  title: "Stay safe with the most secure email for business",
  title_vn: "An toàn với email doanh nghiệp bảo mật nhất",
  desc: "With AI-powered threat defenses, enterprise-grade security and privacy controls, and Google's security-by-design cloud infrastructure, Gmail helps keep your data protected, confidential, and compliant.",
  desc_vn:
    "Với khả năng phòng thủ mối đe dọa được hỗ trợ bởi AI, kiểm soát bảo mật và quyền riêng tư cấp doanh nghiệp, và cơ sở hạ tầng đám mây bảo mật theo thiết kế của Google, Gmail giúp bảo vệ dữ liệu của bạn, bảo mật và tuân thủ.",
  stats: [
    {
      id: "spam",
      value: "99.9%",
      desc: "of spam, phishing attempts, and malware are automatically blocked in Gmail.",
      desc_vn:
        "thư rác, nỗ lực lừa đảo và phần mềm độc hại bị chặn tự động trong Gmail.",
    },
    {
      id: "malware",
      value: "2x",
      desc: "more malware on average is detected by Gmail than industry standard antivirus products alone.",
      desc_vn:
        "phần mềm độc hại trung bình được phát hiện bởi Gmail nhiều hơn so với các sản phẩm chống vi-rút tiêu chuẩn ngành.",
    },
    {
      id: "cve",
      value: "0",
      desc: "high or critical common vulnerabilities and exposures (CVEs) over the last 5 years.",
      desc_vn:
        "lỗ hổng và rủi ro bảo mật phổ biến (CVEs) cao hoặc nghiêm trọng trong 5 năm qua.",
    },
  ],
};

const gmailAdvancedFeatures: IContentGridCard[] = [
  {
    id: "all-your-communication-in-one-app",
    title: "All your communication in one app",
    title_vn: "Tất cả giao tiếp của bạn trong một ứng dụng",
    desc: "Start meetings in Google Meet, find times to meet in Google Calendar, add to-dos in Tasks, and start conversations in Google Chat without ever having to leave Gmail.",
    desc_vn:
      "Bắt đầu cuộc họp trong Google Meet, tìm thời gian họp trong Google Calendar, thêm việc cần làm trong Tasks và bắt đầu cuộc trò chuyện trong Google Chat mà không cần rời khỏi Gmail.",
    img: "/assets/images/image156.png",
  },
];

const secureCloudStorage: ColumFeature[] = [
  {
    id: "all-your-communication-in-one-app",
    title: "All your communication in one app",
    title_vn: "Tất cả giao tiếp của bạn trong một ứng dụng",
    desc: "Start meetings in Google Meet, find times to meet in Google Calendar, add to-dos in Tasks, and start conversations in Google Chat without ever having to leave Gmail.",
    desc_vn:
      "Bắt đầu cuộc họp trong Google Meet, tìm thời gian họp trong Google Calendar, thêm việc cần làm trong Tasks và bắt đầu cuộc trò chuyện trong Google Chat mà không cần rời khỏi Gmail.",
    img: "/assets/images/image156.png",
  },
  {
    id: "cloud-native",
    title: "Cloud-native",
    title_vn: "Gốc đám mây",
    desc: "A cloud-first, browser-based approach that is constantly updated without the need to install anything.",
    desc_vn:
      "Phương pháp dựa trên trình duyệt, ưu tiên đám mây được cập nhật liên tục mà không cần cài đặt bất cứ thứ gì.",
    img: "/assets/images/image3004.png",
  },
  {
    id: "zero-trust",
    title: "Zero Trust architecture",
    title_vn: "Kiến trúc Zero Trust",
    desc: "Robust security capabilities like Client-side encryption, Vault with Zero Trust approach safeguards your valuable data.",
    desc_vn:
      "Khả năng bảo mật mạnh mẽ như mã hóa phía máy khách, Vault với phương pháp Zero Trust bảo vệ dữ liệu quý giá của bạn.",
    img: "/assets/images/image3005.png",
  },
  {
    id: "ai-security",
    title: "AI-powered security",
    title_vn: "Bảo mật được hỗ trợ bởi AI",
    desc: "AI classification intelligently learns what you consider as sensitive content and automatically labels it in Google Drive.",
    desc_vn:
      "Phân loại AI học thông minh những gì bạn coi là nội dung nhạy cảm và tự động gắn nhãn trong Google Drive.",
    img: "/assets/images/image3006.png",
  },
];

const secureCloudStorageSection = {
  title: "Secure cloud storage you can count on",
  features: secureCloudStorage,
};

export const GMAIL_GRID_FEATURES: IContentGridCard[] = [
  {
    id: "smart-reply",
    title: "Smart Reply and Smart Compose",
    title_vn: "Trả lời thông minh và Soạn thảo thông minh",
    desc: "Used over 180 billion times a year, see how Gmail can suggest responses or fill in the blanks of your sentence to save you time.",
    desc_vn:
      "Được sử dụng hơn 180 tỷ lần mỗi năm, xem cách Gmail có thể đề xuất câu trả lời hoặc điền vào chỗ trống trong câu của bạn để tiết kiệm thời gian.",
    img: "/assets/images/image3001.png",
  },
  {
    id: "nudges",
    title: "Don't miss emails with Nudges",
    title_vn: "Không bỏ lỡ email với Nudges",
    desc: "Get peace of mind with automatic reminders to respond or follow up on emails.",
    desc_vn: "Yên tâm với các lời nhắc tự động để trả lời hoặc theo dõi email.",
    img: "/assets/images/image3002.png",
  },
  {
    id: "info-glance",
    title: "Important info at a glance",
    title_vn: "Thông tin quan trọng trong nháy mắt",
    desc: "Gmail helps surface trip details, reservations, purchases, and more so you can get all the important details.",
    desc_vn:
      "Gmail giúp hiển thị chi tiết chuyến đi, đặt chỗ, mua sắm và hơn thế nữa để bạn có thể nắm được tất cả các chi tiết quan trọng.",
    img: "/assets/images/image3003.png",
  },
];

const GMAIL_FEATURES_SECTION = {
  title: "Features",
  features: GMAIL_FEATURES,
};

export {
  no1EmailUsedWorldwide,
  GMAIL_FEATURES_SECTION,
  MORE_TOOLS_TO_HELP_YOU_GROW_YOUR_BUSINESS,
  secureCloudStorage,
  secureCloudStorageSection,
  gmailStats,
  gmailAdvancedFeatures,
  no1EmailUsedWorldwide_2,
  MORE_TOOLS_TO_HELP_YOU_GROW_YOUR_BUSINESS_2,
};
