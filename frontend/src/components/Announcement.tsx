import React from "react";
import { Col, Grid, Image, Text } from "@mantine/core";
import mobile from "../images/mobile.png";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";

const Announcement = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
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
        <Col span={4}>
          <Image height={500} width={500} src={mobile} />
        </Col>
        <Col
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          span={8}
        >
          <Text weight={700} sx={{ fontSize: "50px" }}>
            Techstop mobile app.
          </Text>
          <Text sx={{ marginTop: "10px" }} color="gray" size="xl">
            Shop on your mobile with our mobile application.
          </Text>
          <div style={{ marginTop: "20px" }}>
            <AiFillApple size="30" />
            <AiFillAndroid size="30" />
          </div>
          {/* <Grid>
            <Col span={1}>
            </Col>
            <Col span={1}>
            </Col>
          </Grid> */}
        </Col>
      </Grid>
    </div>
  );
};

export default Announcement;
