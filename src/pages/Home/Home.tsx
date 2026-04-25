"use client";

import EventCard from "@/components/EventCard/EventCard";
import { useState } from "react";
import { eventData } from "@/components/EventCard/EventCard.types";
import { Stack } from "@mui/material";

const Homepage = () => {
  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        sx={{ alignItems: "center", justifyContent: "center", height: "95vh" }}
      >
        <EventCard isEditable={true} event={eventData} />
      </Stack>
    </>
  );
};

export default Homepage;
