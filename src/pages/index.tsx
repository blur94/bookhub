import Image from "next/image";
import { Inter } from "next/font/google";
import withLayout from "@/layout/appLayout";
import { Container } from "@mantine/core";
import { DashBoardBanner } from "@/views/dashboard/banner";
import Partners from "@/views/dashboard/partners";
import TheWhy from "@/views/dashboard/theWhy";
import PopularCourses from "@/views/dashboard/popular";
import Testimonials from "@/views/dashboard/testimonials";
import Instructors from "@/views/dashboard/instructors";
import Newsletter from "@/views/dashboard/newsletter";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <Container size="1200px" px={30}>
      <DashBoardBanner />
      <Partners />
      <TheWhy />
      <PopularCourses />
      <Testimonials />
      <Instructors />
      <Newsletter />
    </Container>
  );
}

export default withLayout(Home, "Dashboard", "Dashboard");
