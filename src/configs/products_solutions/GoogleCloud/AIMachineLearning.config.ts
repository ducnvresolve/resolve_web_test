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

const GOOGLE_CLOUD_PRODUCTS: ITableCardContent[] = [
  {
    product: "Generative AI - Vertex AI Studio",
    product_vn: "AI Tạo sinh - Vertex AI Studio",
    desc: "A Vertex AI tool for rapidly prototyping and testing generative AI models. Test sample prompts, design your own prompts, and customize foundation models and LLMs to handle tasks that meet your application's needs.",
    desc_vn:
      "Công cụ Vertex AI để nhanh chóng tạo mẫu và kiểm tra các mô hình AI tạo sinh. Kiểm tra các mẫu prompt, thiết kế prompt của riêng bạn và tùy chỉnh các mô hình nền tảng và LLM để xử lý các tác vụ đáp ứng nhu cầu ứng dụng của bạn.",
    features: [
      "Prompt design and tuning with an easy-to-use interface",
      "Code completion and generation with Codey",
      "Generating and customizing images with Imagen",
      "Universal speech models",
    ],
    features_vn: [
      "Thiết kế và điều chỉnh prompt với giao diện dễ sử dụng",
      "Hoàn thành và tạo mã với Codey",
      "Tạo và tùy chỉnh hình ảnh với Imagen",
      "Mô hình giọng nói phổ quát",
    ],
    video: ["https://www.youtube.com/embed/Y10WeRIDKiw"],
  },
  {
    product: "Generative AI - Vertex AI Agent Builder",
    product_vn: "AI Tạo sinh - Vertex AI Agent Builder",
    desc: "Create a range of generative AI agents and applications grounded in your organization's data. Vertex AI Agent Builder provides the convenience of a no code agent building console alongside powerful grounding, orchestration and customization capabilities.",
    desc_vn:
      "Tạo nhiều loại agent AI tạo sinh và ứng dụng dựa trên dữ liệu của tổ chức bạn. Vertex AI Agent Builder cung cấp giao diện xây dựng agent không cần mã cùng với khả năng grounding, điều phối và tùy chỉnh mạnh mẽ.",
    features: [
      "Building multimodal conversational AI agents",
      "Building a Google-quality search experience on your own data",
      "Enjoy powerful orchestration, grounding and customization tools",
    ],
    features_vn: [
      "Xây dựng agent AI hội thoại đa phương thức",
      "Xây dựng trải nghiệm tìm kiếm chất lượng Google trên dữ liệu của bạn",
      "Tận hưởng các công cụ điều phối, grounding và tùy chỉnh mạnh mẽ",
    ],
    video: ["https://www.youtube.com/embed/H6nUoszwcrM"],
  },
  {
    product: "Generative AI - Document Summarization",
    desc: "The one-click solution establishes a pipeline that extracts text from PDFs, creates a summary from the extracted text with Vertex AI Generative AI Studio, and stores the searchable summary in a BigQuery database.",
    desc_vn:
      "Giải pháp một cú nhấp chuột thiết lập một đường ống để trích xuất văn bản từ PDF, tạo tóm tắt từ văn bản đã trích xuất với Vertex AI Generative AI Studio và lưu tóm tắt tìm kiếm được vào cơ sở dữ liệu BigQuery.",
    features: [
      "Process and summarize large documents using Vertex AI LLMs",
      "Deploy an application that orchestrates the documentation summarization process",
      "Trigger the pipeline with a PDF upload and view a generated summary",
    ],
    features_vn: [
      "Xử lý và tóm tắt văn bản lớn bằng các mô hình LLM Vertex AI",
      "Triển khai ứng dụng để điều phối quá trình tóm tắt tài liệu",
      "Kích hoạt đường ống bằng cách tải lên PDF và xem tóm tắt đã được tạo",
    ],
    video: ["https://www.youtube.com/embed/dwqFlDNLgyA"],
  },
  {
    product: "Machine learning and MLOPs - Vertex AI Platform",
    desc: "A single platform for data scientists and engineers to create, train, test, monitor, tune, and deploy ML and AI models. Choose from over 150 models in Vertex's Model Garden, including Gemini and open source models like Stable Diffusion, BERT, T-5. <br>",
    desc_vn:
      "Một nền tảng đơn để các nhà khoa học dữ liệu và kỹ sư tạo ra, huấn luyện, kiểm tra, giám sát, điều chỉnh và triển khai các mô hình ML và AI. Chọn từ hơn 150 mô hình trong vườn mô hình của Vertex, bao gồm Gemini và các mô hình nguồn mở như Stable Diffusion, BERT, T-5.",
    features: [
      "Custom ML training",
      "Training models with minimal ML expertise",
      "Testing, monitoring, and tuning ML models",
      "Deploying 150+ models, including multimodal and foundation models like Gemini",
    ],
    features_vn: [
      "Huấn luyện ML tùy chỉnh",
      "Huấn luyện các mô hình với ít kinh nghiệm ML",
      "Kiểm tra, giám sát và điều chỉnh các mô hình ML",
      "Triển khai hơn 150 mô hình, bao gồm các mô hình đa phương thức và nền tảng như Gemini",
    ],
    video: ["https://www.youtube.com/embed/I7UiSU96CLc"],
  },
  {
    product: "Machine learning and MLOPs - Vertex AI Notebooks",
    desc: "Choose from Colab Enterprise or Vertex AI Workbench. Access every capability in Vertex AI Platform to work across the entire data science workflow—from data exploration to prototype to production.",
    desc_vn:
      "Chọn từ Colab Enterprise hoặc Vertex AI Workbench. Truy cập mọi khả năng trong luồng làm việc khoa học dữ liệu Vertex AI—từ khám phá dữ liệu đến mẫu đến sản xuất.",
    features: [
      "Data scientist workflows",
      "Rapid prototyping and model development",
      "Developing and deploying AI solutions on Vertex AI with minimal transition",
    ],
    features_vn: [
      "Luồng làm việc khoa học dữ liệu",
      "Sản xuất mẫu và phát triển mô hình nhanh chóng",
      "Phát triển và triển khai giải pháp AI trên Vertex AI với chuyển đổi tối thiểu",
    ],
    video: ["https://www.youtube.com/embed/snUEwsft1wY"],
  },
  {
    product: "Machine learning and MLOPs - AutoML",
    desc: "Train high-quality custom machine learning models with minimal effort and machine learning expertise.",
    desc_vn:
      "Huấn luyện các mô hình học máy tùy chỉnh cao cấp với ít cố gắng và kinh nghiệm học máy.",
    features: [
      "Building custom machine learning models in minutes with minimal expertise",
      "Training models specific to your business needs",
    ],
    features_vn: [
      "Xây dựng các mô hình học máy tùy chỉnh trong vài phút với ít kinh nghiệm",
      "Huấn luyện các mô hình đặc trưng cho nhu cầu kinh doanh của bạn",
    ],
    img: [
      "https://storage.googleapis.com/gweb-cloudblog-publish/images/Scalable_MLOps.max-2600x2600.png",
    ],
  },
  {
    product: "Speech, text, and language APIs - Natural Language AI",
    desc: "Derive insights from unstructured text using Google machine learning.",
    desc_vn:
      "Trích xuất các thông tin từ văn bản không cấu trúc bằng học máy của Google.",
    features: [
      "Applying natural language understanding to apps with the Natural Language API",
      "Training your open ML models to classify, extract, and detect sentiment",
    ],
    features_vn: [
      "Áp dụng hiểu biết ngôn ngữ tự nhiên vào các ứng dụng với API Ngôn ngữ Tự nhiên",
      "Huấn luyện các mô hình ML mở trên Google để phân loại, trích xuất và phát hiện cảm xúc",
    ],
    img: [
      "https://typecast.ai/learn/wp-content/uploads/2023/06/23q2_34_main.jpg",
    ],
  },
  {
    product: "Speech, text, and language APIs - Speech-to-Text",
    desc: "Accurately convert speech into text using an API powered by Google's AI technologies.",
    desc_vn:
      "Chính xác chuyển đổi giọng nói thành văn bản bằng cách sử dụng API được cấp bởi công nghệ AI của Google.",
    features: [
      "Automatic speech recognition",
      "Real-time transcription",
      "Enhanced phone call models in Google Contact Center AI",
    ],
    features_vn: [
      "Nhận dạng giọng nói tự động",
      "Phát âm trực tiếp",
      "Mô hình điện thoại được cải thiện trong Google Contact Center AI",
    ],
    video: ["https://www.youtube.com/embed/t38gZi8WNKE"],
  },
  {
    product: "Speech, text, and language APIs - Text-to-Speech",
    desc: "Convert text into natural-sounding speech using a Google AI powered API.",
    desc_vn:
      "Chuyển đổi văn bản thành giọng nói tự nhiên bằng cách sử dụng API được cấp bởi công nghệ AI của Google.",
    features: [
      "Improving customer interactions",
      "Voice user interface in devices and applications",
      "Personalized communication",
    ],
    features_vn: [
      "Cải thiện các cuộc giao tiếp với khách hàng",
      "Giao diện người dùng âm thanh trong thiết bị và ứng dụng",
      "Truyền thông cá nhân",
    ],
    img: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9Ulse5G2KXkvJpMs71mYcEZD2sjfFjQsNA&s",
    ],
  },
  {
    product: "Speech, text, and language APIs - Translation AI",
    desc: "Make your content and apps multilingual with fast, dynamic machine translation.",
    desc_vn:
      "Làm cho nội dung và ứng dụng của bạn đa ngôn ngữ với dịch máy nhanh chóng, động và đa ngôn ngữ.",
    features: [
      "Real-time translation",
      "Compelling localization of your content",
      "Internationalizing your products",
    ],
    features_vn: [
      "Dịch thời gian thực",
      "Địa phương hóa nội dung của bạn một cách thuyết phục",
      "Quốc tế hóa sản phẩm của bạn",
    ],
    img: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5T1j6dXXBy6g5CJbKdnSs58fzt_Plo67-7g&s",
    ],
  },
  {
    product: "Image and video APIs - Vision AI",
    desc: "Derive insights from your images in the cloud or at the edge with AutoML Vision or use pre-trained Vision API models to detect objects, understand text, and more",
    desc_vn:
      "Trích xuất các thông tin từ hình ảnh của bạn trong đám mây hoặc cạnh máy với AutoML Vision hoặc sử dụng các mô hình API nhận dạng văn bản trước để phát hiện các đối tượng, hiểu văn bản và nhiều hơn nữa",
    features: [
      "Accurately predicting and understanding images with ML",
      "Training ML models to classify images by custom labels using AutoML Vision",
    ],
    features_vn: [
      "Dự đoán và hiểu biết hình ảnh với ML",
      "Huấn luyện các mô hình ML để phân loại hình ảnh bằng các nhãn tùy chỉnh sử dụng AutoML Vision",
    ],
    video: ["https://www.youtube.com/embed/I1dv2bOYhds"],
  },
  {
    product: "Image and video APIs - Video AI",
    desc: "Enable powerful content discovery and engaging video experiences.",
    desc_vn: "Kích hoạt khám phá nội dung mạnh mẽ và trải nghiệm video thú vị.",
    features: [
      "Extracting rich metadata at the video, shot, or frame level",
      "Custom entity labels with AutoML Video Intelligence",
    ],
    features_vn: [
      "Trích xuất thông tin cấu trúc phong phú tại cấp video, shot hoặc khung hình",
      "Nhãn đối tượng tùy chỉnh với AutoML Video Intelligence",
    ],
    img: [
      "https://storage.googleapis.com/gweb-cloudblog-publish/images/machine-learning-next-1z90j.max-800x800.PNG",
    ],
  },
  {
    product: "Document and data APIs - Document AI",
    desc: "Document AI includes pre-trained models for data extraction, Document AI Workbench to create new custom models or uptrain existing ones, and Document AI Warehouse to search and store documents.",
    desc_vn:
      "Document AI bao gồm các mô hình được huấn luyện trước để trích xuất dữ liệu, Document AI Workbench để tạo các mô hình tùy chỉnh mới hoặc huấn luyện lại các mô hình hiện có, và Document AI Warehouse để tìm kiếm và lưu trữ tài liệu.",
    features: [
      "Extracting, classifying, and splitting data from documents",
      "Reducing manual document processing and minimizing setup costs",
      "Gaining insights from document data",
    ],
    features_vn: [
      "Trích xuất, phân loại và chia tách dữ liệu từ tài liệu",
      "Giảm thiểu xử lý tài liệu thủ công và tối thiểu chi phí thiết lập",
      "Nhận được các thông tin từ dữ liệu tài liệu",
    ],
    video: ["https://www.youtube.com/embed/1V96qmfSTe4"],
  },
  {
    product:
      "AI assistance and conversational AI - Conversational Agents (Dialogflow)",
    desc: "Conversational AI platform with both intent-based and generative AI LLM capabilities for building natural, rich conversational experiences into mobile and web applications, smart devices, bots, interactive voice response systems, popular messaging platforms, and more. Features a visual builder to create, build, and manage virtual agents.",
    desc_vn:
      "Nền tảng AI hội thoại với cả hai khả năng LLM có ý định và tạo sinh AI để xây dựng các trải nghiệm hội thoại tự nhiên, giàu cảm xúc vào các ứng dụng di động và web, thiết bị thông minh, bot, hệ thống phản hồi giọng nói tương tác, các nền tảng trò chuyện phổ biến và nhiều hơn nữa. Có một trình tạo đồ họa để tạo ra, xây dựng và quản lý các agent ảo.",
    features: [
      "Natural interactions for complex multi-turn conversations",
      "Building and deploying advanced agents quickly",
      "Enterprise-grade scalability",
      "Building a chatbot based on a website or collection of documents",
    ],
    features_vn: [
      "Các tương tác tự nhiên cho các cuộc trò chuyện đa cấp nhiều lần",
      "Xây dựng và triển khai các agent nâng cao nhanh chóng",
      "Khả năng mở rộng cấp doanh nghiệp",
      "Xây dựng bot trò chuyện dựa trên trang web hoặc tập hợp các tài liệu",
    ],
    video: ["https://www.youtube.com/embed/BrIp7LyHrsQ"],
  },
  {
    product:
      "AI assistance and conversational AI - Customer Engagement Suite with Google AI",
    desc: "Delight customers with an end-to-end application that combines our most advanced conversational AI, with multimodal and omnichannel functionality to deliver exceptional customer experiences at every touchpoint.",
    desc_vn:
      "Hài lòng khách hàng với ứng dụng đầy đủ để kết hợp AI hội thoại nâng cao nhất của chúng tôi, với khả năng đa phương thức và đa kênh để cung cấp các trải nghiệm khách hàng đặc biệt tại mỗi điểm tiếp xúc.",
    features: [
      "Creating advanced virtual agents in minutes that smoothly switch between topics",
      "Real-time, step-by-step assistance for human agents",
      "Multichannel communications between customers and agents",
    ],
    features_vn: [
      "Tạo các agent ảo nâng cao trong vài phút để chuyển đổi mượt mà giữa các chủ đề",
      "Trợ giúp bước bước thực tế tại thời điểm để các agent con người",
      "Truyền thông đa kênh giữa khách hàng và đại lý",
    ],
    video: ["https://www.youtube.com/embed/UAyYk7FhHJQ"],
  },
  {
    product: "AI assistance and conversational AI - Gemini Code Assist",
    desc: "Gemini Code Assist offers code recommendations in real time, suggests full function and code blocks, and identifies vulnerabilities and errors in the code—while suggesting fixes. Assistance can be accessed via a chat interface, Cloud Shell Editor, or Cloud Code IDE extensions for VSCode and JetBrains IDEs.",
    desc_vn:
      "Gemini Code Assist cung cấp các khuyến nghị mã trong thời gian thực, đề xuất các khối mã và hàm đầy đủ, và nhận ra các lỗ hổng và lỗi trong mã—trong khi đề xuất các sửa chữa. Trợ giúp có thể được truy cập thông qua một giao diện trò chuyện, Cloud Shell Editor, hoặc các phần mở rộng IDE Code Cloud và JetBrains IDEs.",
    features: [
      "Code assistance for Go, Java, JavaScript, Python, and SQL",
      "SQL completions, query generation, and summarization using natural language",
      "Suggestions to structure, modify, or query your data during database migration",
      "Identify and troubleshoot errors using natural language",
    ],
    features_vn: [
      "Trợ giúp mã cho Go, Java, JavaScript, Python và SQL",
      "Hoàn thành SQL, tạo truy vấn và tóm tắt bằng ngôn ngữ tự nhiên",
      "Đề xuất cấu trúc, sửa đổi hoặc truy vấn dữ liệu trong chuyển đổi cơ sở dữ liệu",
      "Nhận biết và khắc phục các lỗi bằng ngôn ngữ tự nhiên",
    ],
    video: ["https://www.youtube.com/embed/R_eBnE9FInA"],
  },
];

export { GOOGLE_CLOUD_PRODUCTS };
