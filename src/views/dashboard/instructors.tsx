import { instructors } from "@/constants/testimonials";
import { Carousel } from "@mantine/carousel";
import { Box, Image, Paper, Text, Title } from "@mantine/core"
import classes from "@/styles/bannerCard.module.css";

export default function Instructors() {
  return (
    <Box>
      <Title order={2}>Some of our Instructors</Title>

      <Carousel>
        {instructors.map((instructor, idx) => (
            <Carousel.Slide>
                <Paper className={classes.shadow}>
                    <Image src={instructor.image} />
                    <Text>{instructor.name}</Text>
                    <Text>{instructor.subject}</Text>
                </Paper>
            </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
}
