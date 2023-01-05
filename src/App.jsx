import { useEffect, useRef, useState } from "react";
import "./App.css";
import { useLogic } from "./useLogic";

function App() {
  const {text, time, start, inputRef, handleText, onClickHandle, wordsNum} = useLogic(15);

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea disabled={time === 0 && true} ref={inputRef} value={text} onChange={handleText} />
      <h4>Time reminaing: {time}</h4>
      <button disabled={ start } onClick={() => onClickHandle()}>Start</button>
      <h1>Word count: {time === 0 && wordsNum()}</h1>
    </div>
  );
}

export default App;
