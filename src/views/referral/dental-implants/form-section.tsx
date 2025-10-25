"use client";
import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Link from "next/link";
import HeadingOne from "@/components/heading-one";
const FormSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submition, setSubmition] = useState("Form submitted successfully!");
  const [isLoading, setIsLoading] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const initialValues = {
    referringDentist: "",
    practiceName: "",
    practiceAddress1: "",
    practiceAddress2: "",
    practicePostcode: "",
    practicePhone: "",
    practiceEmail: "",
    patientName: "",
    telephone: "",
    mobile: "",
    email: "",
    dateOfBirth: "",
    summary: "",
    information: "",
    instruction: "",
    signature: "",
    privacyPolicy: false,
  };
  const validationSchema = Yup.object({
    referringDentist: Yup.string().required("Refering Dentist is required"),
    patientName: Yup.string().required("Patient Name is required"),
    dateOfBirth: Yup.string().required("Date of birth is required"),
    mobile: Yup.string()
      .required("Phone number is required.")
      .matches(
        /^(?:\+?44)?(?:\d\s?){11}$/,
        "Phone number must contain exactly 11 digits (spaces allowed)"
      ),
    practicePhone: Yup.string()
      .required("Phone number is required.")
      .matches(
        /^(?:\+?44)?(?:\d\s?){11}$/,
        "Phone number must contain exactly 11 digits (spaces allowed)"
      ),
    telephone: Yup.string()
      .required("Phone number is required.")
      .matches(
        /^(?:\+?44)?(?:\d\s?){11}$/,
        "Phone number must contain exactly 11 digits (spaces allowed)"
      ),
    email: Yup.string()
      .email("Invalid Email format")
      .required("Email is required"),
    practiceEmail: Yup.string()
      .email("Invalid Email format")
      .required("Email is required"),
    practiceName: Yup.string().required("Practice Name is required"),
    practiceAddress1: Yup.string().required("Practice Address is required"),
    practiceAddress2: Yup.string().required("Practice Address is required"),
    practicePostcode: Yup.string().required("Postal Code is required"),
    summary: Yup.string().required("Medical History is required"),
    instruction: Yup.string().required("Special instruction is required"),
    signature: Yup.string().required("Signature is required"),
    privacyPolicy: Yup.bool().oneOf(
      [true],
      "You must agree to the Privacy Policy."
    ),
    information: Yup.string().required("Please Chose one of the Options"),
  });
  const [date] = useState(new Date().toLocaleDateString());
  const sendEmail = (
    values: {
      referringDentist: string;
      practiceName: string;
      practiceAddress1: string;
      practiceAddress2: string;
      practicePostcode: string;
      practicePhone: string;
      practiceEmail: string;
      patientName: string;
      telephone: string;
      mobile: string;
      email: string;
      dateOfBirth: string;
      summary: string;
      information: string;
      instruction: string;
      signature: string;
      privacyPolicy: boolean;
    },
    formikHelpers: FormikHelpers<{
      referringDentist: string;
      practiceName: string;
      practiceAddress1: string;
      practiceAddress2: string;
      practicePostcode: string;
      practicePhone: string;
      practiceEmail: string;
      patientName: string;
      telephone: string;
      mobile: string;
      email: string;
      dateOfBirth: string;
      summary: string;
      information: string;
      instruction: string;
      signature: string;
      privacyPolicy: boolean;
    }>
  ) => {
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_2cnqd96",
        "template_p8dddcq",
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
    <>
      <Container>
        <div className="flex flex-col gap-5 "></div>
        <div className="flex flex-col lg:flex-row gap-5 pt-5">
          <div className="w-[300px] shrink-0 h-fit border border-primary rounded-tr-3xl rounded-bl-3xl mt-[120px]">
            <Link
              href="/referral/dental-implant"
              className="border border-olive-dark inline-block bg-primary text-white w-full p-4 rounded-tr-3xl ">
              Dental Implant Referral Form
            </Link>
            <Link
              href="/referral/extractions"
              className="border border-olive-dark inline-block w-full p-4">
              Extractions Referral Form
            </Link>
            <Link
              href="/referral/cbct"
              className="border border-olive-dark inline-block w-full p-4 rounded-bl-3xl">
              CBCT Referral Form
            </Link>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={sendEmail}>
            {({ setFieldValue }) => (
              <Form className="grow" id="contactForm">
                <div className="flex flex-col gap-6">
                  <HeadingOne classes="text-center !text-2xl">
                    Dental Implants Referral Form
                  </HeadingOne>
                  <p className="text-black text-center pb-2">
                    Please complete the form below. We will contact the patient
                    as soon as possible.
                  </p>
                  <div>
                    <div>
                      <HeadingTwo classes="!text-2xl">
                        Referring Dentist Details*
                      </HeadingTwo>
                      <div className="border-b-2 border-olive"></div>
                      <div className="grid grid-cols-1 gap-4 mt-2">
                        {[
                          {
                            label: "Referring Dentist*",
                            name: "referringDentist",
                          },
                          { label: "Practice Name*", name: "practiceName" },
                          {
                            label: "Practice Address 1*",
                            name: "practiceAddress1",
                          },
                          {
                            label: "Practice Address 2*",
                            name: "practiceAddress2",
                          },
                          {
                            label: "Practice Postcode*",
                            name: "practicePostcode",
                          },
                          {
                            label: "Practice Phone Number*",
                            name: "practicePhone",
                          },
                          {
                            label: "Practice Email*",
                            name: "practiceEmail",
                            type: "email",
                          },
                        ].map(({ label, name, type = "text" }) => (
                          <div key={name}>
                            <div className="flex gap-1 items-center">
                              <label className="w-full lg:w-[40%]">
                                {label}
                              </label>
                              <Field
                                type={type}
                                name={name}
                                placeholder=""
                                className="border p-2 w-full rounded-tr-xl rounded-bl-xl"
                              />
                            </div>
                            <ErrorMessage
                              component="p"
                              name={name}
                              className="text-sm text-red mt-3"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 mt-5">
                  <div className="w-full lg:w-1/2">
                    <HeadingTwo classes="!text-2xl">
                      Patient Details*
                    </HeadingTwo>
                    <div className="border-t border-olive pt-4"></div>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      {[
                        { placeholder: "Patient Name*", name: "patientName" },
                        { placeholder: "Telephone*", name: "telephone" },
                        { placeholder: "Mobile*", name: "mobile" },
                        { placeholder: "Email*", name: "email", type: "email" },
                        {
                          placeholder: "Date of Birth*",
                          name: "dateOfBirth",
                          type: "date",
                        },
                      ].map(({ placeholder, name, type = "text" }) => (
                        <div key={name} className="flex flex-col">
                          <Field
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            className="border p-2 w-full rounded-tr-xl rounded-bl-xl"
                          />
                          <ErrorMessage
                            component="p"
                            name={name}
                            className="text-sm text-red mt-3"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <HeadingTwo classes="!text-2xl">Short Summary*</HeadingTwo>
                    <div className="border-t border-olive pt-4"></div>
                    <Field
                      component="textarea"
                      name="summary"
                      className="border p-2 w-full min-h-40 rounded-tr-xl rounded-bl-xl"
                      placeholder="Enter medical history..."
                    />
                    <ErrorMessage
                      component="p"
                      name="summary"
                      className="text-sm text-red mt-3"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <HeadingTwo classes="!text-2xl">More Information*</HeadingTwo>
                  <div className="border-t border-olive pt-4"></div>

                  <div className="flex flex-col self-center  gap-4 ">
                    <div>
                      <label className="flex items-center justify-start">
                        <Field
                          type="radio"
                          name="information"
                          value="Implant Placement Only"
                          className="mr-2"
                        />
                        Implant Placement Only
                      </label>
                    </div>
                    <div>
                      <label className="flex items-center justify-start">
                        <Field
                          type="radio"
                          name="information"
                          value="Implant Placement and Restoration"
                          className="mr-2"
                        />
                        Implant Placement and Restoration
                      </label>
                    </div>
                    <div>
                      <label className="flex items-center justify-start">
                        <Field
                          type="radio"
                          name="information"
                          value="Implant Placement and Mentoring for Restoration"
                          className="mr-2"
                        />
                        Implant Placement and Mentoring for Restoration
                      </label>
                    </div>
                  </div>
                  <ErrorMessage
                    component="p"
                    name="information"
                    className="text-sm text-red mt-3 text-center"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="">
                    <HeadingTwo classes="mt-3 !text-2xl">
                      Special Instructions*
                    </HeadingTwo>
                    <div className="border-b border-olive my-3"></div>
                    <Field
                      component="textarea"
                      name="instruction"
                      placeholder=""
                      className="border p-2 w-full h-32 rounded-tr-xl rounded-bl-xl"
                    />
                    <ErrorMessage
                      component="p"
                      name="instruction"
                      className="text-sm text-red mt-1"
                    />
                  </div>
                  <div className="flex gap-2 items-center mt-5">
                    <label className="w-[20%]">
                      Signature (Please type your full name):
                    </label>
                    <Field
                      type="text"
                      name="signature"
                      placeholder=""
                      className="border p-2 w-[80%] rounded-tr-xl rounded-bl-xl"
                    />
                  </div>
                  <ErrorMessage
                    component="p"
                    name="signature"
                    className="text-sm text-red mt-1"
                  />
                  <div className="flex items-center space-x-2 gap-12 ">
                    <div className="text-sm text-black/40">{date}</div>
                    <div className="">
                      <Field
                        type="checkbox"
                        name="privacyPolicy"
                        value="privacyPolicy"
                        checked={privacyChecked}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setPrivacyChecked(e.target.checked); // Update custom checkbox state
                          setFieldValue("privacyPolicy", e.target.checked); // Update Formik's field value
                        }}
                        className="w-4 h-4 accent-primary border-2 rounded-sm checked:bg-primary checked:shadow-xl shadow-primary mr-1"
                      />
                      <span>
                        Please tick this box to agree to our{" "}
                        <a
                          href="/privacy-cookie-policy"
                          className="text-primary">
                          privacy policy
                        </a>{" "}
                        before continuing.
                      </span>
                      <ErrorMessage
                        component="p"
                        name="privacyPolicy"
                        className="text-sm text-red mt-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-5">
                  <button className="border border-primary text-primary p-2 rounded-3xl w-[30%] duration-300 hover:rounded-tr-none hover:rounded-bl-none">
                    Clear
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-primary text-white p-2 rounded-3xl w-[30%] duration-300 hover:rounded-tr-none hover:rounded-bl-none">
                    {isLoading ? "---" : "Send Message"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
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
                  className="text-white px-5 py-2 border border-white  text-[14px] cursor-pointer">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default FormSection;
