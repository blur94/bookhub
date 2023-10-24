import { instructors } from "@/constants/testimonials";
import { Carousel } from "@mantine/carousel";
import {
  Box,
  Center,
  Flex,
  Image,
  Paper,
  Text,
  ThemeIcon,
  Title,
  lighten,
} from "@mantine/core";
import classes from "@/styles/bannerCard.module.css";
import clsx from "clsx";

export default function Instructors() {
  return (
    <Box mt={40}>
      <Center>
        <Title order={2}>Some of our Instructors</Title>
      </Center>

      <Carousel slideSize={"calc(100% / 4)"} slideGap={30} align="start" slidesToScroll={4} classNames={{controls: classes.controls, control: classes.instControl}}>
        {instructors.map((instructor, idx) => (
          <Carousel.Slide h={420} py={40} key={idx}>
            <Paper
              className={clsx(classes.shadow, classes.cardBorder)}
              p={20}
              bg={lighten("#F1F14D", 0.8)}
            >
              <Flex direction="column" align="center">
                <ThemeIcon
                  size={180}
                  radius="100%"
                  color={lighten("#F1F14D", 0.8)}
                >
                  <Image
                    src={instructor.image.src}
                    radius="100%"
                    width={"100%"}
                    height={"100%"}
                  />
                </ThemeIcon>
                <Text fw={700} fz={20} py={20}>
                  {instructor.name}
                </Text>
                <Text c="dimmed">{instructor.subject}</Text>
              </Flex>
            </Paper>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
}
