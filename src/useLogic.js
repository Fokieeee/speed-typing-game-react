import {useState, useRef, useEffect} from 'react'

export const useLogic = (startingTime = 5) => {
    const [text, setText] = useState("");
    const [time, setTime] = useState(startingTime);
    const [start, setStart] = useState(false);
    const inputRef = useRef(null);
  
    const handleText = (e) => {
      setText(e.target.value);
    };
  
    useEffect(() => {
      (time > 0 && start === true) && setTimeout(() => setTime(time - 1) ,1000);
      time === 0 && setStart(false);
    },[time, start])
        
    const onClickHandle = () => {
      setStart(true);
      setText('');
      setTime(5);
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }
  
    const wordsNum = () => {
      return text.split(" ").filter((a) => a !== "").length;
    };

    return {text, time, start, inputRef, handleText, onClickHandle, wordsNum}
}
