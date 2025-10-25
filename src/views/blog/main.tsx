import React from "react";
import Banner from "./banner";
import BlogRoom from "./blog-room";
// import { blogData } from "@/constants/data2";
import SliderImagesOverlaying from "../home/slider-images-overlaying";
import CoreServicesNewOne from "../home/core-services-new-one";
interface blog {
  id: number;
  title: string;
  pictureUrl: string;
  slug: string;
  scheduledDate: string;
}
function Main({ data }: { data: blog[] }) {
  return (
    <div>
      <Banner />
      <BlogRoom data={data} />
      <SliderImagesOverlaying heading="Your Smile Starts Here - Why NUYU?" />
      <CoreServicesNewOne />
    </div>
  );
}

export default Main;
