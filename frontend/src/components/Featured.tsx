import { Grid, Col, Text } from "@mantine/core";
import ItemCard from "./items/ItemCard";

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
        {/* <Col xs={12} sm={6} md={4} lg={3} xl={2} span={2}>
          <ItemCard />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={2} span={2}>
          <ItemCard />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={2} span={2}>
          <ItemCard />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={2} span={2}>
          <ItemCard />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={2} span={2}>
          <ItemCard />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={2} span={2}>
          <ItemCard />
        </Col> */}
      </Grid>
    </div>
  );
};

export default Featured;
