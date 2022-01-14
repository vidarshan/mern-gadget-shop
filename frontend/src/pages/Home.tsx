import { Container, Text } from "@mantine/core";
import React from "react";
import Banner from "../components/Banner";
import Featured from "../components/Featured";
import Header from "../components/Header";

const Home = () => {
  return (
    <Container style={{ maxWidth: "85vw" }}>
      <Header />
      <Banner />
      <Featured />
    </Container>
  );
};

export default Home;
