import styled from "styled-components";
import { device } from "../device";

export default function Footer() {
  return (
    <FooterSection>
      <FooterText>&#169; 2025 Joanna Huang</FooterText>
    </FooterSection>
  );
}

const FooterSection = styled.div`
  background: var(--prussianblue);
  display: flex;
  justify-content: flex-end;
  color: var(--white);
  padding-right: 1.25rem;

  @media ${device.md} {
    justify-content: center;
    padding-right: 0;
  }
`;

const FooterText = styled.p`
  margin-right: 5.5rem;

  @media ${device.md} and ${device.lg} {
    margin-right: 0;
  }
`;
