import { Container, Text } from "@mantine/core";
import React from "react";
import Banner from "../components/Banner";
import Featured from "../components/Featured";
import Header from "../components/Header";

const Home = () => {
  return (
    <Container size="xl">
      <Header />
      <Banner />
      <Featured />
    </Container>
  );
};

export default Home;
