import {
  Group,
  Button,
  Text,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Image,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import classes from "@/styles/Header.module.css";
import Logo from "@/assets/icons/logo.svg";
import Link from "next/link";

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group gap={0}>
            <Image src={Logo.src} width={50} height={50} />
            <Text className={classes.logoText}>BookHub</Text>
          </Group>

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Home
            </a>

            <a href="#" className={classes.link}>
              About Us
            </a>
            <a href="#" className={classes.link}>
              Courses
            </a>
            <a href="#" className={classes.link}>
              Subscription
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="filled" radius="xs" className={classes.shadow}>
              Get Started
            </Button>
            <Button
              component={Link}
              variant="subtle"
              className={classes.logoText}
              href="/auth/login"
            >
              Log in
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        // padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`}>
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>

          <a href="#" className={classes.link}>
            About Us
          </a>
          <a href="#" className={classes.link}>
            Courses
          </a>
          <a href="#" className={classes.link}>
            Subscription
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button variant="default" color="blue">
              Sign up
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
