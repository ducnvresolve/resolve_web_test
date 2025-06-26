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
const GOOGLE_CLOUD_CONTAINERS_PRODUCTS: ITableCardContent[] = [
  {
    product: "Google Kubernetes Engine",
    product_vn: "Google Kubernetes Engine",
    desc: "Managed environment for running containerized apps.",
    desc_vn: "Môi trường được quản lý để chạy các ứng dụng container hóa.",
    features: [
      "Uptime, guaranteed",
      "Fewer disruptions and drops",
      "Connect from anywhere",
      "Flexible, low-cost VPN",
    ],
    features_vn: [
      "Thời gian hoạt động, được đảm bảo",
      "Ít gián đoạn và mất kết nối hơn",
      "Kết nối từ mọi nơi",
      "VPN linh hoạt, chi phí thấp",
    ],
    video: ["https://www.youtube.com/embed/pQ87vVMZK-A"],
  },
  {
    product: "Cloud Run",
    product_vn: "Cloud Run",
    desc: "Fully managed environment for running containerized apps.",
    desc_vn:
      "Môi trường được quản lý đầy đủ để chạy các ứng dụng container hóa.",
    features: [
      "Any language, any library, any binary",
      "Fast autoscaling",
      "On-demand GPSs",
      "Write deploy Cloud Run functions",
      "Automate container build from your source",
    ],
    features_vn: [
      "Bất kỳ ngôn ngữ, thư viện, nhị phân nào",
      "Tự động mở rộng nhanh",
      "GPS theo yêu cầu",
      "Viết triển khai các hàm Cloud Run",
      "Tự động hóa xây dựng container từ mã nguồn của bạn",
    ],
    video: ["https://www.youtube.com/embed/AL2rAmWFZjM"],
  },
  {
    product: "Cloud Build",
    product_vn: "Cloud Build",
    desc: "Solution for running build steps in a Docker container. (Server-less CI/CD)",
    desc_vn:
      "Giải pháp để chạy các bước build trong container Docker. (CI/CD Server-less)",
    features: [
      "Extremely fast builds",
      "Automate your deployments",
      "CI/CD across your network at scale",
      "Commit to deploy in minutes",
      "SLSA level 3 compliance",
    ],
    features_vn: [
      "Build cực kỳ nhanh",
      "Tự động hóa triển khai của bạn",
      "CI/CD trên toàn bộ mạng của bạn ở quy mô lớn",
      "Commit để triển khai trong vài phút",
      "Tuân thủ SLSA cấp 3",
    ],
    video: ["https://www.youtube.com/embed/0mfng-vih_I"],
  },
  {
    product: "Artifact Registry",
    product_vn: "Artifact Registry",
    desc: "Package manager for build artifacts and dependencies.",
    desc_vn: "Trình quản lý gói cho các artifact build và phụ thuộc.",
    features: [
      "A unified control plane for repositories",
      "Granular permission model with Cloud IAM",
      "Repositories in the region of your choice",
      "region wise pricing model",
      "Part of a secure supply chain",
    ],
    features_vn: [
      "Một mặt phẳng điều khiển thống nhất cho các kho lưu trữ",
      "Mô hình quyền chi tiết với Cloud IAM",
      "Kho lưu trữ trong khu vực bạn chọn",
      "Mô hình định giá theo khu vực",
      "Một phần của chuỗi cung ứng an toàn",
    ],
    video: ["https://www.youtube.com/embed/YmsRECPZ0f0"],
  },
  {
    product: "Cloud Code",
    product_vn: "Cloud Code",
    desc: "IDE support to write, run, and debug Kubernetes applications.",
    desc_vn: "Hỗ trợ IDE để viết, chạy và gỡ lỗi các ứng dụng Kubernetes.",
    features: [
      "AI-powered assistance",
      "Remote debugging",
      "Reduce context switching",
      "YAML authoring support",
    ],
    features_vn: [
      "Hỗ trợ được cung cấp bởi AI",
      "Gỡ lỗi từ xa",
      "Giảm chuyển đổi ngữ cảnh",
      "Hỗ trợ tạo YAML",
    ],
    video: ["https://www.youtube.com/embed/lv37ygwXnc4"],
  },
  {
    product: "Cloud Deploy",
    product_vn: "Cloud Deploy",
    desc: "Fully managed continuous delivery to GKE and Cloud Run.",
    desc_vn: "Phân phối liên tục được quản lý đầy đủ đến GKE và Cloud Run.",
    features: [
      "Streamlined continuous delivery",
      "Fully managed single pane of glass",
      "Tightly integrated with Google Cloud",
      "Integrates with the tools you love",
    ],
    features_vn: [
      "Phân phối liên tục được tối ưu hóa",
      "Một cửa sổ quản lý đầy đủ",
      "Tích hợp chặt chẽ với Google Cloud",
      "Tích hợp với các công cụ bạn yêu thích",
    ],
    video: ["https://www.youtube.com/embed/Il8FlhR9jKM"],
  },
  {
    product: "Migrate to Containers",
    product_vn: "Di chuyển đến Containers",
    desc: "Components for migrating VMs into system containers on GKE.",
    desc_vn: "Các thành phần để di chuyển VM vào system containers trên GKE.",
    features: [
      "Craft your ideal migration journey",
      "Upgrade to containers with ease",
      "Capitalize on the benefits of modernization faster",
      "Accelerate adoption of day-two operations",
    ],
    features_vn: [
      "Tạo hành trình di chuyển lý tưởng của bạn",
      "Nâng cấp lên containers một cách dễ dàng",
      "Tận dụng lợi ích của hiện đại hóa nhanh hơn",
      "Tăng tốc áp dụng các hoạt động ngày thứ hai",
    ],
    video: ["https://www.youtube.com/embed/9R87lm5OaLU"],
  },
  {
    product: "Deep Learning Containters",
    product_vn: "Deep Learning Containers",
    desc: "Containers with data science frameworks, libraries, and tools.",
    desc_vn:
      "Containers với các framework, thư viện và công cụ khoa học dữ liệu.",
    features: [
      "Performance-optimized, consistent environments",
      "Prototype and implement workflows quickly",
    ],
    features_vn: [
      "Môi trường nhất quán, được tối ưu hóa hiệu suất",
      "Tạo mẫu và triển khai quy trình làm việc nhanh chóng",
    ],
    video: ["https://www.youtube.com/embed/aWMp_hUUa0c"],
  },
  {
    product: "Knative",
    product_vn: "Knative",
    desc: "Components to create Kubernetes-native cloud-based software.",
    desc_vn: "Các thành phần để tạo phần mềm dựa trên đám mây gốc Kubernetes.",
    features: [
      "Simplify your YAML with our custom CRDs",
      "Scale down to zero and up from zero",
      "Choose your rollout strategy depending on your needs",
      "Handle events from many sources",
      "Trigger handlers from the event broker",
      "Kubernetes native to be integrated and extended",
    ],
    features_vn: [
      "Đơn giản hóa YAML của bạn với CRD tùy chỉnh của chúng tôi",
      "Thu nhỏ xuống không và mở rộng từ không",
      "Chọn chiến lược triển khai tùy theo nhu cầu của bạn",
      "Xử lý sự kiện từ nhiều nguồn",
      "Kích hoạt trình xử lý từ event broker",
      "Gốc Kubernetes để tích hợp và mở rộng",
    ],
    video: ["https://www.youtube.com/embed/PvuqSTVXSQA"],
  },
];

export { GOOGLE_CLOUD_CONTAINERS_PRODUCTS };
