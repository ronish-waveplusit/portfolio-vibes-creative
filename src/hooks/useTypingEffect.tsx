
import { useState, useEffect } from "react";

export function useTypingEffect(text: string, speed: number = 40) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return displayText;
}
