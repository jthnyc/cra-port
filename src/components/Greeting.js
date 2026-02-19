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

  return (
    <GreetingText>
      <WavingHand src={wavinghand} alt="waving hand icon"/>
      {greetings[index]}
    </GreetingText>
  );
};

export default Greeting;

const GreetingText = styled.h1`
  opacity: 1;
  font-size: 2.25rem;
  color: var(--cyan);
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  margin: 0;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: fade-in-out 3s ease-in-out infinite;
  white-space: nowrap;
  min-height: 2.7rem;
  min-width: 600px;  /* Fixed width to accommodate longest greeting (French) */
  
  @keyframes fade-in-out {
    0% { opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { opacity: 0; }
  }
  
  @media (max-width: 1070px) {
    font-size: 1.5rem;
    text-align: center;
    min-height: 1.8rem;
    min-width: 400px;  /* Adjust for mobile */
  }
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
    min-width: 340px;
  }
`;

const WavingHand = styled.img`
  max-width: 2rem;
  margin-right: 0.75rem;
  display: inline-block;
  vertical-align: middle;
  
  @media (max-width: 1070px) {
    max-width: 1.5rem;
    margin-right: 0.5rem;
  }
`;