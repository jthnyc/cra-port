import styled from "styled-components";
import { device } from "../device";
import { Send } from "react-feather";

export default function Contact() {
  return (
    <ContactSection id="contact">
      <h1>Get In Touch</h1>
      <p>
        Always happy to connect with a fellow coder or musician. Feel free to
        reach out!{" "}
      </p>
      <a href="mailto:joannathhuang@gmail.com">
        <ContactButton>
          <Send />
          <span>Say Hello</span>
        </ContactButton>
      </a>
    </ContactSection>
  );
}

const ContactSection = styled.section`
  max-width: 1000px;
  align-items: center;
  & h1 {
    margin-bottom: 2rem;
  }
  & span,
  svg {
    color: #edf5e1;
  }
  & p {
    margin-bottom: 2rem;
    max-width: 36rem;
    @media ${device.sm} {
      max-width: 18.75rem;
    }
  }
`;

const ContactButton = styled.button`
  width: 12.5rem;
  height: 5rem;
  font-size: 1.3em;
  background: var(--prussianblue);
  border: 1px solid #edf5e1;
  border-radius: 0.5rem;
  box-shadow: 0.625rem 1rem 3rem 0rem;
  &:hover {
    cursor: pointer;
    background-image: linear-gradient(
      150deg,
      #eadedb 0%,
      #bc70a4 50%,
      #bfd641 75%
    );
  }
  & svg {
    position: relative;
    left: -10px;
  }
`;
