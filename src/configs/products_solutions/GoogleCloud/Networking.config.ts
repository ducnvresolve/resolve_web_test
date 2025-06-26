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
const GOOGLE_CLOUD_NETWORKING_PRODUCTS: ITableCardContent[] = [
  {
    product: "Connect - Cloud Connectivity",
    product_vn: "Connect - Kết nối Đám mây",
    desc: "From high-performance options such as Dedicated Interconnect and Partner Interconnect, to Cloud VPN for lower volume needs, and even direct and carrier peering options, Google Cloud Connectivity has a solution for connecting your infrastructure to the cloud that fits your needs.",
    desc_vn:
      "Từ các tùy chọn hiệu suất cao như Dedicated Interconnect và Partner Interconnect, đến Cloud VPN cho nhu cầu khối lượng thấp hơn, và thậm chí các tùy chọn peering trực tiếp và nhà cung cấp, Google Cloud Connectivity có giải pháp kết nối cơ sở hạ tầng của bạn với đám mây phù hợp với nhu cầu của bạn.",
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
    img: [
      "https://storage.googleapis.com/gweb-cloudblog-publish/images/2_Cloud_VPN_connection_setup.max-1000x1000.jpg",
    ],
  },
  {
    product: "Connect - Virtual Private Cloud (VPC)",
    product_vn: "Connect - Mạng Riêng Ảo (VPC)",
    desc: "Provision, connect, or isolate Google Cloud resources using the Google global network. Define fine-grained networking policies with Google Cloud, on-premises, or public cloud infrastructure. VPC network includes granular IP address range selection, routes, firewall, Cloud VPN (Virtual Private Network), and Cloud Router.",
    desc_vn:
      "Cung cấp, kết nối hoặc cô lập tài nguyên Google Cloud bằng mạng toàn cầu của Google. Định nghĩa các chính sách mạng chi tiết với Google Cloud, tại chỗ hoặc cơ sở hạ tầng đám mây công cộng. Mạng VPC bao gồm lựa chọn dải địa chỉ IP chi tiết, tuyến đường, tường lửa, Cloud VPN (Mạng Riêng Ảo) và Cloud Router.",
    features: ["VPC networks", "Packet mirroring", "Firewall rules"],
    features_vn: ["Mạng VPC", "Gương gói tin", "Quy tắc tường lửa"],
    img: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hfvyo6rFz9EVdfzYPYl_4q8qYZXvZtd3OA&s",
    ],
  },
  {
    product: "Connect - Cloud DNS",
    product_vn: "Connect - Cloud DNS",
    desc: "A scalable, reliable, programmable, and managed authoritative domain naming system (DNS) service running on the same infrastructure as Google. Cloud DNS translates domain names like www.google.com into IP addresses like 74.125.29.101. Use our simple interface, a command line, or API to publish and manage millions of DNS zones and records.",
    desc_vn:
      "Một dịch vụ hệ thống tên miền (DNS) có thẩm quyền, có thể mở rộng, đáng tin cậy, có thể lập trình và được quản lý, chạy trên cùng cơ sở hạ tầng với Google. Cloud DNS chuyển đổi tên miền như www.google.com thành địa chỉ IP như 74.125.29.101. Sử dụng giao diện đơn giản, dòng lệnh hoặc API của chúng tôi để xuất bản và quản lý hàng triệu vùng và bản ghi DNS.",
    features: [
      "Authoritative DNS lookup",
      "Domain registration and management",
      "Fast anycast name servers",
    ],
    features_vn: [
      "Tra cứu DNS có thẩm quyền",
      "Đăng ký và quản lý tên miền",
      "Máy chủ tên anycast nhanh",
    ],
    img: [
      "https://cloud.google.com/static/dns/images/hybrid-arch-using-hub-vpc-to-spoke-vpc.svg",
    ],
  },
  {
    product: "Connect - Network Connectivity Center",
    product_vn: "Connect - Trung tâm Kết nối Mạng",
    desc: "Network Connectivity Center offers the unique ability to easily connect your on-premises, Google Cloud, and other cloud enterprise networks and manage them as spokes through a single, centralized, logical hub on Google Cloud.",
    desc_vn:
      "Trung tâm Kết nối Mạng cung cấp khả năng độc đáo để dễ dàng kết nối mạng doanh nghiệp tại chỗ, Google Cloud và các đám mây khác của bạn và quản lý chúng như các nhánh thông qua một trung tâm logic tập trung duy nhất trên Google Cloud.",
    features: [
      "Use Google's network as your own",
      "Single place to manage global connectivity",
      "Simple, flexible, and insightful cloud connectivity",
    ],
    features_vn: [
      "Sử dụng mạng của Google như của riêng bạn",
      "Một nơi duy nhất để quản lý kết nối toàn cầu",
      "Kết nối đám mây đơn giản, linh hoạt và thông minh",
    ],
    video: ["https://www.youtube.com/embed/x6P3NwiPmP4"],
  },
  {
    product: "Connect - Private Service Connect",
    product_vn: "Connect - Kết nối Dịch vụ Riêng",
    desc: "Set up private connectivity to your own, third-party and Google services from your VPC. Private Service Connect helps you consume services faster, simplify network management and secure your data by keeping it inside the Google Cloud network.",
    desc_vn:
      "Thiết lập kết nối riêng tư đến các dịch vụ của riêng bạn, bên thứ ba và Google từ VPC của bạn. Private Service Connect giúp bạn tiêu thụ dịch vụ nhanh hơn, đơn giản hóa quản lý mạng và bảo mật dữ liệu của bạn bằng cách giữ nó trong mạng Google Cloud.",
    features: [
      "Access Google APIs and services",
      "Connect to a service in another VPC network",
      "Publish a service by using an internal load balancer",
    ],
    features_vn: [
      "Truy cập API và dịch vụ của Google",
      "Kết nối đến dịch vụ trong mạng VPC khác",
      "Xuất bản dịch vụ bằng cách sử dụng bộ cân bằng tải nội bộ",
    ],
    img: ["https://cloud.google.com/static/vpc/images/psc-overview.svg"],
  },
  {
    product: "Scale - Cloud Load Balancing",
    product_vn: "Scale - Cân bằng Tải Đám mây",
    desc: "Quickly scale applications on Compute Engine—no pre-warming needed. Distribute load-balanced compute resources in single or multiple regions, and near users, while meeting high-availability requirements. Cloud Load Balancing can put resources behind a single anycast IP, scale up or down with intelligent autoscaling, and integrate with Cloud CDN.",
    desc_vn:
      "Mở rộng ứng dụng nhanh chóng trên Compute Engine—không cần làm nóng trước. Phân phối tài nguyên tính toán cân bằng tải trong một hoặc nhiều khu vực, và gần người dùng, đồng thời đáp ứng các yêu cầu về tính khả dụng cao. Cloud Load Balancing có thể đặt tài nguyên phía sau một địa chỉ IP anycast duy nhất, mở rộng lên hoặc xuống với tự động mở rộng thông minh, và tích hợp với Cloud CDN.",
    features: [
      "Application and Network Load Balancing",
      "Seamless autoscaling",
      "High-fidelity health checks",
    ],
    features_vn: [
      "Cân bằng Tải Ứng dụng và Mạng",
      "Tự động mở rộng liền mạch",
      "Kiểm tra sức khỏe độ chính xác cao",
    ],
    img: [
      "https://cloud.google.com/static/load-balancing/images/cloud-load-balancing-overview.svg",
    ],
  },
  {
    product: "Scale - Cloud CDN",
    product_vn: "Scale - Cloud CDN",
    desc: "Accelerate content delivery for websites and applications served out of Compute Engine by leveraging Google's globally distributed edge caches. Cloud CDN lowers network latency, offloads origins, and reduces serving costs. Once you've set up Application Load Balancer, simply enable Cloud CDN with a single checkbox.",
    desc_vn:
      "Tăng tốc phân phối nội dung cho các trang web và ứng dụng được phục vụ từ Compute Engine bằng cách tận dụng bộ nhớ đệm biên phân tán toàn cầu của Google. Cloud CDN giảm độ trễ mạng, giảm tải cho nguồn gốc và giảm chi phí phục vụ. Sau khi bạn đã thiết lập Application Load Balancer, chỉ cần bật Cloud CDN bằng một hộp kiểm duy nhất.",
    features: [
      "Global distribution with anycast IP",
      "Optimized for last-mile performance",
      "Integrated with Google Cloud",
    ],
    features_vn: [
      "Phân phối toàn cầu với IP anycast",
      "Tối ưu hóa cho hiệu suất last-mile",
      "Tích hợp với Google Cloud",
    ],
    video: ["https://www.youtube.com/embed/azbxckHW9oU"],
  },
  {
    product: "Scale - Media CDN",
    product_vn: "Scale - Media CDN",
    desc: "Efficiently and intelligently deliver streaming experiences to viewers anywhere in the world with Media CDN. Media CDN is running on infrastructure in over 200 counties and 1,300 cities that get content closer to the user with low rebuffer times and high offload rates.",
    desc_vn:
      "Phân phối trải nghiệm streaming hiệu quả và thông minh đến người xem ở bất kỳ đâu trên thế giới với Media CDN. Media CDN đang chạy trên cơ sở hạ tầng tại hơn 200 quốc gia và 1.300 thành phố, đưa nội dung gần hơn với người dùng với thời gian đệm lại thấp và tỷ lệ giảm tải cao.",
    features: [
      "Unparalleled planet-scale reach",
      "Cloud-native and developer-friendly operations",
      "Real-time visibility and planet-scale advanced security",
    ],
    features_vn: [
      "Phạm vi tiếp cận quy mô hành tinh chưa từng có",
      "Hoạt động gốc đám mây và thân thiện với nhà phát triển",
      "Khả năng hiển thị thời gian thực và bảo mật nâng cao quy mô hành tinh",
    ],
    video: ["https://www.youtube.com/embed/azbxckHW9oU"],
  },
  {
    product: "Scale - Cloud Service Mesh",
    product_vn: "Scale - Cloud Service Mesh",
    desc: "Cloud Service Mesh combines the control plane of Traffic Director and Anthos Service Mesh to provide traffic management, observability, and security features for your cloud applications.",
    desc_vn:
      "Cloud Service Mesh kết hợp mặt phẳng điều khiển của Traffic Director và Anthos Service Mesh để cung cấp các tính năng quản lý lưu lượng, khả năng quan sát và bảo mật cho các ứng dụng đám mây của bạn.",
    features: [
      "Fully managed, full stop",
      "Supports hybrid and multicloud deployments",
      "Works for VM-based, serverless, and containerized applications",
    ],
    features_vn: [
      "Được quản lý đầy đủ, hoàn toàn",
      "Hỗ trợ triển khai hybrid và đa đám mây",
      "Hoạt động cho các ứng dụng dựa trên VM, serverless và container hóa",
    ],
    video: ["https://www.youtube.com/embed/WDEkokFDYp4"],
  },
  {
    product: "Secure - Cloud Armor",
    product_vn: "Secure - Cloud Armor",
    desc: "Cloud Armor works with Application Load Balancer to provide built-in defenses against infrastructure DDoS attacks. Google Cloud Armor benefits from more than a decade of experience protecting the world's largest internet properties like Google Search, Gmail, and YouTube.",
    desc_vn:
      "Cloud Armor hoạt động với Application Load Balancer để cung cấp các biện pháp phòng thủ tích hợp chống lại các cuộc tấn công DDoS cơ sở hạ tầng. Google Cloud Armor được hưởng lợi từ hơn một thập kỷ kinh nghiệm bảo vệ các tài sản internet lớn nhất thế giới như Google Search, Gmail và YouTube.",
    features: [
      "IP-based and geo-based access control",
      "Support for hybrid and multicloud deployments",
      "Pre-configured WAF rules",
      "Named IP Lists",
    ],
    features_vn: [
      "Kiểm soát truy cập dựa trên IP và địa lý",
      "Hỗ trợ triển khai hybrid và đa đám mây",
      "Quy tắc WAF được cấu hình sẵn",
      "Danh sách IP được đặt tên",
    ],
    video: ["https://www.youtube.com/embed/Ti-ln36t__I"],
  },
  {
    product: "Secure - Cloud IDS",
    product_vn: "Secure - Cloud IDS",
    desc: "Cloud IDS is an intrusion detection service that provides threat detection for intrusions, malware, spyware, and command-and-control attacks on your network. It provides full visibility into network traffic, including both north-south and east-west traffic, letting you monitor VM-to-VM communication to detect lateral movement.",
    desc_vn:
      "Cloud IDS là một dịch vụ phát hiện xâm nhập cung cấp phát hiện mối đe dọa cho các cuộc xâm nhập, phần mềm độc hại, phần mềm gián điệp và các cuộc tấn công điều khiển và kiểm soát trên mạng của bạn. Nó cung cấp khả năng hiển thị đầy đủ vào lưu lượng mạng, bao gồm cả lưu lượng bắc-nam và đông-tây, cho phép bạn giám sát giao tiếp VM-to-VM để phát hiện chuyển động ngang.",
    features: [
      "Network-based threat detection",
      "Backed by industry-leading threat research",
      "Supports compliance requirements, including PCI 11.4",
    ],
    features_vn: [
      "Phát hiện mối đe dọa dựa trên mạng",
      "Được hỗ trợ bởi nghiên cứu mối đe dọa hàng đầu ngành",
      "Hỗ trợ các yêu cầu tuân thủ, bao gồm PCI 11.4",
    ],
    video: ["https://www.youtube.com/embed/8p_zZIi0hQk"],
  },
  {
    product: "Secure - Cloud NAT",
    product_vn: "Secure - Cloud NAT",
    desc: "Google Cloud's managed network address translation service enables you to provision application instances without public IP addresses, while allowing controlled, efficient internet access. Outside resources cannot directly access any of the private instances behind the Cloud NAT gateway, helping keep your Google Cloud VPCs isolated and secure.",
    desc_vn:
      "Dịch vụ chuyển đổi địa chỉ mạng được quản lý của Google Cloud cho phép bạn cung cấp các phiên bản ứng dụng mà không cần địa chỉ IP công khai, đồng thời cho phép truy cập internet có kiểm soát và hiệu quả. Các tài nguyên bên ngoài không thể trực tiếp truy cập bất kỳ phiên bản riêng tư nào phía sau cổng Cloud NAT, giúp giữ cho các VPC Google Cloud của bạn được cô lập và an toàn.",
    features: [
      "Managed NAT service",
      "Multiple NAT IPs per gateway",
      "Configurable NAT timeout timers",
    ],
    features_vn: [
      "Dịch vụ NAT được quản lý",
      "Nhiều IP NAT cho mỗi cổng",
      "Bộ đếm thời gian chờ NAT có thể cấu hình",
    ],
    video: ["https://www.youtube.com/embed/SYDGjqZyk-M"],
  },
  {
    product: "Secure - VPC Service Controls",
    product_vn: "Secure - Điều khiển Dịch vụ VPC",
    desc: "Allows users to define a security perimeter for API-based services (like Cloud Storage buckets, Cloud Bigtable instances, and BigQuery datasets) to help mitigate data exfiltration risks. It enables enterprises to keep their sensitive data private while leveraging Google Cloud's fully managed storage and data processing capabilities.",
    desc_vn:
      "Cho phép người dùng xác định chu vi bảo mật cho các dịch vụ dựa trên API (như bucket Cloud Storage, phiên bản Cloud Bigtable và tập dữ liệu BigQuery) để giúp giảm thiểu rủi ro rò rỉ dữ liệu. Nó cho phép doanh nghiệp giữ dữ liệu nhạy cảm của họ ở chế độ riêng tư trong khi tận dụng khả năng lưu trữ và xử lý dữ liệu được quản lý đầy đủ của Google Cloud.",
    features: [
      "Centrally manage multi-tenant service access at scale",
      "Identity and context help securely access multi-tenant services",
      "Establish virtual security perimeters for API-based services",
    ],
    features_vn: [
      "Quản lý tập trung quyền truy cập dịch vụ đa người thuê ở quy mô lớn",
      "Danh tính và ngữ cảnh giúp truy cập an toàn vào các dịch vụ đa người thuê",
      "Thiết lập chu vi bảo mật ảo cho các dịch vụ dựa trên API",
    ],
    video: ["https://www.youtube.com/embed/cLL2IvZXbIc"],
  },
  {
    product: "Optimize - Network Intelligence Center",
    product_vn: "Optimize - Trung tâm Thông minh Mạng",
    desc: "Network Intelligence Center provides comprehensive network observability along with proactive network verification. Centralized monitoring cuts down troubleshooting time and effort, increases network security, and allows for optimization of the overall user experience.",
    desc_vn:
      "Trung tâm Thông minh Mạng cung cấp khả năng quan sát mạng toàn diện cùng với xác minh mạng chủ động. Giám sát tập trung giảm thời gian và công sức xử lý sự cố, tăng cường bảo mật mạng và cho phép tối ưu hóa trải nghiệm người dùng tổng thể.",
    features: [
      "Network Topology: Visualize and monitor the health of your network",
      "Connectivity Tests: Diagnose and prevent connectivity issues",
      "Performance Dashboard: See real-time network performance metrics",
      "Firewall Insights: Keep your firewall rules strict and efficient",
    ],
    features_vn: [
      "Cấu trúc Mạng: Trực quan hóa và giám sát sức khỏe mạng của bạn",
      "Kiểm tra Kết nối: Chẩn đoán và ngăn ngừa vấn đề kết nối",
      "Bảng điều khiển Hiệu suất: Xem các chỉ số hiệu suất mạng thời gian thực",
      "Thông tin chi tiết Tường lửa: Giữ quy tắc tường lửa của bạn nghiêm ngặt và hiệu quả",
    ],
    img: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrUA2ZjiVHR4DvX8KXgv8VZIghZJxQ7YctA&s",
    ],
  },
  {
    product: "Optimize - Network Service Tiers",
    product_vn: "Optimize - Cấp độ Dịch vụ Mạng",
    desc: "Improve network experience performance and gain control over network costs with Network Service Tiers. Deliver your traffic on Google's high-performance global network, run cost-sensitive workloads, choose the right tier for the workload, and more.",
    desc_vn:
      "Cải thiện hiệu suất trải nghiệm mạng và kiểm soát chi phí mạng với Cấp độ Dịch vụ Mạng. Phân phối lưu lượng của bạn trên mạng toàn cầu hiệu suất cao của Google, chạy khối lượng công việc nhạy cảm với chi phí, chọn cấp độ phù hợp cho khối lượng công việc, và hơn thế nữa.",
    features: [
      "Premium Tier for highest performance",
      "Standard Tier for cost control",
    ],
    features_vn: [
      "Cấp độ Cao cấp cho hiệu suất cao nhất",
      "Cấp độ Tiêu chuẩn để kiểm soát chi phí",
    ],
    img: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqcFCalYxNh04QjwG7ERbpJTaTc6tPdAltQ&s",
    ],
  },
];

export { GOOGLE_CLOUD_NETWORKING_PRODUCTS };
