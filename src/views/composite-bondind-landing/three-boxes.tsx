import Container from "@/components/container";
import SmileSvg from "./smile-svg";
import PaymentSvg from "./payment-svg";
import TeethSvg from "./teeth-svg";

const ThreeBoxes = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="flex flex-col items-center">
            <SmileSvg />
            <h2 className="text-2xl font-bold mt-3 text-center">No Downtime</h2>
            <p className="mt-2 text-center">
              We simply apply composite resin to your teeth so there’s no
              downtime and you can get on with your day as normal
            </p>
          </div>
          <div className="flex flex-col items-center">
            <TeethSvg />
            <h2 className="text-2xl font-bold mt-3 text-center">
              Smile Design
            </h2>
            <p className="mt-2 text-center">
              Every smile is bespoke and designed with you to suit you. You even
              have the option of test driving your smile before committing
            </p>
          </div>
          <div className="flex flex-col items-center">
            <PaymentSvg />
            <h2 className="text-2xl font-bold mt-3 text-center">
              Flexible Payments
            </h2>
            <p className="mt-2 text-center">
              A wide range of payment options, including 0% over 12 months to
              make your smile more affordable than ever
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ThreeBoxes;
