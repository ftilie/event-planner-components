import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

//VARIANTS DECLARATIONS
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    contextualMenu: true;
    action: true;
    launch: true;
    selected: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    filledChip: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bannerBody: true;
    drawerSubtitle: true;
    drawerContent: true;
    subtitleDetails: true;
    externalLink: true;
  }
}

export const MuiTheme = createTheme({
  shape: {
    borderRadius: 3,
  },
  spacing: 4,
  typography: {
    allVariants: {
      color: "#FFF",
      fontFamily: "Roboto, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 1.33,
      fontVariant: "none",
    },
    h1: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: "bold",
      fontSize: 28,
    },
    h2: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: "bold",
      fontSize: 18,
    },
    h3: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: "bold",
      fontSize: 16,
    },
    h4: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: "bold",
      fontSize: 14,
    },
    h5: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: "normal",
      fontSize: 14,
    },
    h6: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: "normal",
      fontSize: 12,
    },
    body1: {
      fontSize: 12,
    },
    body2: {
      fontSize: 11,
    },

    subtitle1: {
      color: "#E3E3E3",
      fontSize: 11,
    },
    subtitle2: {
      color: "var(--color-background)",
      fontSize: 9,
    },
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          whiteSpace: "normal",
        },
      },
    },
    MuiFormControlLabel: {
      defaultProps: {
        sx: { color: "#FFF" },
      },
    },

    MuiTypography: {
      variants: [
        {
          props: { variant: "drawerSubtitle" },
          style: {
            fontFamily: "Roboto, sans-serif",
            fontSize: 18,
          },
        },
        {
          props: { variant: "bannerBody" },
          style: {
            fontFamily: "Roboto, sans-serif",
            fontSize: 14,
            color: "#FFF",
          },
        },
        {
          props: { variant: "drawerContent" },
          style: {
            fontFamily: "Roboto, sans-serif",
            fontSize: 12,
          },
        },
        {
          props: { variant: "subtitleDetails" },
          style: {
            fontFamily: "Roboto, sans-serif",
            fontSize: 12,
            color: "#9e9e9e",
          },
        },
        {
          props: { variant: "externalLink" },
          style: {
            fontFamily: "Roboto, sans-serif",
            fontSize: 12,
            color: "var(--color-accent)",
          },
        },
      ],
    },
    MuiDrawer: {
      defaultProps: {
        disableEnforceFocus: true,
      },
    },

    MuiLink: {
      defaultProps: {
        variant: "inherit",
        underline: "none",
        color: "var(--color-accent)",
      },
    },

    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiDivider: {
      defaultProps: {
        sx: { borderBottomWidth: 3 },
      },
    },

    MuiCard: {
      defaultProps: {
        sx: { borderRadius: 4, width: 400, maxWidth: 400 },
      },
    },
  },
});

export const DEFAULT_MARGIN = "16px";
