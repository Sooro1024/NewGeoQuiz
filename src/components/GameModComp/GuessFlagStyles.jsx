const GuessFlagStyles = {
  CircularProgressbar: {
    // Customize the root svg element
    root: { minWidth: "300px", minHeight: "300px" },
    // Customize the path, i.e. the "completed progress"
    path: {
      // Path color
      stroke: `#f50057`,
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: "round",
      // Customize transition animation
      transition: "stroke-dashoffset 0.5s ease 0s"
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: "#d6d6d6"
    },
    // Customize the text
    text: {
      fill: "#3f51b5",
      fontSize: "16px",
      dominantBaseline: "middle",
      textAnchor: "middle",
      userSelect: "none" /* Non-prefixed version, currently*/
    },
    // Customize background - only used when the `background` prop is true
    background: {
      fill: "#d6d6d6"
    }
  },
  CardMedia: {
    minHeight: "300px",
    boxShadow:
      "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)"
    // borderColor: '#3f51b5', borderStyle:'solid'
  },
  AnswerBox: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px"
  },
  cardAndProgressWrapper: {
    marginBottom: '20px',
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  AnswerBoxWrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
};

export default GuessFlagStyles;