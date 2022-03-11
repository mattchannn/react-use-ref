import { useRef } from "react";
import FancyInput from "./components/FancyInput";
import "./styles.css";

export default function App() {
  const ref = useRef();
  const handleClick = () => {
    ref.current.focus();
  };
  return (
    <div className="App">
      <h1>FancyButton</h1>
      <div style={{ width: "100%" }}>
        <button onClick={handleClick} style={{ padding: "1rem" }}>
          Click
        </button>
      </div>
      <FancyInput className="fancy-btn-master" ref={ref}></FancyInput>
    </div>
  );
}
