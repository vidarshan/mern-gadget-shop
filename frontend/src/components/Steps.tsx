import { Stepper } from "@mantine/core";
import React, { PropsWithChildren } from "react";

interface IStepProps {
  active: number;
}
const Steps: React.FC<PropsWithChildren<IStepProps>> = ({ active }) => {
  return (
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
  );
};

export default Steps;
