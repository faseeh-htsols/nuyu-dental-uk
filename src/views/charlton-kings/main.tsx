import Banner from "@/components/Banner";
import TipsTreatment from "@/components/tips-treatment";
import {
  CHARLTON_KINGS_HEADER,
  CHARLTON_KINGS_WHY,
  CHARLTON_KINGS_TREATMENTS,
  CHARLTON_KINGS_CONFIDENCE,
  CHARLTON_KINGS_GETTING,
  CHARLTON_KINGS_APPOINTMENT,
  CHARLTON_KINGS_FAQS,
} from "@/constants/data2";
import React from "react";
import AppointmentSection from "@/components/book-appointment";
import FaqsSimple from "@/components/faqs-simple";
import { BlackImage } from "./back-image";
import TreatmentJourneyV5 from "@/components/patient-journey-v5";

function Main() {
  return (
    <div>
      <Banner data={CHARLTON_KINGS_HEADER} />
      <TipsTreatment data={CHARLTON_KINGS_WHY} />
      <BlackImage />
      <TreatmentJourneyV5 data={CHARLTON_KINGS_TREATMENTS} />
      <TipsTreatment data={CHARLTON_KINGS_CONFIDENCE} />
      <TipsTreatment data={CHARLTON_KINGS_GETTING} />
      <AppointmentSection data={CHARLTON_KINGS_APPOINTMENT} />
      <FaqsSimple data={CHARLTON_KINGS_FAQS} />
    </div>
  );
}

export default Main;
