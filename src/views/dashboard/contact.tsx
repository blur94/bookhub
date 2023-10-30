import { BackgroundImage, Box, Button, Flex, Image, Text } from "@mantine/core";

import ContactImg from "@/assets/images/contact.png";
import classes from "@/styles/contact.module.css";

export default function Contact() {
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.imageBg}>
        <Box className={classes.image}>
          <BackgroundImage
            src={ContactImg.src}
            bgp="top"
            bgsz="cover"
            bgr="no-repeat"
            w={"100%"}
            h={"100%"}
          />
        </Box>
      </Box>

      <Flex direction="column" justify="center" gap={30}>
        <Text fz={20} fw={700}>
          Got any questions for us?
        </Text>
        <Text fz={16}>
          You can reach out to us personally if you need any more information.
        </Text>
        <Button w="150px" className={classes.shadow}>
          Contact Us
        </Button>
      </Flex>
    </Box>
  );
}
