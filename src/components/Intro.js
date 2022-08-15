import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const Intro = () => {
  return (
    <StyledContainer>
      <Section>
        <Row>
          <Col>Heya, I'm Jo!</Col>
        </Row>
        <Row>
          <Col>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Col>
        </Row>
      </Section>
    </StyledContainer>
  );
};

export default Intro;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
  margin: 0 auto;
  max-width: 62.5rem;
`;

const StyledContainer = styled(Container)`
  border: 1px solid blue;
  padding: 120px 20px 0 20px;
`;
