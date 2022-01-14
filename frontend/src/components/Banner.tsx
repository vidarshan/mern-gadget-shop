import { Grid, Image, Text, Col, Button } from "@mantine/core";
import banner1 from "../images/banner1.jpeg";

const Banner = () => {
  return (
    <Grid sx={{ marginTop: "5rem" }}>
      <Col
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
        span={6}
      >
        <Text sx={{ fontSize: "40px" }} weight={700}>
          All your gadgets <br /> are here.
        </Text>
      </Col>
      <Col span={6}>
        <Image radius="md" fit="contain" src={banner1} />
      </Col>
    </Grid>
  );
};

export default Banner;
