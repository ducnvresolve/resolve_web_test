import { IContent } from "@/templates/Products/Sisense/components/ContentCardLong/interface";
import { IContentGridCard } from "@/templates/Products/Sisense/components/ContentGridCard/interface";

const firstOverview: IContent = {
  title: "",
  title_vn: "",
  id: "Google Looker",
  desc: `Google Looker is a modern data platform that empowers businesses to
            analyze governed data, deliver actionable business insights, and
            build AI-powered applications. With its unique modeling language,
            <br/> <br/>LookML, Looker enables users to define metrics and dimensions in a
            reusable and consistent manner across the organization.`,
  desc_vn: `Google Looker là một nền tảng dữ liệu hiện đại giúp doanh nghiệp
            phân tích dữ liệu được quản lý, cung cấp thông tin chi tiết kinh doanh có thể hành động, và
            xây dựng các ứng dụng được hỗ trợ bởi AI. Với ngôn ngữ mô hình hóa độc đáo của nó,
            <br/> <br/>LookML, Looker cho phép người dùng định nghĩa các chỉ số và chiều trong
            một cách có thể tái sử dụng và nhất quán trong toàn tổ chức.`,
  bullets: [
    {
      title: "",
      title_vn: "",
      desc: "Google Looker is a modern data platform that empowers businesses to analyze governed data, deliver actionable business insights, and build AI-powered applications. With its unique modeling language, LookML, Looker enables users to define metrics and dimensions in a reusable and consistent manner across the organization.",
      desc_vn:
        "Google Looker là một nền tảng dữ liệu hiện đại giúp doanh nghiệp phân tích dữ liệu được quản lý, cung cấp thông tin chi tiết kinh doanh có thể hành động, và xây dựng các ứng dụng được hỗ trợ bởi AI. Với ngôn ngữ mô hình hóa độc đáo của nó, LookML, Looker cho phép người dùng định nghĩa các chỉ số và chiều trong một cách có thể tái sử dụng và nhất quán trong toàn tổ chức.",
      img: ["/assets/images/image285.png"],
    },
  ],
};
const lookerMainFeatures: IContent = {
  title: "Trusted Semantic Modeling Layer",
  title_vn: "Lớp Mô hình Hóa Ngữ nghĩa Đáng Tin Cậy",
  id: "trusted-semantic-modeling-layer",
  desc: "In the generative AI era, a universal semantic layer is the foundation for intelligent decision-making and is key to the success and accuracy of any data project—both now and in the future. Looker's semantic layer translates raw data into a language that both downstream users and large language models (LLMs) can understand, enabling smarter and more accurate workflows.",
  desc_vn:
    "Trong kỷ nguyên AI tạo sinh, một lớp ngữ nghĩa phổ quát là nền tảng cho việc ra quyết định thông minh và là chìa khóa cho sự thành công và chính xác của bất kỳ dự án dữ liệu nào—cả hiện tại và trong tương lai. Lớp ngữ nghĩa của Looker chuyển đổi dữ liệu thô thành ngôn ngữ mà cả người dùng hạ nguồn và mô hình ngôn ngữ lớn (LLMs) có thể hiểu được, cho phép các quy trình làm việc thông minh và chính xác hơn.",
  bullets: [
    {
      title: "",
      title_vn: "",
      desc: "In the generative AI era, a universal semantic layer is the foundation for intelligent decision-making and is key to the success and accuracy of any data project—both now and in the future. Looker's semantic layer translates raw data into a language that both downstream users and large language models (LLMs) can understand, enabling smarter and more accurate workflows.",
      desc_vn:
        "Trong kỷ nguyên AI tạo sinh, một lớp ngữ nghĩa phổ quát là nền tảng cho việc ra quyết định thông minh và là chìa khóa cho sự thành công và chính xác của bất kỳ dự án dữ liệu nào—cả hiện tại và trong tương lai. Lớp ngữ nghĩa của Looker chuyển đổi dữ liệu thô thành ngôn ngữ mà cả người dùng hạ nguồn và mô hình ngôn ngữ lớn (LLMs) có thể hiểu được, cho phép các quy trình làm việc thông minh và chính xác hơn.",
      img: ["/assets/images/image7.png"],
    },
    {
      title: "",
      title_vn: "",
      desc: `By using LookML, Looker provides trusted business metrics and establishes a central hub for data context, definitions, and relationships, powering all BI and AI workflows. Looker's trusted modeling layer offers a single place to curate and govern the metrics most important to your business. This ensures that users see consistent results, regardless of where the data is consumed.<br> To enable the use of this consistent, trustworthy information in your tools of choice, Looker has opened up its modeling layer to its ecosystem and actively collaborates with partners to ensure that the insights within the Looker platform can seamlessly integrate into other workflows.`,
      desc_vn: `Bằng cách sử dụng LookML, Looker cung cấp các chỉ số kinh doanh đáng tin cậy và thiết lập một trung tâm trung tâm cho ngữ cảnh dữ liệu, định nghĩa và mối quan hệ, cung cấp năng lượng cho tất cả các quy trình làm việc BI và AI. Lớp mô hình hóa đáng tin cậy của Looker cung cấp một nơi duy nhất để quản lý và điều hành các chỉ số quan trọng nhất đối với doanh nghiệp của bạn. Điều này đảm bảo rằng người dùng thấy kết quả nhất quán, bất kể dữ liệu được tiêu thụ ở đâu.<br> Để cho phép sử dụng thông tin nhất quán, đáng tin cậy này trong các công cụ bạn chọn, Looker đã mở rộng lớp mô hình hóa của nó cho hệ sinh thái và tích cực hợp tác với các đối tác để đảm bảo rằng các thông tin chi tiết trong nền tảng Looker có thể tích hợp liền mạch vào các quy trình làm việc khác.`,
      img: ["/assets/images/image229.png"],
    },
  ],
};

const LookerAdvancedFeatures: IContentGridCard[] = [
  {
    title: "AI-powered analytics for self-service BI",
    title_vn: "Phân tích được hỗ trợ bởi AI cho BI tự phục vụ",
    id: "ai-powered-analytics-for-self-service-bi",
    desc: `An AI assistant designed to accelerate analytical workflows in Looker, helping with tasks such as creating and configuring visualizations, building formulas, modeling data, generating reports, and more — all supported by a robust semantic layer and Gemini foundational models. With Gemini foundational models, Retrieval-Augmented Generation (RAG), and other advanced techniques, the focus remains on delivering high-quality outputs from the models while driving rapid innovation in a reimagined user experience (UX). This experience is designed to be both collaborative and conversational, making it accessible and appealing to a wide audience.`,
    desc_vn: `Một trợ lý AI được thiết kế để tăng tốc các quy trình làm việc phân tích trong Looker, hỗ trợ các tác vụ như tạo và cấu hình trực quan hóa, xây dựng công thức, mô hình hóa dữ liệu, tạo báo cáo và hơn thế nữa — tất cả được hỗ trợ bởi một lớp ngữ nghĩa mạnh mẽ và các mô hình nền tảng Gemini. Với các mô hình nền tảng Gemini, Tạo sinh Tăng cường Truy xuất (RAG) và các kỹ thuật tiên tiến khác, trọng tâm vẫn là cung cấp đầu ra chất lượng cao từ các mô hình trong khi thúc đẩy đổi mới nhanh chóng trong trải nghiệm người dùng (UX) được tái tưởng tượng. Trải nghiệm này được thiết kế để vừa cộng tác vừa hội thoại, làm cho nó dễ tiếp cận và hấp dẫn đối với nhiều đối tượng.`,
    img: "/assets/images/image107.png",
  },
  {
    title: "Looker reports: Reporting with enterprise trust",
    title_vn: "Báo cáo Looker: Báo cáo với niềm tin doanh nghiệp",
    id: "looker-reports-reporting-with-enterprise-trust",
    desc: `Looker reports introduce a new approach to data exploration by combining self-service ad-hoc analysis with robust governance.
      With Looker reports, users can interact with data in innovative ways within their Looker environment. These reports feature an intuitive drag-and-drop canvas and visually stunning dashboard capabilities. Your entire organization can craft compelling data stories by tapping into a wide array of data sources. Built on a foundation of Looker's unified user management and governance features, Looker ensures that expanded freedoms never compromise data integrity.
      With the trusted Looker platform, beautiful visualizations and powerful insights are truly within reach for everyone.`,
    desc_vn: `Báo cáo Looker giới thiệu một cách tiếp cận mới để khám phá dữ liệu bằng cách kết hợp phân tích tùy chỉnh tự phục vụ với quản trị mạnh mẽ.
      Với báo cáo Looker, người dùng có thể tương tác với dữ liệu theo những cách sáng tạo trong môi trường Looker của họ. Các báo cáo này có tính năng canvas kéo thả trực quan và khả năng bảng điều khiển trực quan tuyệt đẹp. Toàn bộ tổ chức của bạn có thể tạo ra những câu chuyện dữ liệu hấp dẫn bằng cách khai thác nhiều nguồn dữ liệu. Được xây dựng trên nền tảng quản lý người dùng thống nhất và tính năng quản trị của Looker, Looker đảm bảo rằng các quyền tự do mở rộng không bao giờ ảnh hưởng đến tính toàn vẹn dữ liệu.
      Với nền tảng Looker đáng tin cậy, các trực quan hóa đẹp mắt và thông tin chi tiết mạnh mẽ thực sự nằm trong tầm tay của mọi người.`,
    img: "/assets/images/image170.png",
  },
  {
    title: "Empower Users with Self-Service Analytics",
    title_vn: "Trao Quyền cho Người Dùng với Phân tích Tự Phục Vụ",
    id: "empower-users-with-self-service-analytics",
    desc: `Looker provides two powerful tools for self-service analytics: Looker and Looker Studio.
      <br/> <br/>Looker offers enterprise dashboards that are real-time, built on governed data, and designed for repeatable analysis. Users can explore existing tiles, ask new questions, expand filters, and drill down to row-level details to fully understand the data behind a metric.
      <br/> <br/> Looker Studio enables users to create interactive, collaborative, and ad hoc reports and dashboards with access to over 800 data sources and connectors. Featuring a flexible drag-and-drop canvas, it allows ad hoc analysis on both governed and unstructured data. Best of all, it's free, fast, and easy to get started.
      `,
    desc_vn: `Looker cung cấp hai công cụ mạnh mẽ cho phân tích tự phục vụ: Looker và Looker Studio.
      <br/> <br/>Looker cung cấp bảng điều khiển doanh nghiệp theo thời gian thực, được xây dựng trên dữ liệu được quản lý và được thiết kế cho phân tích có thể lặp lại. Người dùng có thể khám phá các ô hiện có, đặt câu hỏi mới, mở rộng bộ lọc và đi sâu vào chi tiết cấp hàng để hiểu đầy đủ dữ liệu đằng sau một chỉ số.
      <br/> <br/> Looker Studio cho phép người dùng tạo báo cáo và bảng điều khiển tương tác, cộng tác và tùy chỉnh với quyền truy cập vào hơn 800 nguồn dữ liệu và bộ kết nối. Với canvas kéo thả linh hoạt, nó cho phép phân tích tùy chỉnh trên cả dữ liệu được quản lý và không có cấu trúc. Tốt nhất là, nó miễn phí, nhanh chóng và dễ dàng bắt đầu.
      `,
    img: "/assets/images/image227.png",
  },
  {
    title: "Create Custom Data Apps with Looker's Embedded Analytics",
    title_vn: "Tạo Ứng dụng Dữ liệu Tùy chỉnh với Phân tích Nhúng của Looker",
    id: "create-custom-data-apps-with-looker-s-embedded-analytics",
    desc: `Embedded analytics goes beyond simply placing dashboards in applications. It's about transforming data into deeply integrated, value-driving experiences. With Looker, fully interactive dashboards can be seamlessly embedded into your applications.

      <br/> <br/> Looker's robust API coverage enables you to perform nearly anything that can be done through the user interface directly via the API. This opens up limitless possibilities to create data experiences that go beyond traditional dashboards.
      <br/> <br/> Additionally, Looker extensions integrate seamlessly with Vertex AI, enabling powerful custom AI workflows and advanced analytics directly within your Looker instance. `,
    desc_vn: `Phân tích nhúng vượt xa việc đơn giản đặt bảng điều khiển trong ứng dụng. Đó là về việc biến đổi dữ liệu thành trải nghiệm tích hợp sâu, thúc đẩy giá trị. Với Looker, các bảng điều khiển hoàn toàn tương tác có thể được nhúng liền mạch vào ứng dụng của bạn.

      <br/> <br/> Phạm vi API mạnh mẽ của Looker cho phép bạn thực hiện gần như bất cứ điều gì có thể được thực hiện thông qua giao diện người dùng trực tiếp qua API. Điều này mở ra vô số khả năng để tạo trải nghiệm dữ liệu vượt xa các bảng điều khiển truyền thống.
      <br/> <br/> Ngoài ra, các tiện ích mở rộng Looker tích hợp liền mạch với Vertex AI, cho phép các quy trình làm việc AI tùy chỉnh mạnh mẽ và phân tích nâng cao trực tiếp trong phiên bản Looker của bạn. `,
    img: "/assets/images/image291.png",
  },
];

export { firstOverview, lookerMainFeatures, LookerAdvancedFeatures };
