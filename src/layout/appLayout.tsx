import { ComponentType, Fragment } from "react";

import HeadMeta from "@/components/Head";
import { AppShell } from "@mantine/core";
import { Header } from "@/components/NavBar";

export default function withLayout(
  Component: ComponentType,
  pageName: string = "",
  title: string = ""
) {
  const LayoutComponent = () => {
    return (
      <Fragment>
        <HeadMeta pageName={pageName} />
        <AppShell header={{ height: 60 }} footer={{ height: 60 }} padding="md">
          <AppShell.Header>
            <Header />
          </AppShell.Header>

          <AppShell.Footer p="md">Footer</AppShell.Footer>

          <AppShell.Main>
            <Component />
          </AppShell.Main>
        </AppShell>
      </Fragment>
    );
  };
  return LayoutComponent;
}
