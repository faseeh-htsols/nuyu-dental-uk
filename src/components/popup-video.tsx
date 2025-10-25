import React from "react";
import Image from "next/image";

interface PopupIframeProps {
  src: string;
  title: string;
  onClose: () => void;
}

const PopupVideo: React.FC<PopupIframeProps> = ({ src, title, onClose }) => {
  const isYouTube = src.includes("youtube.com") || src.includes("youtu.be");
  return (
    <div
      className="fixed inset-0 bg-black/50 bg-opacity-70 flex items-center justify-center backdrop-blur z-[10000]"
      onClick={onClose}>
      <button
        className="absolute flex cursor-pointer justify-center items-center border-4 h-12 w-12 rounded-full left-0 top-3 left-3 text-white z-[10000] text-4xl focus:outline-none"
        onClick={onClose}>
        <Image
          src={"/close-check.png"}
          width={40}
          height={40}
          alt="close button"
        />
      </button>
      <div
        className="relative w-11/12 max-w-4xl aspect-video bg-white rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}>
        {isYouTube ? (
          <iframe
            className="w-full h-full border-none"
            src={src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
        ) : (
          <iframe
            src={src}
            title={title}
            className="w-full h-full border-none"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
};

export default PopupVideo;
