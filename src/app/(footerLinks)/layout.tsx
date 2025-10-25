import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import { ReactNode } from "react";

const NonLaunchLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default NonLaunchLayout;
