"use client";
import { useState, useEffect } from "react";
import ArrowSvg from "@/components/arrow-svg";
import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
// import SimpleButton from "@/components/simple-button";
// import { FOOTER_LINKS } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
const treatmentOptions = [
  { value: "General Dentistry", label: "General Dentistry" },
  { value: "Invisalign®/Ortho", label: "Invisalign<sup>®</sup>/Ortho" },
  { value: "Teen Orthodontics", label: "Teen Orthodontics" },
  { value: "Dental Implants", label: "Dental Implants" },
  { value: "Smile Makeovers", label: "Smile Makeovers" },
  { value: "Composite Bonding", label: "Composite Bonding" },
];
const contactMethod = [
  { value: "Phone", label: "Phone" },
  { value: "WhatsApp", label: "WhatsApp" },
  { value: "Email", label: "Email" },
];

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phonenumber: Yup.string()
    .required("Phone number is required.")
    .matches(
      /^(?:\+?44)?(?:\d\s?){11}$/,
      "Phone number must contain exactly 11 digits (spaces allowed)"
    ),
  promocode: Yup.string().max(30, "Promo code must be less than 30 characters"),
  email: Yup.string()
    .email("Invalid Email format")
    .required("Email is required"),
  treatments: Yup.array().min(1, "Atleast pick one"),
  contactMethod: Yup.array().min(1, "Atleast pick one"),
  message: Yup.string().required("Message is Required."),
  privacyPolicy: Yup.bool().oneOf(
    [true],
    "You must agree to the Privacy Policy."
  ),
});
const Footer = ({ hide }: { hide?: boolean }) => {
  // Get the current date
  const [displayDate, setDisplayDate] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [submission, setSubmition] = useState(
    "Thank you for taking the time to complete the contact form. A member of our team will be in touch with you soon. We look forward to helping you achieve your best smile."
  );

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
  const sendEmail = (
    values: {
      treatments: string[];
      name: string;
      promocode: string;
      phonenumber: string;
      email: string;
      message: string;
      privacyPolicy: boolean;
      contactMethod: string[];
    },
    formikHelpers: FormikHelpers<{
      treatments: string[];
      promocode: string;
      name: string;
      phonenumber: string;
      email: string;
      message: string;
      privacyPolicy: boolean;
      contactMethod: string[];
    }>
  ) => {
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_2cnqd96",
        "template_3sely7f",
        "#contactFormFooter",
        "nQBJzdhm_0rQ4QbLv"
      )
      .then(
        () => {
          console.log(values);
          setIsLoading(false);
          setIsSubmitted(true);
          // alert("Message sent successfully!");
          formikHelpers.resetForm(); // Reset the form after successful submission
          // setPrivacyChecked(false); // Reset custom checkbox
        },
        () => {
          // console.log(error.text);
          console.log(values);
          setSubmition("Failed to send message, please try again.");
          setIsSubmitted(true);
          setIsLoading(false);
        }
      );
  };
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
              <div className="bg-primary p-5 " id="contact">
                <Formik
                  initialValues={{
                    name: "",
                    promocode: "",
                    phonenumber: "",
                    email: "",
                    treatments: [] as string[],
                    message: "",
                    privacyPolicy: false,
                    contactMethod: [] as string[],
                  }}
                  validationSchema={validationSchema}
                  onSubmit={sendEmail}>
                  {({ setFieldValue }) => (
                    <Form
                      id="contactFormFooter"
                      className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="">Name*</label>
                        <Field
                          as="input"
                          name="name"
                          autoComplete="off"
                          placeholder="Your Name"
                          className="border-white placeholder:text-white border bg-transparent h-[43px] p-4 focus:outline-none"
                        />
                        <ErrorMessage
                          name="name"
                          component="p"
                          className="text-white font-bold mt-2 text-sm"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="">Phone Number*</label>
                          <Field
                            type="text"
                            name="phonenumber"
                            placeholder="Your Phone Number"
                            className="border-white placeholder:text-white border bg-transparent h-[43px] p-4  focus:outline-none"
                          />
                          <ErrorMessage
                            name="phonenumber"
                            component="p"
                            className="text-white font-bold mt-2 text-sm"
                          />
                        </div>{" "}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="">Email*</label>
                          <Field
                            type="text"
                            name="email"
                            placeholder="Your Email"
                            className="border-white placeholder:text-white border bg-transparent h-[43px] p-4  focus:outline-none"
                          />
                          <ErrorMessage
                            name="email"
                            component="p"
                            className="text-white font-bold mt-2 text-sm"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="">
                          Treatment You&apos;re Interested In*
                        </label>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {treatmentOptions.map(({ label, value }) => (
                            <label
                              key={value}
                              className="flex items-center gap-2 text-white">
                              <Field
                                type="checkbox"
                                name="treatments"
                                value={value}
                                className="w-4 h-4 accent-blue border-2 rounded-sm checked:bg-primary checked:shadow-xl shadow-primary"
                              />
                              <p dangerouslySetInnerHTML={{ __html: label }} />
                            </label>
                          ))}
                        </div>
                        <ErrorMessage
                          component="p"
                          name="treatments"
                          className="text-white font-bold mt-2 text-sm"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="">
                          How would you prefer for us to contact you?
                        </label>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                          {contactMethod.map(({ label, value }) => (
                            <label
                              key={value}
                              className="flex items-center gap-2 text-white">
                              <Field
                                type="checkbox"
                                name="contactMethod"
                                value={value}
                                className="w-4 h-4 accent-blue border-2 rounded-sm checked:bg-primary checked:shadow-xl shadow-primary"
                              />
                              <p dangerouslySetInnerHTML={{ __html: label }} />
                            </label>
                          ))}
                        </div>
                        <ErrorMessage
                          component="p"
                          name="contactMethod"
                          className="text-white font-bold mt-2 text-sm"
                        />
                      </div>
                      <div className="w-full flex-col flex gap-2">
                        <label htmlFor="">Promo Code</label>
                        <Field
                          type="input"
                          name="promocode"
                          placeholder="Promo Code"
                          className="border-white placeholder:text-white w-full border bg-transparent h-[43px] p-4 focus:outline-none"
                        />
                        <ErrorMessage
                          name="promocode"
                          component="p"
                          className="text-white font-bold mt-2 text-sm"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="">How can we help?*</label>
                        <Field
                          as="textarea"
                          className="form-control placeholder:text-white p-4 w-full h-[120px] bg-transparent border border-white text-white focus:outline-none"
                          name="message"
                          id="message"
                          placeholder="Your message..."></Field>
                        <ErrorMessage
                          name="message"
                          component="p"
                          className="text-white font-bold mt-2 text-sm"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Field
                          type="checkbox"
                          checked={privacyChecked}
                          className="h-[20px] w-[20px]"
                          name="privacyPolicy"
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setPrivacyChecked(e.target.checked); // Update custom checkbox state
                            setFieldValue("privacyPolicy", e.target.checked); // Update Formik's field value
                          }}
                        />
                        <label htmlFor="">
                          Please tick this box to agree to our{" "}
                          <Link
                            className="underline"
                            href={"/privacy-cookie-policy"}>
                            privacy policy
                          </Link>{" "}
                          before continuing.
                        </label>
                      </div>
                      <ErrorMessage
                        name="privacyPolicy"
                        component="p"
                        className="text-white font-bold mt-2 text-sm"
                      />
                      <div className="flex ">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="bg-transparent w-full  border border-white p-3 rounded-full transition-all duration-300 hover:rounded-tl-none hover:rounded-br-none">
                          {/* Send Message */}
                          {isLoading ? "---" : "Send Message"}
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
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
        {isSubmitted && (
          <div
            className="fixed inset-0 backdrop-blur bg-black/50 flex items-center justify-center z-[10003]"
            onClick={() => setIsSubmitted(false)}>
            <div
              className={` relative flex flex-col lg:flex-row justify-between items-center bg-cover p-9 py-14 rounded-tr-3xl rounded-bl-3xl max-w-[800px]`}
              style={{
                backgroundImage: `linear-gradient(#87766370, #87766370), url("/invisalign/life-styles.jpg")`,
              }}>
              <div className="w-full lg:w-[60%]">
                <p className="text-white text-2xl mb-4">{submission}</p>
              </div>
              <div className="w-full lg:w-[40%]">
                <Image
                  src={"/header-image-v3.webp"}
                  alt="logo"
                  width={500}
                  height={500}
                  className="w-full h-96 object-contain"
                />
                <button
                  className="absolute top-5 right-5 text-white text-2xl"
                  onClick={() => setIsSubmitted(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </footer>
    </>
  );
};

export default Footer;
