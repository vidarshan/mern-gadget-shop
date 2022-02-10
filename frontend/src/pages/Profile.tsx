import {
  Button,
  Card,
  Col,
  Grid,
  PasswordInput,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import Layout from "../layout/Layout";
import { RiCloseLine, RiCheckLine } from "react-icons/ri";
import { RootStateOrAny, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useForm } from "@mantine/hooks";

const Profile = () => {
  const navigate = useNavigate();

  const { userInfo, loading, error } = useSelector(
    (state: RootStateOrAny) => state.userLogin
  );

  const form = useForm({
    initialValues: {
      email: userInfo && userInfo.email,
      username: userInfo && userInfo.name,
      password: "",
      confirmpassword: "",
    },
    validationRules: {
      email: (value) => /^\S+@\S+$/.test(value),
      username: (value) => value.trim().length > 1,
      password: (value) => value.trim().length >= 6,
      confirmpassword: (confirmPassword, values) =>
        confirmPassword === values?.password,
    },
    errorMessages: {
      username: "Name should be more than 2 characters or longer",
      email: "Email is not valid",
      password: "Password should be 6 characters or longer",
      confirmpassword: "Passwords does not match",
    },
  });

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [userInfo]);

  const elements = [
    {
      id: "345345dsf34545",
      date: "20-Jan-2022",
      total: "$291.99",
      paid: true,
      delivered: false,
    },
    {
      id: "345345dsf3432ff",
      date: "02-Jan-2022",
      total: "$291.99",
      paid: true,
      delivered: false,
    },
    {
      id: "345345d66534545",
      date: "23-Jan-2022",
      total: "$291.99",
      paid: true,
      delivered: false,
    },
  ];
  const rows = elements.map((element) => (
    <tr key={element.id}>
      <td>{element.id}</td>
      <td>{element.date}</td>
      <td>{element.total}</td>
      <td>
        {element.paid ? (
          <RiCheckLine size="20" color="green" />
        ) : (
          <RiCloseLine size="20" color="red" />
        )}
      </td>
      <td>
        {element.delivered ? (
          <RiCheckLine size="20" color="green" />
        ) : (
          <RiCloseLine size="20" color="red" />
        )}
      </td>
      <td>
        <Button radius="md" variant="light" color="dark" fullWidth>
          Details
        </Button>
      </td>
    </tr>
  ));

  const handlerEditProfile = (values: any) => {};

  return (
    <Layout>
      {userInfo && (
        <>
          <Card withBorder shadow="sm" radius="md" padding="xl">
            <Text>User Profile</Text>
            <form
              onSubmit={form.onSubmit((values) => handlerEditProfile(values))}
            >
              <Grid sx={{ marginTop: "10px" }}>
                <Col span={6}>
                  <TextInput
                    radius="md"
                    label="Your username"
                    placeholder="Username"
                    {...form.getInputProps("username")}
                    error={form.errors.username}
                    required
                  />
                </Col>
                <Col span={6}>
                  {" "}
                  <TextInput
                    radius="md"
                    label="Your email"
                    placeholder="email"
                    {...form.getInputProps("email")}
                    error={form.errors.email}
                    required
                  />
                </Col>

                <Col span={6}>
                  {" "}
                  <PasswordInput
                    radius="md"
                    label="Your password"
                    placeholder="Password"
                    {...form.getInputProps("password")}
                    error={form.errors.password}
                    required
                  />
                </Col>
                <Col span={6}>
                  {" "}
                  <PasswordInput
                    radius="md"
                    label="Confirm password"
                    placeholder="Confirmation"
                    {...form.getInputProps("confirmpassword")}
                    error={form.errors.confirmpassword}
                    required
                  />
                </Col>
                <Col span={12}>
                  <Button type="submit" radius="md" color="dark" fullWidth>
                    Update Profile
                  </Button>
                </Col>
              </Grid>
            </form>
          </Card>
          <Card
            sx={{ marginTop: "2rem" }}
            withBorder
            shadow="sm"
            radius="md"
            padding="xl"
          >
            <Text>Orders</Text>
            <Grid sx={{ marginTop: "10px" }}>
              <Col span={12}>
                <Table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Date</th>
                      <th>Total</th>
                      <th>Paid</th>
                      <th>Delivered</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{rows}</tbody>
                </Table>
              </Col>
            </Grid>
          </Card>
        </>
      )}
    </Layout>
  );
};

export default Profile;
