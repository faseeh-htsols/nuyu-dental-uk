import Banner from "@/components/Banner";
import TipsTreatment from "@/components/tips-treatment";
import {
  TEWKESBURY_BANNER,
  TEWKESBURY_GENTLE,
  TEWKESBURY_TREATMENTS,
  TEWKESBURY_LOCAL,
  TEWKESBURY_APPOINTMENT,
  TEWKESBURY_FAQS,
  TEWKESBURY_YOUR,
} from "@/constants/data";
import React from "react";
import { BlackImage } from "./back-image";
import TreatmentJourneyV5 from "@/components/patient-journey-v5";
import AppointmentSection from "@/components/book-appointment";
import FaqsSimple from "@/components/faqs-simple";

function Main() {
  return (
    <div>
      <Banner data={TEWKESBURY_BANNER} />
      <TipsTreatment data={TEWKESBURY_GENTLE} />
      <BlackImage />
      <TreatmentJourneyV5 data={TEWKESBURY_TREATMENTS} />
      <TipsTreatment data={TEWKESBURY_LOCAL} />
      <TipsTreatment data={TEWKESBURY_YOUR} />
      <AppointmentSection data={TEWKESBURY_APPOINTMENT} />
      <FaqsSimple data={TEWKESBURY_FAQS} />
    </div>
  );
}

export default Main;
