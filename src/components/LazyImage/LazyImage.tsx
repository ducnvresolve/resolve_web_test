"use client";
import React, { useState, useEffect, useRef } from "react";

export const LazyImage = ({
  src,
  alt,
  width,
  height,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  width: number | "full";
  height: number;
  className?: string;
  imgClassName?: string;
}) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div
      style={{
        width,
        height,
        position: "relative",
      }}
      className={className + " rounded-lg"}
    >
      {!loaded && (
        <div
          style={{
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(90deg, #f3f3f3 25%, #e0e0e0 50%, #f3f3f3 75%)",
            animation: "skeleton 1.2s infinite",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.5s",
          display: "block",
          width: "100%",
          height: "100%",
          // objectFit: "cover",
          borderRadius: "0.5rem",
        }}
        onLoad={() => setLoaded(true)}
        className={
          imgClassName
            ? `${imgClassName}`
            : // "object-cover"
              "object-contain"
        }
      />
      <style>{`
        @keyframes skeleton {
          0% { background-position: -200px 0; }
          100% { background-position: calc(200px + 100%) 0; }
        }
      `}</style>
    </div>
  );
};
