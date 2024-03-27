import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { useState } from "react";
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
          <div>Can I try before signing up?</div>
        </Question>
      ),
      children: (
        <Answer>
          As a free user, you have access to all our tools with 25 credits, and
          once you run out of credits, you'll be limited. By upgrading to a Paid
          Account, you'll have access to more credits.
        </Answer>
      ),
    },
    {
      key: "2",
      label: (
        <Question>
          <StyledSpan>02</StyledSpan>
          <div>
            I want to purchase the yearly package. Will I get a discount?
          </div>
        </Question>
      ),
      children: (
        <Answer>
          CreatorHub already offers very affordable pricing. Currently, we only
          provide a 20% discount for annual membership compared to the monthly
          price.
        </Answer>
      ),
    },
    {
      key: "3",
      label: (
        <Question>
          <StyledSpan>03</StyledSpan>
          Can I cancel my paid subscription?
        </Question>
      ),
      children: (
        <Answer>
          Yes, you can pay with one credit card for multiple accounts. Just
          provide the email addresses of the members in your group, and your
          paid package will be automatically upgraded.
        </Answer>
      ),
    },
    {
      key: "4",
      label: (
        <Question>
          <StyledSpan>04</StyledSpan>
          Can I cancel my paid subscription?
        </Question>
      ),
      children: (
        <Answer>
          Absolutely! If our service doesn't meet your needs, you can cancel
          your subscription at any time.
        </Answer>
      ),
    },
    {
      key: "5",
      label: (
        <Question>
          <StyledSpan>05</StyledSpan>
          <div>What if I want to change my paid package in the middle?</div>
        </Question>
      ),
      children: (
        <Answer>
          You can purchase and cancel a paid package as needed from your
          Account. Similarly, you can upgrade your paid package, and we'll
          automatically adjust the fee accordingly.
        </Answer>
      ),
    },
    {
      key: "6",
      label: (
        <Question>
          <StyledSpan>06</StyledSpan>
          Will I own the images I make?
        </Question>
      ),
      children: (
        <Answer>
          Yes, you own all the content you generate using the platform and can
          use it for commercial purposes. This includes any images or assets
          that are generated based on the input prompts you provide.
        </Answer>
      ),
    },
  ];

  return (
    <BoxQuestions>
      <HeaderQuestions>
        <TitleQuestion>Frequently Asked Questions</TitleQuestion>
        <DescriptionText>
          Check out our frequently asked questions below to find answers to
          common inquiries.
        </DescriptionText>
      </HeaderQuestions>

      {/* list of questions */}
      {items.map((item, index) => (
        <StyledAccordion
          expanded={expanded === index + 1} //expanded xác định xem Accordion có được mở hay không
          onChange={handleChange(index + 1)}
          key={item.key}
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
            <Typography>{item.label}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.children}</Typography>
          </AccordionDetails>
        </StyledAccordion>
      ))}
    </BoxQuestions>
  );
}

export default FrequentlyAskedQuestions;
