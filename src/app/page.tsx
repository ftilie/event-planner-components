"use client";

import { useState } from "react";
import { Stack, Grid } from "@mui/material";
import Homepage from "@/pages/Home/Home";

export default function Home() {
    const [error, setError] = useState<Error | null>(null);

    if (error) {
        throw error;
    }

    return (
        <Stack sx={{direction:"column", height:"100vh", gap:4, pt: "30px", pl: "20px", pr: "20px" }} >
            <Stack sx={{ direction:"column", width:"100%", pt:"30px", pb:"30px"}}>
                <Grid container direction="row">
                    <Grid size={{ xs: 0, md: 1, lg: 1.5, xl: 2.5 }} />
                    <Grid size={{ xs: 12, md: 10, lg: 9, xl: 7 }} sx={{ containerType: "inline-size" }}>
                        <Homepage />
                    </Grid>
                    <Grid size={{ xs: 0, md: 1, lg: 1.5, xl: 2.5 }} />
                </Grid>
            </Stack>
        </Stack>
    );
}
