import { Grid, Col, Text } from "@mantine/core";
import React from "react";
import ItemCard from "./ItemCard";

const Featured = () => {
  return (
    <div style={{ marginTop: "3rem" }}>
      <Text align="center" weight={700} sx={{ fontSize: "1.7rem" }}>
        Featured
      </Text>
      <Text
        sx={{ marginBottom: "2rem" }}
        align="center"
        weight={500}
        color="gray"
      >
        This week's best gadgets
      </Text>
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
    </div>
  );
};

export default Featured;
