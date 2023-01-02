import styled from "styled-components";
import { device } from "../device";

export default function Footer() {
  return (
    <FooterSection>
      <p>&#169; 2023 Joanna Huang</p>
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
  }
`;
