import { useState } from "react";

const Index = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function randomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  function randomRgbColor() {
    const r = randomUtility(256);
    const g = randomUtility(256);
    const b = randomUtility(256);

    setColor(`rgb${r},${g},${b}`);
  }
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
          padding: 0,
          margin: 0,
          boxSizing: "border-box",
        }}
      >
        <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create Rgb Color</button>
        <button
          onClick={typeOfColor === "hex" ? randomHexColor : randomRgbColor}
        >
          Generate Random Color
        </button>
        <button>
          <div
            style={{
              display: "flex",
              
            }}
          ></div>
        </button>
      </div>
    </>
  );
};

export default Index;
