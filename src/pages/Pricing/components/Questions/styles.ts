import { Accordion } from "@mui/material";
import styled from "styled-components";
export const BoxQuestions = styled.div`
  width: 100%;
  .css-15v22id-MuiAccordionDetails-root {
    padding-top: 0px;
  }
  .MuiAccordionSummary-expandIcon {
    color: white !important;
  }
`;

export const HeaderQuestions = styled.div`
  color: white;
`;

export const TitleQuestion = styled.div`
  color: #fff;
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
  color: #d2d2d2;
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

export const StyledAccordion = styled(Accordion)`
  background: rgb(9, 9, 23) !important;
  border: 1px solid #1a202f;
  margin-bottom: 15px;
  border-radius: 10px;
`;

export const Question = styled.div`
  display: flex;
  align-items: center;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    font-weight: 500;
  }
`;

export const StyledSpan = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-right: 15px;
  color: white;
`;

export const Answer = styled.div`
  font-size: 12px;
  color: white;
  background: rgb(9, 9, 23);
  padding-left: 40px;
  @media screen and (max-width: 768px) {
    font-weight: 400;
    padding-left: 10px;
  }
`;
