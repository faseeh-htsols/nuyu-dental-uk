const ChevronSvg = ({ fill, classes }: { fill: string; classes: string }) => {
  return (
    <span className={`block ${classes}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill={fill}
        viewBox="0 0 221 123"
        version="1.1"
        // style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
      >
        <path
          d="M220.417,12.5l-12.917,-12.5l-97.5,97.5l-97.5,-97.5l-12.5,12.5l110,110.417l110.417,-110.417Z"
          // style="fill:#14211a;fill-rule:nonzero;"
        ></path>
      </svg>
    </span>
  );
};

export default ChevronSvg;
