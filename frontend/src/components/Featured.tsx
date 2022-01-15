import { Grid, Col, Text, Button } from "@mantine/core";
import React from "react";
import ItemCard from "./ItemCard";

const Featured = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div style={{ margin: "50px 0" }}>
      <Text align="center" weight={700} sx={{ fontSize: "1.7rem" }}>
        {title}
      </Text>
      <Text
        sx={{ marginBottom: "2rem" }}
        align="center"
        weight={500}
        color="gray"
      >
        {subTitle}
      </Text>
      <Grid>
        <Col xs={12} sm={6} md={6} lg={6} xl={3} span={3}>
          <ItemCard />
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xl={3} span={3}>
          <ItemCard />
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xl={3} span={3}>
          <ItemCard />
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xl={3} span={3}>
          <ItemCard />
        </Col>
      </Grid>
      <div style={{ marginTop: "30px" }}>
        <Button fullWidth variant="filled" color="dark">
          View Shop
        </Button>
      </div>
    </div>
  );
};

export default Featured;
