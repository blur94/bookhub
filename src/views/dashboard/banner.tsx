import {
  Text,
  Title,
  TextInput,
  Button,
  Image,
  Flex,
  Group,
  ThemeIcon,
  ActionIcon,
  Center,
} from "@mantine/core";
import BannerImg from "@/assets/images/banner.png";
import PlayImg from "@/assets/icons/play.svg";
import classes from "@/styles/dashboard-banner.module.css";

export function DashBoardBanner() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title order={1} className={classes.title} fz={42}>
          Embark on a journey of Knowledge and Growth
        </Title>
        <Text fw={200} c="dimmed" fz="lg" mb={5}>
          Unlock a World of Knowledge at Your Fingertips using the best and
          largest online hub.
        </Text>

        <Flex gap={50} align="center">
          <Button variant="filled" radius="xs" className={classes.shadow}>
            Get Started
          </Button>
          <Group>
            <ActionIcon
              radius="xl"
              size={50}
              color="white"
              className={classes.shadow}
            >
              <Center mt={5} pl={5}>
                <Image src={PlayImg.src} width={24} height={24} />
              </Center>
            </ActionIcon>
            <Text c="dimmed" fz={14}>
              Watch Intro Video
            </Text>
          </Group>
        </Flex>
      </div>
      <Image src={BannerImg.src} className={classes.image} />
    </div>
  );
}
