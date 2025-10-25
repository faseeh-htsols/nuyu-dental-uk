import Banner from "@/components/Banner";
import TipsTreatment from "@/components/tips-treatment";
import {
  BENHALL_HEADER,
  BENHALL_LOOKING,
  BENHALL_TREATMENTS,
  BENHALL_WHAT,
  BENHALL_GETTING,
  BENHALL_APPOINTMENT,
  BENHALL_FAQS,
} from "@/constants/data2";
import React from "react";
import AppointmentSection from "@/components/book-appointment";
import FaqsSimple from "@/components/faqs-simple";
import { BlackImage } from "./back-image";
import TreatmentJourneyV5 from "@/components/patient-journey-v5";

function Main() {
  return (
    <div>
      <Banner data={BENHALL_HEADER} />
      <TipsTreatment data={BENHALL_LOOKING} />
      <BlackImage />
      <TreatmentJourneyV5 data={BENHALL_TREATMENTS} />
      <TipsTreatment data={BENHALL_WHAT} />
      <TipsTreatment data={BENHALL_GETTING} />
      <AppointmentSection data={BENHALL_APPOINTMENT} />
      <FaqsSimple data={BENHALL_FAQS} />
    </div>
  );
}

export default Main;
