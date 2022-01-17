import {
  Card,
  Col,
  Grid,
  Text,
  RadioGroup,
  Radio,
  Button,
} from "@mantine/core";
import { useNavigate } from "react-router";
import Steps from "../components/Steps";
import Layout from "../layout/Layout";

const Payment = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Card withBorder shadow="xl" radius="md" padding="xl">
        <Steps active={2} />
        <Grid sx={{ marginTop: "2rem" }}>
          <Col span={12}>
            <Text sx={{ margin: "10px 0" }}>Select Payment Method</Text>
            <Card withBorder shadow="xs" radius="md">
              <Col span={12}>
                <RadioGroup value="credit" color="dark" required>
                  <Radio checked size="sm" value="credit">
                    Credit Card or PayPal
                  </Radio>
                </RadioGroup>
              </Col>
            </Card>
          </Col>
          <Col span={12}>
            <Button
              onClick={() => navigate("/placeorder")}
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

export default Payment;
