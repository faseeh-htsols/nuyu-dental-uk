const Container = ({
  children,
  classes,
}: {
  children: React.ReactNode;
  classes?: string;
}) => {
  return (
    <div className={`max-w-[80rem] mx-auto px-5 ${classes ? classes : ""}`}>
      {children}
    </div>
  );
};

export default Container;
