import { Dialog } from "@mui/material";
export enum DialogMaxWidth {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}
interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  TransitionComponent?: any;
  keepMounted?: boolean;
  className?: string;
  fullWidth?: boolean;
  maxWidth?: DialogMaxWidth;
}

const DialogCommon = ({
  open,
  onClose,
  children,
  fullWidth,
  maxWidth,
  ...props
}: DialogProps) => {
  return (
    <Dialog
      open={open}
      fullWidth={fullWidth}
      onClose={onClose}
      maxWidth={maxWidth}
      {...props}
    >
      {children}
    </Dialog>
  );
};

export default DialogCommon;
