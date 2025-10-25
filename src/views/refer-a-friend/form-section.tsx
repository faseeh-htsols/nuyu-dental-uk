"use client";
import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Link from "next/link";
const FormSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submition, setSubmition] = useState("Form submitted successfully!");
  const [isLoading, setIsLoading] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const initialValues = {
    name: "",
    referralname: "",
    referralEmail: "",
    referralPhone: "",
    instruction: "",
    privacyPolicy: false,
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    instruction: Yup.string().required("Please enter Instruction"),
    referralname: Yup.string().required("Please enter your name"),
    referralEmail: Yup.string()
      .email("Invalid Email format")
      .required("Email is required"),
    referralPhone: Yup.string()
      .required("Phone number is required.")
      .matches(
        /^(?:\+?44)?(?:\d\s?){11}$/,
        "Phone number must contain exactly 11 digits (spaces allowed)"
      ),
    privacyPolicy: Yup.bool().oneOf(
      [true],
      "You must agree to the Privacy Policy."
    ),
  });
  const [date] = useState(new Date().toLocaleDateString());
  const sendEmail = (
    values: {
      name: string;
      referralname: string;
      referralEmail: string;
      referralPhone: string;
      privacyPolicy: boolean;
      instruction: string;
    },
    formikHelpers: FormikHelpers<{
      name: string;
      referralname: string;
      referralEmail: string;
      referralPhone: string;
      privacyPolicy: boolean;
      instruction: string;
    }>
  ) => {
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_2cnqd96",
        "template_dftqshu",
        "#contactForm",
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
          <div className="w-[300px] shrink-0 h-fit border border-primary rounded-tr-3xl rounded-bl-3xl">
            <Link
              href="/referral/dental-implant"
              className="border border-olive-dark inline-block bg-primary text-white w-full p-4 rounded-tr-3xl ">
              Refer a Friend Form
            </Link>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={sendEmail}>
            {({ setFieldValue }) => (
              <Form className="grow" id="contactForm">
                <div className="flex flex-col gap-6">
                  <HeadingTwo>
                    Share the NUYU Experience – and Enjoy a Treat on Us
                  </HeadingTwo>
                  <p className="text-black  pb-2">
                    Many of our patients come to NUYU through kind
                    recommendations from friends and family – something we truly
                    value. To show our appreciation, we’ve introduced a referral
                    scheme for those who spread the word.
                  </p>
                  <p className="text-black  pb-2">
                    For a limited time, when you refer someone to us and they
                    begin treatment or join our dental membership plan, we’ll
                    give you a £20 off any treatment (excluding dental
                    examination).
                  </p>
                  <p className="text-black  pb-2">
                    So whether they’re looking for a new private dentist,
                    struggling to find an NHS appointment, or exploring
                    treatments like Invisalign, teeth whitening, implants or a
                    full smile makeover – we’d be delighted to welcome them to
                    NUYU.
                  </p>
                  <p className="text-black  pb-2">
                    All they need to do is mention your name at their initial
                    visit. Or, if it’s easier, pop their details in the form
                    below and we’ll get in touch with them directly.
                    <br />
                    <br />
                    Thank you for sharing the NUYU experience – we’re so
                    grateful for your continued support.
                  </p>
                  {/* // <p className="text-black  pb-2 text-sm">
                  //   *to qualify, your referral must have a dental check-up or
                  //   sign up to our dental plan
                  // </p> */}
                  <div>
                    <div>
                      <HeadingTwo>Referring Dentist Details *</HeadingTwo>
                      <div className="border-b-2 border-olive"></div>
                      <div className="grid grid-cols-1 gap-4 mt-2">
                        {[
                          {
                            label: "Your Name*",
                            name: "name",
                          },
                          { label: "Referral Name*", name: "referralname" },
                          {
                            label: "Referral email address*",
                            name: "referralEmail",
                            type: "email",
                          },
                          {
                            label: "Referral telephone number*",
                            name: "referralPhone",
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
                <div className="flex flex-col gap-4">
                  <div className="">
                    <HeadingTwo classes="mt-3">
                      Any further information?
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
