interface ITableCardContent {
  product: string;
  product_vn?: string;
  desc: string;
  desc_vn?: string;
  features: string[];
  features_vn?: string[];
  img?: string[];
  video?: string[];
}
const GOOGLE_CLOUD_DATABASE_PRODUCTS: ITableCardContent[] = [
  {
    product: "AlloyDB for PostgreSQL",
    product_vn: "AlloyDB cho PostgreSQL",
    desc: "Fully managed, PostgreSQL-compatible database for enterprise workloads.",
    desc_vn:
      "Cơ sở dữ liệu tương thích PostgreSQL được quản lý hoàn toàn cho tác vụ doanh nghiệp.",
    features: [
      "Better price-performance",
      "Fully featured vector database",
      "Runs anywhere",
      "AI-driven development and operations",
      "Real-time business insights",
    ],
    features_vn: [
      "Hiệu suất giá tốt hơn",
      "Cơ sở dữ liệu vector đầy đủ tính năng",
      "Chạy ở mọi nơi",
      "Phát triển và vận hành được điều khiển bởi AI",
      "Thông tin chi tiết kinh doanh thời gian thực",
    ],
    video: ["https://www.youtube.com/embed/Kl8ig2BtLAY"],
  },
  {
    product: "Cloud SQL",
    product_vn: "Cloud SQL",
    desc: "Fully managed database for MySQL, PostgreSQL, and SQL Server.",
    desc_vn:
      "Cơ sở dữ liệu được quản lý hoàn toàn cho MySQL, PostgreSQL và SQL Server.",
    features: [
      "Fully managed",
      "Price performance options",
      "High availability with near sub-second downtime maintenance",
      "Gemini in Cloud SQL",
      "Firebase Data Connect",
    ],
    features_vn: [
      "Được quản lý hoàn toàn",
      "Tùy chọn hiệu suất giá",
      "Khả dụng cao với bảo trì thời gian ngừng hoạt động gần như dưới một giây",
      "Gemini trong Cloud SQL",
      "Firebase Data Connect",
    ],
    video: ["https://www.youtube.com/embed/ZMQ2n6i-7jw"],
  },
  {
    product: "Firestore",
    product_vn: "Firestore",
    desc: "Cloud-native document database for building rich mobile, web, and IoT apps.",
    desc_vn:
      "Cơ sở dữ liệu tài liệu gốc đám mây để xây dựng ứng dụng di động, web và IoT phong phú.",
    features: [
      "Firestore with MongoDB compatibility",
      "Serverless",
      "Gen AI functionality",
      "Powerful query engine",
      "Real-time synchronization and offline mode",
    ],
    features_vn: [
      "Firestore tương thích với MongoDB",
      "Serverless",
      "Chức năng Gen AI",
      "Công cụ truy vấn mạnh mẽ",
      "Đồng bộ hóa thời gian thực và chế độ ngoại tuyến",
    ],
    video: ["https://www.youtube.com/embed/8DYWeI4Yc8Q"],
  },
  {
    product: "Spanner",
    product_vn: "Spanner",
    desc: "Cloud-native relational database with unlimited scale and 99.999% availability.",
    desc_vn:
      "Cơ sở dữ liệu quan hệ gốc đám mây với khả năng mở rộng không giới hạn và khả dụng 99.999%.",
    features: [
      "Multi-model: one database, many possibilities",
      "Effortless scalability",
      "Always On availability",
      "Guaranteed consistent transactions",
      "Trusted security and compliance",
    ],
    features_vn: [
      "Đa mô hình: một cơ sở dữ liệu, nhiều khả năng",
      "Khả năng mở rộng dễ dàng",
      "Khả dụng luôn bật",
      "Giao dịch nhất quán được đảm bảo",
      "Bảo mật và tuân thủ đáng tin cậy",
    ],
    img: [
      "https://lh3.googleusercontent.com/I4aWsrbOMaPV_Q-vj02JkyWeY9x_4NBr01XeVe5s7Jk6F1tTFPRqfCRO9-7-1brkLJ6y1Yo1UtA=s472-w472",
    ],
  },
  {
    product: "Bigtable",
    product_vn: "Bigtable",
    desc: "Cloud-native wide-column database for large-scale, low-latency workloads.",
    desc_vn:
      "Cơ sở dữ liệu cột rộng gốc đám mây cho tác vụ quy mô lớn, độ trễ thấp.",
    features: [
      "Low latency and high throughput",
      "Write and read scalability with no limits",
      "SQL and continuous materialized views",
      "Data model flexibility",
      "Easy migration from NoSQL databases",
    ],
    features_vn: [
      "Độ trễ thấp và thông lượng cao",
      "Khả năng mở rộng đọc và ghi không giới hạn",
      "SQL và khung nhìn vật chất hóa liên tục",
      "Linh hoạt mô hình dữ liệu",
      "Dễ dàng di chuyển từ cơ sở dữ liệu NoSQL",
    ],
    video: ["https://www.youtube.com/embed/P4q4nqJAamo"],
  },
  {
    product: "Datastream",
    product_vn: "Datastream",
    desc: "Serverless change data capture and replication service.",
    desc_vn: "Dịch vụ bắt và sao chép dữ liệu thay đổi serverless.",
    features: [
      "Streaming data from relational databases",
      "Reliable pipelines with advanced recovery",
      "Schema drift resolution",
      "Secure by design",
    ],
    features_vn: [
      "Dữ liệu streaming từ cơ sở dữ liệu quan hệ",
      "Pipeline đáng tin cậy với khôi phục nâng cao",
      "Giải quyết trôi lược đồ",
      "Bảo mật theo thiết kế",
    ],
    video: ["https://www.youtube.com/embed/vMo6Zgkvt40"],
  },
  {
    product: "Database Migration Service",
    product_vn: "Dịch vụ Di chuyển Cơ sở dữ liệu",
    desc: "Serverless, minimal downtime migrations to Cloud SQL.",
    desc_vn:
      "Di chuyển serverless, thời gian ngừng hoạt động tối thiểu sang Cloud SQL.",
    features: [
      "Easy to use",
      "Gemini in Database Migration Service",
      "Integrated conversion and migration",
      "Serverless experience",
      "Secure by design",
    ],
    features_vn: [
      "Dễ sử dụng",
      "Gemini trong Dịch vụ Di chuyển Cơ sở dữ liệu",
      "Chuyển đổi và di chuyển tích hợp",
      "Trải nghiệm serverless",
      "Bảo mật theo thiết kế",
    ],
    video: ["https://www.youtube.com/embed/3LjpirPFc2g"],
  },
  {
    product: "Bare Metal Solution",
    product_vn: "Giải pháp Bare Metal",
    desc: "Fully managed infrastructure for your Oracle workloads.",
    desc_vn: "Cơ sở hạ tầng được quản lý hoàn toàn cho tác vụ Oracle của bạn.",
    features: [
      "Seamlessly access all Oracle capabilities",
      "Integrated support and billing",
      "Industry-leading data protection",
      "Tools and services to simplify operations",
    ],
    features_vn: [
      "Truy cập liền mạch tất cả khả năng Oracle",
      "Hỗ trợ và thanh toán tích hợp",
      "Bảo vệ dữ liệu hàng đầu ngành",
      "Công cụ và dịch vụ để đơn giản hóa hoạt động",
    ],
    video: ["https://www.youtube.com/embed/Fok5vapGYrA"],
  },
  {
    product: "Memorystore",
    product_vn: "Memorystore",
    desc: "Fully managed Redis and Memcached for sub-millisecond data access.",
    desc_vn:
      "Redis và Memcached được quản lý hoàn toàn cho truy cập dữ liệu dưới mili giây.",
    features: [
      "Choice of engines",
      "Connectivity",
      "Vector search",
      "Fully managed",
    ],
    features_vn: [
      "Lựa chọn động cơ",
      "Kết nối",
      "Tìm kiếm vector",
      "Được quản lý hoàn toàn",
    ],
    video: ["https://www.youtube.com/embed/klxZlxrZc_Q&t=2s"],
  },
];

export { GOOGLE_CLOUD_DATABASE_PRODUCTS };
