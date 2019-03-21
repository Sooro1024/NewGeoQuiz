const TimerStyles = {
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
  }

  export default TimerStyles