import {
  ActionIcon,
  Box,
  Card,
  Flex,
  Image,
  Indicator,
  Paper,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import classes from "@/styles/bannerCard.module.css";
import clsx from "clsx";
import { testimonials } from "@/constants/testimonials";
import { useRef } from "react";

export default function Testimonials() {
  const theme = useMantineTheme();
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Card radius="lg" mt={45} bg={theme.colors.primary[2]} p={30}>
      <Title order={2} ta="center" mb={30}>
        Testimonials
      </Title>

      <Carousel
        slideSize="70%"
        slideGap={{ base: 0, sm: 250 }}
        classNames={{ control: classes.control }}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {testimonials.map((t, i) => (
          <CarouselSlide display="flex" w={"100%"} h={310} py={40} key={i}>
            <Indicator
              position="top-center"
              color="primary.2"
              zIndex={3000}
              offset={10}
              //   radius="xl"
              label={
                <Image src={t.attestant.image.src} width={100} height={100} />
              }
            >
              <Paper
                // className={clsx(classes.shadow, "")}
                className={classes.shadow}
                radius="sm"
                //   w={"80%"}
                h={250}
                p={20}
                pt={70}
                pos="relative"
              >
                <Text fw={500} c="dimmed" ta="center">
                  {t.comment}
                </Text>
                <Text fz={24} mt={20} fw={700} ta="center">
                  {t.attestant.name}
                </Text>
                <Text
                  fz={12}
                  mb={10}
                  className="border-black"
                  ta="center"
                  c="dimmed"
                >
                  {t.attestant.position}
                </Text>
              </Paper>
            </Indicator>
          </CarouselSlide>
        ))}
      </Carousel>
    </Card>
  );
}
