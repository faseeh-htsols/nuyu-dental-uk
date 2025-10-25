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
            <h2 className="text-2xl font-bold mt-3 text-center">
              Digitally Planned
            </h2>
            <p className="mt-2 text-center">
              Every detail is mapped with precision, ensuring your treatment is
              accurate, seamless, and designed entirely around you
            </p>
          </div>
          <div className="flex flex-col items-center">
            <TeethSvg />
            <h2 className="text-2xl font-bold mt-3 text-center">IV Sedation</h2>
            <p className="mt-2 text-center">
              In-house options to put you at ease through your treatment
            </p>
          </div>
          <div className="flex flex-col items-center">
            <PaymentSvg />
            <h2 className="text-2xl font-bold mt-3 text-center">
              Flexible Payments
            </h2>
            <p className="mt-2 text-center">
              A wide range of payment options, including 0% over 12 months
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ThreeBoxes;
