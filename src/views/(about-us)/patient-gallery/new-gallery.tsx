"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import Container from "@/components/container";

const NewGallery = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger); // ✅ Register plugin

      const proxy = { skew: 0 };
      const skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg");
      const clamp = gsap.utils.clamp(-20, 20);

      ScrollTrigger.create({
        onUpdate: (self) => {
          const skew = clamp(self.getVelocity() / -300);
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {
              skew: 0,
              duration: 0.8,
              ease: "power3",
              overwrite: true,
              onUpdate: () => skewSetter(proxy.skew),
            });
          }
        },
      });

      gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
    },
    { scope: mainRef }
  );

  return (
    <Container>
      <div ref={mainRef} className="grid grid-cols-3">
        <div>
          <Image
            src={`/practice-gallery/1.webp`}
            width={1000}
            height={1000}
            className="w-full h-auto skewElem"
            alt={`gallery image`}
          />
        </div>
        <div>
          <Image
            src={`/practice-gallery/1.webp`}
            width={1000}
            height={1000}
            className="w-full h-auto skewElem"
            alt={`gallery image`}
          />
        </div>
        <div>
          <Image
            src={`/practice-gallery/1.webp`}
            width={1000}
            height={1000}
            className="w-full h-auto skewElem"
            alt={`gallery image`}
          />
        </div>
        <div>
          <Image
            src={`/practice-gallery/1.webp`}
            width={1000}
            height={1000}
            className="w-full h-auto skewElem"
            alt={`gallery image`}
          />
        </div>
        <div>
          <Image
            src={`/practice-gallery/1.webp`}
            width={1000}
            height={1000}
            className="w-full h-auto skewElem"
            alt={`gallery image`}
          />
        </div>
        <div>
          <Image
            src={`/practice-gallery/1.webp`}
            width={1000}
            height={1000}
            className="w-full h-auto skewElem"
            alt={`gallery image`}
          />
        </div>
        <div>
          <Image
            src={`/practice-gallery/1.webp`}
            width={1000}
            height={1000}
            className="w-full h-auto skewElem"
            alt={`gallery image`}
          />
        </div>
        <div>
          <Image
            src={`/practice-gallery/1.webp`}
            width={1000}
            height={1000}
            className="w-full h-auto skewElem"
            alt={`gallery image`}
          />
        </div>
        <div>
          <Image
            src={`/practice-gallery/1.webp`}
            width={1000}
            height={1000}
            className="w-full h-auto skewElem"
            alt={`gallery image`}
          />
        </div>
      </div>
    </Container>
  );
};

export default NewGallery;
