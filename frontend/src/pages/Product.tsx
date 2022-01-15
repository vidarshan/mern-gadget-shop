import { Button, Col, Container, Grid, Image } from "@mantine/core";
import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import banner from "../images/banner1.jpeg";

const Product = () => {
  return (
    <Container sx={{ marginTop: "6rem", maxWidth: "85vw" }}>
      <Grid>
        <Col span={6}>
          <Grid>
            <Col
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              span={1}
            >
              <Button color="dark" variant="white">
                <FiArrowLeft size="30" />
              </Button>
            </Col>
            <Col span={10}>
              <Image radius="lg" fit="contain" src={banner}></Image>
            </Col>
            <Col
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              span={1}
            >
              <Button color="dark" variant="white">
                <FiArrowRight size="30" />
              </Button>
            </Col>
          </Grid>
        </Col>
        <Col span={6}>
          <Grid>
            <Col span={12}>Apple Airpods 2</Col>
            <Col span={12}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
              veniam quam. Quas accusamus, rerum deleniti recusandae quaerat
              laudantium.
            </Col>
            <Col span={12}>
              <AiOutlineStar size="30" />
              <AiOutlineStar size="30" />
              <AiOutlineStar size="30" />
              <AiOutlineStar size="30" />
              <AiOutlineStar size="30" />
            </Col>
          </Grid>
        </Col>
      </Grid>
    </Container>
  );
};

export default Product;
