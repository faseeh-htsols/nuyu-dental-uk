"use client";
import Container from "@/components/container";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import * as Yup from "yup";
import HeadingOne from "@/components/heading-one";
const treatmentOptions = [
  { value: "General Dentistry", label: "General Dentistry" },
  { value: "Invisalign®/Ortho", label: "Invisalign<sup>®</sup>/Ortho" },
  { value: "Teen Orthodontics", label: "Teen Orthodontics" },
  { value: "Dental Implants", label: "Dental Implants" },
  { value: "Smile Makeovers", label: "Smile Makeovers" },
  { value: "Composite Bonding", label: "Composite Bonding" },
];
const ContactComponent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [submission, setSubmition] = useState(
    "Thank you for taking the time to complete the contact form. A member of our team will be in touch with you soon. We look forward to helping you achieve your best smile."
  );

  const sendEmail = (
    values: {
      name: string;
      promocode: string;
      phone: string;
      email: string;
      treatments: string[];
      contactMethod: string[];
      privacyPolicy: boolean;
    },
    formikHelpers: FormikHelpers<{
      name: string;
      promocode: string;
      phone: string;
      email: string;
      treatments: string[];
      contactMethod: string[];
      privacyPolicy: boolean;
    }>
  ) => {
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_2cnqd96",
        "template_oub17pl",
        "#contactFormContactPage",
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
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    promocode: Yup.string().max(30, "Promo code can not exceed 30 characters"),
    phone: Yup.string()
      .required("Phone number is required.")
      .matches(
        /^(?:\+?44)?(?:\d\s?){11}$/,
        "Phone number must contain exactly 11 digits (spaces allowed)"
      ),
    email: Yup.string()
      .email("Invalid Email format")
      .required("Email is required"),
    treatments: Yup.array().min(1, "Atleast pick one"),
    contactMethod: Yup.array().min(1, "Atleast pick one"),
    privacyPolicy: Yup.boolean().oneOf(
      [true],
      "You must accept the privacy policy"
    ),
  });
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center gap-10">
        <div className="lg:block hidden">
          <Image
            src={"/contact-test.webp"}
            alt="Contact Us"
            width={500}
            height={500}
            className="w-[90%] h-auto rounded-tr-3xl rounded-bl-3xl"
          />
        </div>
        <div className="bg-primary p-10 rounded-3xl flex flex-col gap-5 text-white">
          <div className="">
            <HeadingOne classes="!text-3xl text-white">
              Request Your Consultation
            </HeadingOne>
            <p className="my-4">
              For more information about any of our services, fill out the form
              below and a member of our team will be in touch very soon to book
              your appointment at a time that suits you.
            </p>
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              promocode: "",
              treatments: [] as string[],
              contactMethod: [] as string[],
              privacyPolicy: false,
            }}
            validationSchema={validationSchema}
            onSubmit={sendEmail}>
            {({ setFieldValue }) => (
              <Form id="contactFormContactPage">
                <div className="grid grid-cols-1 gap-1">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Full name *"
                    className="p-3 w-full text-[#333] "
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-red/70  text-sm"
                  />
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email address *"
                    className="p-3 w-full text-[#333] "
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red/70  text-sm"
                  />
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Phone number *"
                    className="p-3 w-full text-[#333] "
                  />
                  <ErrorMessage
                    name="phone"
                    component="p"
                    className="text-red/70  text-sm mt-3"
                  />
                </div>

                <div className="mt-5">
                  <p className="">Select your treatment type*</p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {treatmentOptions.map(({ value, label }) => (
                      <label key={value} className="flex items-center gap-2">
                        <Field
                          type="checkbox"
                          name="treatments"
                          value={value}
                          className="accent-blue h-5 w-5"
                        />
                        <p dangerouslySetInnerHTML={{ __html: label }} />
                      </label>
                    ))}
                  </div>
                  <ErrorMessage
                    name="treatments"
                    component="p"
                    className="text-red/70  text-sm mt-2"
                  />
                </div>
                <div className="mt-4">
                  <Field
                    type="text"
                    name="promocode"
                    placeholder="Promo Code"
                    className="p-3 w-full text-[#333] mb-2 "
                  />
                  <ErrorMessage
                    name="promocode"
                    component="p"
                    className="text-red/70  text-sm"
                  />
                </div>
                <div className="mt-2">
                  <p className="">
                    How would you prefer for us to contact you?
                  </p>
                  <div className="flex gap-5 mt-2">
                    {["Phone", "WhatsApp", "Email"].map((option) => (
                      <label key={option} className="flex items-center gap-2">
                        <Field
                          type="checkbox"
                          name="contactMethod"
                          value={option}
                          className="accent-blue h-5 w-5"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                  <ErrorMessage
                    name="contactMethod"
                    component="p"
                    className="text-red/70  text-sm mt-2"
                  />
                </div>

                <div className="flex gap-2 mt-5">
                  <Field
                    type="checkbox"
                    checked={privacyChecked}
                    className="h-[22px] w-[22px]"
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
                  className="text-red/70  text-sm mt-2"
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-white text-primary text-lg p-5 rounded-full w-full mt-9 hover:rounded-tl-none hover:rounded-br-none transition-all duration-300 cursor-pointer">
                  {isLoading ? "Submitting..." : "REQUEST YOUR APPOINTMENT"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
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
    </Container>
  );
};

export default ContactComponent;
