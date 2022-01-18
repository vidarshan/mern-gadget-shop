import { Grid, Image, Col, Button } from "@mantine/core";
import { BiShoppingBag } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import frame1 from "../images/Frame1.png";

const Banner = () => {
  return (
    <Grid>
      <Col span={12}>
        <Image radius="md" fit="contain" src={frame1} />
      </Col>
      <Col className="flex-container" span={12}>
        <Button
          color="dark"
          radius="md"
          leftIcon={<BiShoppingBag />}
          rightIcon={<BsArrowRight />}
          size="lg"
        >
          View Shop
        </Button>
      </Col>
    </Grid>
  );
};

export default Banner;
