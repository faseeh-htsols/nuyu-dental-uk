import Banner from "@/components/Banner";
import TipsTreatment from "@/components/tips-treatment";
import {
  CIRENCESTER_BANNER,
  CIRENCESTER_GENTLE,
  CIRENCESTER_TREATMENTS,
  CIRENCESTER_LOCAL,
  CIRENCESTER_APPOINTMENT,
  CIRENCESTER_FAQS,
  CIRENCESTER_YOUR,
} from "@/constants/data";
import React from "react";
import { BlackImage } from "./back-image";
import TreatmentJourneyV5 from "@/components/patient-journey-v5";
import AppointmentSection from "@/components/book-appointment";
import FaqsSimple from "@/components/faqs-simple";

function Main() {
  return (
    <div>
      <Banner data={CIRENCESTER_BANNER} />
      <TipsTreatment data={CIRENCESTER_GENTLE} />
      <BlackImage />
      <TreatmentJourneyV5 data={CIRENCESTER_TREATMENTS} />
      <TipsTreatment data={CIRENCESTER_LOCAL} />
      <TipsTreatment data={CIRENCESTER_YOUR} />
      <AppointmentSection data={CIRENCESTER_APPOINTMENT} />
      <FaqsSimple data={CIRENCESTER_FAQS} />
    </div>
  );
}

export default Main;
