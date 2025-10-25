import Banner from "@/components/Banner";
import TreatmentJourneyV5 from "@/components/patient-journey-v5";
import {
  PATIENT_CONSULTAION_FAQS,
  TREATMENT_JOURNEY_HOME,
} from "@/constants/data";
import { PATIENT_CONSULTAION_HEADER } from "@/constants/data2";
import SmileTodayThree from "@/components/smile-today-3";
import QualtiyCare from "../../home/qualtiy-care";
import FaqsSimple from "@/components/faqs-simple";

const Main = () => {
  return (
    <>
      <Banner data={PATIENT_CONSULTAION_HEADER} />
      <TreatmentJourneyV5 data={TREATMENT_JOURNEY_HOME} />
      <QualtiyCare />
      <FaqsSimple data={PATIENT_CONSULTAION_FAQS} />
      <SmileTodayThree texture imageSrc="/oral-health-doe.webp" />
    </>
  );
};

export default Main;
