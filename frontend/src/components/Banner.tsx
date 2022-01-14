import { Grid, Image, Text, Col } from "@mantine/core";
import banner1 from "../images/banner1.jpeg";

const Banner = () => {
  return (
    <Grid sx={{ backgroundColor: "red" }}>
      <Col sx={{ display: "flex", alignItems: "center" }} span={6}>
        <Text sx={{ fontSize: "40px" }} weight={700}>
          All your gadgets <br /> are here.
        </Text>
      </Col>
      <Col span={6}>
        <Image radius="md" fit="contain" src={banner1} />
      </Col>
    </Grid>
    // <div style={{ margin: "5rem 5rem" }}>

    //   {/* <Image radius="md" fit="contain" src={banner1} /> */}
    // </div>
  );
};

export default Banner;
