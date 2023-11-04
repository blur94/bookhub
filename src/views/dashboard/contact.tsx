import { BackgroundImage, Box, Button, Flex, Image, Text } from "@mantine/core";

import ContactImg from "@/assets/images/contact.png";
import classes from "@/styles/contact.module.css";

export default function Contact() {
  return (
    <Flex
      gap={{ base: 50, md: 100 }}
      direction={{ base: "column", md: "row" }}
      style={{ border: "1px solid lime" }}
      w="100vw"
    >
      {/* <Box className={classes.wrapper}> */}
      {/* <Box className={classes.imageBg}> */}
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
      {/* </Box> */}

      <Flex
        direction="column"
        justify="center"
        w="100%"
        style={{ border: "1px solid lime" }}
        gap={{ base: 10, md: 30 }}
      >
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
    </Flex>
  );
}
