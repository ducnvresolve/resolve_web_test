interface IFeature {
  slug: string;
  icon: string;
  name: string;
  desc: string;
  name_vn: string;
  desc_vn: string;
}

const GOOGLE_CLOUD_FEATURES: IFeature[] = [
  {
    slug: "ai-ml",
    icon: "/assets/images/image21.png",
    name: "AI & Machine Learning",
    desc: "Google Cloud AI & Machine Learning offers advanced tools and APIs to help businesses automate workflows, analyze data, and build intelligent applications at scale, making innovation faster and more secure.",
    name_vn: "AI & Học máy",
    desc_vn:
      "Google Cloud AI & Học máy cung cấp công cụ và API hiện đại giúp doanh nghiệp tự động hóa quy trình, phân tích dữ liệu và phát triển ứng dụng thông minh nhanh chóng, an toàn và hiệu quả.",
  },
  {
    slug: "security",
    icon: "/assets/images/image81.png",
    name: "Security & Identity",
    desc: "Comprehensive security and identity solutions protect your cloud resources, data, and users with advanced threat detection, access controls, and compliance tools for peace of mind and regulatory needs.",
    name_vn: "Bảo mật & Đồng nhất hóa",
    desc_vn:
      "Giải pháp bảo mật và quản lý định danh toàn diện giúp bảo vệ tài nguyên, dữ liệu và người dùng trên đám mây với kiểm soát truy cập, phát hiện mối đe dọa và tuân thủ quy định.",
  },
  {
    slug: "compute",
    icon: "/assets/images/image29.png",
    name: "Compute",
    desc: "Google Cloud Compute lets you create and manage virtual machines on reliable infrastructure, supporting a wide range of workloads from web hosting to AI, with flexible scaling and high availability.",
    name_vn: "Tính toán",
    desc_vn:
      "Google Cloud Compute cho phép tạo và quản lý máy ảo trên hạ tầng tin cậy, đáp ứng đa dạng nhu cầu từ web, AI đến ứng dụng doanh nghiệp với khả năng mở rộng linh hoạt và sẵn sàng cao.",
  },
  {
    slug: "networking",
    // icon: "/assets/images/image27.png",
    icon: "/assets/images/image39.png",
    name: "Networking",
    desc: "Google Cloud Networking delivers fast, secure, and scalable connections between your cloud resources, enabling seamless data transfer, global reach, and robust protection against network threats.",
    name_vn: "Mạng",
    desc_vn:
      "Google Cloud Networking cung cấp kết nối nhanh, an toàn và mở rộng giữa các tài nguyên đám mây, hỗ trợ truyền dữ liệu liền mạch, phạm vi toàn cầu và bảo vệ mạnh mẽ trước các mối đe dọa mạng.",
  },
  {
    slug: "containers",
    // icon: "/assets/images/image273.png",
    icon: "/assets/images/image27.png",
    name: "Containers",
    desc: "Deploy, manage, and scale containerized applications easily with Google Cloud's Kubernetes and container services, ensuring high performance, automation, and seamless integration with your workflows.",
    name_vn: "Hệ thống container",
    desc_vn:
      "Triển khai, quản lý và mở rộng ứng dụng container dễ dàng với dịch vụ Kubernetes của Google Cloud, đảm bảo hiệu năng cao, tự động hóa và tích hợp liền mạch với quy trình doanh nghiệp.",
  },
  {
    slug: "api-management",
    icon: "/assets/images/image96.png",
    name: "API Management",
    desc: "Google Cloud API Management helps you design, secure, and monitor APIs at scale, enabling seamless integration, analytics, and access control for your applications and partners.",
    name_vn: "Quản lý API",
    desc_vn:
      "Quản lý API của Google Cloud giúp thiết kế, bảo mật và giám sát API ở quy mô lớn, hỗ trợ tích hợp liền mạch, phân tích và kiểm soát truy cập cho ứng dụng và đối tác.",
  },
  {
    slug: "storage",
    // icon: "/assets/images/image39.png",
    icon: "/assets/images/image117.png",
    name: "Storage",
    desc: "Google Cloud Storage provides secure, durable, and scalable storage for all your data needs, supporting backup, archiving, and real-time access with high availability and global reach.",
    name_vn: "Lưu trữ",
    desc_vn:
      "Google Cloud Storage cung cấp lưu trữ an toàn, bền vững và mở rộng cho mọi nhu cầu dữ liệu, hỗ trợ sao lưu, lưu trữ lâu dài và truy cập thời gian thực với độ sẵn sàng cao.",
  },
  {
    slug: "database",
    icon: "/assets/images/image1230.png",
    name: "Database",
    desc: "Managed database services on Google Cloud support SQL and NoSQL workloads, offering high performance, automatic scaling, and built-in security for mission-critical applications.",
    name_vn: "Cơ sở dữ liệu",
    desc_vn:
      "Dịch vụ cơ sở dữ liệu quản lý trên Google Cloud hỗ trợ cả SQL và NoSQL, mang lại hiệu năng cao, tự động mở rộng và bảo mật tích hợp cho các ứng dụng quan trọng.",
  },
  {
    slug: "data-analytics",
    icon: "/assets/images/image222.png",
    name: "Data Analytics",
    desc: "Google Cloud Data Analytics offers powerful tools to process, analyze, and visualize large datasets, helping businesses gain actionable insights and make data-driven decisions efficiently.",
    name_vn: "Phân tích dữ liệu",
    desc_vn:
      "Google Cloud Data Analytics cung cấp công cụ mạnh mẽ để xử lý, phân tích và trực quan hóa dữ liệu lớn, giúp doanh nghiệp khai thác giá trị và ra quyết định hiệu quả.",
  },
];

export { GOOGLE_CLOUD_FEATURES };
