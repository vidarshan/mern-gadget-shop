import { Container, Text } from "@mantine/core";
import React from "react";
import Announcement from "../components/Announcement";
import Banner from "../components/Banner";
import Featured from "../components/Featured";
import Features from "../components/Features";
import Header from "../components/Header";

const Home = () => {
  return (
    <Container sx={{ maxWidth: "85vw" }}>
      <Banner />
      <Features title="Why Us?" subTitle="Why you should shop here" />
      <Featured
        title="This week's best"
        subTitle="Most purchased items this week"
      />
      <Announcement title="Mobile App" subTitle="Download our mobile app" />
    </Container>
  );
};

export default Home;
