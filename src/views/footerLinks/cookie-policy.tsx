import Container from "@/components/container";
import FooterHero from "@/components/footer-hero";
import PrivacyPolicy from "./privacy-policy-content";

export default function Main() {
  const data = {
    title: "Cookie Policy",
    bgImg: "/footer-bg.png",
    description: "",
  };
  return (
    <div>
      <FooterHero data={data} />
      <Container>
        <PrivacyPolicy />
      </Container>
    </div>
  );
}
