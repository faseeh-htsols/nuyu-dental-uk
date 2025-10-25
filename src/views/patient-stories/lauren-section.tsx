import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LaurenSection = () => {
  return (
    <div className="py-5 lg:py-10 bg-[url(/white-textured.webp)]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <HeadingTwo classes="text-center">
              I highly recommend them both and can’t thank them enough, I LOVE
              my teeth now.
            </HeadingTwo>
            <p className="text-xl text-primary text-center">Stacey</p>
            <div className="w-[80%] mx-auto">
              <Image
                src={"/stacey-mobile-v1.webp"}
                width={500}
                height={500}
                className="w-full h-auto lg:hidden block"
                quality={100}
                alt="Stacey"
              />
            </div>
            <p>
              I decided to have{" "}
              <Link href={"/treatments/straighten-align/invisalign"}>
                Invisalign<sup>®</sup>
              </Link>{" "}
              and SmileFast{" "}
              <Link href={"/treatments/whiten-enhance/composite-bonding"}>
                composite bonding
              </Link>{" "}
              done as I was always self-conscious about my teeth, they have now
              transformed and given me a bright wide smile, I’ve gained so much
              more confidence, I wish I’d of had them done sooner.
              <br />
              <br />
              I had such a great experience with Dr. Naiz and Dr. Natalia! Dr.
              Naiz made me feel super comfortable right from the start — the
              whole treatment felt really welcoming and easy. Once my Invisalign
              was finished Dr. Natalia did my SmileFast composite bonding, I
              honestly couldn’t be happier with how my smile turned out. They’re
              both amazing at what they do, and the whole process was smooth and
              stress-free.
              <br />
              <br />I highly recommend them both and can’t thank them enough, I
              LOVE my teeth now.
            </p>
          </div>
          <div className="lg:block hidden">
            <Image
              src={"/lauren.webp"}
              alt=""
              width={800}
              height={800}
              quality={100}
              className="w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LaurenSection;
