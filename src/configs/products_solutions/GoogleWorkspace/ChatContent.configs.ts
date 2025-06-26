import { ColumFeature } from "../../../templates/Products/Sisense/components/ColumFeatureCard";
import { IContent } from "../../../templates/Products/Sisense/components/ContentCardLong/interface";

const GEMINI_IN_CHAT: IContent = {
  id: "Messaging",
  title: "Messaging and team collaboration",
  title_vn: "Nhắn tin và cộng tác nhóm",
  desc: `
  Real-time or anytime – Chat helps Workspace users connect and collaborate to get things done.
  <br/>
  <strong>Gemini in Chat is your helpful teammate</strong>
  <br/>
  With Gemini in Chat, you have a partner who's always ready to provide answers, summarize conversations, find files in Drive, and brainstorm new creative ideas.
  `,
  desc_vn: `
  Thời gian thực hoặc bất cứ lúc nào – Chat giúp người dùng Workspace kết nối và cộng tác để hoàn thành công việc.
  <br/>
  <strong>Gemini trong Chat là đồng đội hữu ích của bạn</strong>
  <br/>
  Với Gemini trong Chat, bạn có một đối tác luôn sẵn sàng cung cấp câu trả lời, tóm tắt cuộc trò chuyện, tìm tệp trong Drive và động não các ý tưởng sáng tạo mới.
  `,
  bullets: [
    {
      title: "Made for modern messaging, powered by AI",
      title_vn: "Được tạo cho nhắn tin hiện đại, được hỗ trợ bởi AI",
      desc: "",
      desc_vn: ``,
      img: ["/assets/images/image45.png"],
    },
    {
      title: "Simple but powerful",
      title_vn: "Đơn giản nhưng mạnh mẽ",
      desc: "Designed to help you manage the flow of business and personal communication.",
      desc_vn:
        "Được thiết kế để giúp bạn quản lý luồng giao tiếp kinh doanh và cá nhân.",
      img: ["/assets/images/image175.png"],
    },
    {
      title: "Express yourself",
      title_vn: "Thể hiện bản thân",
      desc: "Let your personality shine through with custom emojis, reactions, inline GIFs, and rich text formatting.",
      desc_vn:
        "Để cá tính của bạn tỏa sáng với biểu tượng cảm xúc tùy chỉnh, phản ứng, GIF nội dòng và định dạng văn bản phong phú.",
      img: ["/assets/images/image280.png"],
    },
    {
      title: "Supercharged with AI",
      title_vn: "Tăng cường với AI",
      desc: "Stay connected with intelligent features like smart compose, autocorrect, and summarization.",
      desc_vn:
        "Luôn kết nối với các tính năng thông minh như soạn thảo thông minh, tự động sửa lỗi và tóm tắt.",
    },
  ],
};

const CHAT_FEATURES: ColumFeature[] = [
  {
    id: "work-better-together",
    title: "Work better, together",
    title_vn: "Làm việc tốt hơn, cùng nhau",
    desc: "Create a space in Chat to share team updates or collaborate on a project.",
    desc_vn:
      "Tạo một không gian trong Chat để chia sẻ cập nhật nhóm hoặc cộng tác trong một dự án.",
    img: "/assets/images/image3007.png",
  },
  {
    id: "right-away-or-all-day",
    title: "Right away or all-day",
    title_vn: "Ngay lập tức hoặc cả ngày",
    desc: "Huddle with teammates for real-time problem-solving or drop-in collaboration throughout the day.",
    desc_vn:
      "Tụ họp với đồng đội để giải quyết vấn đề thời gian thực hoặc cộng tác thảo luận trong suốt cả ngày.",
    img: "/assets/images/image3008.png",
  },
  {
    id: "connect-at-scale",
    title: "Connect at scale",
    title_vn: "Kết nối ở quy mô lớn",
    desc: "Keep everyone on the same page with announcement spaces supporting up to 500,000 members.",
    desc_vn:
      "Giữ mọi người trên cùng một trang với không gian thông báo hỗ trợ tới 500.000 thành viên.",
    img: "/assets/images/image3009.png",
  },
];

const CHAT_FEATURES_SECTION = {
  title: "Built for teamwork",
  title_vn: "Được xây dựng cho làm việc nhóm",
  features: CHAT_FEATURES,
};

export { GEMINI_IN_CHAT, CHAT_FEATURES_SECTION, CHAT_FEATURES };
