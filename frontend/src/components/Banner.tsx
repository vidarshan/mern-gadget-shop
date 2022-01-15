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
        span={5}
      >
        <Text sx={{ fontSize: "50px" }} weight={700}>
          Get great deals on your <br /> desired tech products.
        </Text>
        <Text sx={{ marginTop: "10px" }} color="gray" weight={400} size="sm">
          15% off with buy-one-get-one deals for many products, along with
          extended warranty.
        </Text>
        <Grid>
          <Col span={4} sx={{ marginTop: "20px" }}>
            <Button color="dark" radius="md" fullWidth>
              View Shop
            </Button>
          </Col>
        </Grid>
      </Col>
      <Col span={7}>
        <Image radius="md" fit="contain" src={banner1} />
      </Col>
    </Grid>
  );
};

export default Banner;
