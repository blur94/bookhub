import Image from "next/image";
import { Inter } from "next/font/google";
import withLayout from "@/layout/appLayout";
import { Container } from "@mantine/core";
import { DashBoardBanner } from "@/views/dashboard/banner";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <Container size="1200px" px={30}>
      <DashBoardBanner />
    </Container>
  );
}

export default withLayout(Home, "Dashboard", "Dashboard");
