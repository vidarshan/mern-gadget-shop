import {
  Container,
  Card,
  Grid,
  TextInput,
  Col,
  Text,
  PasswordInput,
  Button,
  Alert,
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { useNotifications } from "@mantine/notifications";
import { useEffect } from "react";
import { AiOutlineUsb } from "react-icons/ai";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../state";
import { useNavigate, useLocation } from "react-router";
import Head from "../../components/Head";
import { BsFillExclamationCircleFill } from "react-icons/bs";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const notifications = useNotifications();

  const redirectTo = location.search;
  const { login } = bindActionCreators(actionCreators, dispatch);

  const { userInfo, loading, error } = useSelector(
    (state: State) => state.userLogin
  );

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

  useEffect(() => {
    if (userInfo) {
      if (redirectTo === "?redirect=shipping") {
        navigate("/shipping");
      } else {
        navigate("/");
      }
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
      <Head title="Login | Techstop" description="Shop for gadgets" />
      <Card
        withBorder
        padding="xl"
        radius="lg"
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
              <Alert
                icon={<BsFillExclamationCircleFill size={16} />}
                sx={{ marginTop: "1rem" }}
                color="gray"
                radius="lg"
              >
                Use [email: john@gmail.com | password: 123456] to browse as an
                admin.
              </Alert>
            </Col>
            <Col span={12}>
              <TextInput
                radius="lg"
                placeholder="Your Email"
                label="Email"
                {...form.getInputProps("email")}
                error={form.errors.email}
              />
            </Col>
            <Col span={12}>
              <PasswordInput
                radius="lg"
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
                radius="lg"
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
