"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { MuiTheme } from "@/utils/theme";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <MuiThemeProvider theme={MuiTheme}>{children}</MuiThemeProvider>
    </NextThemesProvider>
  );
}
