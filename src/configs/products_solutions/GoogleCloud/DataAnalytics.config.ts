interface ITableCardContent {
  product: string;
  desc: string;
  features: string[];
  img?: string[];
  video?: string[];
  product_vn?: string;
  desc_vn?: string;
  features_vn?: string[];
}
const GOOGLE_CLOUD_DATA_ANALYTICS_PRODUCTS: ITableCardContent[] = [
  {
    product: "BigQuery",
    product_vn: "BigQuery",
    desc: "BigQuery is the autonomous data to AI platform, automating the entire data life cycle, from ingestion to AI-driven insights, so you can go from data to AI to action faster. Gemini in BigQuery features are now included in BigQuery pricing models.",
    desc_vn:
      "BigQuery là nền tảng dữ liệu tự động hóa đến AI, tự động hóa toàn bộ vòng đời dữ liệu, từ thu thập đến thông tin chi tiết dựa trên AI, giúp bạn chuyển từ dữ liệu sang AI đến hành động nhanh hơn. Các tính năng Gemini trong BigQuery hiện đã được bao gồm trong mô hình định giá BigQuery.",
    features: [
      "Connect your data to AI",
      "Built-in AI agents and workflow automation",
      "Your choice of open source and open formats",
    ],
    features_vn: [
      "Kết nối dữ liệu của bạn với AI",
      "Tác nhân AI tích hợp và tự động hóa quy trình làm việc",
      "Lựa chọn mã nguồn mở và định dạng mở của bạn",
    ],
    video: ["https://www.youtube.com/embed/-MWIHAH4cbA"],
  },
  {
    product: "Looker",
    product_vn: "Looker",
    desc: "Build the foundation for responsible data insights with Looker. Leveraging Google's deep roots and track record of AI-led innovation, Looker delivers the most intelligent BI solution by combining foundational AI, cloud-first infrastructure, industry leading APIs, and our flexible semantic layer.",
    desc_vn:
      "Xây dựng nền tảng cho thông tin chi tiết dữ liệu có trách nhiệm với Looker. Tận dụng nền tảng sâu rộng và thành tích đổi mới dẫn đầu bởi AI của Google, Looker cung cấp giải pháp BI thông minh nhất bằng cách kết hợp AI nền tảng, cơ sở hạ tầng ưu tiên đám mây, API hàng đầu ngành và lớp ngữ nghĩa linh hoạt của chúng tôi.",
    features: [
      "Transform your data landscape into a unified, trusted source for AI and human analysis alike with Looker's universal semantic modeling layer",
      "Gemini in Looker: AI-powered analytics for self-service BI",
      "Looker reports: Google-easy reporting with enterprise trust",
    ],
    features_vn: [
      "Chuyển đổi cảnh quan dữ liệu của bạn thành nguồn thống nhất, đáng tin cậy cho cả phân tích AI và con người với lớp mô hình ngữ nghĩa phổ quát của Looker",
      "Gemini trong Looker: Phân tích dựa trên AI cho BI tự phục vụ",
      "Báo cáo Looker: Báo cáo dễ dàng kiểu Google với độ tin cậy doanh nghiệp",
    ],
    video: ["https://www.youtube.com/embed/njhSTmazy2k"],
  },
  {
    product: "Dataflow",
    product_vn: "Dataflow",
    desc: "Maximize the potential of your real-time data. Dataflow is a fully managed streaming platform that is easy-to-use and scalable to help accelerate real-time decision making and customer experiences.",
    desc_vn:
      "Tối đa hóa tiềm năng của dữ liệu thời gian thực của bạn. Dataflow là nền tảng streaming được quản lý đầy đủ, dễ sử dụng và có thể mở rộng để giúp tăng tốc quá trình ra quyết định thời gian thực và trải nghiệm khách hàng.",
    features: [
      "Use streaming AI and ML to power gen AI models in real time",
      "Enable advanced streaming use cases at enterprise scale",
      "Deploy multimodal data processing for gen AI",
    ],
    features_vn: [
      "Sử dụng AI và ML streaming để cung cấp năng lượng cho các mô hình AI tạo sinh trong thời gian thực",
      "Kích hoạt các trường hợp sử dụng streaming nâng cao ở quy mô doanh nghiệp",
      "Triển khai xử lý dữ liệu đa phương thức cho AI tạo sinh",
    ],
    video: ["https://www.youtube.com/embed/XdsuDOQ9nkU"],
  },
  {
    product: "Pub/Sub",
    product_vn: "Pub/Sub",
    desc: "Ingest events for streaming into BigQuery, data lakes or operational databases.",
    desc_vn:
      "Thu thập sự kiện để streaming vào BigQuery, data lakes hoặc cơ sở dữ liệu vận hành.",
    features: [
      "Stream analytics and connectors",
      "In-order delivery at scale",
      "Simplified streaming ingestion with native integrations",
    ],
    features_vn: [
      "Phân tích và kết nối streaming",
      "Giao hàng theo thứ tự ở quy mô lớn",
      "Thu thập streaming đơn giản hóa với tích hợp gốc",
    ],
    video: ["https://www.youtube.com/embed/jLI-84UjZLE"],
  },
  {
    product: "Dataproc",
    product_vn: "Dataproc",
    desc: "Run fully managed Apache Spark, Hadoop, and 30+ open source framework clusters with ease and control. Accelerate Spark on Compute Engine with Lightning Engine and integrate with Google Cloud's open lakehouse.",
    desc_vn:
      "Chạy các cụm Apache Spark, Hadoop và hơn 30 framework mã nguồn mở được quản lý đầy đủ một cách dễ dàng và kiểm soát. Tăng tốc Spark trên Compute Engine với Lightning Engine và tích hợp với open lakehouse của Google Cloud.",
    features: [
      "Robust Hadoop ecosystem support",
      "Managed Spark with Lightning Engine",
      "Flexible cluster configuration and management",
    ],
    features_vn: [
      "Hỗ trợ hệ sinh thái Hadoop mạnh mẽ",
      "Spark được quản lý với Lightning Engine",
      "Cấu hình và quản lý cụm linh hoạt",
    ],
    img: [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgaXChye8gk2Fttm9BEPSbWxv5ahZPqwWXWeRsk9m8Qti55oJyiIS6IA7TOG_cdXrS-ABKm6bEGehGDyXkBwpEvZhwKWvVxriX0OoYP5KdrtvsK4HrR-UA15wN3sNMxjX9r4xoliWXsW_rT/s640/Dataproc.png",
    ],
  },
  {
    product: "Dataform",
    product_vn: "Dataform",
    desc: "Develop and operationalize scalable data transformations pipelines in BigQuery using SQL.",
    desc_vn:
      "Phát triển và vận hành hóa các pipeline chuyển đổi dữ liệu có thể mở rộng trong BigQuery bằng SQL.",
    features: [
      "Open source, SQL-based language to manage data transformations",
      "Fully managed, serverless orchestration for data pipelines",
      "Fully featured cloud development environment to develop with SQL",
    ],
    features_vn: [
      "Ngôn ngữ dựa trên SQL, mã nguồn mở để quản lý chuyển đổi dữ liệu",
      "Điều phối serverless, được quản lý đầy đủ cho các pipeline dữ liệu",
      "Môi trường phát triển đám mây đầy đủ tính năng để phát triển với SQL",
    ],
    video: ["https://www.youtube.com/embed/285HnXL9_rk"],
  },
  {
    product: "Dataplex",
    product_vn: "Dataplex",
    desc: "Centrally discover, manage, monitor, and govern data and AI artifacts across your data platform, providing access to trusted data and powering analytics and AI at scale.",
    desc_vn:
      "Khám phá, quản lý, giám sát và điều hành dữ liệu và tạo phẩm AI một cách tập trung trên nền tảng dữ liệu của bạn, cung cấp quyền truy cập vào dữ liệu đáng tin cậy và cung cấp năng lượng cho phân tích và AI ở quy mô lớn.",
    features: [
      "Data to AI governance with Vertex AI integration",
      "Data governance in BigQuery",
      "Gen AI powered insights and semantic search",
    ],
    features_vn: [
      "Quản trị dữ liệu đến AI với tích hợp Vertex AI",
      "Quản trị dữ liệu trong BigQuery",
      "Thông tin chi tiết và tìm kiếm ngữ nghĩa được cung cấp bởi Gen AI",
    ],
    img: [
      "https://storage.googleapis.com/gweb-cloudblog-publish/images/3_dataplex.max-2000x2000.jpg",
    ],
  },
  {
    product: "Earth Engine",
    product_vn: "Earth Engine",
    desc: "Improve sustainability and climate resilience decision-making with Earth Engine's curated geospatial data catalog and the large-scale computing and advanced AI of Google Cloud.",
    desc_vn:
      "Cải thiện quá trình ra quyết định về tính bền vững và khả năng phục hồi khí hậu với danh mục dữ liệu không gian địa lý được quản lý của Earth Engine và khả năng tính toán quy mô lớn cùng AI tiên tiến của Google Cloud.",
    features: [
      "Earth Engine in BigQuery",
      "Earth Engine and BigQuery interoperability",
      "90+ petabytes of analysis-ready geospatial data",
    ],
    features_vn: [
      "Earth Engine trong BigQuery",
      "Khả năng tương tác giữa Earth Engine và BigQuery",
      "Hơn 90 petabyte dữ liệu không gian địa lý sẵn sàng cho phân tích",
    ],
    video: ["https://www.youtube.com/embed/CKYPhCwyoy4"],
  },
  {
    product: "Cloud Data Fusion",
    product_vn: "Cloud Data Fusion",
    desc: "Fully managed, cloud-native data integration at any scale.",
    desc_vn: "Tích hợp dữ liệu gốc đám mây, được quản lý đầy đủ ở mọi quy mô.",
    features: [
      "Open core, delivering hybrid and multi-cloud integration",
      "Integrated with Google's industry-leading big data tools",
      "Data integration through collaboration and standardization",
    ],
    features_vn: [
      "Lõi mở, cung cấp tích hợp hybrid và đa đám mây",
      "Tích hợp với các công cụ big data hàng đầu ngành của Google",
      "Tích hợp dữ liệu thông qua hợp tác và tiêu chuẩn hóa",
    ],
    video: ["https://www.youtube.com/embed/ySMexrnxfSg"],
  },
  {
    product: "Google Marketing Platform",
    product_vn: "Nền tảng Tiếp thị Google",
    desc: "Google Marketing Platform brings together your advertising and analytics to help you make quality customer connections, surface deeper insights, and drive better marketing results.",
    desc_vn:
      "Nền tảng Tiếp thị Google kết hợp quảng cáo và phân tích của bạn để giúp bạn tạo kết nối khách hàng chất lượng, khám phá thông tin chi tiết sâu hơn và thúc đẩy kết quả tiếp thị tốt hơn.",
    features: [
      "Deliver faster, smarter marketing",
      "Gain more control over your investments",
      "Understand your audience on a deeper level",
      "Share insights across your team",
    ],
    features_vn: [
      "Cung cấp tiếp thị nhanh hơn, thông minh hơn",
      "Có thêm quyền kiểm soát đầu tư của bạn",
      "Hiểu đối tượng của bạn ở mức độ sâu hơn",
      "Chia sẻ thông tin chi tiết trong toàn bộ nhóm của bạn",
    ],
    video: ["https://www.youtube.com/embed/Ew6xHvDfat0"],
  },
  {
    product: "BigLake",
    product_vn: "BigLake",
    desc: "Build an open, managed and high-performance Iceberg lakehouse to enable advanced analytics and data science, with automated data management and built-in governance.",
    desc_vn:
      "Xây dựng lakehouse Iceberg mở, được quản lý và hiệu suất cao để kích hoạt phân tích nâng cao và khoa học dữ liệu, với quản lý dữ liệu tự động và quản trị tích hợp.",
    features: [
      "Interoperable across transactional and analytical data",
      "Unified data management and governance",
      "High performance analytics, streaming and AI with BigQuery",
    ],
    features_vn: [
      "Khả năng tương tác giữa dữ liệu giao dịch và phân tích",
      "Quản lý và quản trị dữ liệu thống nhất",
      "Phân tích hiệu suất cao, streaming và AI với BigQuery",
    ],
    video: ["https://www.youtube.com/embed/TONJ3RlpNZA"],
  },
  {
    product: "Datastream",
    product_vn: "Datastream",
    desc: "Serverless and easy-to-use change data capture and replication service.",
    desc_vn:
      "Dịch vụ bắt và sao chép dữ liệu thay đổi serverless và dễ sử dụng.",
    features: [
      "Streaming data from relational databases",
      "Reliable pipelines with advanced recovery",
      "Schema drift resolution",
    ],
    features_vn: [
      "Streaming dữ liệu từ cơ sở dữ liệu quan hệ",
      "Pipeline đáng tin cậy với khôi phục nâng cao",
      "Giải quyết trôi lệch schema",
    ],
    video: ["https://www.youtube.com/embed/vMo6Zgkvt40"],
  },
  {
    product: "Telecom Data Fabric",
    product_vn: "Telecom Data Fabric",
    desc: "Accelerate telecom data management and analytics with an automated approach, leveraging multiple Google Cloud data and AI/ML products. Democratize data and governance, improving the ability of communication service providers and ISVs to innovate, build analytical applications, and drive automation.",
    desc_vn:
      "Tăng tốc quản lý và phân tích dữ liệu viễn thông với cách tiếp cận tự động, tận dụng nhiều sản phẩm dữ liệu và AI/ML của Google Cloud. Dân chủ hóa dữ liệu và quản trị, cải thiện khả năng của các nhà cung cấp dịch vụ truyền thông và ISV để đổi mới, xây dựng ứng dụng phân tích và thúc đẩy tự động hóa.",
    features: [
      "Build unified experiences from Edge to Cloud",
      "Create faster paths to high-value data",
      "Accelerate your ecosystems with AI",
    ],
    features_vn: [
      "Xây dựng trải nghiệm thống nhất từ Edge đến Cloud",
      "Tạo đường dẫn nhanh hơn đến dữ liệu có giá trị cao",
      "Tăng tốc hệ sinh thái của bạn với AI",
    ],
    img: [
      "https://storage.googleapis.com/gweb-cloudblog-publish/images/1_Telecom_Data_Fabric.max-2000x2000.jpg",
    ],
  },
];

export { GOOGLE_CLOUD_DATA_ANALYTICS_PRODUCTS };
