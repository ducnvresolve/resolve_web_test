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

const Compute_PRODUCTS: ITableCardContent[] = [
  {
    product: "Compute Engine - Virtual machines (VMs)",
    product_vn: "Compute Engine - Máy ảo (VMs)",
    desc: "Virtual machines running in Google's data center.",
    desc_vn: "Máy ảo chạy trong trung tâm dữ liệu của Google.",
    features: [
      "Preset and custom configurations",
      "Industry-leading reliability",
      "Automations and recommendations for resource efficiency",
    ],
    features_vn: [
      "Cấu hình sẵn và tùy chỉnh",
      "Độ tin cậy hàng đầu ngành",
      "Tự động hóa và đề xuất cho hiệu quả tài nguyên",
    ],
    video: ["https://www.youtube.com/embed/QZ8PmZjF9vw"],
  },
  {
    product: "Cloud GPUs - High-performance GPUs",
    product_vn: "Cloud GPUs - GPU Hiệu suất cao",
    desc: "High-performance GPUs on Google Cloud for machine learning, scientific computing, and generative AI.",
    desc_vn:
      "GPU hiệu suất cao trên Google Cloud cho học máy, tính toán khoa học và AI tạo sinh.",
    features: [
      "A range of GPU types",
      "Flexible performance",
      "All the benefits of Google Cloud",
    ],
    features_vn: [
      "Nhiều loại GPU",
      "Hiệu suất linh hoạt",
      "Tất cả lợi ích của Google Cloud",
    ],
    video: ["https://www.youtube.com/embed/lyqhIdQIIYg"],
  },
  {
    product: "Cloud TPUs - Tensor Processing Units",
    product_vn: "Cloud TPUs - Đơn vị Xử lý Tensor",
    desc: "Tensor processing units for machine learning applications.",
    desc_vn: "Đơn vị xử lý tensor cho các ứng dụng học máy.",
    features: [
      "Run large-scale AI training workloads",
      "Fine-tune foundational AI models",
      "Serve large-scale AI inference workloads",
    ],
    features_vn: [
      "Chạy khối lượng công việc đào tạo AI quy mô lớn",
      "Tinh chỉnh các mô hình AI nền tảng",
      "Phục vụ khối lượng công việc suy luận AI quy mô lớn",
    ],
    video: ["https://www.youtube.com/embed/eyAjbgkBdjU"],
  },
  {
    product: "VMware Engine - VMware migration",
    product_vn: "VMware Engine - Di chuyển VMware",
    desc: "Rapidly lift and transform your VMware-based applications to Google Cloud without changes to your apps, tools, or processes. Includes all the hardware and VMware licenses to run in a dedicated VMware SDDC in Google Cloud.",
    desc_vn:
      "Nhanh chóng nâng cấp và chuyển đổi các ứng dụng dựa trên VMware của bạn lên Google Cloud mà không cần thay đổi ứng dụng, công cụ hoặc quy trình của bạn. Bao gồm tất cả phần cứng và giấy phép VMware để chạy trong SDDC VMware chuyên dụng trên Google Cloud.",
    features: [
      "Fast networking and high availability",
      "Scale datastore capacity independently from compute capacity",
      "Integrated Google Cloud experience",
    ],
    features_vn: [
      "Mạng nhanh và tính khả dụng cao",
      "Mở rộng dung lượng kho dữ liệu độc lập với dung lượng tính toán",
      "Trải nghiệm Google Cloud tích hợp",
    ],
    video: ["https://www.youtube.com/embed/rJjvE299HdE"],
  },
  {
    product: "Spot VMs - Batch jobs and fault-tolerant workloads VMs",
    product_vn:
      "Spot VMs - Máy ảo cho công việc hàng loạt và khối lượng công việc chịu lỗi",
    desc: "Compute instances for batch jobs and fault-tolerant workloads.",
    desc_vn:
      "Phiên bản tính toán cho công việc hàng loạt và khối lượng công việc chịu lỗi.",
    features: [
      "Predictable and low cost",
      "Expand your batch processing",
      "Get more from your containers",
      "Enable it instantly",
    ],
    features_vn: [
      "Chi phí thấp và có thể dự đoán",
      "Mở rộng xử lý hàng loạt của bạn",
      "Tận dụng tối đa container của bạn",
      "Kích hoạt ngay lập tức",
    ],
    video: ["https://www.youtube.com/embed/mR3unOGuX2Q"],
  },
  {
    product: "Migration Center - Migration platform",
    product_vn: "Migration Center - Nền tảng Di chuyển",
    desc: "Unified platform for migrating and modernizing with Google Cloud.",
    desc_vn:
      "Nền tảng thống nhất để di chuyển và hiện đại hóa với Google Cloud.",
    features: [
      "Cloud spend estimation",
      "Asset discovery of your current environment",
      "Variety of tooling for different migration scenarios",
    ],
    features_vn: [
      "Ước tính chi phí đám mây",
      "Khám phá tài sản trong môi trường hiện tại của bạn",
      "Nhiều công cụ cho các kịch bản di chuyển khác nhau",
    ],
    video: ["https://www.youtube.com/embed/Sbv-lzlGeIo"],
  },
  // {
  //   product: "Deep Learning VM Image - Preconfigured VMs for deep learning",
  //   product_vn: "Deep Learning VM Image - Máy ảo được cấu hình sẵn cho học sâu",
  //   desc: "Deep Learning VM Images are virtual machine images optimized for data science and machine learning tasks.",
  //   desc_vn:
  //     "Deep Learning VM Images là hình ảnh máy ảo được tối ưu hóa cho các tác vụ khoa học dữ liệu và học máy.",
  //   features: [
  //     "All images come with key ML frameworks",
  //     "Tools pre-installed",
  //     "Out of the box on instances with GPUs",
  //   ],
  //   features_vn: [
  //     "Tất cả hình ảnh đều có các framework ML chính",
  //     "Công cụ được cài đặt sẵn",
  //     "Sẵn sàng sử dụng trên các phiên bản có GPU",
  //   ],
  // },
  {
    product: "Migrate to Virtual Machines",
    product_vn: "Di chuyển đến Máy ảo",
    desc: "Components for migrating VMs and physical servers to Compute Engine.",
    desc_vn:
      "Các thành phần để di chuyển VM và máy chủ vật lý đến Compute Engine.",
    features: [
      "Frictionless, enterprise-grade migration for any business",
      "Fast, efficient migrations",
      "Simplicity at scale",
      "Minimal downtime and risk",
      "Lower cost, higher staff productivity",
    ],
    features_vn: [
      "Di chuyển cấp doanh nghiệp không ma sát cho mọi doanh nghiệp",
      "Di chuyển nhanh, hiệu quả",
      "Đơn giản ở quy mô lớn",
      "Thời gian ngừng hoạt động và rủi ro tối thiểu",
      "Chi phí thấp hơn, năng suất nhân viên cao hơn",
    ],
    video: ["https://www.youtube.com/embed/eAQVLC2o-oA"],
  },
  {
    product: "Shielded VMs - Hardened VMs",
    product_vn: "Shielded VMs - Máy ảo được tăng cường",
    desc: "Reinforced virtual machines on Google Cloud.",
    desc_vn: "Máy ảo được tăng cường trên Google Cloud.",
    features: [
      "Hardened security for VMs",
      "Protect against rootkits and bootkits",
      "Verifiable integrity of workloads",
    ],
    features_vn: [
      "Bảo mật tăng cường cho VM",
      "Bảo vệ chống lại rootkit và bootkit",
      "Tính toàn vẹn có thể xác minh của khối lượng công việc",
    ],
    video: ["https://www.youtube.com/embed/UaMsd_AT8DA"],
  },
  {
    product: "Batch - Batch scheduler",
    product_vn: "Batch - Bộ lập lịch hàng loạt",
    desc: "Fully managed batch service to schedule, queue, and execute batch jobs on Google's infrastructure.",
    desc_vn:
      "Dịch vụ hàng loạt được quản lý đầy đủ để lập lịch, xếp hàng và thực thi các công việc hàng loạt trên cơ sở hạ tầng của Google.",
    features: [
      "Dynamic resource provisioning and autoscaling",
      "Support for scripts and containerized workloads",
      "Leverage native services and batch tools",
    ],
    features_vn: [
      "Cung cấp tài nguyên động và tự động mở rộng",
      "Hỗ trợ script và khối lượng công việc container hóa",
      "Tận dụng dịch vụ gốc và công cụ hàng loạt",
    ],
    video: ["https://www.youtube.com/embed/RS7UJhD4R48"],
  },
];

export { Compute_PRODUCTS };
