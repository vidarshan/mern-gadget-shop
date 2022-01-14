import { Card, Col, Grid, Text } from "@mantine/core";
import React from "react";
import { BiSearch, BiDollarCircle } from "react-icons/bi";
import { FiBox, FiHeart } from "react-icons/fi";

const Features = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div style={{ margin: "50px 0" }}>
      <Text align="center" weight={700} sx={{ fontSize: "30px" }}>
        {title}
      </Text>
      <Text size="xl" align="center">
        {subTitle}
      </Text>
      <Grid sx={{ marginTop: "20px" }}>
        <Col xs={12} sm={6} md={6} lg={6} xl={3} span={3}>
          <Card
            shadow="xl"
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            padding="xl"
            withBorder
            radius="lg"
          >
            <Text align="center">
              <BiSearch size="70px" />
            </Text>
            <Text size="xl" weight={600} align="center">
              Search what you need easily.
            </Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xl={3} span={3}>
          <Card
            shadow="xl"
            sx={{
              backgroundColor: "black",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            padding="xl"
            withBorder
            radius="lg"
          >
            <Text sx={{ color: "white" }} align="center">
              <FiBox size="70px" />
            </Text>
            <Text sx={{ color: "white" }} size="xl" weight={600} align="center">
              Your items will be shipped with great care.
            </Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xl={3} span={3}>
          <Card
            shadow="xl"
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            padding="xl"
            withBorder
            radius="lg"
          >
            <Text align="center">
              <BiDollarCircle size="70px" />
            </Text>
            <Text size="xl" weight={600} align="center">
              Find great deals and save more.
            </Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xl={3} span={3}>
          <Card
            shadow="xl"
            sx={{
              backgroundColor: "black",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            padding="xl"
            withBorder
            radius="lg"
          >
            <Text sx={{ color: "white" }} align="center">
              <FiHeart size="70px" />
            </Text>
            <Text sx={{ color: "white" }} size="xl" weight={600} align="center">
              Great return policy on defected products.
            </Text>
          </Card>
        </Col>
      </Grid>
    </div>
  );
};

export default Features;
