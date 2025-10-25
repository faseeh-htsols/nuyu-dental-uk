"use client";
import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
const validationSchema = Yup.object({
  checked: Yup.array().min(1, "Please select at least one option."),
  name: Yup.string().required("Name is required"),
  phonenumber: Yup.string()
    .required("Phone number is required.")
    .matches(
      /^(?:\+?44)?(?:\d\s?){11}$/,
      "Phone number must contain exactly 11 digits (spaces allowed)"
    ),
  contactMethod: Yup.array().min(1, "Atleast pick one"),
  email: Yup.string()
    .email("Invalid Email format")
    .required("Email is required"),
  message: Yup.string().required("Message is Required."),
  // privacyPolicy: Yup.bool().oneOf(
  //   [true],
  //   "You must agree to the Privacy Policy."
  // ),
});
const contactMethod = [
  { value: "Phone", label: "Phone" },
  { value: "WhatsApp", label: "WhatsApp" },
  { value: "Email", label: "Email" },
];
const FormSection = () => {
  // const [privacyChecked, setPrivacyChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submition, setSubmition] = useState("Form submitted successfully!");
  const sendEmail = (
    values: {
      checked: [];
      name: string;
      phonenumber: string;
      email: string;
      message: string;
      contactMethod: string[];
      // privacyPolicy: boolean;
    },
    formikHelpers: FormikHelpers<{
      checked: [];
      name: string;
      phonenumber: string;
      email: string;
      message: string;
      contactMethod: string[];
      // privacyPolicy: boolean;
    }>
  ) => {
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_2cnqd96",
        "template_di760rj",
        "#contactFormLaunch",
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
    <div>
      <div className="py-6 bg-white" id="form">
        <Container>
          <HeadingTwo classes="text-center">
            We’re Celebrating Our Launch With A Limited Number of&nbsp;
            Exclusive Offers for New Patients
          </HeadingTwo>
        </Container>
      </div>
      <div className="py-8 bg-[url(/launch/landing-contact-bg.webp)] relative after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:opacity-70 after:bg-[#000]">
        <Container>
          <div className="relative z-10">
            <h3 className="text-2xl mb-4 text-center text-white">
              To celebrate our launch, we&apos;re offering{" "}
              <strong>exclusive perks</strong> for early patients. These offers{" "}
              <strong>will be expiring soon</strong> so secure your appointment
              today!
            </h3>
            <Formik
              initialValues={{
                name: "",
                checked: [],
                phonenumber: "",
                email: "",
                message: "",
                contactMethod: [] as string[],
              }}
              validationSchema={validationSchema}
              onSubmit={sendEmail}
              // onSubmit={(values, formikHelpers) => {
              //   console.log("Submitting form:", values); // Debugging log
              //   sendEmail(values, formikHelpers);
              // }}
            >
              <Form className="" id="contactFormLaunch">
                <div className="p-4 text-white bg-primary mb-4">
                  <h3 className="text-xl mb-3">
                    Check out our exclusive opening offers and choose the ones
                    that suit you best!
                  </h3>
                  <div className="flex flex-col mb-2 gap-2">
                    {/* <div className="flex flex-row gap-4">
                      <Field
                        className="w-5 h-5 shrink-0"
                        name="checked"
                        type="checkbox"
                        value="10% off Fixed Orthodontic Treatment for Kids & Teens"
                      />
                      <label htmlFor="">
                        10% off Fixed Orthodontic Treatment for Kids & Teens
                      </label>
                    </div> */}
                    <div className="flex flex-row gap-4">
                      <Field
                        className="w-5 h-5 shrink-0"
                        name="checked"
                        type="checkbox"
                        value="New Patient Exam for £65 (normally £89)*"
                      />
                      <label htmlFor="">
                        New Patient Exam for £65 (normally £89)*
                      </label>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Field
                        className="w-5 h-5 shrink-0"
                        name="checked"
                        value="£1792 off Invisalign treatments *"
                        type="checkbox"
                      />
                      <label htmlFor="">
                        £1792 off Invisalign treatments *
                      </label>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Field
                        className="w-5 h-5 shrink-0"
                        name="checked"
                        value="10% off Composite Bonding & Veneers*"
                        type="checkbox"
                      />
                      <label htmlFor="" className="text-base">
                        10% off Composite Bonding & Veneers*
                      </label>
                    </div>

                    <div className="flex flex-row gap-4">
                      <Field
                        className="w-5 h-5 shrink-0"
                        name="checked"
                        value="Free Implant Consultation & CBCT Scan*"
                        type="checkbox"
                      />
                      <label htmlFor="">
                        Free Implant Consultation & CBCT Scan*
                      </label>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Field
                        className="w-5 h-5 shrink-0"
                        name="checked"
                        value="Free Skin Consultation & £25 off treatment*"
                        type="checkbox"
                      />
                      <label htmlFor="">
                        Free Skin Consultation & £25 off treatment*
                      </label>
                    </div>
                    <ErrorMessage
                      name="checked"
                      component="p"
                      className="text-red mt-2 text-sm"
                    />
                    <div className="flex flex-col gap-2">
                      <label htmlFor="">
                        How would you prefer for us to contact you?
                      </label>
                      <div className="flex gap-5 ">
                        {contactMethod.map(({ label, value }) => (
                          <label
                            key={value}
                            className="flex items-center gap-2 text-white"
                          >
                            <Field
                              type="checkbox"
                              name="contactMethod"
                              value={value}
                              className="w-5 h-5  shrink-0"
                            />
                            <p dangerouslySetInnerHTML={{ __html: label }} />
                          </label>
                        ))}
                      </div>
                      <ErrorMessage
                        component="p"
                        name="contactMethod"
                        className="text-red mt-2 text-sm"
                      />
                    </div>
                    {/* <div className="flex flex-row gap-4">
                      <Field
                        className="w-5 h-5 shrink-0"
                        name="checked"
                        value=" FREE Philips Sonicare Toothbrush with Plan
                          Memberships*"
                        type="checkbox"
                      />
                      <label htmlFor="">
                        FREE Philips Sonicare Toothbrush with Plan Memberships*
                      </label>
                    </div> */}
                    {/* <div className="flex flex-row gap-4">
                      <Field
                        className="w-5 h-5 shrink-0"
                        name="checked"
                        type="checkbox"
                        value="50% off Boutique Teeth Whitening – Now £195 (normally
                          £395)*"
                      />
                      <label htmlFor="">
                        50% off Boutique Teeth Whitening – Now £195 (normally
                        £395)*
                      </label>
                    </div> */}
                  </div>

                  <p>*Terms and conditions apply.</p>
                </div>
                <div className="grid lg:grid-cols-3 gap-4 mb-4">
                  <div>
                    <Field
                      type="text"
                      className="border-white w-full border bg-white h-[43px] p-4 focus:outline-none"
                      placeholder="Your name"
                      name="name"
                      id=""
                    />
                    <ErrorMessage
                      name="name"
                      component="p"
                      className="text-[#F44336] mt-2 text-sm"
                    />
                  </div>
                  <div>
                    <Field
                      type="text"
                      className="border-white w-full border bg-white h-[43px] p-4 focus:outline-none"
                      placeholder="Email address"
                      name="email"
                      id=""
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-[#F44336] mt-2 text-sm"
                    />
                  </div>
                  <div>
                    <Field
                      type="text"
                      className="border-white w-full border bg-white h-[43px] p-4 focus:outline-none"
                      placeholder="Telephone"
                      name="phonenumber"
                      id=""
                    />
                    <ErrorMessage
                      name="phonenumber"
                      component="p"
                      className="text-[#F44336] mt-2 text-sm"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <Field
                    name="message"
                    className="border-white  border bg-white h-[123px] p-4 focus:outline-none w-full"
                    as="textarea"
                    placeholder="Your message"
                  />
                  <ErrorMessage
                    name="message"
                    component="p"
                    className="text-[#F44336] mt-2 text-sm"
                  />
                </div>
                <div className="flex flex-row items-center gap-3">
                  <p className="text-white">
                    On submitting this form, you consent to NUYU Dental &
                    Aesthetics collecting your personal data. For more
                    information, please read our{" "}
                    <Link href={"/privacy-policy"}>privacy policy.</Link>
                  </p>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-primary text-base text-white whitespace-nowrap p-3"
                  >
                    {/* {isLoading ? "---" : "Send Message"} */}
                    Send Message
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </Container>
      </div>
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

export default FormSection;
