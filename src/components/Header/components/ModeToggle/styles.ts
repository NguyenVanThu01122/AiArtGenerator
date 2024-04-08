import { Box, FormControl } from "@mui/material";
import styled from "styled-components";

export const StyledFormControl = styled(FormControl)`
  .select-mode {
    width: "145px";
  }
  @media screen and (max-width: 768px) {
    /* display: none !important; */
    
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
`;
