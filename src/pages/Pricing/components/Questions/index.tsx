import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Answer,
  BoxQuestions,
  DescriptionText,
  HeaderQuestions,
  Question,
  StyledAccordion,
  StyledSpan,
  TitleQuestion,
} from "./styles";

function FrequentlyAskedQuestions() {
  const [expanded, setExpanded] = useState(0);
  const { t } = useTranslation();
  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : 0);
    };

  const items = [
    {
      key: "1",
      label: (
        <Question>
          <StyledSpan>01</StyledSpan>
          <div>{t("QUESTION_1_KEY")}</div>
        </Question>
      ),
      children: <Answer>{t("ANSWER_1_KEY")}</Answer>,
    },
    {
      key: "2",
      label: (
        <Question>
          <StyledSpan>02</StyledSpan>
          <div>{t("QUESTION_2_KEY")}</div>
        </Question>
      ),
      children: <Answer>{t("ANSWER_2_KEY")}</Answer>,
    },
    {
      key: "3",
      label: (
        <Question>
          <StyledSpan>03</StyledSpan>
          <div>{t("QUESTION_3_KEY")}</div>
        </Question>
      ),
      children: <Answer>{t("ANSWER_3_KEY")}</Answer>,
    },
    {
      key: "4",
      label: (
        <Question>
          <StyledSpan>04</StyledSpan>
          <div>{t("QUESTION_4_KEY")}</div>
        </Question>
      ),
      children: <Answer>{t("ANSWER_4_KEY")}</Answer>,
    },
    {
      key: "5",
      label: (
        <Question>
          <StyledSpan>05</StyledSpan>
          <div>{t("QUESTION_5_KEY")}</div>
        </Question>
      ),
      children: <Answer>{t("ANSWER_5_KEY")}</Answer>,
    },
    {
      key: "6",
      label: (
        <Question>
          <StyledSpan>06</StyledSpan>
          <div>{t("QUESTION_6_KEY")}</div>
        </Question>
      ),
      children: <Answer>{t("ANSWER_6_KEY")}</Answer>,
    },
  ];

  return (
    <BoxQuestions>
      <HeaderQuestions>
        <TitleQuestion>{t("Frequently Asked Questions")}</TitleQuestion>
        <DescriptionText>
          {t(
            "Check out our frequently asked questions below to find answers to common inquiries."
          )}
        </DescriptionText>
      </HeaderQuestions>

      {/* list of questions */}
      {items.map((item, index) => (
        <StyledAccordion
          expanded={expanded === index + 1} //expanded xác định xem Accordion có được mở hay không
          onChange={handleChange(index + 1)}
          key={item.key}
          sx={{
            bgcolor: "info.main",
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === index + 1 ? (
                <ExpandLessIcon sx={{ color: "gray" }} />
              ) : (
                <ExpandMoreIcon sx={{ color: "gray" }} />
              )
            }
          >
            <Typography
              sx={{
                color: "text.primary",
              }}
            >
              {item.label}
            </Typography>
          </AccordionSummary>
          <AccordionDetails color="text.primary">
            <Typography
              sx={{
                color: "text.primary",
              }}
            >
              {item.children}
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
      ))}
    </BoxQuestions>
  );
}

export default FrequentlyAskedQuestions;
