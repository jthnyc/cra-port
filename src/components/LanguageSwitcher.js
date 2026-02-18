import { useTranslation } from "react-i18next";
import styled from "styled-components";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const nextLang = i18n.language === "en" ? "ch" : "en";

  return (
    <SwitchButton onClick={() => i18n.changeLanguage(nextLang)}>
      {i18n.language === "en" ? "繁" : "Eng"}
    </SwitchButton>
  );
};

export default LanguageSwitcher;

const SwitchButton = styled.button`
  background: #ff7f11;
  color: black;
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0.75rem .75rem;
  border: none;
  border-radius: 3.125rem;
  cursor: pointer;
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  min-width: 3.125rem;
  z-index: 1001;  /* Added this - higher than nav (1000) */
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0.375rem 0.9375rem rgba(0, 0, 0, 0.3);
    transform: translateY(-0.125rem);
  }

  &:active {
    transform: translateY(0.125rem);
  }
`;