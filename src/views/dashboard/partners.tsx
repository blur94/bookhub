import { Box, Flex, Image, Text } from "@mantine/core";
import OxfordImg from "@/assets/images/oxford.png";
import GlasgowImg from "@/assets/images/glasgow.png";
import ManchesterImg from "@/assets/images/manchester.png";
import EdinburghImg from "@/assets/images/edinburgh.png";

export default function Partners() {
  const partners = [OxfordImg, GlasgowImg, ManchesterImg, EdinburghImg];
  return (
    <Box mt={45}>
      <Text w="100%" ta="center" mb={30}>
        Trusted and Partnered by the best
      </Text>
      <Flex align="center" justify="space-between">
        {partners.map((img, idx) => (
          <Image key={idx} src={img.src} width={100} height={100} style={{ flexGrow: 1}} />
        ))}
      </Flex>
    </Box>
  );
}
