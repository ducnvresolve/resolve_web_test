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
const GOOGLE_CLOUD_API_MANAGEMENT_PRODUCTS: ITableCardContent[] = [
  {
    product: "Apigee (API Management by Google Cloud)",
    product_vn: "Apigee (Quản lý API)",
    desc: "Apigee is a powerful platform to develop, secure, monitor, and manage APIs through a proxy layer. It enables authentication, rate limiting, analytics, and monetization while providing a consistent and secure API interface for all backend services.",
    desc_vn:
      "Apigee là một nền tảng mạnh mẽ để phát triển, bảo mật, giám sát và quản lý API thông qua một lớp proxy. Nền tảng này cho phép xác thực, giới hạn tốc độ, phân tích và kiếm tiền, đồng thời cung cấp một giao diện API nhất quán và an toàn cho tất cả các dịch vụ backend.",
    features: [
      "Security & policy management: Control access, apply transformations, and enforce custom logic.",
      "Monitoring & analytics: Track usage, performance, and availability.",
      "Monetization: Bill and manage API usage.",
      "Developer portal: Share documentation and updates.",
      "Flexibility: Abstract backend changes, support XML/JSON, and manage API lifecycle.",
    ],
    features_vn: [
      "Quản lý bảo mật & chính sách: Kiểm soát truy cập, áp dụng chuyển đổi và thực thi logic tùy chỉnh.",
      "Giám sát & phân tích: Theo dõi việc sử dụng, hiệu suất và tính khả dụng.",
      "Kiếm tiền: Tính phí và quản lý việc sử dụng API.",
      "Cổng thông tin nhà phát triển: Chia sẻ tài liệu và cập nhật.",
      "Linh hoạt: Trừu tượng hóa các thay đổi backend, hỗ trợ XML/JSON và quản lý vòng đời API.",
    ],
    img: ["/assets/images/image197.png", "/assets/images/image224.png"],
  },
];

export { GOOGLE_CLOUD_API_MANAGEMENT_PRODUCTS };
