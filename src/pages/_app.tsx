import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/nprogress/styles.css";
import "@/styles/globals.css";

import { Notifications } from "@mantine/notifications";
import { RouterTransition } from "@/components/RouterTransitions";

import type { AppProps } from "next/app";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import { primary } from "@/constants/theme";

const theme = createTheme({
  colors: {
    primary,
  },
  primaryColor: "primary",
  primaryShade: 9,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider theme={theme} defaultColorScheme="auto">
        <RouterTransition />
        <Notifications position="top-center" />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
