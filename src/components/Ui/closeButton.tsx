import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const CloseButton = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <IconButton
      aria-label="close"
      onClick={handleClose}
      sx={{
        position: "absolute",
        right: 8,
        top: 8,
        color: (theme) => theme.palette.grey[500],
        "&:hover": {
          color: "red",
          transform: "scale(1.3)",
        },
        transition: "color 0.3s, transform 0.3s",
      }}
    >
      <CloseIcon />
    </IconButton>
  );
};

export default CloseButton;
