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
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        withBorder
        padding="xl"
        radius="md"
        shadow="xl"
        sx={{ width: "500px" }}
      >
        <Grid>
          <Col
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            span={12}
          >
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
            <TextInput radius="md" placeholder="Your Name" label="Name" />
          </Col>
          <Col span={12}>
            <TextInput radius="md" placeholder="Your Email" label="Email" />
          </Col>
          <Col span={12}>
            <PasswordInput
              radius="md"
              placeholder="Your Password"
              label="Password"
            />
          </Col>
          <Col span={12}>
            <PasswordInput
              radius="md"
              placeholder="Confirm Password"
              label="Confirmation"
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
              Already have an account? Sign up
            </Button>
          </Col>
        </Grid>
      </Card>
    </Container>
  );
};

export default SignUp;
