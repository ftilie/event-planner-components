import { Stack, Typography } from "@mui/material";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import LinkIcon from "@mui/icons-material/Link";

export type TagProps = {
  text: string;
  variant?: "active" | "inactive";
};

const Tag = ({ text, variant = "inactive" }: TagProps) => {
  const isActive = variant === "active";

  return (
    <Typography
      variant="body1"
      sx={{
        borderRadius: "4px",
        backgroundColor: isActive
          ? "var(--color-accent)"
          : "var(--color-primary)",
        color: isActive ? "#FFFFFF" : "var(--color-text)",
        padding: "4px 8px",
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
      }}
    >
      <Stack sx={{alignItems: "center", justifyContent: "center", flexDirection: "row", gap: "4px"}}>
        {isActive ? (
          <ConfirmationNumberIcon sx={{ fontSize: "medium" }} />
        ) : (
          <LinkIcon sx={{ fontSize: "medium" }} />
        )}
        {text}
      </Stack>
    </Typography>
  );
};

export default Tag;
