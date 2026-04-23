"use client";

import EventCard from "@/components/EventCard/EventCard";
import { useState } from "react";
import { Event, eventData } from "@/components/EventCard/EventCard.types";

const Homepage = () => {
    const [showUnfollowModal, setShowUnfollowModal] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);

    const handleUnfollow = () => {
        localStorage.setItem("isFollowing", "false");
        setIsFollowing(false);
        setShowUnfollowModal(false);
    };

    return (
        <>
        <EventCard isEditable={true} event={eventData} />
        </>
    );
};

export default Homepage;
