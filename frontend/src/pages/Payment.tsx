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
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { useDispatch } from "react-redux";

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { savePaymentMethod } = bindActionCreators(actionCreators, dispatch);

  const handlerAddPaymentMethod = (method: string) => {
    navigate("/placeorder");
    dispatch(savePaymentMethod(method));
  };

  return (
    <Layout>
      <Card withBorder shadow="xl" radius="lg" padding="xl">
        <Steps active={2} />
        <Grid sx={{ marginTop: "2rem" }}>
          <Col span={12}>
            <Text sx={{ margin: "10px 0" }}>Select Payment Method</Text>
            <Card withBorder shadow="xs" radius="lg">
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
              onClick={() => handlerAddPaymentMethod("PayPal")}
              radius="lg"
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
