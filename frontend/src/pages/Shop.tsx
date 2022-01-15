import { Col, Container, Grid, TextInput } from "@mantine/core";
import React from "react";
import ItemCard from "../components/ItemCard";

const Shop = () => {
  return (
    <Container sx={{ marginTop: "5rem", maxWidth: "85vw" }}>
      <Grid>
        <Col sx={{ padding: "1rem" }} span={12}>
          <TextInput radius="md" placeholder="Search for an item..." />
        </Col>
      </Grid>
      <Grid>
        <Col span={3}>
          <ItemCard />
        </Col>
        <Col span={3}>
          <ItemCard />
        </Col>
        <Col span={3}>
          <ItemCard />
        </Col>
        <Col span={3}>
          <ItemCard />
        </Col>
      </Grid>
    </Container>
  );
};

export default Shop;
