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
  formName: Yup.string().required("Form Name is Required."),
  privacyPolicy: Yup.bool().oneOf(
    [true],
    "You must agree to the Privacy Policy."
  ),
});
const ContactUsCopy = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submition, setSubmition] = useState(
    "Thank you for taking the time to complete the contact form. A member of our team will be in touch with you soon. We look forward to helping you achieve your best smile."
  );
  const sendEmail = (
    values: {
      name: string;
      phonenumber: string;
      email: string;
      message: string;
      privacyPolicy: boolean;
      formName: string;
    },
    formikHelpers: FormikHelpers<{
      name: string;
      phonenumber: string;
      email: string;
      message: string;
      formName: string;
      privacyPolicy: boolean;
    }>
  ) => {
    setIsLoading(true);
    console.log("reached");
    emailjs
      .sendForm(
        "service_2cnqd96",
        "template_523byis",
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
    <div id="contact" className="scroll-mt-24">
      <Container>
        {/* form map starts */}
        <div className="rounded-[30px] mb-10 shadow-[0_0_12px_1px_rgba(0,0,0,.2)] overflow-hidden">
          <div className="relative grid grid-cols-1 lg:grid-cols-2">
            <div>
              <Image
                src={"/contact-us.webp"}
                alt=""
                width={700}
                height={700}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="bg-primary p-5 flex lg:items-center" id="contact">
              <Formik
                initialValues={{
                  name: "",
                  phonenumber: "",
                  formName: "DentalImplants",
                  email: "",
                  message: "",
                  privacyPolicy: false,
                }}
                validationSchema={validationSchema}
                onSubmit={sendEmail}
              >
                {({ setFieldValue }) => (
                  <Form id="contactForm" className="flex flex-col gap-4 w-full">
                    <HeadingTwo classes="text-white mb-4 text-center lg:text-left">
                      Get started with a FREE consultation
                    </HeadingTwo>
                    <Field
                      className="hidden"
                      type="hidden"
                      value="DentalImplants"
                      name="formName"
                    />
                    <ErrorMessage
                      name="formName"
                      component="p"
                      className="text-red mt-2 text-sm"
                    />
                    <div className="flex flex-col gap-2">
                      <Field
                        type="text"
                        name="name"
                        placeholder="Name*"
                        className="border-white text-white placeholder:text-white/45 border bg-transparent h-[43px] p-4 focus:outline-none"
                      />
                      <ErrorMessage
                        name="name"
                        component="p"
                        className="text-red mt-2 text-sm"
                      />
                    </div>
                    {/* <div className="grid md:grid-cols-2 gap-3"> */}
                    <div className="flex flex-col gap-2">
                      <Field
                        type="text"
                        name="phonenumber"
                        placeholder="Phone Number*"
                        className="border-white text-white placeholder:text-white/45 border bg-transparent h-[43px] p-4  focus:outline-none"
                      />
                      <ErrorMessage
                        name="phonenumber"
                        component="p"
                        className="text-red mt-2 text-sm"
                      />
                    </div>{" "}
                    {/* </div> */}
                    <div className="flex flex-col gap-2">
                      <Field
                        type="text"
                        name="email"
                        placeholder="Email*"
                        className="border-white text-white placeholder:text-white/45 border bg-transparent h-[43px] p-4  focus:outline-none"
                      />
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-red mt-2 text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Field
                        as="textarea"
                        className="form-control placeholder:text-white/45 p-4 w-full h-[120px] bg-transparent border border-white text-white focus:outline-none"
                        name="message"
                        id="message"
                        placeholder="How can we help?*"
                      ></Field>
                      <ErrorMessage
                        name="message"
                        component="p"
                        className="text-red mt-2 text-sm"
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
                        <Link className="underline" href={"/privacy-policy"}>
                          privacy policy
                        </Link>{" "}
                        before continuing.
                      </label>
                    </div>
                    <ErrorMessage
                      name="privacyPolicy"
                      component="p"
                      className="text-red mt-2 text-sm"
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
        <div
          className="fixed inset-0 backdrop-blur bg-black/50 flex items-center justify-center z-[10003]"
          onClick={() => setIsSubmitted(false)}
        >
          <div
            className={` relative flex flex-col lg:flex-row justify-between items-center bg-cover p-9 py-14 rounded-tr-3xl rounded-bl-3xl max-w-[800px]`}
            style={{
              backgroundImage: `linear-gradient(#87766370, #87766370), url("/invisalign/life-styles.jpg")`,
            }}
          >
            <div className="w-full lg:w-[60%]">
              <p className="text-white text-2xl mb-4">{submition}</p>
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
                onClick={() => setIsSubmitted(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
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
    </div>
  );
};

export default ContactUsCopy;
