import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";

const DentalPlans = () => {
  return (
    <div className="py-5 lg:py-10">
      <Container>
        <HeadingTwo classes="text-center mb-6">
          Dental Plans To Choose From
        </HeadingTwo>
        <p className="mb-7 text-center">
          At NUYU Dental, we believe in a proactive and preventative approach to
          dental care. We use the latest technology to deliver efficient,
          effective treatment - while ensuring a comfortable experience for
          patients of all ages.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="shadow-[0_2px_11px_1px_#0000001c] rounded-tr-3xl rounded-bl-3xl flex flex-col justify-between p-7">
            <div>
              <h3 className="text-2xl text-center mb-4 text-primary font-season">
                Plan 1
              </h3>
              <ul className="flex flex-col gap-2 mb-4">
                <li>
                  <strong>1 x</strong> dental examination{" "}
                  <strong>per year</strong>
                </li>
                <li>
                  <strong>1 x</strong> dental hygiene visits{" "}
                  <strong>per year</strong>
                </li>
                <li>
                  <strong>10% off</strong> everyday dentistry and Invisalign
                  <sup>&reg;</sup>*
                </li>
              </ul>
            </div>
            <div className="bg-primary rounded-tr-2xl rounded-bl-2xl p-5 text-center text-3xl font-semibold  text-white">
              £11.95<sub>/month</sub>
            </div>
            <p className="text-xs text-center text-olive/50  mt-1.5">
              *not to be used inconjuction with any other offers
            </p>
          </div>
          <div className="shadow-[0_2px_11px_1px_#0000001c] rounded-tr-3xl rounded-bl-3xl p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl text-center mb-4 text-primary font-season">
                Plan 2
              </h3>
              <ul className="flex flex-col gap-2 mb-4">
                <li>
                  <strong>2 x</strong> dental examination{" "}
                  <strong>per year</strong>
                </li>
                <li>
                  <strong>2 x</strong> dental hygiene visits{" "}
                  <strong>per year</strong>
                </li>
                <li>
                  <strong>10% off</strong> everyday dentistry and Invisalign
                  <sup>&reg;</sup>*
                </li>
              </ul>
            </div>
            <div className="bg-primary rounded-tr-2xl rounded-bl-2xl p-5 text-center text-3xl font-semibold  text-white">
              £23.55<sub>/month</sub>
            </div>
            <p className="text-xs text-center text-olive/50 mt-1.5">
              *not to be used inconjuction with any other offers
            </p>
          </div>
          <div className="shadow-[0_2px_11px_1px_#0000001c] rounded-tr-3xl rounded-bl-3xl flex flex-col justify-between p-7">
            <h3 className="text-2xl text-center mb-4 text-primary font-season">
              Plan 3
            </h3>
            <ul className="flex flex-col gap-2 mb-4">
              <li>
                <strong>2 x</strong> dental examination{" "}
                <strong>per year</strong>
              </li>
              <li>
                <strong>4 x</strong> dental hygiene visits{" "}
                <strong>per year</strong>
              </li>
              <li>
                <strong>10% off</strong> everyday dentistry and Invisalign
                <sup>&reg;</sup>*
              </li>
            </ul>
            <div className="bg-primary rounded-tr-2xl rounded-bl-2xl p-5 text-center text-3xl font-semibold  text-white">
              £37.95<sub>/month</sub>
            </div>
            <p className="text-xs text-center text-olive/50 mt-1.5">
              *not to be used inconjuction with any other offers
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DentalPlans;
