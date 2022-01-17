import {
  Card,
  Col,
  Grid,
  Stepper,
  Text,
  RadioGroup,
  Radio,
  Button,
} from "@mantine/core";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Steps from "../components/Steps";
import Layout from "../layout/Layout";

const Payment = () => {
  const navigate = useNavigate();

  const steps = [
    {
      label: "Authenticate",
      description: "Login with an account",
    },
    {
      label: "Shipping",
      description: "Confirm shipping address",
    },
    {
      label: "Payment",
      description: "Pay amount",
    },
    {
      label: "Order",
      description: "Place order",
    },
  ];

  return (
    <Layout>
      <Card withBorder shadow="xl" radius="md" padding="xl">
        <Steps steps={steps} active={2} />
        <Grid sx={{ marginTop: "2rem" }}>
          <Col span={12}>
            <Text>Select Payment Method</Text>
          </Col>
          <Col span={12}>
            <RadioGroup value="credit" color="dark" required>
              <Radio checked size="sm" value="credit">
                Credit Card or PayPal
              </Radio>
            </RadioGroup>
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

export default Payment;
