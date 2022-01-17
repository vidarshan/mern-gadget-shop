import {
  Container,
  Card,
  Grid,
  TextInput,
  Col,
  Text,
  PasswordInput,
  Button,
} from "@mantine/core";
import { AiOutlineUsb } from "react-icons/ai";
import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <Container className="flex-container height-full-vh">
      <Card
        withBorder
        padding="xl"
        radius="md"
        shadow="xl"
        sx={{ width: "500px" }}
      >
        <Grid>
          <Col className="flex-container" span={12}>
            <AiOutlineUsb />
            <Text align="center" weight={700} size="xl">
              Techstop
            </Text>
          </Col>
          <Col span={12}>
            <Text color="gray" weight={500} size="md">
              Create new Account
            </Text>
          </Col>
          <Col span={12}>
            <TextInput
              radius="md"
              placeholder="Your Name"
              label="Name"
              required
            />
          </Col>
          <Col span={12}>
            <TextInput
              radius="md"
              placeholder="Your Email"
              label="Email"
              required
            />
          </Col>
          <Col span={12}>
            <PasswordInput
              radius="md"
              placeholder="Your Password"
              label="Password"
              required
            />
          </Col>
          <Col span={12}>
            <PasswordInput
              radius="md"
              placeholder="Confirm Password"
              label="Confirmation"
              required
            />
          </Col>
          <Col sx={{ marginTop: "10px" }} span={12}>
            <Button fullWidth color="dark" radius="md">
              Sign Up
            </Button>
          </Col>
          <Col span={12}>
            <Button
              onClick={() => navigate("/login")}
              color="black"
              fullWidth
              variant="white"
            >
              Already have an account? Log in
            </Button>
          </Col>
        </Grid>
      </Card>
    </Container>
  );
};

export default SignUp;
