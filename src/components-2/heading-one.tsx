interface IHeadingOne {
  children: React.ReactNode;
  classes?: string;
  poppins?: boolean;
}

const HeadingOne = ({ children, classes }: IHeadingOne) => {
  return (
    <h1
      className={`text-3xl md:text-5xl font-season  tracking-wider font-medium md:!leading-[4rem]  ${
        classes ? classes : ""
      }`}
    >
      {children}
    </h1>
  );
};

export default HeadingOne;
