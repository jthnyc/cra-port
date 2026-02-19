import styled from "styled-components";
import { device } from "../device";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <FooterContent>
        <FooterText>
          <Highlight>©{currentYear} Joanna Huang</Highlight>
        </FooterText>
      </FooterContent>
    </FooterSection>
  );
}

const FooterSection = styled.footer`
  background: rgba(4, 56, 108, 0.5);
  backdrop-filter: blur(10px);
  padding: 2rem 0;
  border-top: 1px solid rgba(92, 225, 230, 0.1);
`;

const FooterContent = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media ${device.sm} {
    padding: 0 1rem;
  }
`;

const FooterText = styled.p`
  color: var(--white);
  opacity: 0.7;
  font-size: 0.9375rem;
  margin: 0;
  text-align: center;
  
  @media ${device.sm} {
    font-size: 0.875rem;
  }
`;

const Highlight = styled.span`
  color: var(--cyan);
`;