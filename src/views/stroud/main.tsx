import Banner from "@/components/Banner";
import TipsTreatment from "@/components/tips-treatment";
import {
  STROUD_BANNER,
  STROUD_MODERN,
  STROUD_TREATMENTS,
  STROUD_Your,
  STROUD_WHAT,
  STROUD_APPOINTMENT,
  STROUD_FAQS
} from "@/constants/data2";
import React from "react";
import AppointmentSection from "@/components/book-appointment";
import FaqsSimple from "@/components/faqs-simple";
import { BlackImage } from "./back-image";
import TreatmentJourneyV5 from "@/components/patient-journey-v5";

function Main() {
  return (
    <div>
      <Banner data={STROUD_BANNER} />
      <TipsTreatment data={STROUD_MODERN} />
      <BlackImage />
      <TreatmentJourneyV5 data={STROUD_TREATMENTS} />
      <TipsTreatment data={STROUD_Your} />
      <TipsTreatment data={STROUD_WHAT} />
      <AppointmentSection data={STROUD_APPOINTMENT} />
      <FaqsSimple data={STROUD_FAQS} />
    </div>
  );
}

export default Main;
