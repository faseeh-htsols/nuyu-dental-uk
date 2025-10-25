import Container from "@/components/container";
// import FooterHero from "@/components/footer-hero";
import TermsOfUse from "./terms-of-use-contents";
import BannerFooter from "./banner-footer";
import { Terms_OF_USE } from "@/constants/data";

export default function Main() {
  // const data = {
  //   title: "Terms of Use",
  //   bgImg: "/footer-bg.png",
  //   description: "",
  // };
  return (
    <div>
      {/* <FooterHero data={data} /> */}
      <BannerFooter data={Terms_OF_USE} />
      <Container>
        <TermsOfUse />
      </Container>
    </div>
  );
}
