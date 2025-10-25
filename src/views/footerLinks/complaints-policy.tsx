import Container from "@/components/container";
// import FooterHero from "@/components/footer-hero";
import Complaints from "./complaints-contents";
import BannerFooter from "./banner-footer";
import { Complaints_Policy } from "@/constants/data";

export default function Main() {
  return (
    <div>
      {/* <FooterHero data={data} /> */}
      <BannerFooter data={Complaints_Policy} />
      <Container>
        <Complaints />
      </Container>
    </div>
  );
}
