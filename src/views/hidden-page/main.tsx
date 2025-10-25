import FooterHero from "@/components/footer-hero";
import FormContact from "./form";

export default function Main() {
  const data = {
    title: "NUYU Dental & Aesthetics - Launch Day Invitation",
    bgImg: "/footer-bg.png",
    description: "",
  };
  return (
    <div>
      <FooterHero data={data} />
      <FormContact />
    </div>
  );
}
