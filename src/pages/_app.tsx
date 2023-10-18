import '@/styles/globals.css'
import '@mantine/core/styles.css';
import "@mantine/notifications/styles.css"

import { Notifications } from "@mantine/notifications";
import { RouterTransition } from "@/components/RouterTransitions";

import type { AppProps } from 'next/app';
import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <RouterTransition />
      <Notifications position="top-center" />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
