import { Accordion } from "@mui/material";
import styled from "styled-components";

export const BoxQuestions = styled.div`
  width: 100%;
  .css-15v22id-MuiAccordionDetails-root {
    padding-top: 0px;
  }
  .MuiAccordionSummary-expandIcon {
    color: var(--text-color) !important;
  }
`;

export const HeaderQuestions = styled.div`
  color: var(--text-color);
`;

export const TitleQuestion = styled.div`
  /* color: rgb(121, 57, 8); */
  color: var(--text-color);
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  line-height: 120%; /* 48px */
  letter-spacing: -1px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const DescriptionText = styled.div`
  color: var(--text-color);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
  margin-top: 5px;
  margin-bottom: 25px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const StyledSpan = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 15px;
  color: var(--text-color);
`;

export const Answer = styled.div`
  font-size: 12px;
  color: var(--text-color);
  padding-left: 40px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-weight: 400;
    padding-left: 10px;
  }
`;

export const Question = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    font-weight: 500;
  }
`;

export const StyledAccordion = styled(Accordion)`
  margin-bottom: 15px;
  border-radius: 10px;
  font-weight: bold;
 
`;
