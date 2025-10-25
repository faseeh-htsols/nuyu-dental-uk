import Container from "@/components/container";
import Image from "next/image";

const Gallery = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-9 gap-4">
        <div className="col-span-1 md:col-start-4 md:col-span-8 lg:col-start-1 lg:col-span-4">
          <Image
            className="w-full h-full object-cover rounded-3xl"
            width={1000}
            height={1000}
            src="/patient-gallery/first.jpg"
            alt="image decoration"
          />
        </div>
        <div className="col-span-1 md:col-start-4 md:col-span-3 lg:col-start-5 lg:col-span-4">
          <Image
            className="w-full h-full object-cover rounded-3xl"
            width={1000}
            height={1000}
            src="/patient-gallery/second.jfif"
            alt="image decoration"
          />
        </div>
        <div className="col-span-1 md:col-start-3 md:col-span-5 lg:col-start-3 lg:col-span-3">
          <Image
            className="w-full h-full object-cover rounded-3xl"
            width={1000}
            height={1000}
            src="/patient-gallery/third.jfif"
            alt="image decoration"
          />
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
