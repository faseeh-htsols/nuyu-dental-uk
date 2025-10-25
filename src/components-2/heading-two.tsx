interface IHeadingOne {
  children: React.ReactNode;
  classes?: string;
  poppins?: boolean;
}

const HeadingTwo = ({ children, classes }: IHeadingOne) => {
  return (
    <h2
      className={`text-3xl md:text-3xl font-season text-primary  font-medium !leading-10  ${
        classes ? classes : ""
      }`}
    >
      {children}
    </h2>
  );
};

export default HeadingTwo;
