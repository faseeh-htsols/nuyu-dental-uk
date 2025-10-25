"use client";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
const ImageComparisonSlider = ({
  beforeImage,
  afterImage,
  name,
}: {
  beforeImage: string;
  afterImage: string;
  name?: string;
}) => {
  const [position, setPosition] = useState(50);
  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPosition(Number(e.target.value));
  };
  return (
    <>
      <div>
        <div className="relative flex justify-center items-center overflow-hidden w-full max-w-lg">
          <div className="relative grid place-content-center">
            <Image
              src={beforeImage}
              width={500}
              height={500}
              alt="black and white"
              className="w-full h-auto object-cover"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 0 0 ${position}%)` }}
            >
              <Image
                alt="color photo"
                src={afterImage}
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={handleSliderChange}
            aria-label="Percentage of before photo shown"
            className="absolute inset-0 z-[2] w-full h-full cursor-pointer opacity-0"
          />
          <div
            className="absolute z-[2] inset-0 w-[3px] shadow-sm bg-primary pointer-events-none"
            style={{ left: `${position}%`, transform: "translateX(-50%)" }}
            aria-hidden="true"
          ></div>
          <div
            className="absolute z-[2] opacity-60 bg-white text-black p-1 rounded-full grid place-items-center shadow-md pointer-events-none"
            style={{
              left: `${position}%`,
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            aria-hidden="true"
          >
            <Image
              src={"/sticky-logo.webp"}
              height={30}
              width={30}
              alt="logo"
            />
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="128"
              y1="40"
              x2="128"
              y2="216"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="96"
              y1="128"
              x2="16"
              y2="128"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <polyline
              points="48 160 16 128 48 96"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></polyline>
            <line
              x1="160"
              y1="128"
              x2="240"
              y2="128"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <polyline
              points="208 96 240 128 208 160"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></polyline>
          </div>
        </div>
        {name && (
          <p
            className="text-lg text-center mt-5"
            dangerouslySetInnerHTML={{ __html: name }}
          />
        )}
      </div>
    </>
  );
};

export default ImageComparisonSlider;
