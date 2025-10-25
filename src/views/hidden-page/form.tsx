"use client";
import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import React, { useState } from "react";
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  useFormikContext,
  FormikHelpers,
} from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";

export default function FormContact() {
  interface FormValues {
    name: string;
    bussinessName: string;
    email: string;
    phone: string;
    atending: string;
    attendingOption: string;
    privacyPolicy: boolean;
  }
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submission, setSubmition] = useState(
    "Thank you for taking the time to complete the contact form. A member of our team will be in touch with you soon. We look forward to helping you achieve your best smile."
  );
  const AttendingConditionalField = () => {
    const { values } = useFormikContext<FormValues>();

    if (values.atending === "yes") {
      return (
        <div className="mt-4">
          <label className="text-white block mb-2">
            How many additional people will be attending with you
          </label>
          <Field
            as="select"
            name="attendingOption"
            className="border-white w-full text-white bg-transparent border p-2 focus:outline-none"
          >
            <option value="" disabled>
              Select Option
            </option>
            <option className="text-black" value="1">
              1
            </option>
            <option className="text-black" value="2">
              2
            </option>
            <option className="text-black" value="3">
              3
            </option>
          </Field>
          <ErrorMessage
            name="attendingOption"
            component="p"
            className="text-white font-bold mt-2 text-sm"
          />
        </div>
      );
    } else if (values.atending === "no") {
    }

    return null;
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    bussinessName: Yup.string().required("Business name is required"),
    phone: Yup.string()
      .required("Phone number is required.")
      .matches(
        /^(?:\+?44)?(?:\d\s?){11}$/,
        "Phone number must contain exactly 11 digits (spaces allowed)"
      ),
    atending: Yup.string().required("Please select an option"),
    email: Yup.string()
      .email("Invalid Email format")
      .required("Email is required"),
    privacyPolicy: Yup.bool().oneOf(
      [true],
      "You must agree to the Privacy Policy."
    ),
  });

  const sendEmail = (
    values: FormValues,
    formikHelpers: FormikHelpers<{
      name: string;
      bussinessName: string;
      email: string;
      phone: string;
      atending: string;
      attendingOption: string;
      privacyPolicy: boolean;
    }>
  ) => {
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_2cnqd96",
        "template_0dqev8j",
        "#contactForm",
        "nQBJzdhm_0rQ4QbLv"
      )
      .then(
        () => {
          console.log("Email sent successfully!");
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
    <>
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
      <Container>
        <div className="bg-primary -mt-32 shadow-xl relative py-10 px-8 rounded-lg">
          <HeadingTwo classes="text-white xl">
            We can&apos;t wait to meet you
          </HeadingTwo>
          <Formik<FormValues>
            initialValues={{
              name: "",
              bussinessName: "",
              email: "",
              phone: "",
              atending: "",
              attendingOption: "",
              privacyPolicy: false,
            }}
            validationSchema={validationSchema}
            onSubmit={sendEmail}
          >
            {({ setFieldValue }) => (
              <Form id="contactForm">
                <div className="flex flex-col lg:flex-row gap-4 mt-8">
                  <div className="flex flex-col text-white gap-4 w-1/2">
                    <label>Name*</label>
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
                  <div className="flex flex-col text-white gap-4 w-1/2">
                    <label>Business Name*</label>
                    <Field
                      type="text"
                      name="bussinessName"
                      placeholder="Your Business Name"
                      className="border-white placeholder:text-white border bg-transparent h-[43px] p-4 focus:outline-none"
                    />
                    <ErrorMessage
                      name="bussinessName"
                      component="p"
                      className="text-white font-bold mt-2 text-sm"
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="flex flex-col lg:flex-row gap-4 mt-8">
                  <div className="flex flex-col text-white gap-4 w-1/2">
                    <label>Phone Number*</label>
                    <Field
                      type="text"
                      name="phone"
                      placeholder="Your Phone Number"
                      className="border-white placeholder:text-white border bg-transparent h-[43px] p-4 focus:outline-none"
                    />
                    <ErrorMessage
                      name="phone"
                      component="p"
                      className="text-white font-bold mt-2 text-sm"
                    />
                  </div>
                  <div className="flex flex-col text-white gap-4 w-1/2">
                    <label>Email*</label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="border-white placeholder:text-white border bg-transparent h-[43px] p-4 focus:outline-none"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-white font-bold mt-2 text-sm"
                    />
                  </div>
                </div>

                {/* Attending Options */}
                <div className="mt-5 flex  gap-5 text-white">
                  <label>Are you attending?</label>
                  <div className="flex gap-2">
                    <Field
                      type="radio"
                      name="atending"
                      value="yes"
                      className="h-4 w-4 mt-1"
                    />
                    <label>Yes</label>
                  </div>
                  <div className="flex gap-2">
                    <Field
                      type="radio"
                      name="atending"
                      value="no"
                      className="h-4 w-4 mt-1"
                    />
                    <label>No</label>
                    <ErrorMessage
                      name="atending"
                      component="p"
                      className="text-white font-bold mt-2 text-sm"
                    />
                  </div>
                </div>

                <AttendingConditionalField />

                <div className="flex gap-2 text-white mt-5">
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
                  <label htmlFor="">
                    Please tick this box to agree to our{" "}
                    <Link className="underline" href={"/privacy-cookie-policy"}>
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
                <button
                  type="submit"
                  className="bg-transparent text-white border border-white py-2 px-4 mt-5 rounded-3xl hover:rounded-tl-none hover:rounded-br-none transition-all duration-300"
                >
                  {isLoading ? "Sending" : "Send Message"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </>
  );
}
