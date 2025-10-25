import Banner from "@/components/Banner";
import TipsTreatment from "@/components/tips-treatment";
import {
  LECKHAMPTON_HEADER,
  LECKHAMPTON_WHY,
  LECKHAMPTON_TREATMENTS,
  LECKHAMPTON_VISITING,
  LECKHAMPTON_APPOINTMENT,
  LECKHAMPTON_FAQS,
} from "@/constants/data2";
import React from "react";
import AppointmentSection from "@/components/book-appointment";
import FaqsSimple from "@/components/faqs-simple";
import { BlackImage } from "./back-image";
import TreatmentJourneyV5 from "@/components/patient-journey-v5";

function Main() {
  return (
    <div>
      <Banner data={LECKHAMPTON_HEADER} />
      <TipsTreatment data={LECKHAMPTON_WHY} />
      <BlackImage />
      <TreatmentJourneyV5 data={LECKHAMPTON_TREATMENTS} />
      <TipsTreatment data={LECKHAMPTON_VISITING} />
      <AppointmentSection data={LECKHAMPTON_APPOINTMENT} />
      <FaqsSimple data={LECKHAMPTON_FAQS} />
    </div>
  );
}

export default Main;
