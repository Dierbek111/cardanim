import "./App.css";
import { useState } from "react";

import React from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [text, setText] = useState("");
  const [img, setImg] = useState("false");
  const [open, setOpen] = useState("Open");

  const change = () => {
    setImg(!img)
  };
  return (
    <>
      <div className="box">
        <button onClick={change}>{open} Foto</button>
      </div>

      <div className="box">
        {/* <button onClick={() => setImg(!img)}>Open Foto</button> */}
        {img && (
          <img src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg" alt="" />
        )}
      </div>

      <div className="box">
        <h4>{text}</h4>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="box">
        <h4>{num}</h4>
        <button onClick={() => setNum(num + 1)}>Добавить число</button>
        <button onClick={() => setNum(num - 1)}>Уменьшить число</button>
        <button onClick={() => setNum(num * 2)}>Удвоить число</button>
        <button onClick={() => setNum(num / 2)}>Разделить число</button>
        <button onClick={() => setNum(num * 0)}>Обнулить число</button>
      </div>
    </>
  );
};

export default App;
