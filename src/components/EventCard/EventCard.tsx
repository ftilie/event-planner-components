import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Event } from "./EventCard.types";
import LocationChip from "../LocationChip/LocationChip";
import Tag from "../Tag/Tag";

export type EventCardProps = {
  isEditable: boolean;
  event: Event;
};

const CARD_WIDTH = 224;
const CARD_HEIGHT = 300;
const BORDER_RADIUS = "10px";

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const isOngoing = (startDate: string, endDate: string) => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const start = new Date(startDate + "T00:00:00");
  const end = new Date(endDate + "T00:00:00");
  return now >= start && now <= end;
};

const getDaysAndNights = (startDate: string, endDate: string) => {
  const start = new Date(startDate + "T00:00:00");
  const end = new Date(endDate + "T00:00:00");
  const days =
    Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  const nights = days - 1;
  return `${days} ${days === 1 ? "day" : "days"} / ${nights} ${nights === 1 ? "night" : "nights"}`;
};

const EventCard = ({ event, isEditable }: EventCardProps) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: BORDER_RADIUS,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {isEditable && (
        <Button
          sx={{
            position: "absolute",
            top: "50%",
            right: 10,
            transform: "translate(0, -50%)",
            zIndex: 2,
            minWidth: 48,
            width: 48,
            height: 48,
            borderRadius: "50%",
            backgroundColor: "var(--color-accent)",
            color: "#FFFFFF",
            "&:hover": { backgroundColor: "var(--color-accent-light)" },
          }}
        >
          <EditIcon />
        </Button>
      )}
      <Box sx={{ position: "relative" }}>
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
        <Stack sx={{ position: "absolute", top: 10, left: 10, zIndex: 1 }}>
          <LocationChip location={event.location} />
        </Stack>
        {isOngoing(event.startDate, event.endDate) && (
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "50%",
              height: "15%",
              borderRadius: "0 10px 0 0",
              backgroundColor: "var(--color-background)",
              zIndex: 1,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "var(--color-primary-hover)",
                padding: "4px",
                alignItems: "baseline",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Ongoing
            </Typography>
          </Box>
        )}
      </Box>
      <Stack
        sx={{
          flex: 1,
          backgroundColor: "var(--color-background)",
          p: "10px",
        }}
      >
        <Typography
          variant="h2"
          sx={{ padding: "10px 0", color: "var(--color-text)" }}
        >
          {event.title}
        </Typography>
        <Typography
          variant="h4"
          sx={{ paddingBottom: "4px", color: "var(--color-text)" }}
        >
          {getDaysAndNights(event.startDate, event.endDate)}
        </Typography>
        <Typography variant="h6" sx={{ color: "var(--color-text)" }}>
          {formatDate(event.startDate)} - {formatDate(event.endDate)}
        </Typography>
        <Typography variant="h6" sx={{ color: "var(--color-text)" }}>
          {event.location}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mt: "auto" }}>
          <Tag text="Tag 1" variant="active" />
          <Tag text="Tag 2" variant="inactive" />
        </Stack>
      </Stack>
    </Grid>
  );
};

export default EventCard;
