interface IFeature {
  slug: string;
  icon: string;
  name: string;
  name_vn?: string;
  desc: string;
  desc_vn: string;
}

const VIETTEL_CLOUD_FEATURES: IFeature[] = [
  {
    slug: "compute",
    icon: "/images/viettel-cloud/dien-toan-dam-may-01.svg",
    name: "Compute",
    desc: "Flexible and scalable virtual server resources for all business needs.",
    desc_vn:
      "Tài nguyên máy chủ ảo linh hoạt, dễ mở rộng cho mọi nhu cầu doanh nghiệp.",
  },
  {
    slug: "networking",
    icon: "/images/viettel-cloud/ket-noi-01.svg",
    name: "Networking",
    desc: "Secure and fast network connections between cloud resources.",
    desc_vn: "Kết nối mạng an toàn, tốc độ cao giữa các tài nguyên đám mây.",
  },
  {
    slug: "storage",
    icon: "/images/viettel-cloud/luu-tru-dam-may-01.svg",
    name: "Storage",
    desc: "Reliable cloud storage for data backup and sharing.",
    desc_vn: "Lưu trữ đám mây tin cậy cho sao lưu và chia sẻ dữ liệu.",
  },
  {
    slug: "backup",
    icon: "/images/viettel-cloud/sao-luu-dam-may-01.svg",
    name: "Backup",
    desc: "Automatic backup solutions to protect your business data.",
    desc_vn: "Giải pháp sao lưu tự động bảo vệ dữ liệu doanh nghiệp.",
  },
  {
    slug: "database",
    icon: "/images/viettel-cloud/co-so-du-lieu-dam-may-01.svg",
    name: "Database",
    desc: "Managed database services for easy deployment and operation.",
    desc_vn: "Dịch vụ cơ sở dữ liệu quản lý, dễ triển khai và vận hành.",
  },
];

export { VIETTEL_CLOUD_FEATURES };
