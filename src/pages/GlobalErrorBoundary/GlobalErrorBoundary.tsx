"use client";

import React, { ReactNode } from "react";
import { ErrorOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class GlobalErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Global error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Stack
          direction="column"
          sx={{
            alignItems: "center",
            justifyContent: "center",
            height: "95vh",
            gap: 4,
          }}
        >
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              backgroundColor: "var(--color-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ErrorOutlined fontSize="large" />
          </Box>

          <Stack sx={{ alignItems: "center", textAlign: "center" }}>
            <Typography variant="h5" sx={{ color: "var(--color-text)" }}>
              Page isn't available right now
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "var(--color-text)" }}>
              This may be because of a technical error that we're working to get
              fixed. Try reloading this page.
            </Typography>
          </Stack>

          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              backgroundColor: "var(--color-accent)",
              "&:hover": { backgroundColor: "var(--color-accent-light)" },
            }}
            onClick={() => window.location.reload()}
          >
            Reload page
          </Button>
        </Stack>
      );
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;
