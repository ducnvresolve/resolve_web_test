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
const GOOGLE_CLOUD_STORAGE_PRODUCTS: ITableCardContent[] = [
  {
    product: "Cloud Storage",
    product_vn: "Cloud Storage",
    desc: "Object storage that's secure, durable, and scalable.",
    desc_vn: "Lưu trữ đối tượng an toàn, bền bỉ và có thể mở rộng.",
    features: [
      "Automatically transition to lower-cost storage classes",
      "Standard, nearline, coldline, and archive storage options",
      "Fast, low-cost, highly durable archive and backup storage",
    ],
    features_vn: [
      "Tự động chuyển đổi sang các lớp lưu trữ chi phí thấp hơn",
      "Tùy chọn lưu trữ tiêu chuẩn, nearline, coldline và lưu trữ",
      "Lưu trữ và sao lưu nhanh, chi phí thấp, độ bền cao",
    ],
    video: ["https://www.youtube.com/embed/wNOs3LlsH6k"],
  },
  {
    product: "Block Storage",
    product_vn: "Block Storage",
    desc: "High-performance storage for AI, analytics, databases, and enterprise applications.",
    desc_vn:
      "Lưu trữ hiệu suất cao cho AI, phân tích, cơ sở dữ liệu và ứng dụng doanh nghiệp.",
    features: [
      "Deliver 500K IOPS and 10 GiB/s to power the most demanding applications",
      "Reduce TCO by up to 40% for workloads like databases with Storage Pools",
      "Achieve a near-zero RPO with Instant Snapshots",
    ],
    features_vn: [
      "Cung cấp 500K IOPS và 10 GiB/s để hỗ trợ các ứng dụng đòi hỏi cao nhất",
      "Giảm TCO lên đến 40% cho các tác vụ như cơ sở dữ liệu với Storage Pools",
      "Đạt RPO gần như bằng không với Instant Snapshots",
    ],
    video: ["https://www.youtube.com/embed/QNpOm_nuZVU"],
  },
  {
    product: "Filestore",
    product_vn: "Filestore",
    desc: "File storage that is highly scalable and secure.",
    desc_vn: "Lưu trữ tệp có khả năng mở rộng cao và an toàn.",
    features: [
      "Scales to meet needs of high performance workloads",
      "99.99% regional availability SLA supports enterprise apps",
      "Protect your data with backups and snapshots",
      "Support GKE workloads with Filestore",
      "Scale GCVE datastore capacity independently from compute",
    ],
    features_vn: [
      "Mở rộng để đáp ứng nhu cầu của các tác vụ hiệu suất cao",
      "SLA khả dụng khu vực 99.99% hỗ trợ ứng dụng doanh nghiệp",
      "Bảo vệ dữ liệu của bạn với sao lưu và snapshot",
      "Hỗ trợ tác vụ GKE với Filestore",
      "Mở rộng dung lượng datastore GCVE độc lập với tính toán",
    ],
    video: ["https://www.youtube.com/embed/cDDvTEpqtUs"],
  },
  {
    product: "Persistent Disk",
    product_vn: "Persistent Disk",
    desc: "Block storage for virtual machine instances running on Google Cloud.",
    desc_vn: "Lưu trữ khối cho các instance máy ảo chạy trên Google Cloud.",
    features: [
      "High-performance block storage for any workload",
      "Durability and availability that keep your business running",
      "Automatic security and encryption",
      "Data protection for business continuity",
    ],
    features_vn: [
      "Lưu trữ khối hiệu suất cao cho mọi tác vụ",
      "Độ bền và khả dụng giúp doanh nghiệp của bạn hoạt động liên tục",
      "Bảo mật và mã hóa tự động",
      "Bảo vệ dữ liệu cho tính liên tục kinh doanh",
    ],
    video: ["https://www.youtube.com/embed/zovhVfou-DI"],
  },
  {
    product: "Cloud Storage for Firebase",
    product_vn: "Cloud Storage cho Firebase",
    desc: "Object storage for storing and serving user-generated content.",
    desc_vn:
      "Lưu trữ đối tượng để lưu trữ và phục vụ nội dung do người dùng tạo.",
    features: [
      "Store your users' photos and videos",
      "Build at Google scale",
      "Automatic Scaling with Cloud Functions",
      "Strong user-based security",
    ],
    features_vn: [
      "Lưu trữ ảnh và video của người dùng",
      "Xây dựng ở quy mô Google",
      "Tự động mở rộng với Cloud Functions",
      "Bảo mật mạnh mẽ dựa trên người dùng",
    ],
    video: ["https://www.youtube.com/embed/-IFRVMEhZDc"],
  },
  {
    product: "Local SSD",
    product_vn: "Local SSD",
    desc: "Block storage that is locally attached for high-performance needs.",
    desc_vn: "Lưu trữ khối được gắn cục bộ cho nhu cầu hiệu suất cao.",
    features: [
      "Fastest IOPS and high-speed throughput",
      "Scale as you need it",
      "Customizable VM shapes",
    ],
    features_vn: [
      "IOPS nhanh nhất và thông lượng tốc độ cao",
      "Mở rộng theo nhu cầu của bạn",
      "Hình dạng VM có thể tùy chỉnh",
    ],
    video: ["https://www.youtube.com/embed/TEyV9QmvXDQ"],
  },
  {
    product: "Storage Transfer Service",
    product_vn: "Dịch vụ Chuyển Lưu trữ",
    desc: "Data transfers from online and on-premises sources to Cloud Storage.",
    desc_vn:
      "Chuyển dữ liệu từ nguồn trực tuyến và tại chỗ sang Cloud Storage.",
    features: [
      "Data encryption and validation",
      "Incremental transfer",
      "Metadata preservation",
    ],
    features_vn: [
      "Mã hóa và xác thực dữ liệu",
      "Chuyển tăng dần",
      "Bảo toàn metadata",
    ],
    video: ["https://www.youtube.com/embed/1oIw2mT_4-M"],
  },
  {
    product: "Parallelstore",
    product_vn: "Parallelstore",
    desc: "High performance, managed parallel file service.",
    desc_vn: "Dịch vụ tệp song song được quản lý hiệu suất cao.",
    features: [
      "Fast, scalable performance",
      "Accelerate time to value",
      "Futureproof your architecture",
      "Open source flexibility",
    ],
    features_vn: [
      "Hiệu suất nhanh, có thể mở rộng",
      "Tăng tốc thời gian tạo giá trị",
      "Kiến trúc tương lai",
      "Linh hoạt mã nguồn mở",
    ],
    video: ["https://www.youtube.com/embed/rcRkkZL0NcI"],
  },
  {
    product: "Google Cloud NetApp Volumes",
    product_vn: "Google Cloud NetApp Volumes",
    desc: "File storage service for NFS, SMB, and multi-protocol environments.",
    desc_vn: "Dịch vụ lưu trữ tệp cho môi trường NFS, SMB và đa giao thức.",
    features: [
      "Run enterprise apps faster and more efficiently",
      "Reduce cloud storage costs by up to 90%",
      "Meet mandates for uptime, availability, and security",
    ],
    features_vn: [
      "Chạy ứng dụng doanh nghiệp nhanh hơn và hiệu quả hơn",
      "Giảm chi phí lưu trữ đám mây lên đến 90%",
      "Đáp ứng yêu cầu về thời gian hoạt động, khả dụng và bảo mật",
    ],
    img: [
      "https://www.gstatic.com/bricks/image/z8Ky833sMTCPClAdxz6opROj7OkEdjSD0PbtKhFOF9je0Zvk6Ikh31fvN46nWpLc8qmLixRbHZTF.png",
    ],
  },
  {
    product: "Backup and DR Service",
    product_vn: "Dịch vụ Sao lưu và Khôi phục",
    desc: "Service for centralized, application-consistent data protection.",
    desc_vn: "Dịch vụ bảo vệ dữ liệu tập trung, nhất quán với ứng dụng.",
    features: [
      "Backup vault protects against modification or early deletion",
      "Manage from a simple, centralized interface",
      "Comprehensive monitoring, alerting, and customizable reports",
      "Enforcement and oversight features to keep your organization safe",
    ],
    features_vn: [
      "Kho sao lưu bảo vệ khỏi sửa đổi hoặc xóa sớm",
      "Quản lý từ giao diện tập trung đơn giản",
      "Giám sát toàn diện, cảnh báo và báo cáo tùy chỉnh",
      "Tính năng thực thi và giám sát để giữ an toàn cho tổ chức của bạn",
    ],
    video: ["https://www.youtube.com/embed/d5Frb2HXapw"],
  },
];

export { GOOGLE_CLOUD_STORAGE_PRODUCTS };
