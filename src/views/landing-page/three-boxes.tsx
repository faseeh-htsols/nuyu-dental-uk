import Container from "@/components-2/container";
import SmileSvg from "./smile-svg";
import PaymentSvg from "./payment-svg";
import TeethSvg from "./teeth-svg";

const ThreeBoxes = () => {
  return (
    <div className="py-10 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="flex flex-col items-center">
            <SmileSvg />
            <h2 className="text-2xl font-bold mt-3 text-center">
              Smiles in Months
            </h2>
            <p className="mt-2 text-center">
              With our experts, you can have your new smile quicker than you
              think
            </p>
          </div>
          <div className="flex flex-col items-center">
            <TeethSvg />
            <h2 className="text-2xl font-bold mt-3 text-center">
              Smile Evaluation
            </h2>
            <p className="mt-2 text-center">
              See your smile before going ahead with treatment
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
