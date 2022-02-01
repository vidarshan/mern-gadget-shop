import { Card, Grid, TextInput, Col, Button } from "@mantine/core";
import { useNavigate } from "react-router";
import Layout from "../layout/Layout";
import Steps from "../components/Steps";

const Shipping = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Card padding="xl" withBorder radius="md" shadow="xl">
        <Steps active={1} />
        <Grid sx={{ marginTop: "2rem" }}>
          <Col span={12}>
            <TextInput radius="md" placeholder="Your Address" label="Address" />
          </Col>
          <Col span={12}>
            <TextInput radius="md" placeholder="Your City" label="City" />
          </Col>
          <Col span={12}>
            <TextInput
              radius="md"
              placeholder="Your Postal Code"
              label="Postal Code"
            />
          </Col>
          <Col span={12}>
            <TextInput radius="md" placeholder="Your Country" label="Country" />
          </Col>
          <Col span={12}>
            <Button
              onClick={() => navigate("/payment")}
              radius="md"
              color="dark"
              fullWidth
            >
              Continue
            </Button>
          </Col>
        </Grid>
      </Card>
    </Layout>
  );
};

export default Shipping;
