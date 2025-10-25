import Container from "@/components/container";
// import FooterHero from "@/components/footer-hero";
import PrivacyPolicy from "./privacy-policy-content";
import BannerFooter from "./banner-footer";
import { Privacy_Policy } from "@/constants/data";

export default function Main() {
  // const data = {
  //   title: "Privacy & Cookie Policy",
  //   bgImg: "/footer-bg.png",
  //   description: "",
  // };
  return (
    <div>
      {/* <FooterHero data={data} /> */}
      <BannerFooter data={Privacy_Policy} />
      <Container>
        <PrivacyPolicy />
      </Container>
    </div>
  );
}
