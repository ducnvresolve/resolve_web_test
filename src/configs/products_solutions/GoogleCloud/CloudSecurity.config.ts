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

const GOOGLE_CLOUD_SECURITY_PRODUCTS: ITableCardContent[] = [
  {
    product: "Security Command Center",
    product_vn: "Trung tâm Điều hành Bảo mật",
    desc: "Platform for defending against threats to your Google Cloud assets.",
    desc_vn:
      "Nền tảng để bảo vệ tài sản Google Cloud của bạn khỏi các mối đe dọa.",
    features: [
      "Centralized visibility and control",
      "Threat prevention",
      "Threat detection",
      "Asset discovery and inventory",
    ],
    features_vn: [
      "Tầm nhìn và kiểm soát tập trung",
      "Ngăn chặn mối đe dọa",
      "Phát hiện mối đe dọa",
      "Khám phá và kiểm kê tài sản",
    ],
    img: [
      "https://lh3.googleusercontent.com/Xj43a1n1ESQFn_IAdK_3PC4l5hcNZMLHkw1tnies3ZLvJXLzGFWkR_aXgrdW4U9tljB_UqNngr8=s944-w944-rw-lo",
    ],
  },
  {
    product: "Assured Workloads",
    product_vn: "Khối lượng công việc được đảm bảo",
    desc: "Compliance and security controls for sensitive workloads.",
    desc_vn:
      "Kiểm soát tuân thủ và bảo mật cho các khối lượng công việc nhạy cảm.",
    features: [
      "Enforcement of data location",
      "Limit personnel access",
      "Built-in security controls",
      "Enforcement of product deployment location",
    ],
    features_vn: [
      "Thực thi vị trí dữ liệu",
      "Giới hạn quyền truy cập nhân sự",
      "Kiểm soát bảo mật tích hợp",
      "Thực thi vị trí triển khai sản phẩm",
    ],
    video: ["https://www.youtube.com/embed/pv1E8Shrbvg"],
  },
  {
    product: "Identity and Access Management",
    product_vn: "Quản lý Danh tính và Truy cập",
    desc: "Permissions management system for Google Cloud resources.",
    desc_vn: "Hệ thống quản lý quyền cho tài nguyên Google Cloud.",
    features: [
      "Single access control interface",
      "Fine-grained control",
      "Automated access control recommendations",
      "Context-aware access",
    ],
    features_vn: [
      "Giao diện kiểm soát truy cập đơn lẻ",
      "Kiểm soát chi tiết",
      "Đề xuất kiểm soát truy cập tự động",
      "Truy cập nhận thức ngữ cảnh",
    ],
    img: [
      "https://www.gstatic.com/bricks/image/210c530f54886c73c4151618673737570969b03ad0832b4a6436fa00df34f5fb.svg",
    ],
  },
  {
    product: "Google Cloud Armor",
    product_vn: "Google Cloud Armor",
    desc: "Help protect your applications and websites against denial of service and web attacks.",
    desc_vn:
      "Giúp bảo vệ ứng dụng và trang web của bạn khỏi tấn công từ chối dịch vụ và tấn công web.",
    features: [
      "Adaptive protection",
      "Support for hybrid and multi-cloud deployments",
      "Pre-configured WAF rules",
      "Bot management",
    ],
    features_vn: [
      "Bảo vệ thích ứng",
      "Hỗ trợ triển khai hybrid và đa đám mây",
      "Quy tắc WAF được cấu hình sẵn",
      "Quản lý bot",
    ],
    video: ["https://www.youtube.com/embed/Ti-ln36t__I"],
  },
  {
    product: "Cloud Key Management",
    product_vn: "Quản lý Khóa Đám mây",
    desc: "Manage encryption keys on Google Cloud.",
    desc_vn: "Quản lý khóa mã hóa trên Google Cloud.",
    features: [
      "Centrally manage encryption keys",
      "Deliver hardware key security with HSM",
      "Provide support for external keys with EKM",
      "Be the ultimate arbiter of access to your data",
    ],
    features_vn: [
      "Quản lý khóa mã hóa tập trung",
      "Cung cấp bảo mật khóa phần cứng với HSM",
      "Cung cấp hỗ trợ cho khóa bên ngoài với EKM",
      "Là trọng tài cuối cùng cho việc truy cập dữ liệu của bạn",
    ],
    video: ["https://www.youtube.com/embed/DB6UfKFo3ds"],
  },
  {
    product: "Chrome Enterprise Premium",
    product_vn: "Chrome Enterprise Premium",
    desc: "Scalable zero-trust platform with integrated threat and data protection.",
    desc_vn:
      "Nền tảng zero-trust có thể mở rộng với bảo vệ mối đe dọa và dữ liệu tích hợp.",
    features: [
      "Security layered to protect users, data, resources, and applications",
      "Access policies based on identity and context",
      "Experience that is simple for admins and end-users with an agent-less approach",
    ],
    features_vn: [
      "Bảo mật nhiều lớp để bảo vệ người dùng, dữ liệu, tài nguyên và ứng dụng",
      "Chính sách truy cập dựa trên danh tính và ngữ cảnh",
      "Trải nghiệm đơn giản cho quản trị viên và người dùng cuối với cách tiếp cận không cần agent",
    ],
    img: [
      "https://cafebiz.cafebizcdn.vn/162123310254002176/2024/4/13/security-chrome-enterprise-premiummax-1100x1100-1712939054870488409335-1712974177407-17129741778891041651295.jpg",
    ],
  },
  {
    product: "Assured Open Source Software",
    product_vn: "Phần mềm Mã nguồn Mở được Đảm bảo",
    desc: "Incorporate the same OSS packages that Google uses into your own developer workflows.",
    desc_vn:
      "Tích hợp các gói OSS giống như Google sử dụng vào quy trình làm việc của nhà phát triển của bạn.",
    features: [
      "Code scanning and vulnerability testing",
      "Enriched metadata",
      "SLSA-compliant builds",
      "Verified provenance and automatic SBOMs",
    ],
    features_vn: [
      "Quét mã và kiểm tra lỗ hổng",
      "Siêu dữ liệu phong phú",
      "Bản dựng tuân thủ SLSA",
      "Nguồn gốc được xác minh và SBOM tự động",
    ],
    video: ["https://www.youtube.com/embed/J4S39XjV4L4"],
  },
  {
    product: "Access Transparency",
    product_vn: "Minh bạch Truy cập",
    desc: "Cloud provider visibility through near real-time logs.",
    desc_vn:
      "Tầm nhìn nhà cung cấp đám mây thông qua nhật ký gần thời gian thực.",
    features: [
      "Explicitly approve access with Access approval",
      "Access justifications shows the reason for access",
      "Resource and method identification",
    ],
    features_vn: [
      "Phê duyệt truy cập rõ ràng với Phê duyệt truy cập",
      "Lý do truy cập hiển thị lý do truy cập",
      "Xác định tài nguyên và phương thức",
    ],
    video: ["https://www.youtube.com/embed/wZUplfEMhZ0"],
  },
  {
    product: "Cloud Asset Inventory",
    product_vn: "Kiểm kê Tài sản Đám mây",
    desc: "View, monitor, and analyze Google Cloud and Anthos assets across projects and services.",
    desc_vn:
      "Xem, giám sát và phân tích tài sản Google Cloud và Anthos trên các dự án và dịch vụ.",
    features: [
      "Fully managed inventory service",
      "Export all your assets at a point of time",
      "Export asset change history",
      "Real-time notification on asset config change",
    ],
    features_vn: [
      "Dịch vụ kiểm kê được quản lý đầy đủ",
      "Xuất tất cả tài sản của bạn tại một thời điểm",
      "Xuất lịch sử thay đổi tài sản",
      "Thông báo thời gian thực về thay đổi cấu hình tài sản",
    ],
    video: ["https://www.youtube.com/embed/c0LVkrTLmVY"],
  },
  {
    product: "Cloud Data Loss Prevention",
    product_vn: "Ngăn chặn Mất dữ liệu Đám mây",
    desc: "Sensitive data inspection, classification, and redaction platform.",
    desc_vn: "Nền tảng kiểm tra, phân loại và biên tập dữ liệu nhạy cảm.",
    features: [
      "Data discovery and classification",
      "Mask your data to safely unlock more of the cloud",
      "Measure re-identification risk in structured data",
    ],
    features_vn: [
      "Khám phá và phân loại dữ liệu",
      "Che giấu dữ liệu của bạn để mở khóa an toàn hơn đám mây",
      "Đo lường rủi ro định danh lại trong dữ liệu có cấu trúc",
    ],
    video: ["https://www.youtube.com/embed/8Fwm5q9g3Tk&t=2s"],
  },
  {
    product: "Cloud IDS",
    product_vn: "Cloud IDS",
    desc: "Cloud-first, managed network threat detection with industry-leading security.",
    desc_vn:
      "Phát hiện mối đe dọa mạng được quản lý, ưu tiên đám mây với bảo mật hàng đầu ngành.",
    features: [
      "Intrusion detection service",
      "Cloud-first network threat detection",
      "Industry-leading threat intelligence",
    ],
    features_vn: [
      "Dịch vụ phát hiện xâm nhập",
      "Phát hiện mối đe dọa mạng ưu tiên đám mây",
      "Tình báo mối đe dọa hàng đầu ngành",
    ],
    video: ["https://www.youtube.com/embed/8p_zZIi0hQk"],
  },
  {
    product: "Confidential Computing",
    product_vn: "Tính toán Bảo mật",
    desc: "Encrypt data in use with Confidential VMs",
    desc_vn: "Mã hóa dữ liệu đang sử dụng với Confidential VMs",
    features: [
      "Real-time encryption in use",
      "Lift and shift confidentiality",
      "Enhanced innovation",
    ],
    features_vn: [
      "Mã hóa thời gian thực khi sử dụng",
      "Nâng cao và chuyển đổi tính bảo mật",
      "Đổi mới nâng cao",
    ],
    img: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmHTnwKT7bU8XTswbaAq1jd-MI7LFUjHjhDw&s",
    ],
  },
  {
    product: "Cloud NGFW",
    product_vn: "Cloud NGFW",
    desc: "Global and flexible next-generation firewall to protect your cloud resources.",
    desc_vn:
      "Tường lửa thế hệ tiếp theo toàn cầu và linh hoạt để bảo vệ tài nguyên đám mây của bạn.",
    features: [
      "Hierarchical firewall policies",
      "Intrusion prevention service",
      "Domain filtering",
      "Built-in TLS inspection",
    ],
    features_vn: [
      "Chính sách tường lửa phân cấp",
      "Dịch vụ ngăn chặn xâm nhập",
      "Lọc miền",
      "Kiểm tra TLS tích hợp",
    ],
    video: ["https://www.youtube.com/embed/OCqnf2E6zn0"],
  },
  {
    product: "Secret Manager",
    product_vn: "Quản lý Bí mật",
    desc: "Store API keys, passwords, certificates, and other sensitive data.",
    desc_vn: "Lưu trữ khóa API, mật khẩu, chứng chỉ và dữ liệu nhạy cảm khác.",
    features: [
      "Replication policies",
      "First-class versioning",
      "Cloud IAM integration",
      "Audit logging",
    ],
    features_vn: [
      "Chính sách sao chép",
      "Phiên bản hạng nhất",
      "Tích hợp Cloud IAM",
      "Ghi nhật ký kiểm toán",
    ],
    video: ["https://www.youtube.com/embed/JIE89dneaGo"],
  },
  {
    product: "VPC Service Controls",
    product_vn: "Kiểm soát Dịch vụ VPC",
    desc: "Protect sensitive data in Google Cloud services using security perimeters.",
    desc_vn:
      "Bảo vệ dữ liệu nhạy cảm trong dịch vụ Google Cloud bằng cách sử dụng chu vi bảo mật.",
    features: [
      "Helps mitigate data exfiltration risks",
      "Centrally manage multi-tenant service access at scale",
      "Establish virtual security perimeters",
      "Deliver independent data access control",
    ],
    features_vn: [
      "Giúp giảm thiểu rủi ro rò rỉ dữ liệu",
      "Quản lý tập trung quyền truy cập dịch vụ đa người dùng ở quy mô lớn",
      "Thiết lập chu vi bảo mật ảo",
      "Cung cấp kiểm soát truy cập dữ liệu độc lập",
    ],
    video: ["https://www.youtube.com/embed/TD06WkY1zLs"],
  },
  {
    product: "Shielded VMs",
    product_vn: "VM được Bảo vệ",
    desc: "Virtual machines hardened with security controls and defenses.",
    desc_vn:
      "Máy ảo được tăng cường với các kiểm soát và biện pháp phòng thủ bảo mật.",
    features: [
      "Verifiable integrity with secure and measured boot",
      "vTPM exfiltration resistance",
      "Trusted UEFI firmware",
      "Tamper-evident attestations",
    ],
    features_vn: [
      "Tính toàn vẹn có thể xác minh với khởi động an toàn và đo lường",
      "Kháng rò rỉ vTPM",
      "Firmware UEFI đáng tin cậy",
      "Xác nhận rõ ràng về can thiệp",
    ],
    video: ["https://www.youtube.com/embed/UaMsd_AT8DA"],
  },
  {
    product: "Cloud Identity",
    product_vn: "Danh tính Đám mây",
    desc: "Unified platform for IT admins to manage user devices and apps.",
    desc_vn:
      "Nền tảng thống nhất cho quản trị viên CNTT để quản lý thiết bị và ứng dụng người dùng.",
    features: [
      "Advanced account security",
      "Device security on Android, iOS, and Windows",
      "Automated user provisioning",
      "Unified management console",
    ],
    features_vn: [
      "Bảo mật tài khoản nâng cao",
      "Bảo mật thiết bị trên Android, iOS và Windows",
      "Cung cấp người dùng tự động",
      "Bảng điều khiển quản lý thống nhất",
    ],
    img: [
      "https://gcloudvn.com/wp-content/uploads/2019/06/pasted-image-0-3.png",
    ],
  },
  {
    product: "Identity-Aware Proxy",
    product_vn: "Proxy Nhận thức Danh tính",
    desc: "Use identity and context to guard access to your applications and VMs.",
    desc_vn:
      "Sử dụng danh tính và ngữ cảnh để bảo vệ quyền truy cập vào ứng dụng và VM của bạn.",
    features: [
      "Centralized access control",
      "Works with cloud and on-premises apps",
      "Protects apps and VMs",
      "Simpler for admins and remote workers",
    ],
    features_vn: [
      "Kiểm soát truy cập tập trung",
      "Hoạt động với ứng dụng đám mây và tại chỗ",
      "Bảo vệ ứng dụng và VM",
      "Đơn giản hơn cho quản trị viên và nhân viên từ xa",
    ],
    video: ["https://www.youtube.com/embed/Sq9gp8KBsY0"],
  },
  {
    product: "Managed Service for Microsoft Active Directory",
    product_vn: "Dịch vụ Quản lý cho Microsoft Active Directory",
    desc: "Hardened service running Microsoft® Active Directory (AD)",
    desc_vn: "Dịch vụ được tăng cường chạy Microsoft® Active Directory (AD)",
    features: [
      "Compatibility with AD-dependent apps",
      "Familiar features and tools",
      "Multi-region and hybrid identity support",
      "Automatic patching",
    ],
    features_vn: [
      "Tương thích với ứng dụng phụ thuộc AD",
      "Tính năng và công cụ quen thuộc",
      "Hỗ trợ danh tính đa vùng và hybrid",
      "Cập nhật tự động",
    ],
    img: [
      "https://storage.googleapis.com/gweb-cloudblog-publish/images/Simplifying_Active_Directory_management.max-900x900.png",
    ],
  },
  {
    product: "Policy Intelligence",
    product_vn: "Thông minh Chính sách",
    desc: "Smart access control for your Google Cloud resources.",
    desc_vn:
      "Kiểm soát truy cập thông minh cho tài nguyên Google Cloud của bạn.",
    features: [
      "Smart access control",
      "Helps you understand and manage policies",
      "Greater visibility",
      "Advanced automation",
    ],
    features_vn: [
      "Kiểm soát truy cập thông minh",
      "Giúp bạn hiểu và quản lý chính sách",
      "Tầm nhìn lớn hơn",
      "Tự động hóa nâng cao",
    ],
    img: ["/assets/images/image1231.jpg"],
  },
  {
    product: "reCAPTCHA Enterprise",
    product_vn: "reCAPTCHA Enterprise",
    desc: "Help protect your website from fraudulent activity, spam, and abuse.",
    desc_vn:
      "Giúp bảo vệ trang web của bạn khỏi hoạt động gian lận, thư rác và lạm dụng.",
    features: [
      "Scores that indicate likely good or abusive actions",
      "Take action based on scores",
      "Tune the service to your website's needs",
      "Flexible API; integrate on your site or mobile app",
    ],
    features_vn: [
      "Điểm số chỉ ra hành động tốt hoặc lạm dụng có khả năng",
      "Thực hiện hành động dựa trên điểm số",
      "Điều chỉnh dịch vụ theo nhu cầu trang web của bạn",
      "API linh hoạt; tích hợp trên trang web hoặc ứng dụng di động của bạn",
    ],
    video: ["https://www.youtube.com/embed/y6NSnpiVSaQ"],
  },
  {
    product: "Identity Platform",
    product_vn: "Nền tảng Danh tính",
    desc: "Add Google-grade identity and access management to your apps.",
    desc_vn:
      "Thêm quản lý danh tính và truy cập cấp Google vào ứng dụng của bạn.",
    features: [
      "Authentication as a service",
      "Broad protocol support",
      "Multi-tenancy",
      "Intelligent account protection",
    ],
    features_vn: [
      "Xác thực như một dịch vụ",
      "Hỗ trợ giao thức rộng",
      "Đa người dùng",
      "Bảo vệ tài khoản thông minh",
    ],
    img: [
      "https://gcs.vn/wp-content/uploads/2023/12/identity-platform-3-1030x730.webp",
    ],
  },
  {
    product: "Web Risk",
    product_vn: "Rủi ro Web",
    desc: "Detect malicious URLs on your website and in client applications.",
    desc_vn:
      "Phát hiện URL độc hại trên trang web và trong ứng dụng khách của bạn.",
    features: [
      "Check against comprehensive list of known unsafe URLs",
      "Application agnostic",
      "Allow client apps to check URLs with Lookup API",
      "Download and store unsafe lists with Update API",
    ],
    features_vn: [
      "Kiểm tra với danh sách toàn diện các URL không an toàn đã biết",
      "Không phụ thuộc vào ứng dụng",
      "Cho phép ứng dụng khách kiểm tra URL với API Lookup",
      "Tải xuống và lưu trữ danh sách không an toàn với API Update",
    ],
    img: [
      "https://storage.googleapis.com/gweb-cloudblog-publish/images/How_to_Use_All_the_Web_Risk_APIs.max-1100x1100.jpg",
    ],
  },
];

export { GOOGLE_CLOUD_SECURITY_PRODUCTS };
