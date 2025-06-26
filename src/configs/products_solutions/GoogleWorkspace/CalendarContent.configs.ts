import { ColumFeature } from "../../../templates/Products/Sisense/components/ColumFeatureCard";
import { IContent } from "../../../templates/Products/Sisense/components/ContentCardLong/interface";

const SHAREABLE_ONLINE_CALENDAR: IContent = {
  id: "shareable-online-calendar",
  title: "Shareable Online Calendar",
  title_vn: "Lịch trực tuyến có thể chia sẻ",
  desc: `Spend less time planning and more time doing with a shareable calendar that works across Google Workspace.
  `,
  desc_vn: `Dành ít thời gian hơn cho việc lên kế hoạch và nhiều thời gian hơn cho việc thực hiện với lịch có thể chia sẻ hoạt động trên toàn bộ Google Workspace.
  `,
  bullets: [
    {
      title: "Your plans, at your fingertips",
      title_vn: "Kế hoạch của bạn, trong tầm tay",
      desc: "Google Calendar brings all of your calendars together in one place, so you can manage work, personal life, and everything in between.",
      desc_vn:
        "Google Calendar tập hợp tất cả lịch của bạn vào một nơi, để bạn có thể quản lý công việc, cuộc sống cá nhân và mọi thứ ở giữa.",
      img: ["/assets/images/image223.png"],
    },
    {
      title: `Tackle your to-dos A smarter way to schedule`,
      title_vn: `Xử lý công việc cần làm - Cách lên lịch thông minh hơn`,
      desc: "Save time scheduling meetings by layering multiple calendars in a single view. Plus, keep everyone in the loop with shared calendars. <br/> Teams and organizations can easily schedule meetings and book rooms.",
      desc_vn:
        "Tiết kiệm thời gian lên lịch họp bằng cách xếp lớp nhiều lịch trong một chế độ xem. Ngoài ra, giữ mọi người trong vòng lặp với lịch được chia sẻ. <br/> Các nhóm và tổ chức có thể dễ dàng lên lịch họp và đặt phòng.",
      img: ["/assets/images/image127.png"],
    },
    {
      title: "Stay on top of your plans",
      title_vn: "Luôn nắm rõ kế hoạch của bạn",
      desc: "When you get an email about an event, like a concert, flight, or reservation, Google Calendar automatically adds it to your schedule.",
      desc_vn:
        "Khi bạn nhận được email về một sự kiện, như buổi hòa nhạc, chuyến bay hoặc đặt chỗ, Google Calendar tự động thêm nó vào lịch trình của bạn.",
      img: ["/assets/images/image179.png"],
    },
    {
      title: "Find the time, every day - See how you spend your time",
      title_vn: "Tìm thời gian, mỗi ngày - Xem cách bạn sử dụng thời gian",
      desc: "Time Insights analyzes your schedule to show how you spend your time, and who you're spending it with.",
      desc_vn:
        "Time Insights phân tích lịch trình của bạn để hiển thị cách bạn sử dụng thời gian và bạn đang dành thời gian với ai.",
      img: ["/assets/images/image267.png"],
    },
    {
      title: "Make time for others",
      title_vn: "Dành thời gian cho người khác",
      desc: "Appointment Schedules allow you to share your availability via a booking page, so external stakeholders, clients, and partners can book time with you.",
      desc_vn:
        "Lịch hẹn cho phép bạn chia sẻ thời gian có sẵn thông qua trang đặt lịch, để các bên liên quan bên ngoài, khách hàng và đối tác có thể đặt lịch với bạn.",
      img: ["/assets/images/image15.png"],
    },
  ],
};

const TASKS_FEATURES: ColumFeature[] = [
  {
    id: "add-task",
    title: "Add a task",
    title_vn: "Thêm một công việc",
    desc: "Add your task from right in Google Calendar, Gmail, or the Google Tasks app.",
    desc_vn:
      "Thêm công việc của bạn trực tiếp từ Google Calendar, Gmail hoặc ứng dụng Google Tasks.",
    img: "/assets/images/image3010.png",
  },
  {
    id: "set-due-date",
    title: "Set a due date",
    title_vn: "Đặt ngày đến hạn",
    desc: "Pick the day or time you'll want to complete the task by.",
    desc_vn: "Chọn ngày hoặc thời gian bạn muốn hoàn thành công việc.",
    img: "/assets/images/image3011.png",
  },
  {
    id: "check-it-off",
    title: "Check it off",
    title_vn: "Đánh dấu hoàn thành",
    desc: "Mark your tasks as complete to keep track of what you've accomplished.",
    desc_vn:
      "Đánh dấu công việc của bạn là đã hoàn thành để theo dõi những gì bạn đã hoàn thành.",
    img: "/assets/images/image3012.png",
  },
  {
    id: "rsvp-options",
    title: "RSVP options",
    title_vn: "Tùy chọn RSVP",
    desc: "Respond to meeting invitations with a location-specific RSVP.",
    desc_vn: "Trả lời lời mời họp với RSVP dành riêng cho địa điểm.",
    img: "/assets/images/image3013.png",
  },
  {
    id: "working-location",
    title: "Working location",
    title_vn: "Địa điểm làm việc",
    desc: "Let your colleagues know where you'll be working from.",
    desc_vn: "Cho đồng nghiệp biết bạn sẽ làm việc từ đâu.",
    img: "/assets/images/image3014.png",
  },
  {
    id: "working-hours",
    title: "Working hours",
    title_vn: "Giờ làm việc",
    desc: "Set and share your daily working routine.",
    desc_vn: "Thiết lập và chia sẻ thói quen làm việc hàng ngày của bạn.",
    img: "/assets/images/image3015.png",
  },
];

const TASKS_FEATURES_SECTION = {
  title: "",
  title_vn: "",
  features: TASKS_FEATURES,
};

const CALENDAR_FEATURES: ColumFeature[] = [];

const CALENDAR_FEATURES_SECTION = {
  title: "Simplify your day",
  title_vn: "Đơn giản hóa ngày của bạn",
  features: CALENDAR_FEATURES,
};

export {
  SHAREABLE_ONLINE_CALENDAR,
  TASKS_FEATURES_SECTION,
  CALENDAR_FEATURES_SECTION,
  TASKS_FEATURES,
  CALENDAR_FEATURES,
};
