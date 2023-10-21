import {
  ActionIcon,
  Box,
  Button,
  Card,
  Flex,
  Group,
  Image,
  Rating,
  Text,
  Title,
} from "@mantine/core";
import Book from "@/assets/icons/book-black.svg";
import Profile from "@/assets/icons/profile-black.svg";
import Clock from "@/assets/icons/clock.svg";

import Math from "@/assets/images/maths.png";

import classes from "@/styles/bannerCard.module.css";
import clsx from "clsx";
import { popular } from "@/constants/popular";

export default function PopularCourses() {
  return (
    <Box mt={50}>
      <Title order={1} w="100%" ta="center" mb={40}>
        Popular Courses
      </Title>
      <Flex gap={20}>
        {popular.slice(0, 4).map((p, i) => (
          <Card
            className={clsx(classes.shadow, classes.cardBorder)}
            p={20}
            key={i}
            // style={{ flexGrow: 1 }}
            w={`${100 / popular.length}%`}
          >
            <Image src={p.image.src} width={100} height={200} />

            <Flex my={15} align="center" justify="space-between">
              <Title order={5}>{p.name}</Title>
              <Group gap={3}>
                <Rating value={p.rated} fractions={2} readOnly size="xs" />
                <Text>{p.rated}</Text>
              </Group>
            </Flex>

            <Text>{p.description}</Text>

            <Flex align="center" justify="space-between" my={15}>
              <Group gap={2}>
                <Image src={Book.src} width={10} height={10} />
                <Text fz={10}>{p.lessons} lessons</Text>
              </Group>
              <Group gap={2}>
                <Image src={Profile.src} width={10} height={10} />
                <Text fz={10}>{p.enrolled} enrolled</Text>
              </Group>
              <Group gap={2}>
                <Image src={Clock.src} width={10} height={10} />
                <Text fz={10}>{p.time}</Text>
              </Group>
            </Flex>

            <Flex align="center" justify="space-between" mb={15}>
              <Group gap={10}>
                <ActionIcon radius="lg" size="lg" variant="light">
                  <Image src={p.instImage.src} />
                </ActionIcon>
                <Box>
                  <Text>{p.instName}</Text>
                  <Text c="dimmed" fz={12}>
                    Instructor
                  </Text>
                </Box>
              </Group>
              <Title order={3}>${p.price}</Title>
            </Flex>

            <Button fullWidth className={classes.shadow}>
              Enroll Course
            </Button>
          </Card>
        ))}
      </Flex>
    </Box>
  );
}
