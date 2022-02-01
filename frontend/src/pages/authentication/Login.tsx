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
import { useForm } from "@mantine/hooks";
import { useNotifications } from "@mantine/notifications";
import { useEffect } from "react";
import { AiOutlineUsb } from "react-icons/ai";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../../actions/userActions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notifications = useNotifications();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validationRules: {
      email: (value) => /^\S+@\S+$/.test(value),
      password: (value) => value.trim().length >= 6,
    },
    errorMessages: {
      email: "Email is not valid",
      password: "Password is not valid",
    },
  });

  const { userInfo, loading, error } = useSelector(
    (state: RootStateOrAny) => state.userLogin
  );

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [userInfo]);

  const handlerLogin = (values: any) => {
    const { email, password } = values;
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (error) {
      notifications.showNotification({
        title: "Oh no!",
        message: error && error.message,
        color: "red",
      });
    }
    // eslint-disable-next-line
  }, [error]);

  return (
    <Container className="flex-container height-full-vh">
      <Card
        withBorder
        padding="xl"
        radius="md"
        shadow="xl"
        sx={{ width: "500px" }}
      >
        <form onSubmit={form.onSubmit((values) => handlerLogin(values))}>
          <Grid>
            <Col className="flex-container" span={12}>
              <AiOutlineUsb />
              <Text align="center" weight={700} size="xl">
                Techstop
              </Text>
            </Col>

            <Col span={12}>
              <TextInput
                radius="md"
                placeholder="Your Email"
                label="Email"
                {...form.getInputProps("email")}
                error={form.errors.email}
              />
            </Col>
            <Col span={12}>
              <PasswordInput
                radius="md"
                placeholder="Your Password"
                label="Password"
                {...form.getInputProps("password")}
                error={form.errors.password}
              />
            </Col>
            <Col sx={{ marginTop: "10px" }} span={12}>
              <Button
                loading={loading}
                type="submit"
                fullWidth
                color="dark"
                radius="md"
              >
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
        </form>
      </Card>
    </Container>
  );
};

export default Login;
