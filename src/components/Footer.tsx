import { Box, Flex, Group, Image, Text } from "@mantine/core";
import Logo from "@/assets/icons/book-white.svg";

import classes from "@/styles/Header.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Flex align="center" h="100%" gap={20}>
        <Box w="20%">
          <Group gap={0} mb={20}>
            <Image src={Logo.src} width={50} height={50} />
            <Text c="white">Book Hub</Text>
          </Group>
          <Text fz={10} c="white">
            Book Hub is one of the best and leading online learning platform in
            the worlds. It is an innovation that is designed to encourage
            students perform well academically
          </Text>
        </Box>
        <Group gap={0}>
          <Image src={Logo.src} width={57} height={57} />
          <Text>Book Hub</Text>
        </Group>
        <Group gap={0}>
          <Image src={Logo.src} width={57} height={57} />
          <Text>Book Hub</Text>
        </Group>
        <Group gap={0}>
          <Image src={Logo.src} width={57} height={57} />
          <Text>Book Hub</Text>
        </Group>
      </Flex>
    </footer>
  );
}
