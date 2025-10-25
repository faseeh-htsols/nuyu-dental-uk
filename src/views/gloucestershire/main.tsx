import Banner from "@/components/Banner";
import TipsTreatment from "@/components/tips-treatment";
import {
  GLOUCESTER_BANNER,
  GLOUCESTER_WHY,
  GLOCESTERSHIRE_TREATMENTS,
  GLOUCESTER_LOCAL,
  GLOUCESTERSHIRE_APPOINTMENT,
  GLOUCESTERSHIRE_FAQS,
  GLOUCESTERSHIRE_YOUR,
} from "@/constants/data";
import React from "react";
import { BlackImage } from "./back-image";
import TreatmentJourneyV5 from "@/components/patient-journey-v5";
import AppointmentSection from "@/components/book-appointment";
import FaqsSimple from "@/components/faqs-simple";

function Main() {
  return (
    <div>
      <Banner data={GLOUCESTER_BANNER} />
      <TipsTreatment data={GLOUCESTER_WHY} />
      <BlackImage />
      <TreatmentJourneyV5 data={GLOCESTERSHIRE_TREATMENTS} />
      <TipsTreatment data={GLOUCESTER_LOCAL} />
      <TipsTreatment data={GLOUCESTERSHIRE_YOUR} />
      <AppointmentSection data={GLOUCESTERSHIRE_APPOINTMENT} />
      <FaqsSimple data={GLOUCESTERSHIRE_FAQS} />
    </div>
  );
}

export default Main;
