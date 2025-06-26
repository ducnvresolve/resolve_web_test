import { IContent } from "@/templates/Products/Sisense/components/ContentCardLong/interface";
import { IContentGridCard } from "@/templates/Products/Sisense/components/ContentGridCard/interface";

const powerfulDataModeling: IContent = {
  id: "powerful-data-modeling",
  title: "Powerful data modeling",
  title_vn: "Mô hình dữ liệu mạnh mẽ",
  desc: `Effortlessly combine data sources, no specialized skills or complex tools required. Data modeling that scales with your app and your team.
  `,
  desc_vn: `Kết hợp các nguồn dữ liệu một cách dễ dàng, không cần kỹ năng chuyên môn hay công cụ phức tạp. Mô hình dữ liệu có thể mở rộng cùng với ứng dụng và nhóm của bạn.
  `,
  bullets: [
    {
      id: "advanced-features",
      title: "Advanced data pipelines",
      title_vn: "Đường ống dữ liệu nâng cao",
      desc: "Build robust, efficient data pipelines without the complexity. Sisense's intuitive interface empowers you to effortlessly ingest, prepare, transform, and visualize data using familiar cloud data warehouses and Git workflows. Securely centralize your data for easy access and analysis.",
      desc_vn:
        "Xây dựng đường ống dữ liệu mạnh mẽ, hiệu quả mà không phức tạp. Giao diện trực quan của Sisense cho phép bạn dễ dàng thu thập, chuẩn bị, chuyển đổi và trực quan hóa dữ liệu bằng cách sử dụng kho dữ liệu đám mây quen thuộc và quy trình làm việc Git. Tập trung dữ liệu của bạn một cách an toàn để dễ dàng truy cập và phân tích.",

      img: ["/assets/images/image252.png"],
    },
    {
      id: "ai-powered-data-prep",
      title: "AI-powered data prep",
      title_vn: "Chuẩn bị dữ liệu được hỗ trợ bởi AI",
      desc: "Save time and effort with Sisense AI-powered data preparation tools. Automatically identify and unify similar values, eliminate duplicates, and gain instant insights into your data health with summary statistics. Focus on analysis, not manual data cleaning.",
      desc_vn:
        "Tiết kiệm thời gian và công sức với các công cụ chuẩn bị dữ liệu được hỗ trợ bởi AI của Sisense. Tự động xác định và thống nhất các giá trị tương tự, loại bỏ trùng lặp và có được thông tin chi tiết tức thì về sức khỏe dữ liệu của bạn với thống kê tóm tắt. Tập trung vào phân tích, không phải làm sạch dữ liệu thủ công.",
      img: ["/assets/images/image75.png"],
    },
    {
      id: "tailored-views",
      title: "Tailored views for every user",
      title_vn: "Giao diện tùy chỉnh cho mọi người dùng",
      desc: "Perspectives enable you to create sub-models that inherit from a central data model, offering unique views without duplicating data or logic. Adapt data structures, calculations, and visualizations to specific needs, ensuring every user has the right information at their fingertips.",
      desc_vn:
        "Góc nhìn cho phép bạn tạo các mô hình con kế thừa từ mô hình dữ liệu trung tâm, cung cấp các chế độ xem độc đáo mà không cần sao chép dữ liệu hoặc logic. Điều chỉnh cấu trúc dữ liệu, tính toán và trực quan hóa theo nhu cầu cụ thể, đảm bảo mọi người dùng có thông tin phù hợp trong tầm tay.",
      img: ["/assets/images/image131.png"],
    },
    {
      id: "embedded-notebooks",
      title: "Embedded notebooks for advanced analytics",
      title_vn: "Sổ ghi chép nhúng cho phân tích nâng cao",
      desc: "Perform advanced analytics and modeling directly within Sisense. Leverage the power of SQL, Python, and R in embedded Jupyter Notebooks. Prepare, cleanse, and transform your data all in one place, then seamlessly integrate your findings into your self-service analytics.",
      desc_vn:
        "Thực hiện phân tích và mô hình hóa nâng cao trực tiếp trong Sisense. Tận dụng sức mạnh của SQL, Python và R trong Jupyter Notebooks nhúng. Chuẩn bị, làm sạch và chuyển đổi dữ liệu của bạn tất cả trong một nơi, sau đó tích hợp liền mạch các phát hiện của bạn vào phân tích tự phục vụ.",
      img: ["/assets/images/image85.png"],
    },
    // {
    //   title: "Seamless data integration",
    //   title_vn: "Tích hợp dữ liệu liền mạch",
    //   desc: "Easily connect data from cloud, on-prem systems, and third-party apps to create a unified source of truth for deeper, more reliable insights.",
    //   desc_vn:
    //     "Dễ dàng kết nối dữ liệu từ đám mây, hệ thống tại chỗ và ứng dụng bên thứ ba để tạo nguồn dữ liệu thống nhất cho các thông tin chi tiết sâu hơn và đáng tin cậy hơn.",
    //   // img: ["/assets/images/image252.png"],
    // },
    // {
    //   title: "Efficient data preparation",
    //   title_vn: "Chuẩn bị dữ liệu hiệu quả",
    //   desc: "Sisense makes it easy to clean, transform, and structure data with drag-and-drop tools and AI-powered guidance—no advanced coding or SQL required.",
    //   desc_vn:
    //     "Sisense giúp dễ dàng làm sạch, chuyển đổi và cấu trúc dữ liệu với các công cụ kéo thả và hướng dẫn được hỗ trợ bởi AI—không cần mã hóa nâng cao hoặc SQL.",
    // },
    // {
    //   title: "Optimized query performance",
    //   title_vn: "Hiệu suất truy vấn được tối ưu hóa",
    //   desc: "Speed up analytics with the Sisense ElastiCube engine, delivering fast, responsive queries—even across complex, large-scale data sets.",
    //   desc_vn:
    //     "Tăng tốc phân tích với động cơ ElastiCube của Sisense, cung cấp các truy vấn nhanh, phản hồi nhanh—ngay cả trên các tập dữ liệu phức tạp, quy mô lớn.",
    // },
    // {
    //   title: "Scalability and flexibility",
    //   title_vn: "Khả năng mở rộng và linh hoạt",
    //   desc: "Sisense makes it easy to scale as your data grows, with flexible data models that adapt to increasing volumes and complex relationships.",
    //   desc_vn:
    //     "Sisense giúp dễ dàng mở rộng khi dữ liệu của bạn phát triển, với các mô hình dữ liệu linh hoạt thích ứng với khối lượng ngày càng tăng và các mối quan hệ phức tạp.",
    // },
    // {
    //   title: "Enterprise-grade security and governance",
    //   title_vn: "Bảo mật và quản trị cấp doanh nghiệp",
    //   desc: "Sisense offers strong role-based access control, data security, and governance features, so only authorized users can access, modify, or analyze sensitive data.",
    //   desc_vn:
    //     "Sisense cung cấp kiểm soát truy cập dựa trên vai trò mạnh mẽ, bảo mật dữ liệu và tính năng quản trị, để chỉ người dùng được ủy quyền mới có thể truy cập, sửa đổi hoặc phân tích dữ liệu nhạy cảm.",
    // },
    // {
    //   title: "Interactive and customizable dashboards",
    //   title_vn: "Bảng điều khiển tương tác và tùy chỉnh",
    //   desc: "Give decision-makers the power of real-time insights with dynamic, interactive dashboards that can be tailored for fast, informed action.",
    //   desc_vn:
    //     "Cung cấp cho người ra quyết định sức mạnh của thông tin chi tiết theo thời gian thực với các bảng điều khiển động, tương tác có thể được điều chỉnh cho hành động nhanh chóng, có thông tin.",
    // },
  ],
};
const dataExploration: IContent = {
  id: "data-exploration",
  title: "Data exploration with GenAI",
  title_vn: "Khám phá dữ liệu với GenAI",
  desc: "Use natural language to make everyday tasks easier, from creating a data model to asking the right questions",
  desc_vn:
    "Sử dụng ngôn ngữ tự nhiên để làm cho các tác vụ hàng ngày dễ dàng hơn, từ việc tạo mô hình dữ liệu đến đặt câu hỏi phù hợp",
  bullets: [
    {
      title: "Intuitive data exploration for all, with GenAI",
      title_vn: "Khám phá dữ liệu trực quan cho mọi người, với GenAI",
      desc: "Break through the knowledge barrier and become a data pro with an easy conversational interface to answer questions like a business expert. Gain deeper insights effortlessly by interacting with your data using <strong>natural language queries (NLQ)</strong>.",
      desc_vn:
        "Phá vỡ rào cản kiến thức và trở thành chuyên gia dữ liệu với giao diện hội thoại dễ dàng để trả lời các câu hỏi như một chuyên gia kinh doanh. Dễ dàng có được thông tin chi tiết sâu hơn bằng cách tương tác với dữ liệu của bạn sử dụng <strong>truy vấn ngôn ngữ tự nhiên (NLQ)</strong>.",
      img: ["/assets/images/image9.png"],
    },
    {
      title: "AI Assistant",
      title_vn: "Trợ lý AI",
      desc: "Empower creators to generate <strong>visualizations</strong> with <strong>natural language prompts</strong> and drive engagement with end users through a conversational interface that delivers <strong>instant insights</strong> and <strong>chart explanations</strong>.",
      desc_vn:
        "Trao quyền cho người tạo để tạo <strong>trực quan hóa</strong> với <strong>lời nhắc ngôn ngữ tự nhiên</strong> và thúc đẩy tương tác với người dùng cuối thông qua giao diện hội thoại cung cấp <strong>thông tin chi tiết tức thì</strong> và <strong>giải thích biểu đồ</strong>.",
      img: ["/assets/images/image286.png"],
    },
    {
      title: "Integration with Compose SDK",
      title_vn: "Tích hợp với Compose SDK",
      desc: "Using flexible <strong>React components</strong> and <strong>APIs</strong>, you can mix and match our <strong>GenAI</strong> building blocks to create your very own <strong>LLM-powered Analytics Chatbot</strong> or use them as discrete components within your products.",
      desc_vn:
        "Sử dụng <strong>các thành phần React</strong> linh hoạt và <strong>APIs</strong>, bạn có thể kết hợp các khối xây dựng <strong>GenAI</strong> của chúng tôi để tạo <strong>Chatbot Phân tích được hỗ trợ bởi LLM</strong> của riêng bạn hoặc sử dụng chúng như các thành phần riêng biệt trong sản phẩm của bạn.",

      img: ["/assets/images/image263.png"],
    },
    {
      title: "Your data, explained",
      title_vn: "Dữ liệu của bạn, được giải thích",
      desc: "<strong>GenAI Narration</strong> gives you easy-to-understand explanations of what is displayed in a chart or dataset. By using natural language generation (NLG), the narration provides 'analytics storytelling,' giving you actionable insights about your data.",
      desc_vn:
        "<strong>Kể chuyện GenAI</strong> cung cấp cho bạn những giải thích dễ hiểu về những gì được hiển thị trong biểu đồ hoặc tập dữ liệu. Bằng cách sử dụng tạo ngôn ngữ tự nhiên (NLG), phần kể chuyện cung cấp 'kể chuyện phân tích', mang đến cho bạn những thông tin chi tiết có thể hành động về dữ liệu của bạn.",
      img: ["/assets/images/image46.png"],
    },
  ],
};
const composeSDK: IContent = {
  id: "compose-sdk",
  title: "Compose SDK",
  title_vn: "Compose SDK",
  desc: "Build and integrate analytics into your products with ultimate flexibility, while saving development time.",
  desc_vn:
    "Xây dựng và tích hợp phân tích vào sản phẩm của bạn với tính linh hoạt tối đa, đồng thời tiết kiệm thời gian phát triển.",
  bullets: [
    {
      title: "Compose SDK - the composable analytics solution",
      title_vn: "Compose SDK - giải pháp phân tích có thể kết hợp",
      desc: "<strong>Compose SDK</strong> for Fusion is a flexible developer toolkit that lets you embed analytics in a code-first, scalable, modular way. The SDK empowers developers to build sophisticated and context-aware analytics faster, using the Sisense analytics platform components or your own.",
      desc_vn:
        "<strong>Compose SDK</strong> cho Fusion là bộ công cụ phát triển linh hoạt cho phép bạn nhúng phân tích theo cách ưu tiên mã, có thể mở rộng và mô-đun. SDK trao quyền cho các nhà phát triển xây dựng phân tích tinh vi và nhận thức ngữ cảnh nhanh hơn, sử dụng các thành phần nền tảng phân tích Sisense hoặc của riêng bạn.",
      img: ["/assets/images/image176.png"],
    },
    {
      title: "Swift, code-first analytics",
      title_vn: "Phân tích nhanh chóng, ưu tiên mã",
      desc: "Create dynamic queries, charts, and filters directly from your application code—no predefined dashboards or widgets required. Empower your developers to be nimble in ever-changing data landscapes, implement feedback and iterate quickly, and stay ahead of the competition.",
      desc_vn:
        "Tạo truy vấn động, biểu đồ và bộ lọc trực tiếp từ mã ứng dụng của bạn—không cần bảng điều khiển hoặc tiện ích được định nghĩa trước. Trao quyền cho các nhà phát triển của bạn linh hoạt trong môi trường dữ liệu luôn thay đổi, triển khai phản hồi và lặp lại nhanh chóng, và luôn dẫn trước đối thủ cạnh tranh.",
      img: ["/assets/images/image48.png"],
    },
    {
      title: "By developers, for developers",
      title_vn: "Bởi các nhà phát triển, cho các nhà phát triển",
      desc: "Built with the developer experience in mind, Compose SDK lets you use our components and customize them, or bring your own. Available via npm packages and Github, Compose SDK supports TypeScript, React, Angular, Vue. Documentation, code samples, and CLI tools by Sisense help you get things done your way.",
      desc_vn:
        "Được xây dựng với trải nghiệm nhà phát triển trong tâm trí, Compose SDK cho phép bạn sử dụng các thành phần của chúng tôi và tùy chỉnh chúng, hoặc mang theo của riêng bạn. Có sẵn thông qua các gói npm và Github, Compose SDK hỗ trợ TypeScript, React, Angular, Vue. Tài liệu, mẫu mã và công cụ CLI của Sisense giúp bạn hoàn thành công việc theo cách của bạn.",

      img: ["/assets/images/image284.png"],
    },
    {
      title: "Powered by Fusion",
      title_vn: "Được hỗ trợ bởi Fusion",
      desc: "Compose SDK is built on the Fusion analytics platform for unmatched stability, enterprise-grade scalability, and security. Sisense's robust platform empowers developers and product teams to seamlessly create flexible embedded analytics experiences, and integrate them into any workflow, driving better user experience.",
      desc_vn:
        "Compose SDK được xây dựng trên nền tảng phân tích Fusion cho sự ổn định không đối thủ, khả năng mở rộng cấp doanh nghiệp và bảo mật. Nền tảng mạnh mẽ của Sisense trao quyền cho các nhà phát triển và nhóm sản phẩm tạo trải nghiệm phân tích nhúng linh hoạt một cách liền mạch, và tích hợp chúng vào bất kỳ quy trình làm việc nào, thúc đẩy trải nghiệm người dùng tốt hơn.",
      img: ["/assets/images/image37.png"],
    },
  ],
};
const advancedFeatures: IContentGridCard[] = [
  {
    id: "advanced-features",
    title: "Advanced data pipelines",
    title_vn: "Đường ống dữ liệu nâng cao",
    desc: "Build robust, efficient data pipelines without the complexity. Sisense's intuitive interface empowers you to effortlessly ingest, prepare, transform, and visualize data using familiar cloud data warehouses and Git workflows. Securely centralize your data for easy access and analysis.",
    desc_vn:
      "Xây dựng đường ống dữ liệu mạnh mẽ, hiệu quả mà không phức tạp. Giao diện trực quan của Sisense cho phép bạn dễ dàng thu thập, chuẩn bị, chuyển đổi và trực quan hóa dữ liệu bằng cách sử dụng kho dữ liệu đám mây quen thuộc và quy trình làm việc Git. Tập trung dữ liệu của bạn một cách an toàn để dễ dàng truy cập và phân tích.",

    img: "/assets/images/image252.png",
  },
  {
    id: "ai-powered-data-prep",
    title: "AI-powered data prep",
    title_vn: "Chuẩn bị dữ liệu được hỗ trợ bởi AI",
    desc: "Save time and effort with Sisense AI-powered data preparation tools. Automatically identify and unify similar values, eliminate duplicates, and gain instant insights into your data health with summary statistics. Focus on analysis, not manual data cleaning.",
    desc_vn:
      "Tiết kiệm thời gian và công sức với các công cụ chuẩn bị dữ liệu được hỗ trợ bởi AI của Sisense. Tự động xác định và thống nhất các giá trị tương tự, loại bỏ trùng lặp và có được thông tin chi tiết tức thì về sức khỏe dữ liệu của bạn với thống kê tóm tắt. Tập trung vào phân tích, không phải làm sạch dữ liệu thủ công.",
    img: "/assets/images/image75.png",
  },
  {
    id: "tailored-views",
    title: "Tailored views for every user",
    title_vn: "Giao diện tùy chỉnh cho mọi người dùng",
    desc: "Perspectives enable you to create sub-models that inherit from a central data model, offering unique views without duplicating data or logic. Adapt data structures, calculations, and visualizations to specific needs, ensuring every user has the right information at their fingertips.",
    desc_vn:
      "Góc nhìn cho phép bạn tạo các mô hình con kế thừa từ mô hình dữ liệu trung tâm, cung cấp các chế độ xem độc đáo mà không cần sao chép dữ liệu hoặc logic. Điều chỉnh cấu trúc dữ liệu, tính toán và trực quan hóa theo nhu cầu cụ thể, đảm bảo mọi người dùng có thông tin phù hợp trong tầm tay.",
    img: "/assets/images/image131.png",
  },
  {
    id: "embedded-notebooks",
    title: "Embedded notebooks for advanced analytics",
    title_vn: "Sổ ghi chép nhúng cho phân tích nâng cao",
    desc: "Perform advanced analytics and modeling directly within Sisense. Leverage the power of SQL, Python, and R in embedded Jupyter Notebooks. Prepare, cleanse, and transform your data all in one place, then seamlessly integrate your findings into your self-service analytics.",
    desc_vn:
      "Thực hiện phân tích và mô hình hóa nâng cao trực tiếp trong Sisense. Tận dụng sức mạnh của SQL, Python và R trong Jupyter Notebooks nhúng. Chuẩn bị, làm sạch và chuyển đổi dữ liệu của bạn tất cả trong một nơi, sau đó tích hợp liền mạch các phát hiện của bạn vào phân tích tự phục vụ.",
    img: "/assets/images/image85.png",
  },
];

const embeddedAnalyticsPlatform: IContent = {
  id: "embedded-analytics",
  title: "Embedded analytics platform",
  title_vn: "Nền tảng phân tích nhúng",
  desc: `Build and <strong>embed analytics</strong> with maximum flexibility to create a <strong>seamless user experience</strong>. Empower your product with AI-driven embedded analytics. White-label and customize: Embed analytics that match your brand with flexible theming, colors, and styling. AI-powered insights: AI detects trends, anomalies, and provides instant, actionable data intelligence. Developer-first APIs: Embed analytics effortlessly with a robust suite of APIs and a powerful JS SDK. Self-service analytics: Empower users with drag-and-drop reports, filters, and ad hoc data exploration. Enterprise-grade security: Ensure secure, role-based access with SSO, RLS, and multi-tenant architecture.
  `,
  desc_vn: `Xây dựng và <strong>nhúng phân tích</strong> với tính linh hoạt tối đa để tạo <strong>trải nghiệm người dùng liền mạch</strong>. Trao quyền cho sản phẩm của bạn với phân tích nhúng được hỗ trợ bởi AI. Nhãn trắng và tùy chỉnh: Nhúng phân tích phù hợp với thương hiệu của bạn với chủ đề, màu sắc và kiểu dáng linh hoạt. :  API ưu tiên nhà phát triển: Nhúng phân tích dễ dàng với bộ API mạnh mẽ và SDK JS mạnh mẽ. Phân tích tự phục vụ: Trao quyền cho người dùng với báo cáo kéo thả, bộ lọc và khám phá dữ liệu tùy chỉnh. Bảo mật cấp doanh nghiệp: Đảm bảo truy cập an toàn dựa trên vai trò với SSO, RLS và kiến trúc đa người thuê.
  `,
  bullets: [
    {
      title: "White-label and customize",
      title_vn: "White-label và tùy chỉnh",
      desc: "Embed analytics that match your brand with flexible theming, colors, and styling.",
      desc_vn:
        "Nhúng phân tích phù hợp với thương hiệu của bạn với chủ đề, màu sắc và kiểu dáng linh hoạt.",
      img: ["/assets/images/image115.png"],
    },
    // {
    //   title: "AI-powered insights",
    //   title_vn: "",
    //   desc: "AI detects trends, anomalies, and provides instant, actionable data intelligence.",
    //   desc_vn:
    //     "",
    // },
    // {
    //   title: "Developer-first APIs",
    //   title_vn: "API ưu tiên nhà phát triển",
    //   desc: "Embed analytics effortlessly with a robust suite of APIs and a powerful JS SDK.",
    //   desc_vn: "Nhúng phân tích dễ dàng với bộ API mạnh mẽ và SDK JS mạnh mẽ.",
    // },
    // {
    //   title: "Self-service analytics",
    //   title_vn: "Phân tích tự phục vụ",
    //   desc: "Empower users with drag-and-drop reports, filters, and ad hoc data exploration.",
    //   desc_vn:
    //     "Trao quyền cho người dùng với báo cáo kéo thả, bộ lọc và khám phá dữ liệu tùy chỉnh.",
    // },
    {
      title: "Quickly integrate",
      title_vn: "Tích hợp nhanh chóng",
      desc: "Rapidly create an integrated user experience with embedded analytics using minimal code. Embed SDK, a JS library, streamlines communication between your app and analytics dashboards.",
      desc_vn:
        "Nhanh chóng tạo trải nghiệm người dùng tích hợp với phân tích nhúng sử dụng mã tối thiểu. Embed SDK, một thư viện JS, đơn giản hóa giao tiếp giữa ứng dụng của bạn và bảng điều khiển phân tích.",
      img: ["/assets/images/image110.png"],
    },
    {
      title: "Choose what to embed in a few clicks",
      title_vn: "Chọn những gì để nhúng trong vài cú nhấp chuột",
      desc: "Leverage Sisense.JS to embed customizable widgets and filters, while retaining full Sisense functionality. This JavaScript library lets you tailor the look and feel of analytics elements to seamlessly blend into your application.",
      desc_vn:
        "Tận dụng Sisense.JS để nhúng các tiện ích và bộ lọc có thể tùy chỉnh, đồng thời giữ nguyên toàn bộ chức năng của Sisense. Thư viện JavaScript này cho phép bạn điều chỉnh giao diện và cảm nhận của các phần tử phân tích để hòa quyện liền mạch vào ứng dụng của bạn.",
      img: ["/assets/images/image2.png"],
    },
    {
      title: "Bring analytics to your work apps",
      title_vn: "Mang phân tích đến ứng dụng làm việc của bạn",
      desc: "Deliver data and analytic insights where users spend a lot of time—in business applications like Google Workspace, Slack, Microsoft Office 365 and Teams. Improve productivity and exploration for knowledge workers. Extend the data and your solution value through Sisense Infusion Apps and Infusion Apps for OEMs.",
      desc_vn:
        "Cung cấp dữ liệu và thông tin chi tiết phân tích nơi người dùng dành nhiều thời gian—trong các ứng dụng kinh doanh như Google Workspace, Slack, Microsoft Office 365 và Teams. Cải thiện năng suất và khám phá cho người lao động tri thức. Mở rộng dữ liệu và giá trị giải pháp của bạn thông qua Sisense Infusion Apps và Infusion Apps cho OEM.",
      img: ["/assets/images/image3031.png"],
    },
  ],
};

const sisenseCloud: IContent = {
  id: "sisense-cloud",
  title: "Sisense Cloud",
  title_vn: "Sisense Cloud",
  desc: "Expedite <strong>feature shipping</strong>, improve <strong>collaboration</strong>, customize <strong>governance</strong>, and <strong>secure</strong> the delivery of your analytics.",
  desc_vn:
    "Đẩy nhanh <strong>phát hành tính năng</strong>, cải thiện <strong>cộng tác</strong>, tùy chỉnh <strong>quản trị</strong> và <strong>bảo mật</strong> việc phân phối phân tích của bạn.",
  bullets: [
    {
      title: "Invest in the future",
      title_vn: "Đầu tư vào tương lai",
      desc: "Data technology is advancing at a rate that pushes business intelligence to reinvent itself on a daily basis. Well beyond data visualizations, AI, ML, data sharing and other complex services have become essential elements when building a robust analytics platform, and the implementation is primed to help companies revolutionize their data strategies.",
      desc_vn:
        "Công nghệ dữ liệu đang phát triển với tốc độ buộc trí tuệ doanh nghiệp phải tái tạo chính nó hàng ngày. Vượt xa trực quan hóa dữ liệu, AI, ML, chia sẻ dữ liệu và các dịch vụ phức tạp khác đã trở thành các yếu tố thiết yếu khi xây dựng nền tảng phân tích mạnh mẽ, và việc triển khai đã sẵn sàng để giúp các công ty cách mạng hóa chiến lược dữ liệu của họ.",
      img: ["/assets/images/image95.png"],
    },
    {
      title: "Unlimited Scalability",
      title_vn: "Khả năng mở rộng không giới hạn",
      desc: "Scalability and agility are key benefits of the Sisense Cloud. Add users, data, and projects on-demand, in a predictable and consistent way. Accelerate your projects by months and understand cost benefits upfront while planning for the future. The Sisense Cloud evolves as you grow, which means more data, faster queries, superior cloud BI, and better insights for your team.",
      desc_vn:
        "Khả năng mở rộng và nhanh nhẹn là những lợi ích chính của Sisense Cloud. Thêm người dùng, dữ liệu và dự án theo yêu cầu, theo cách dự đoán và nhất quán. Đẩy nhanh dự án của bạn hàng tháng và hiểu lợi ích chi phí trước khi lên kế hoạch cho tương lai. Sisense Cloud phát triển khi bạn phát triển, có nghĩa là nhiều dữ liệu hơn, truy vấn nhanh hơn, BI đám mây vượt trội và thông tin chi tiết tốt hơn cho nhóm của bạn.",
      img: ["/assets/images/image277.png"],
    },
    {
      title: "Seamless collaboration",
      title_vn: "Cộng tác liền mạch",
      desc: "Break down the silos and complexities of data sharing and collaboration across your departments and projects with cloud analytics. The Sisense Cloud integrates with your data and access control applications for governance and solves the toughest cross-system data collaboration problems, making your teams more informed and efficient.",
      desc_vn:
        "Phá vỡ các silo và phức tạp của việc chia sẻ dữ liệu và cộng tác trên các phòng ban và dự án của bạn với phân tích đám mây. Sisense Cloud tích hợp với dữ liệu và ứng dụng kiểm soát truy cập của bạn để quản trị và giải quyết các vấn đề cộng tác dữ liệu liên hệ thống khó khăn nhất, làm cho các nhóm của bạn được thông tin và hiệu quả hơn.",
      img: ["/assets/images/image52.png"],
    },
    {
      title: "Hassle-free maintenance",
      title_vn: "Bảo trì không rắc rối",
      desc: "Say goodbye to concerns around maintenance and uptime. The Sisense Cloud guarantees these as part of our service. Retain full control of system upgrade frequency and testing while allowing experts to manage the burden of monitoring and scaling.",
      desc_vn:
        "Nói lời tạm biệt với những lo ngại về bảo trì và thời gian hoạt động. Sisense Cloud đảm bảo những điều này như một phần của dịch vụ của chúng tôi. Giữ toàn quyền kiểm soát tần suất nâng cấp hệ thống và kiểm tra trong khi cho phép các chuyên gia quản lý gánh nặng giám sát và mở rộng.",
      img: ["/assets/images/image133.png"],
    },
    {
      title: "Feature prioritization",
      title_vn: "Ưu tiên tính năng",
      desc: "In this world of rapid change, new features and services ship faster than ever before.",
      desc_vn:
        "Trong thế giới thay đổi nhanh chóng này, các tính năng và dịch vụ mới được phát hành nhanh hơn bao giờ hết.",
      img: ["/assets/images/image42.png"],
    },
  ],
};

const connectYourData: IContent = {
  id: "connect-data",
  title: "Connect your data",
  title_vn: "Kết nối dữ liệu của bạn",
  desc: "With <strong>400+ connectors</strong> and a flexible data engine, choose the best approach for your needs—<strong>Live connection, Elasticube, or Hybrid</strong>—and unlock the full value of your data.",
  desc_vn:
    "Với <strong>hơn 400 bộ kết nối</strong> và động cơ dữ liệu linh hoạt, chọn cách tiếp cận tốt nhất cho nhu cầu của bạn—<strong>Kết nối trực tiếp, Elasticube, hoặc Hybrid</strong>—và mở khóa toàn bộ giá trị dữ liệu của bạn.",
  bullets: [
    {
      title: "Real-time insights with live connection",
      title_vn: "Thông tin chi tiết thời gian thực với kết nối trực tiếp",
      desc: "Harness the power of your cloud data warehouse—Snowflake, Amazon Redshift, Google BigQuery, Azure Synapse, and more—without data duplication. Sisense's live connections create data models that directly access your warehouse tables, ensuring your analysis is always up-to-the-minute.",
      desc_vn:
        "Tận dụng sức mạnh của kho dữ liệu đám mây của bạn—Snowflake, Amazon Redshift, Google BigQuery, Azure Synapse và hơn thế nữa—mà không cần sao chép dữ liệu. Kết nối trực tiếp của Sisense tạo ra các mô hình dữ liệu truy cập trực tiếp vào các bảng kho của bạn, đảm bảo phân tích của bạn luôn cập nhật theo phút.",
      img: [
        "/assets/images/image139.png",
        // "/assets/images/image47.png",
        // "/assets/images/image245.png",
      ],
    },
    {
      title: "Consolidate data using Elasticube",
      title_vn: "Tích hợp dữ liệu sử dụng Elasticube",
      desc: "Accelerate your analytics with Sisense's Elasticube, a high-performance analytical database built for speed and flexibility. Combine data from multiple sources, perform complex transformations, and empower users with lightning-fast interactive queries, even on massive datasets.",
      desc_vn:
        "Tăng tốc phân tích của bạn với Elasticube của Sisense, một cơ sở dữ liệu phân tích hiệu suất cao được xây dựng cho tốc độ và tính linh hoạt. Kết hợp dữ liệu từ nhiều nguồn, thực hiện các phép biến đổi phức tạp và trao quyền cho người dùng với các truy vấn tương tác nhanh như chớp, ngay cả trên các tập dữ liệu lớn.",
      img: ["/assets/images/image49.png"],
    },
    {
      title: "Hybrid",
      title_vn: "Hybrid",
      desc: "The best of both worlds: Get the most out of your data infrastructure with the Sisense hybrid approach. Combine the speed of Elasticube caching with the depth and flexibility of your data warehouse. Surface key metrics in real time while allowing users to drill down into granular detail on demand.",
      desc_vn:
        "Tốt nhất của cả hai thế giới: Tận dụng tối đa cơ sở hạ tầng dữ liệu của bạn với cách tiếp cận hybrid của Sisense. Kết hợp tốc độ lưu trữ đệm của Elasticube với độ sâu và tính linh hoạt của kho dữ liệu của bạn. Hiển thị các chỉ số quan trọng theo thời gian thực trong khi cho phép người dùng đi sâu vào chi tiết chi tiết theo yêu cầu.",
      img: ["/assets/images/image138.png"],
    },
  ],
};

const AIFeaturesForModernAnalytics: IContent = {
  id: "ai-features-for-modern-analytics",
  title: "AI features for modern analytics",
  title_vn: "Tính năng AI cho phân tích hiện đại",
  desc: "Use Sisense Intelligence to innovate, extract insights easily, and make smarter business decisions.",
  desc_vn:
    "Sử dụng Sisense Intelligence để đổi mới, khai thác insight dễ dàng và đưa ra quyết định kinh doanh thông minh hơn.",
  bullets: [
    {
      title: "Build faster with a conversational assistant",
      title_vn: "Xây dựng nhanh hơn với trợ lý hội thoại",
      desc: "<strong>Assistant</strong> is your AI-powered partner for building analytics from end to end. From data modeling to dashboard creation, it turns complex tasks into simple conversations. Whether you're a developer or business user, you can generate visualizations, ask dashboard-specific questions, and get insights in real time, no SQL or data science needed.",
      desc_vn:
        "<strong>Assistant</strong> là đối tác AI hỗ trợ bạn xây dựng phân tích từ đầu đến cuối. Từ mô hình hóa dữ liệu đến tạo dashboard, mọi tác vụ phức tạp đều được đơn giản hóa thành hội thoại. Dù bạn là developer hay người dùng doanh nghiệp, bạn đều có thể tạo biểu đồ, đặt câu hỏi về dashboard và nhận insight theo thời gian thực mà không cần biết SQL hay khoa học dữ liệu.",
      img: [["/assets/images/webp1.webp", "object-contain"]],
    },
    {
      title: "Transform charts into conversation starters",
      title_vn: "Biến biểu đồ thành điểm khởi đầu cho hội thoại",
      desc: "With <strong>Narrative</strong>, bring your dashboards to life with dynamic, plain-language summaries of charts and widgets. Instead of making users guess what matters, <strong>narrative</strong> highlights key takeaways automatically, making it easier for anyone to understand the story behind the data and act fast.",
      desc_vn:
        "Với <strong>Narrative</strong>, dashboard của bạn trở nên sống động với các tóm tắt động, ngôn ngữ tự nhiên về biểu đồ và widget. Thay vì để người dùng tự đoán điều quan trọng, <strong>narrative</strong> sẽ tự động làm nổi bật các ý chính, giúp ai cũng dễ dàng hiểu câu chuyện đằng sau dữ liệu và hành động nhanh chóng.",
      img: [["/assets/images/webp2.webp", "object-contain"]],
    },
    {
      title: "Build once, embed everywhere",
      title_vn: "Xây dựng một lần, nhúng ở mọi nơi",
      desc: "With <strong>GenAI-embedded</strong> components from Compose SDK, developers can bring the full force of Sisense Intelligence directly into their products using React, Angular, or Vue, and even accelerate builds with AI code editors like Cursor. Create rich, in-context analytics that feel native to your app; no more disconnected user experiences.",
      desc_vn:
        "Với các thành phần <strong>GenAI-embedded</strong> từ Compose SDK, developer có thể tích hợp toàn bộ sức mạnh của Sisense Intelligence vào sản phẩm của mình bằng React, Angular hoặc Vue, thậm chí tăng tốc phát triển với các trình soạn thảo mã AI như Cursor. Tạo phân tích phong phú, đúng ngữ cảnh và liền mạch với ứng dụng của bạn; không còn trải nghiệm rời rạc.",
      img: [["/assets/images/webp3.webp", "object-contain"]],
    },
    {
      title: "Plan ahead with predictive insights",
      title_vn: "Lên kế hoạch trước với dự báo thông minh",
      desc: "<strong>Forecast</strong> predicts future trends using machine learning tailored to each dataset. It helps users anticipate what's next and make data-driven decisions with confidence.",
      desc_vn:
        "<strong>Forecast</strong> dự đoán xu hướng tương lai bằng machine learning phù hợp với từng bộ dữ liệu. Tính năng này giúp người dùng chủ động nắm bắt điều sắp tới và tự tin ra quyết định dựa trên dữ liệu.",
      img: [["/assets/images/webp4.webp", "object-contain"]],
    },
  ],
};

const trustDataSecurity: IContent = {
  id: "trust-security",
  title: "Trust and Data Security",
  title_vn: "Niềm tin và Bảo mật Dữ liệu",
  desc: "Protecting your data with the industry's highest standards <br/> <strong>Platform security and privacy</strong>",
  desc_vn:
    "Bảo vệ dữ liệu của bạn với các tiêu chuẩn cao nhất trong ngành <br/> <strong>Bảo mật và quyền riêng tư của nền tảng</strong>",
  bullets: [
    {
      title: "IAM",
      title_vn: "IAM",
      desc: "Sisense enforces strict access controls through advanced authentication and authorization mechanisms. Sisense's governance policies ensure that users are granted the minimum necessary access based on their roles, reducing security risks and maintaining data integrity.",
      desc_vn:
        "Sisense thực thi kiểm soát truy cập nghiêm ngặt thông qua các cơ chế xác thực và ủy quyền nâng cao. Chính sách quản trị của Sisense đảm bảo rằng người dùng được cấp quyền truy cập tối thiểu cần thiết dựa trên vai trò của họ, giảm thiểu rủi ro bảo mật và duy trì tính toàn vẹn dữ liệu.",
      img: ["/assets/images/image279.png"],
    },
    {
      title: "Product security",
      title_vn: "Bảo mật sản phẩm",
      desc: "Sisense embeds security into its Secure Software Development Lifecycle (SSDLC) to proactively identify and mitigate threats. Sisense's approach includes continuous code review, automated security testing, penetration testing, and real-time threat analysis.",
      desc_vn:
        "Sisense tích hợp bảo mật vào Chu kỳ Phát triển Phần mềm An toàn (SSDLC) để chủ động xác định và giảm thiểu các mối đe dọa. Cách tiếp cận của Sisense bao gồm xem xét mã liên tục, kiểm tra bảo mật tự động, kiểm tra thâm nhập và phân tích mối đe dọa thời gian thực.",
      img: ["/assets/images/image101.png"],
    },
    // {
    //   title: "Cloud security",
    //   title_vn: "Bảo mật đám mây",
    //   desc: "Sisense employs advanced cloud security measures to protect customer data at all times. Sisense implements end-to-end encryption for data at rest and in transit, along with continuous monitoring and intrusion detection systems. Sisense's disaster recovery and business continuity capabilities provide resilience against potential disruptions.",
    //   desc_vn:
    //     "Sisense sử dụng các biện pháp bảo mật đám mây tiên tiến để bảo vệ dữ liệu khách hàng mọi lúc. Sisense triển khai mã hóa end-to-end cho dữ liệu khi lưu trữ và trong quá trình truyền tải, cùng với giám sát liên tục và hệ thống phát hiện xâm nhập. Khả năng khôi phục sau thảm họa và liên tục kinh doanh của Sisense cung cấp khả năng phục hồi chống lại các gián đoạn tiềm ẩn.",
    //   img: ["/assets/images/image101.png"],
    // },
    {
      title: "Supply chain security",
      title_vn: "Bảo mật chuỗi cung ứng",
      desc: "Sisense's supply chain security program ensures the integrity of third-party components through rigorous vendor risk management, dependency security scanning, and continuous integrity verification.",
      desc_vn:
        "Chương trình bảo mật chuỗi cung ứng của Sisense đảm bảo tính toàn vẹn của các thành phần bên thứ ba thông qua quản lý rủi ro nhà cung cấp nghiêm ngặt, quét bảo mật phụ thuộc và xác minh tính toàn vẹn liên tục.",
      img: ["/assets/images/image101.png"],
    },
    {
      title: "Vulnerability management",
      title_vn: "Quản lý lỗ hổng",
      desc: "Sisense takes a proactive approach to vulnerability management with continuous threat monitoring, rapid patch deployment, and automated risk mitigation. Sisense's security team ensures all vulnerabilities are addressed swiftly to maintain the highest level of system integrity.",
      desc_vn:
        "Sisense áp dụng cách tiếp cận chủ động trong quản lý lỗ hổng với giám sát mối đe dọa liên tục, triển khai bản vá nhanh chóng và giảm thiểu rủi ro tự động. Nhóm bảo mật của Sisense đảm bảo tất cả các lỗ hổng được giải quyết nhanh chóng để duy trì mức độ toàn vẹn hệ thống cao nhất.",
      img: ["/assets/images/image1002.jpg"],
    },
    {
      title: "Customer compliance",
      title_vn: "Tuân thủ khách hàng",
      desc: "Sisense undergoes regular independent audits to ensure compliance with top security and privacy frameworks, including ISO 27001 for information security, ISO 27701 for privacy management, SOC 2 Type 2, HIPAA, GDPR, and CCPA.",
      desc_vn:
        "Sisense trải qua các cuộc kiểm toán độc lập thường xuyên để đảm bảo tuân thủ các khung bảo mật và quyền riêng tư hàng đầu, bao gồm ISO 27001 cho bảo mật thông tin, ISO 27701 cho quản lý quyền riêng tư, SOC 2 Type 2, HIPAA, GDPR và CCPA.",
      img: [["/assets/images/image1006.png", "object-contain"]],
    },
    {
      title:
        "Security and privacy are foundational to the Sisense analytics platform",
      title_vn:
        "Bảo mật và quyền riêng tư là nền tảng của nền tảng phân tích Sisense",
      desc: "Sisense is committed to protecting your data through robust security frameworks, continuous compliance, and transparent policies. Sisense's security-first approach ensures that organizations can trust Sisense to handle their most sensitive information with the highest standards of protection.",
      desc_vn:
        "Sisense cam kết bảo vệ dữ liệu của bạn thông qua các khung bảo mật mạnh mẽ, tuân thủ liên tục và chính sách minh bạch. Cách tiếp cận ưu tiên bảo mật của Sisense đảm bảo rằng các tổ chức có thể tin tưởng Sisense để xử lý thông tin nhạy cảm nhất của họ với các tiêu chuẩn bảo vệ cao nhất.",
      img: [["/assets/images/image1003.png", "object-contain"]],
    },
    {
      title: "Security you can rely on, transparency you can trust",
      title_vn: "Bảo mật bạn có thể tin cậy, minh bạch bạn có thể tin tưởng",
      desc: "Sisense maintains a dedicated Trust Center that provides real-time access to its security certifications, privacy policies, and compliance measures. Explore Sisense's security practices, third-party audits, and compliance reports. <br/> <br/> <a href='https://trust.sisense.com/?_gl=1*1jl7iso*_gcl_au*NDQ2ODE1MTkwLjE3NDA0NzU5OTE.' target='_blank' rel='noopener noreferrer'>Sisense Trust Center</a>",
      desc_vn:
        "Sisense duy trì một Trung tâm Niềm tin chuyên dụng cung cấp quyền truy cập thời gian thực vào chứng nhận bảo mật, chính sách quyền riêng tư và biện pháp tuân thủ của nó. Khám phá các thực hành bảo mật của Sisense, kiểm toán bên thứ ba và báo cáo tuân thủ. <br/> <br/> <a href='https://trust.sisense.com/?_gl=1*1jl7iso*_gcl_au*NDQ2ODE1MTkwLjE3NDA0NzU5OTE.' target='_blank' rel='noopener noreferrer'>Trung tâm Niềm tin Sisense</a>",
      img: ["/assets/images/image1004.png"],
    },
  ],
};

export {
  powerfulDataModeling,
  dataExploration,
  composeSDK,
  advancedFeatures,
  embeddedAnalyticsPlatform,
  sisenseCloud,
  connectYourData,
  trustDataSecurity,
  AIFeaturesForModernAnalytics,
};
