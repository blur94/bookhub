import { ActionIcon, Box, Card, Flex, Image, Paper, Text, useMantineTheme } from "@mantine/core";
import classes from "@/styles/bannerCard.module.css";
import { why } from "@/constants/why";

export default function TheWhy() {
  const theme = useMantineTheme();
  return (
    <Card radius='lg' mt={45} bg={theme.colors.primary[2]} p={30}>
      <Text w="100%" ta="center" mb={30} fw={700} fz={16}>
        Why Book hub?
      </Text>
      <Flex justify='space-between'>
        {why.map((w, i) => (
          <Paper className={classes.shadow} radius='sm' w={272} h={120} p={20} pos='relative'>
            <Text fw={700}>{w.title}</Text>
            <Text fz={12} mt={20}>
             {w.text}
            </Text>
            <ActionIcon radius='lg' size={'lg'} pos='absolute' top={-15} left={-10}>
                <Image src={w.icon.src} width={24} height={24} />
            </ActionIcon>
          </Paper>
        ))}
      </Flex>
    </Card>
  );
}
