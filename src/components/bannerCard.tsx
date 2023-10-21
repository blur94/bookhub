import { ActionIcon, Flex, Image, Paper, Text } from "@mantine/core";
import classes from "@/styles/bannerCard.module.css";
import clsx from "clsx";

interface Props {
  title: string;
  text: string;
  image: Blob;
  top: number;
  left: number;
}

export default function BannerCard({ title, text, image, top, left }: Props) {
  return (
    <Paper
      className={clsx(classes.shadow, classes.wrapper)}
      //   bg="white"
      pos="absolute"
      top={top}
      left={left}
    >
      <Flex
        align={"center"}
        justify={"space-between"}
        h={56}
        w={190}
        px={17}
        py={12}
      >
        <ActionIcon radius={"md"} px={8} w={38} h={38}>
          <Image src={image} width={24} height={24} />
        </ActionIcon>

        <Flex direction={"column"} >
          <Text fw={700} fz={18}>
            {title}
          </Text>
          <Text fz={14}>{text}</Text>
        </Flex>
      </Flex>
    </Paper>
  );
}
