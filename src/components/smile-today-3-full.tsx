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
              Ready to Get Started?
            </HeadingTwo>
            <p className="text-white text-center">
              Take the next step and get in touch with us to discover how full arch dental implants could beautifully restore your smile and confidence.
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
