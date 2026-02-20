import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { device } from "../device";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const nextLang = i18n.language === "en" ? "ch" : "en";

  return (
    <SwitchButton onClick={() => i18n.changeLanguage(nextLang)}>
      {i18n.language === "en" ? "繁" : "EN"}
    </SwitchButton>
  );
};

export default LanguageSwitcher;

const SwitchButton = styled.button`
  background: #ff7f11;
  color: black;
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0;
  border: none;
  border-radius: 50%; /* Perfect circle */
  cursor: pointer;
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 3.5rem; /* Fixed width */
  height: 3.5rem; /* Fixed height = circle */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0.375rem 0.9375rem rgba(0, 0, 0, 0.3);
    transform: translateY(-0.125rem);
  }

  &:active {
    transform: translateY(0.125rem);
  }

  @media ${device.desktop} {
    display: none;
  }
`;