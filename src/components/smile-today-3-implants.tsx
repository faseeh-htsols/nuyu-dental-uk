import Container from "./container";
import HeadingTwo from "./heading-two";
import SimpleButton from "./simple-button";

const SmileTodayThree = () => {
  return (
    <>
      <div className="py-10 btns-animate-container">
        <Container>
          <div className="flex flex-col gap-7 justify-center bg-[url(/bg-try.png)] rounded-tr-[50px] rounded-bl-[50px] py-6 px-3">
            <HeadingTwo classes="text-white text-center">
              Ready to Restore Your Smile with Confidence?
            </HeadingTwo>
            <p className="text-white text-center">
              At NUYU Dental & Aesthetics, your implant is carefully planned in
              3D and placed with premium Straumann systems for a natural,
              lasting result - all within an environment designed to inspire
              confidence the moment you walk in. <br />
              <br />
              This exclusive rate is limited to 30 implant treatment places -
              book your consultation today.
            </p>
            <div className="flex justify-center">
              <SimpleButton
                href={"#contact"}
                classes="w-fit"
                variant="transparent">
                BOOK A FREE CONSULTATION
              </SimpleButton>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default SmileTodayThree;
