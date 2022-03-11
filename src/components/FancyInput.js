import React from "react";

const FancyInput = React.forwardRef((props, ref) => {
  return <input className={props.className} ref={ref} type="text"></input>;
});

export default FancyInput;
