import { FormGroup } from "@mui/material";
import { ReactNode } from "react";
interface FormGroupProps {
  children: ReactNode;
  row?: boolean;
}
// Component FormGroup
export default function FormGroupCommon({ children, row }: FormGroupProps) {
  return <FormGroup row={row}>{children}</FormGroup>;
}
