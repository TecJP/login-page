import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'teal.50',
        bg: 'teal.900',
      },
    },
    fonts: {
      body: "system-ui, sans-serif",
      heading: "Georgia, serif",
      mono: "Menlo, monospace",
    },
  },
});
