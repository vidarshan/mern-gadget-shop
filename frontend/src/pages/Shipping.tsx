import { Card, Grid, Stepper, TextInput, Col, Button } from "@mantine/core";
import React, { useState } from "react";
import Layout from "../layout/Layout";

const Shipping = () => {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Layout>
      <Card padding="xl" withBorder radius="md" shadow="xl">
        <Stepper color="dark" active={active} breakpoint="sm">
          <Stepper.Step
            label="Authenticate"
            description="Login with an account"
          ></Stepper.Step>
          <Stepper.Step
            label="Shipping"
            description="Confirm shipping address"
          ></Stepper.Step>
          <Stepper.Step label="Payment" description="Pay amount"></Stepper.Step>
          <Stepper.Step label="Order" description="Place order"></Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>
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
            <Button radius="md" color="dark" fullWidth>
              Continue
            </Button>
          </Col>
        </Grid>
      </Card>
    </Layout>
  );
};

export default Shipping;
