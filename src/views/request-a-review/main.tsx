import Banner from "@/components/review-banner";
import {
  REVIEW_BANNER,
} from "@/constants/data2";
import React from "react";

function Main() {
  return (
    <div>
      <Banner data={REVIEW_BANNER} />
    </div>
  );
}

export default Main;
