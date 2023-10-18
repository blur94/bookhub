import { ComponentType, Fragment } from "react";

import HeadMeta from "@/components/Head";
import { AppShell, Burger, Text, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Header } from "@/components/NavBar";

interface Items {
  title: string;
  href: string;
}

export default function withLayout(
  Component: ComponentType,
  pageName: string = "",
  title: string = ""
) {
  const LayoutComponent = () => {
    const theme = useMantineTheme();
    const [opened, { toggle }] = useDisclosure(false);

    return (
      <Fragment>
        <HeadMeta pageName={pageName} />
        <AppShell
          header={{ height: 60 }}
          footer={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: "sm",
            collapsed: { mobile: !opened },
          }}
          padding="md"
        >
          <AppShell.Header>
            {/* <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <div>Logo</div> */}
            <Header />
          </AppShell.Header>

          {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}
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
