import Link from "next/link";
import React from "react";
interface ISimpleButton {
  children: React.ReactNode;
  href: string;
  variant?: string;
  classes?: string;
}
const SimpleButton = ({ children, href, variant, classes }: ISimpleButton) => {
  return (
    <Link
      href={href}
      target={href?.includes("https") ? "_blank" : undefined}
      className={`text-center text-sm font-medium font-quicksand uppercase rounded-full py-3 px-5 transition-all duration-300 hover:rounded-tl-none hover:rounded-br-none ${
        variant === "secondary" ? "bg-secondary text-white" : ""
      } ${variant === "olive-dark" ? "bg-olive-dark text-white" : ""} ${
        !variant ? "bg-transparent text-white border border-primary" : ""
      } ${variant === "primary" ? "text-white bg-primary" : ""}
    ${
      variant === "transparent"
        ? "bg-transparent text-white border-white border-2 flex gap-3 py-2 items-center w-[75%] justify-center"
        : ""
    } ${variant === "outline" ? "border border-primary text-primary" : ""} ${
        classes ? classes : ""
      }${variant === "white" ? "bg-white text-primary" : ""} ${
        classes ? classes : ""
      }`}>
      {children}
    </Link>
  );
};

export default SimpleButton;
