"use client";
import { memo, useState } from "react";

// Hiển thị desc rút gọn nếu dài quá 200 từ, có nút đọc tiếp
const DescWithReadMoreComponent = ({
  desc,
  lng,
}: {
  desc: string;
  lng: string;
}) => {
  const [expanded, setExpanded] = useState(false);
  // Loại bỏ tag HTML để đếm từ
  const plainText = desc
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = plainText.split(" ");
  if (words.length <= 60) {
    return (
      <div
        className="text-base text-gray-700 text-justify md:text-justify"
        dangerouslySetInnerHTML={{ __html: desc }}
      />
    );
  }
  // Lấy 200 từ đầu, giữ lại HTML đơn giản bằng cách cắt plainText
  const shortText = words.slice(0, 60).join(" ") + "...";
  return (
    <div className="text-base text-gray-700 text-justify md:text-justify">
      {expanded ? (
        <span dangerouslySetInnerHTML={{ __html: desc }} />
      ) : (
        <span>{shortText}</span>
      )}
      {!expanded && (
        <button
          className="ml-2 text-purple-600 underline hover:text-purple-800 text-sm font-medium"
          onClick={() => setExpanded(true)}
        >
          {lng === "en" ? "Read more" : "Đọc tiếp"}
        </button>
      )}
    </div>
  );
};

export const DescWithReadMore = memo(DescWithReadMoreComponent);
