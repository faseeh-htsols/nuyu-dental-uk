import Banner from "@/components/Banner";
import TipsTreatment from "@/components/tips-treatment";
import {
  PRESTBURY_HEADER,
  PRESTBURY_WHY,
  PRESTBURY_TREATMENTS,
  PRESTBURY_GETTING,
  PRESTBURY_APPOINTMENT,
  PRESTBURY_FAQS,
} from "@/constants/data2";
import React from "react";
import AppointmentSection from "@/components/book-appointment";
import FaqsSimple from "@/components/faqs-simple";
import { BlackImage } from "./back-image";
import TreatmentJourneyV5 from "@/components/patient-journey-v5";

function Main() {
  return (
    <div>
      <Banner data={PRESTBURY_HEADER} />
      <TipsTreatment data={PRESTBURY_WHY} />
      <BlackImage />
      <TreatmentJourneyV5 data={PRESTBURY_TREATMENTS} />
      <TipsTreatment data={PRESTBURY_GETTING} />
      <AppointmentSection data={PRESTBURY_APPOINTMENT} />
      <FaqsSimple data={PRESTBURY_FAQS} />
    </div>
  );
}

export default Main;
