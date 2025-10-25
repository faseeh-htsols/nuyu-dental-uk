"use client";
import { useState, useEffect } from "react";
import ArrowSvg from "@/components/arrow-svg";
import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
// import SimpleButton from "@/components/simple-button";
// import { FOOTER_LINKS } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
// const treatmentOptions = [
//   { value: "General Dentistry", label: "General Dentistry" },
//   { value: "Invisalign®/Ortho", label: "Invisalign<sup>®</sup>/Ortho" },
//   { value: "Teen Orthodontics", label: "Teen Orthodontics" },
//   { value: "Dental Implants", label: "Dental Implants" },
//   { value: "Smile Makeovers", label: "Smile Makeovers" },
//   { value: "Composite Bonding", label: "Composite Bonding" },
// ];

const FooterLaunch = ({ hide }: { hide?: boolean }) => {
  // Get the current date
  const [displayDate, setDisplayDate] = useState<string>("");
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    const savedDate = localStorage.getItem("lastUpdatedDate");
    const currentDate = new Date();

    if (savedDate) {
      const lastUpdated = new Date(savedDate);
      const diffDays = Math.floor(
        (currentDate.getTime() - lastUpdated.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (diffDays >= 15) {
        // Update the date and store it
        localStorage.setItem("lastUpdatedDate", currentDate.toISOString());
        setDisplayDate(formatDate(currentDate));
      } else {
        setDisplayDate(formatDate(lastUpdated));
      }
    } else {
      // First-time initialization
      localStorage.setItem("lastUpdatedDate", currentDate.toISOString());
      setDisplayDate(formatDate(currentDate));
    }
  }, []);

  function formatDate(date: Date): string {
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }
  return (
    <>
      <div>
        <a
          href="https://onlineappointment.carestack.uk/?dn=nuyu&ln=1#/select-reason"
          target="_blank"
          className="fixed flex top-1/2 right-0 rounded-l-3xl z-[1000]  bg-primary text-white shadow-[0_0_12px_#fff] px-2 py-6">
          <span
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(-180deg)",
            }}>
            {" "}
            BOOK ONLINE
          </span>
        </a>
      </div>

      <footer className=" text-white relative py-12">
        <Container>
          {/* form map starts */}
          <div className="rounded-[30px] mb-10 shadow-2xl overflow-hidden">
            <div className="relative grid grid-cols-1 lg:grid-cols-2  ">
              <div className="bg-white text-black p-10">
                <HeadingTwo classes="mb-8">Find us in Cheltenham</HeadingTwo>
                <div>
                  <p className="text-xl mb-6">
                    <span className="text-secondary ">
                      NUYU Dental & Aesthetics
                    </span>{" "}
                    <br />
                    64 Winchcombe Street <br />
                    Cheltenham
                    <br />
                    GL52 2ND
                  </p>
                  <div>
                    <a
                      href="tel:01242339233"
                      className="flex gap-4 mb-4 text-secondary">
                      <Image
                        src={"/call-logo.svg"}
                        alt="call "
                        width={30}
                        height={30}
                        className="w-5 h-auto"
                      />
                      01242 339233
                    </a>
                    <div>
                      <p className="text-lg font-medium mb-3">Opening times</p>
                      <p className="mb-4">
                        Monday to Friday: 9:00am - 6:00pm
                        <br />
                        Saturday: 9:00am - 1:30pm
                      </p>
                      <div>
                        <a
                          href="https://maps.app.goo.gl/KeHtTm5SQnPUYSAG8"
                          target="_blank"
                          className="flex gap-4 mb-4 text-secondary">
                          <Image
                            src={"/pin-google-icon.svg"}
                            alt="icon"
                            width={20}
                            height={20}
                            className="w-6 h-6"
                          />
                          View in Google maps
                        </a>
                        <a
                          href="https://maps.apple.com/place?address=64%20Winchcombe%20Street,%20Cheltenham,%20GL52%202ND,%20England&coordinate=51.901958,-2.071685&name=NUYU%20Dental%20%26%20Aesthetics&place-id=I8E1890DD809700A7&map=explore"
                          target="_blank"
                          className="flex gap-4 mb-4 text-secondary">
                          <Image
                            src={"/apple-map-logo.svg"}
                            alt="icon"
                            width={20}
                            height={20}
                            className="w-6 h-6"
                          />
                          View in Apple maps
                        </a>
                        <a
                          href="https://www.instagram.com/nuyu.dental.cheltenham/"
                          target="_blank"
                          className="flex gap-4 mb-4 text-secondary">
                          <Image
                            src={"/instagram.svg"}
                            alt="icon"
                            width={20}
                            height={20}
                            className="w-6 h-6"
                          />
                          Follow us on Instagram
                        </a>
                        <a
                          href="mailto:info@nuyu-dental.co.uk"
                          className="flex gap-4 mb-4 text-secondary">
                          <Image
                            src={"/email.svg"}
                            alt="icon"
                            width={20}
                            height={20}
                            className="w-6 h-6"
                          />
                          Drop us an Email
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative min-h-96  h-full">
                {" "}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.7504593497006!2d-2.0716240000000004!3d51.902017900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48711b72c182049f%3A0x7658e1128104e9dc!2sNUYU%20Dental%20%26%20Aesthetics!5e0!3m2!1sen!2s!4v1739549541861!5m2!1sen!2s"
                  width="600"
                  className="absolute w-full h-full inset-0"
                  height="450"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
          {/* form map ends */}
          {/* logo links starts  */}
          <div className="md:grid grid-cols-2 gap-3 mb-4 block">
            <div>
              <Link href={hide ? "/launch" : "/"}>
                <Image
                  src={"/logo-footer.webp"}
                  width={300}
                  height={300}
                  className="w-[250px] h-auto mx-auto md:mx-0"
                  alt="logo"
                />
              </Link>
            </div>
            {/* <div className="flex items-center gap-3 justify-center">
            <Link
              href={"/"}
              className="flex text-sm uppercase relative gap-2 pb-3 after:content-[''] after:absolute after:bottom-1 after:h-[2px] after:w-full after:bg-white"
            >
              Dentist referrals{" "}
              <ArrowSvg classes="-rotate-45 w-5 h-auto" fill="#fff" />
            </Link>{" "}
            <Link
              href={"/"}
              className="flex text-sm uppercase relative gap-2 pb-3 after:content-[''] after:absolute after:bottom-1 after:h-[2px] after:w-full after:bg-white"
            >
              Contact us{" "}
              <ArrowSvg classes="-rotate-45 w-5 h-auto" fill="#fff" />
            </Link>
          </div> */}

            {!hide && (
              <div className="flex flex-col mt-3 sm:mt-0 sm:flex-row justify-center md:justify-end gap-3 items-center">
                <div className="flex items-center gap-3 justify-center">
                  <div
                    onMouseOver={() => setDropDown(true)}
                    onMouseLeave={() => setDropDown(false)}
                    onClick={() => setDropDown((prev) => !prev)}
                    className="relative">
                    <div className="flex text-sm cursor-pointer uppercase gap-2 pb-3 before:content-[''] before:absolute before:bottom-1 before:h-[2px] before:w-full before:bg-white before:transition-[width] hover:before:w-0 before:duration-300 ">
                      Dentist referrals{" "}
                      <ArrowSvg classes="-rotate-45 w-5 h-auto" fill="#fff" />
                    </div>
                    {dropDown && (
                      <ul className=" flex text-sm flex-col gap-2 absolute rounded-3xl animate-dropdown bottom-full  shadow-sm bg-tertiary text-black p-4 min-w-[220px] z-50">
                        <li>
                          <Link
                            className="transition-all duration-300 relative before:content-[''] before:absolute  before:bottom-0 
                            before:left-0 before:transition-all before:duration-300 before:h-[1px] before:w-0 before:bg-black hover:before:w-full"
                            href="/referral/cbct">
                            CBCT
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="transition-all duration-300 relative before:content-[''] before:absolute  before:bottom-0  before:left-0 before:transition-all before:duration-300 before:h-[1px] before:w-0 before:bg-black hover:before:w-full "
                            href="/referral/dental-implant">
                            Dental Implants
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="transition-all duration-300 relative before:content-[''] before:absolute  before:bottom-0  before:left-0 before:transition-all before:duration-300 before:h-[1px] before:w-0 before:bg-black hover:before:w-full "
                            href="/referral/extractions">
                            Extractions
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>{" "}
                  <Link
                    href={"/contact-us"}
                    className="flex text-sm uppercase relative gap-2 pb-3 after:content-[''] after:absolute after:bottom-1 after:h-[2px] after:w-full after:bg-white after:transition-[width] hover:after:w-0 after:duration-300">
                    Contact us{" "}
                    <ArrowSvg classes="-rotate-45 w-5 h-auto" fill="#fff" />
                  </Link>
                </div>
                <Link
                  href={"/about-us"}
                  className="flex text-sm uppercase relative gap-2 pb-3 after:content-[''] after:absolute after:bottom-1 after:h-[2px] after:w-full after:bg-white after:transition-[width] hover:after:w-0 after:duration-300">
                  About Us{" "}
                  <ArrowSvg classes="-rotate-45 w-5 h-auto" fill="#fff" />
                </Link>
              </div>
            )}
          </div>
          {/* logo links ends  */}
          {/* <div className="relative flex gap-2 sm:gap-0 sm:flex-row flex-col items-start sm:items-center sm:justify-between mb-7">
          <div>
            <Link
              href={"/"}
              className="flex text-sm relative uppercase gap-2 pb-3 after:content-[''] after:absolute after:bottom-1 after:h-[2px] after:w-full after:bg-white"
            >
              <div>Dentist referrals</div>
              <ArrowSvg classes="-rotate-45 w-5 h-auto" fill="#fff" />
            </Link>
          </div>
          <div className="flex sm:flex-row flex-col gap-2 sm:gap-4">
            <Link
              href={"/"}
              className="flex text-sm uppercase relative gap-2 pb-3 after:content-[''] after:absolute after:bottom-1 after:h-[2px] after:w-full after:bg-white"
            >
              Find us <ArrowSvg classes="-rotate-45 w-5 h-auto" fill="#fff" />
            </Link>{" "}
            <Link
              href={"/"}
              className="flex text-sm uppercase relative gap-2 pb-3 after:content-[''] after:absolute after:bottom-1 after:h-[2px] after:w-full after:bg-white"
            >
              Contact us{" "}
              <ArrowSvg classes="-rotate-45 w-5 h-auto" fill="#fff" />
            </Link>
          </div>
        </div> */}
          <div className="flex justify-center sm:hidden">
            <p className="text-center">
              <Link
                href={"/terms-conditions"}
                className="text-[11px]  relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:transition-all before:duration-300 before:h-[1px] before:w-0 before:bg-white hover:before:w-full">
                Terms & Conditions
              </Link>{" "}
              |{" "}
              <Link
                href={"/privacy-cookie-policy"}
                className="text-[11px]  relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:transition-all before:duration-300 before:h-[1px] before:w-0 before:bg-white hover:before:w-full">
                Privacy & Cookie Policy
              </Link>{" "}
              |{" "}
              <Link
                href={"/complaint-policy"}
                className="text-[11px]  relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:transition-all before:duration-300 before:h-[1px] before:w-0 before:bg-white hover:before:w-full">
                Complaints Procedure
              </Link>{" "}
              |{" "}
              <a
                href={"https://www.cqc.org.uk/location/1-21880747208"}
                target="_blank"
                className="text-[11px]  relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:transition-all before:duration-300 before:h-[1px] before:w-0 before:bg-white hover:before:w-full">
                CQC
              </a>
            </p>
          </div>
          <div className=" relative hidden grid-cols-2 justify-items-center sm:flex sm:flex-row gap-3 md:items-center sm:grid-cols-none">
            <Link
              href={"/terms-conditions"}
              className="text-xs uppercase relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:transition-all before:duration-300 before:h-[1px] before:w-0 before:bg-white hover:before:w-full">
              Terms & Conditions
            </Link>
            <div className="sm:block hidden h-5 w-[1px] bg-white"></div>
            <Link
              href={"/privacy-cookie-policy"}
              className="text-xs uppercase relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:transition-all before:duration-300 before:h-[1px] before:w-0 before:bg-white hover:before:w-full">
              Privacy & Cookie Policy
            </Link>
            <div className="sm:block hidden h-5 w-[1px] bg-white"></div>
            <Link
              href={"/complaint-policy"}
              className="text-xs uppercase relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:transition-all before:duration-300 before:h-[1px] before:w-0 before:bg-white hover:before:w-full">
              Complaints Procedure
            </Link>
            <div className="sm:block hidden h-5 w-[1px] bg-white"></div>
            <a
              href="https://www.cqc.org.uk/location/1-21880747208"
              target="_blank"
              className="text-xs uppercase relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:transition-all before:duration-300 before:h-[1px] before:w-0 before:bg-white hover:before:w-full">
              cqc
            </a>
            {/* <div className="sm:block hidden h-5 w-[1px] bg-white"></div>
            <Link
              href={"/cookie-policy"}
              className="text-xs uppercase relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:transition-all before:duration-300 before:h-[1px] before:w-0 before:bg-white hover:before:w-full"
            >
              Cookie Policy
            </Link> */}
          </div>
          <div className="relative my-4 h-[1px] bg-white"></div>
          <div></div>
          <div className="relative flex flex-col sm:flex-row mb-[48px] lg:mb-0 justify-between">
            <p
              className="text-xs text-center lg:text-left"
              suppressHydrationWarning>
              © {new Date().getFullYear()} NUYU Dental website last updated{" "}
              {displayDate}
              {/* {displayDate} */}
            </p>
            <Link
              href={"https://www.smile-mc.co.uk/"}
              target="_blank"
              className="text-xs hover:underline text-center md:text-left">
              designed and maintained by smile marketing & consultancy
            </Link>
          </div>
        </Container>
        <div className="absolute -z-[1] bottom-0 left-0 w-full h-[70%] bg-primary"></div>
      </footer>
    </>
  );
};

export default FooterLaunch;
