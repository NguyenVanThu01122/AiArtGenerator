import LoadingButton from "@mui/lab/LoadingButton";

export const LoadingButtonGeneral = ({
  loading,
  children,
  onClick,
  className,
  disabled,
  startIcon,
  ...props
}: {
  loading?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  startIcon?: React.ReactNode;
}) => {
  return (
    <LoadingButton
      {...props}
      disabled={disabled}
      loading={loading}
      onClick={onClick}
      className={className}
      startIcon={startIcon}
      //   startIcon={<CircularProgress size={20} color="inherit" />}
    >
      {children}
    </LoadingButton>
  );
};
