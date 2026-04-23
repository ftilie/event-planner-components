import { Box, Stack, Typography } from "@mui/material";
import { Event } from "./EventCard.types";

export type EventCardProps = {
  isEditable: boolean;
  event: Event;
};

const CARD_WIDTH = 224;
const CARD_HEIGHT = 300;
const BORDER_RADIUS = "10px";

const EventCard = ({ event, isEditable }: EventCardProps) => {
  return (
    <Stack
      sx={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: BORDER_RADIUS,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
      }}
    >
      <Box
        {...(event.img && {
          component: "img",
          src: event.img,
          alt: event.title,
        })}
        sx={{
          width: "100%",
          height: CARD_HEIGHT / 2,
          objectFit: "cover",
          ...(!event.img && { backgroundColor: "var(--color-primary)" }),
        }}
      />
      <Stack sx={{ backgroundColor: "var(--color-background)", p: "10px" }}>
        <Typography>{event.title}</Typography>
        <Typography variant="subtitle2">{event.location}</Typography>
        <Typography variant="subtitle2">
          {event.startDate} - {event.endDate}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default EventCard;
