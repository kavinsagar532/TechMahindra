import { useState } from "react";

export function Toggle() { 
    const [color, setColor] = useState("black");
    const [bgColor, setBgColor] = useState("white");

    function Theme() {
        if (color === "black" && bgColor === "white") {
            setColor("white");
            setBgColor("black");
        } else {
            setColor("black");
            setBgColor("white");
        }
    }

    return (
        <>
        <div style={{backgroundColor: bgColor, height: "100vh", textAlign: "center", padding: "20px" }}>
            <h1 style={{ color: color}}>Hello World</h1>
            <button onClick={Theme}>Click to Toggle</button>
        </div>
        </>

    );
}
