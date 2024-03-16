import { Dialog } from "@mui/material";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  TransitionComponent?: any;
  keepMounted?: boolean;
  className?: any;
  fullWidth?: any;
}

const DialogCommon = ({
  open,
  onClose,
  children,
  fullWidth,
  ...props
}: DialogProps) => {
  return (
    <Dialog open={open} fullWidth={fullWidth} onClose={onClose} {...props}>
      {children}
    </Dialog>
  );
};

export default DialogCommon;
