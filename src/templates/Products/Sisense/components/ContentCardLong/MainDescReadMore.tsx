"use client";
import { memo, useState } from "react";

interface Props {
  desc: string;
  lng: string;
}

const MainDescReadMoreComponent = ({ desc, lng }: Props) => {
  const [expanded, setExpanded] = useState(false);

  // Split description by the first <br> tag
  const parts = desc.split(/<br\s*\/?>/);
  const hasReadMore = parts.length > 1 && parts[1].trim() !== "";

  if (!hasReadMore) {
    return (
      <p
        className="text-sm md:text-base text-gray-700 text-justify"
        dangerouslySetInnerHTML={{ __html: desc }}
      />
    );
  }

  const shortText = parts[0];
  const fullText = desc.replace(/<br\s*\/?>/g, " "); // Replace <br> with space when expanded

  return (
    <div className="text-sm md:text-base text-gray-700 text-justify">
      <span dangerouslySetInnerHTML={{ __html: expanded ? desc : shortText }} />
      {!expanded && (
        <button
          className="ml-1 text-purple-600 underline hover:text-purple-800 text-xs font-medium"
          onClick={() => setExpanded(true)}
        >
          {lng === "en" ? "Read more" : "Đọc tiếp"}
        </button>
      )}
    </div>
  );
};

export const MainDescReadMore = memo(MainDescReadMoreComponent);
