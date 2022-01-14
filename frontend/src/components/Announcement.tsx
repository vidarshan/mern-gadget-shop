import React from "react";
import { Col, Grid, Image, Text } from "@mantine/core";
import mobile from "../images/mobile.png";

const Announcement = () => {
  return (
    <div style={{ marginTop: "3rem" }}>
      <Text align="center" weight={700} sx={{ fontSize: "1.7rem" }}>
        Mobile App
      </Text>
      <Grid>
        <Col span={6}>
          <Image height={500} width={500} src={mobile} />
        </Col>
        <Col span={6}>
          <Text>Download our Mobile App</Text>
          <Text>Available on iOS and Android.</Text>
        </Col>
      </Grid>
    </div>
  );
};

export default Announcement;
