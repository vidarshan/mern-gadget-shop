import {
  Button,
  Card,
  Col,
  Grid,
  Group,
  PasswordInput,
  Table,
  Text,
  TextInput,
  Badge,
  List,
} from "@mantine/core";
import Layout from "../layout/Layout";
import { RiCloseLine, RiCheckLine } from "react-icons/ri";
import { useNavigate } from "react-router";
import { useForm } from "@mantine/hooks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNotifications } from "@mantine/notifications";
import { useParams } from "react-router";
import Head from "../components/Head";
import moment from "moment";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import { ActionType } from "../state/action-types";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notifications = useNotifications();

  const { getProducts, getMyOrders, updateProfile } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const { userInfo, loading, error } = useSelector(
    (state: State) => state.userLogin
  );

  const {
    profileUpdate,
    loading: profileUpdateLoading,
    error: profileUpdateError,
  } = useSelector((state: State) => state.profileUpdate);

  const {
    myOrders,
    loading: myOrdersLoading,
    error: myOrdersError,
  } = useSelector((state: State) => state.myOrders);

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
    getMyOrders();
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
  const rows =
    myOrders &&
    Object.keys(myOrders).length &&
    myOrders.map((order: any) => (
      <tr key={order._id}>
        <td>
          <Text size="sm" weight={600}>
            {order._id}
          </Text>
        </td>
        <td>
          <List size="sm">
            {order.orderItems.map((item: any) => {
              return (
                <List.Item>
                  {item.name} x {item.qty}
                </List.Item>
              );
            })}
          </List>
        </td>
        <td>
          <Text size="sm" weight={600}>
            {" "}
            {order.shippingAddress.address}, {order.shippingAddress.city},{" "}
            {order.shippingAddress.country}, {order.shippingAddress.postalCode}
          </Text>
        </td>
        <td>
          <Text size="sm" weight={600}>
            ${order.totalPrice}
          </Text>
        </td>
        <td>
          {order.isPaid ? (
            <Badge radius="md" variant="filled" color="green">
              {`Paid | ${moment(order.paidAt).format("DD-MMM-YYYY HH:mm")}`}
            </Badge>
          ) : (
            <Badge radius="md" variant="filled" color="red">
              Not Paid
            </Badge>
          )}
        </td>
        <td>
          {order.isDelivered ? (
            <Badge radius="md" variant="filled" color="green">
              {`Delivered | ${moment(order.deliveredAt).format(
                "DD-MMM-YYYY hh:mm"
              )}`}
            </Badge>
          ) : (
            <Badge radius="md" variant="filled" color="red">
              Not Delivered
            </Badge>
          )}
        </td>
      </tr>
    ));

  const handlerEditProfile = (values: any) => {
    const { username, email, password } = values;
    updateProfile(username, email, password);
    form.reset();
  };

  useEffect(() => {
    if (error || myOrdersError) {
      notifications.showNotification({
        title: "Error!",
        message: error,
        color: "red",
      });
    }
  }, [dispatch]);

  useEffect(() => {
    console.log(Object.keys(profileUpdate).length);
    if (Object.keys(profileUpdate).length !== 0) {
      notifications.showNotification({
        title: "Success!",
        message: "Profile Updated",
        color: "green",
      });
    }

    dispatch({
      type: ActionType.UPDATE_PROFILE_RESET,
    });
  }, [dispatch, profileUpdate]);

  return (
    <Layout>
      <Head title="Profile | Techstop" description="Shop for gadgets" />
      {userInfo && (
        <>
          <Card withBorder shadow="xs" radius="lg" padding="xl">
            <Grid>
              <Col span={1}>
                <Text weight={700}>Admin</Text>
              </Col>
              <Col span={3}>
                <Button
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                  radius="lg"
                  onClick={() => navigate("/admin/orders")}
                  fullWidth
                >
                  Manage Orders
                </Button>
              </Col>
              <Col span={4}>
                <Button
                  variant="gradient"
                  gradient={{ from: "teal", to: "lime", deg: 105 }}
                  radius="lg"
                  onClick={() => navigate("/admin/products")}
                  fullWidth
                >
                  Manage Products
                </Button>
              </Col>
              <Col span={4}>
                <Button
                  variant="gradient"
                  gradient={{ from: "orange", to: "red" }}
                  radius="lg"
                  onClick={() => navigate("/admin/users")}
                  fullWidth
                >
                  Manage Users
                </Button>
              </Col>
            </Grid>
          </Card>
          <Card
            sx={{ marginTop: "2rem" }}
            withBorder
            shadow="xs"
            radius="lg"
            padding="xl"
          >
            <Text weight={700}>User Profile</Text>
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
                <Group sx={{ marginTop: "1rem" }} position="right">
                  <Button
                    loading={profileUpdateLoading}
                    type="submit"
                    radius="md"
                    color="dark"
                  >
                    Update Profile
                  </Button>
                  <Button type="submit" radius="md" color="red">
                    Log Out
                  </Button>
                </Group>
              </Grid>
            </form>
          </Card>

          <Card
            sx={{ marginTop: "2rem" }}
            withBorder
            shadow="xs"
            radius="lg"
            padding="xl"
          >
            <Text weight={700}>My Orders</Text>
            <Grid sx={{ marginTop: "10px" }}>
              <Col span={12}>
                {myOrders && (
                  <Table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Address</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Paid</th>
                        <th>Delivered</th>
                      </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                  </Table>
                )}
              </Col>
            </Grid>
          </Card>
        </>
      )}
    </Layout>
  );
};

export default Profile;
