"use client";
import dynamic from "next/dynamic";
const EnquiryBotLoader = dynamic(() => import("@/layout/EnquiryBotLoader"), {
  ssr: false,
});
const EnquryProvider = () => {
  return <EnquiryBotLoader />;
};

export default EnquryProvider;
