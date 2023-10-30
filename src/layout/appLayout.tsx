import { ComponentType, Fragment } from "react";

import HeadMeta from "@/components/Head";
import { AppShell } from "@mantine/core";
import { Header } from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function withLayout(
  Component: ComponentType,
  pageName: string = "",
  title: string = ""
) {
  const LayoutComponent = () => {
    return (
      <Fragment>
        <HeadMeta pageName={pageName} />
        <AppShell header={{ height: 60 }} footer={{ height: 200 }} padding="md">
          <AppShell.Header>
            <Header />
          </AppShell.Header>

          <AppShell.Footer bg="#0b935c">
            <Footer />
          </AppShell.Footer>

          <AppShell.Main>
            <Component />
          </AppShell.Main>
        </AppShell>
      </Fragment>
    );
  };
  return LayoutComponent;
}
