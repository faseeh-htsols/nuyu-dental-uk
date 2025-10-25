"use client";
import Container from "@/components/container";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import HeadingTwo from "@/components/heading-two";
import Link from "next/link";
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phonenumber: Yup.string()
    .required("Phone number is required.")
    .matches(
      /^(?:\+?44)?(?:\d\s?){11}$/,
      "Phone number must contain exactly 11 digits (spaces allowed)"
    ),
  email: Yup.string()
    .email("Invalid Email format")
    .required("Email is required"),
  message: Yup.string().required("Message is Required."),
  privacyPolicy: Yup.bool().oneOf(
    [true],
    "You must agree to the Privacy Policy."
  ),
});
const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submition, setSubmition] = useState("Form submitted successfully!");
  const sendEmail = (
    values: {
      name: string;
      phonenumber: string;
      email: string;
      message: string;
      privacyPolicy: boolean;
    },
    formikHelpers: FormikHelpers<{
      name: string;
      phonenumber: string;
      email: string;
      message: string;
      privacyPolicy: boolean;
    }>
  ) => {
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_2cnqd96",
        "template_3sely7f",
        "#contactForm",
        "nQBJzdhm_0rQ4QbLv"
      )
      .then(
        () => {
          setIsLoading(false);
          setIsSubmitted(true);
          // alert("Message sent successfully!");
          formikHelpers.resetForm(); // Reset the form after successful submission
          // setPrivacyChecked(false); // Reset custom checkbox
        },
        () => {
          // console.log(error.text);
          setSubmition("Failed to send message, please try again.");
          setIsSubmitted(true);
          setIsLoading(false);
        }
      );
  };
  return (
    <div id="contact" className="scroll-mt-32">
      <Container>
        {/* form map starts */}
        <div className="rounded-[30px] mb-10 shadow-[0_0_12px_1px_rgba(0,0,0,.2)] overflow-hidden">
          <div className="relative grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-white text-black p-10 order-1 lg:order-0">
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
                  <a href="" className="flex gap-4 mb-4 text-secondary">
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
                        className="flex gap-4 mb-4 text-secondary"
                      >
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
                        href="https://maps.apple.com/?address=64%20Winchcombe%20Street,%20Cheltenham,%20GL52%202ND,%20England&ll=51.901946,-2.071688&q=64%20Winchcombe%20Street&t=m"
                        target="_blank"
                        className="flex gap-4 mb-4 text-secondary"
                      >
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
                        className="flex gap-4 mb-4 text-secondary"
                      >
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
                        className="flex gap-4 mb-4 text-secondary"
                      >
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
            <div className="bg-primary p-5 flex items-center" id="contact">
              <Formik
                initialValues={{
                  name: "",
                  phonenumber: "",
                  email: "",
                  message: "",
                  privacyPolicy: false,
                }}
                validationSchema={validationSchema}
                onSubmit={sendEmail}
              >
                {({ setFieldValue }) => (
                  <Form id="contactForm" className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="" className="text-white">
                        Name*
                      </label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="border-white placeholder:text-white border bg-transparent h-[43px] p-4 focus:outline-none"
                      />
                      <ErrorMessage
                        name="name"
                        component="p"
                        className="text-white font-bold mt-2 text-sm"
                      />
                    </div>
                    {/* <div className="grid md:grid-cols-2 gap-3"> */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="" className="text-white">
                        Phone Number*
                      </label>
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
                    {/* </div> */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="" className="text-white">
                        Email*
                      </label>
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
                    <div className="flex flex-col gap-2">
                      <label htmlFor="" className="text-white">
                        How can we help?*
                      </label>
                      <Field
                        as="textarea"
                        className="form-control placeholder:text-white p-4 w-full h-[120px] bg-transparent border border-white text-white focus:outline-none"
                        name="message"
                        id="message"
                        placeholder="Your message..."
                      ></Field>
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
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setPrivacyChecked(e.target.checked); // Update custom checkbox state
                          setFieldValue("privacyPolicy", e.target.checked); // Update Formik's field value
                        }}
                      />
                      <label htmlFor="" className="text-white">
                        Please tick this box to agree to our{" "}
                        <Link className="underline" href={"/"}>
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
                        className="bg-transparent w-full  border text-white border-white p-3 rounded-full transition-all duration-300 hover:rounded-se-none hover:rounded-bl-none"
                      >
                        {/* Send Message */}
                        {isLoading ? "---" : "Send Message"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        {/* form map ends */}
      </Container>
      {isSubmitted && (
        <div className="fixed inset-0 backdrop-blur bg-black/50 flex items-center justify-center z-[10003]">
          <div className="mt-4 rounded-[10px] bg-primary shadow-lg z-50 w-full max-w-[450px]">
            <p className="py-5 px-6 text-[#fff] text-[14px] border-b-[1px] border-secondary/20">
              {submition}
            </p>

            <div className="my-3 flex items-center justify-end px-6">
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-white px-5 py-2 border border-white  text-[14px] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
