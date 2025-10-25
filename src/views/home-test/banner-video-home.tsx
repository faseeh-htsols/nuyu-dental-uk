import React from "react";

const BannerVideoHome = () => {
  return (
    <div className="h-[70vh]">
      <video
        className="min-w-full h-full object-cover"
        src="/new-header.mp4"
        loop
        muted
        autoPlay
      ></video>
    </div>
  );
};

export default BannerVideoHome;
