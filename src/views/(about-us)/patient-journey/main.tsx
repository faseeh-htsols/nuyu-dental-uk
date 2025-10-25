import Banner from "@/components/Banner";
import { PrivacyJourney, TREATMENT_JOURNEY_PATIENT } from "@/constants/data";
import TreatmentJourneyV5 from "../../../components/patient-journey-v5";

import QualtiyCare from "./qualtiy-care";
import SmileTodayThree from "@/components/smile-today-3";
export const Main = () => {
  return (
    <>
      <Banner data={PrivacyJourney} />
      <TreatmentJourneyV5 data={TREATMENT_JOURNEY_PATIENT} />
      <QualtiyCare />
      <SmileTodayThree imageSrc="/smile-today-home2.webp" texture={true} />
    </>
  );
};
