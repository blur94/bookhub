import { Box, Divider, Flex, Group, Image, List, Text } from "@mantine/core";
import Logo from "@/assets/icons/book-white.svg";
import dayjs from "dayjs";
import {
  IconCopyright,
  IconMailFilled,
  IconMapPinFilled,
  IconPhoneFilled,
} from "@tabler/icons-react";

import classes from "@/styles/Header.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Flex align="center" justify="space-between" gap={20}>
        <Box w="20%" pt={20}>
          <Group gap={0} mb={20}>
            <Image src={Logo.src} width={50} height={50} />
            <Text c="white" fw={700}>
              Book Hub
            </Text>
          </Group>
          <Text fz={10} c="white">
            Book Hub is one of the best and leading online learning platform in
            the worlds. It is an innovation that is designed to encourage
            students perform well academically.
          </Text>
        </Box>
        <Box c="white" pt={20}>
          <Text mb={20} pt={30} fw={700}>
            About
          </Text>
          <List listStyleType="none" spacing={5} size="sm">
            <List.Item>About Us</List.Item>
            <List.Item>Blog</List.Item>
            <List.Item>Careers</List.Item>
            <List.Item>Pricing</List.Item>
          </List>
        </Box>
        <Box c="white">
          <Text mb={20} pt={30} fw={700}>
            Support
          </Text>
          <List listStyleType="none" spacing={5} size="sm">
            <List.Item>Contact Us</List.Item>
            <List.Item>Online Chat</List.Item>
            <List.Item>Privacy</List.Item>
          </List>
        </Box>
        <Box c="white">
          <Text mb={20} pt={30} fw={700}>
            Resource
          </Text>
          <List listStyleType="none" spacing={5} size="sm">
            <List.Item>FAQs</List.Item>
            <List.Item>Payments</List.Item>
            <List.Item>Tutorials</List.Item>
          </List>
        </Box>
        <Divider orientation="vertical" my={20} />
        <Box c="white">
          <Text mb={20} pt={30} fw={700}>
            Get in touch
          </Text>
          <List spacing={5} size="sm">
            <List.Item icon={<IconMapPinFilled size="1rem" />}>
              200 Featherstone street United Kingdom
            </List.Item>
            <List.Item icon={<IconPhoneFilled size="1rem" />}>
              + 44 0000 000000
            </List.Item>
            <List.Item icon={<IconMailFilled size="1rem" />}>
              support@bookhub.com
            </List.Item>
          </List>
        </Box>
      </Flex>

      <Flex justify="center" align="center" gap={3} c="white" mt={10}>
        <IconCopyright size="1rem" />
        <Text fz={12}>{dayjs().format("YYYY")} BookHub</Text>
      </Flex>
    </footer>
  );
}
