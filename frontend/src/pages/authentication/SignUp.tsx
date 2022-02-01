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
import { AiOutlineUsb } from "react-icons/ai";
import { useNavigate } from "react-router";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { register } from "../../actions/userActions";
import { useEffect } from "react";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notifications = useNotifications();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationRules: {
      name: (value) => value.trim().length > 1,
      email: (value) => /^\S+@\S+$/.test(value),
      password: (value) => value.trim().length >= 6,
      confirmPassword: (confirmPassword, values) =>
        confirmPassword === values?.password,
    },
    errorMessages: {
      name: "Name should be more than 2 characters or longer",
      email: "Email is not valid",
      password: "Password should be 6 characters or longer",
      confirmPassword: "Passwords does not match",
    },
  });

  const { userInfo, loading, error } = useSelector(
    (state: RootStateOrAny) => state.userRegister
  );

  const handlerRegister = (values: any) => {
    const { name, email, password } = values;
    dispatch(register(name, email, password));
  };

  useEffect(() => {
    if (error) {
      notifications.showNotification({
        title: "Oh no!",
        message: error && error.message,
        color: "red",
      });
    } // eslint-disable-next-line
  }, [error]);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    } // eslint-disable-next-line
  }, [userInfo]);

  return (
    <Container className="flex-container height-full-vh">
      <Card
        withBorder
        padding="xl"
        radius="md"
        shadow="xl"
        sx={{ width: "500px" }}
      >
        <form onSubmit={form.onSubmit((values) => handlerRegister(values))}>
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
                placeholder="Your Name"
                label="Name"
                {...form.getInputProps("name")}
                error={form.errors.name}
                required
              />
            </Col>
            <Col span={12}>
              <TextInput
                radius="md"
                placeholder="Your Email"
                label="Email"
                {...form.getInputProps("email")}
                error={form.errors.email}
                required
              />
            </Col>
            <Col span={12}>
              <PasswordInput
                radius="md"
                placeholder="Your Password"
                label="Password"
                {...form.getInputProps("password")}
                error={form.errors.password}
                required
              />
            </Col>
            <Col span={12}>
              <PasswordInput
                radius="md"
                placeholder="Confirm Password"
                label="Confirmation"
                {...form.getInputProps("confirmPassword")}
                error={form.errors.confirmPassword}
                required
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
        </form>
      </Card>
    </Container>
  );
};

export default SignUp;
