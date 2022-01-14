import { Container, Text } from "@mantine/core";
import React from "react";
import Announcement from "../components/Announcement";
import Banner from "../components/Banner";
import Featured from "../components/Featured";
import Features from "../components/Features";
import Header from "../components/Header";

const Home = () => {
  return (
    <Container style={{ maxWidth: "85vw" }}>
      <Banner />
      <Featured />
      <Announcement />
      <Features />
    </Container>
  );
};

export default Home;
