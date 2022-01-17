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

const Login = () => {
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
              Login to your Account
            </Text>
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
          <Col sx={{ marginTop: "10px" }} span={12}>
            <Button fullWidth color="dark" radius="md">
              Log In
            </Button>
          </Col>
          <Col span={12}>
            <Button
              onClick={() => navigate("/signup")}
              color="black"
              fullWidth
              variant="white"
            >
              Don't have an Account? Sign up
            </Button>
          </Col>
        </Grid>
      </Card>
    </Container>
  );
};

export default Login;
