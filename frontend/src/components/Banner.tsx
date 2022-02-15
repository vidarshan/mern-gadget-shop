import { Grid, Image, Col, Button } from "@mantine/core";
import { BiShoppingBag } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router";
import frame1 from "../images/Frame1.png";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <Grid>
      <Col span={12}>
        <Image radius="lg" fit="contain" src={frame1} />
      </Col>
      <Col className="flex-container" span={12}>
        <Button
          onClick={() => navigate("/shop")}
          color="dark"
          radius="lg"
          leftIcon={<BiShoppingBag />}
          rightIcon={<BsArrowRight />}
          size="md"
        >
          View Shop
        </Button>
      </Col>
    </Grid>
  );
};

export default Banner;
