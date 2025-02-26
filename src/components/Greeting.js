import styled from "styled-components";
import { useState, useEffect } from "react";
import { wavinghand } from "../images";

const Greeting = () => {
  const greetings = [
    "Hey, I'm Joanna Huang.",
    "Ehi, sono Joanna Huang.",
    "Hey, ich bin Joanna Huang.",
    "嗨，我是黃子軒。",
    "Salut, moi c'est Joanna Huang.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 3000);

    return () => clearInterval(interval);
  });

  return <GreetingText><WavingHand src={wavinghand} alt="waving hand icon"/>{greetings[index]}</GreetingText>;
};

export default Greeting;

const GreetingText = styled.code`
  opacity: 1;
  font-size: 16px;
  animation: fade-in-out 3s ease-in-out infinite;

  @keyframes fade-in-out {
    0% { opacity: 0; }    /* Start hidden */
    20% { opacity: 1; }   /* Fade in */
    80% { opacity: 1; }   /* Stay visible */
    100% { opacity: 0; }  /* Fade out before switching */
  }
`;

const WavingHand = styled.img`
  max-width: 1.25rem;
  margin-right: 0.375rem;
`;