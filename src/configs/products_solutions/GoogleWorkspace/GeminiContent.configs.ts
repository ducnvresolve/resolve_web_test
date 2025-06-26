import { ColumFeature } from "../../../templates/Products/Sisense/components/ColumFeatureCard";
import { IContent } from "../../../templates/Products/Sisense/components/ContentCardLong/interface";
import { IStatContent } from "./GoogleWorkspaceFeatures";

const The_best_of_google_ai_now_included_in_workspace_plans: IContent = {
  id: "the-best-of-google-ai-now-included-in-workspace-plans",
  title: "The best of Google AI, now included in Workspace plans",
  title_vn:
    "Trí tuệ nhân tạo Google AI tốt nhất, nay đã có trong các gói Workspace",
  desc: `Google Workspace plans now include access to the Gemini app, NotebookLM, and Gemini in Gmail, Docs, Meet, and more. <br />
Gemini, is a generative artificial intelligence chatbot developed by Google. Based on the large language model (LLM) of the same name, it was launched in 2023. It was previously based on the LaMDA and PaLM LLMs.
`,
  desc_vn: `Các gói Google Workspace hiện đã bao gồm quyền truy cập vào ứng dụng Gemini, NotebookLM và Gemini trong Gmail, Docs, Meet và nhiều hơn nữa. <br />
Gemini là chatbot trí tuệ nhân tạo sinh ngữ do Google phát triển, dựa trên mô hình ngôn ngữ lớn (LLM) cùng tên, ra mắt năm 2023. Trước đó, Gemini dựa trên các mô hình LaMDA và PaLM LLMs.
`,
  bullets: [
    {
      title: "Gemini is your always-on AI assistant where you need it most",
      title_vn: "Gemini là trợ lý AI luôn sẵn sàng khi bạn cần nhất",
      desc: `<li>Gemini is your research analyst that helps you spot trends, synthesize information, and identify business opportunities.</li>
      <li>Gemini is your sales associate that helps you craft custom proposals for new clients.</li>
      <li>Gemini is your productivity partner that can help draft, reply, and summarize your emails to save you time at your desk or on the go.</li>`,
      desc_vn: `<li>Gemini là nhà phân tích giúp bạn phát hiện xu hướng, tổng hợp thông tin và nhận diện cơ hội kinh doanh.</li>
      <li>Gemini là cộng sự bán hàng giúp bạn soạn thảo đề xuất cho khách hàng mới.</li>
      <li>Gemini là đối tác năng suất hỗ trợ bạn soạn, trả lời và tóm tắt email để tiết kiệm thời gian dù ở văn phòng hay di chuyển.</li>`,
      img: [["/assets/images/image1100.jpg", "object-cover"]],
    },
    {
      title: `Gemini is your creative assistant for stunning presentations – generating images and designs at your fingertips.`,
      title_vn: `Gemini là trợ lý sáng tạo cho các bài thuyết trình ấn tượng – tạo hình ảnh và thiết kế chỉ với một chạm.`,
      desc: `Gemini is your creative assistant for stunning presentations – generating images and designs at your fingertips.`,
      desc_vn: `Gemini là trợ lý sáng tạo cho các bài thuyết trình ấn tượng – tạo hình ảnh và thiết kế chỉ với một chạm.`,
      img: [["/assets/images/image1101.webp", "object-cover"]],
    },
    {
      title:
        "Gemini is your meeting note taker to help you capture the details so you can focus on the conversation.",
      title_vn:
        "Gemini là người ghi chú cuộc họp giúp bạn lưu lại chi tiết để tập trung vào cuộc trò chuyện.",
      desc: `Gemini is your meeting note taker to help you capture the details so you can focus on the conversation.`,
      desc_vn: `Gemini là người ghi chú cuộc họp giúp bạn lưu lại chi tiết để tập trung vào cuộc trò chuyện.`,
      img: [["/assets/images/image1102.png", "object-contain"]],
    },
  ],
};

const GeminiStats: IStatContent = {
  title: "Stay safe with the most secure email for business",
  desc: "",
  stats: [
    {
      id: "get-ai-assistance-in-workspace-apps",
      value: "7+ Apps",
      desc: "Do your best work faster with AI built into our popular apps like Gmail, Docs, Sheets, Meet, Chat, Vids and more.",
    },
    {
      id: "chat-with-google-s-next-gen-ai",
      value: "3x Speed",
      desc: "Build a team of AI experts to tackle your most complex projects – including coding, deep research and data analysis.",
    },
    {
      id: "surface-insights-faster-with",
      value: "85% Faster",
      desc: "Upload sources to get instant insights and podcast-like Audio Overviews to help accelerate team knowledge sharing with NotebookLM.",
    },
  ],
};

export { The_best_of_google_ai_now_included_in_workspace_plans, GeminiStats };
