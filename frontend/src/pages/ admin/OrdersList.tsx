import { Badge, Button, Card, Group, Switch, Table, Text } from "@mantine/core";
import React from "react";
import Head from "../../components/Head";
import Layout from "../../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { BiDetail, BiTrash, BiTrashAlt } from "react-icons/bi";
import { useForm } from "@mantine/hooks";
import moment from "moment";
import { useNotifications } from "@mantine/notifications";

const OrdersList = () => {
  const dispatch = useDispatch();
  const notifications = useNotifications();

  const { getOrders, deliverOrder } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const { orders, error, loading } = useSelector(
    (state: State) => state.orders
  );

  const {
    success,
    error: orderDeliverError,
    loading: orderDeliverLoading,
  } = useSelector((state: State) => state.orderDeliver);

  const handlerDeliverOrder = (orderId: string) => {
    deliverOrder(orderId);
  };

  useEffect(() => {
    getOrders();
  }, [dispatch, success]);

  if (orderDeliverError || error) {
    notifications.showNotification({
      title: "Oh no!",
      message: error && error.message,
      color: "red",
    });
  }

  const rows =
    orders &&
    Object.keys(orders).length &&
    orders.map((order: any) => (
      <tr key={order._id}>
        <td>{order._id}</td>
        <td>
          {order.orderItems.map((item: any) => {
            return (
              <p>
                {item.name} x {item.qty}
              </p>
            );
          })}
        </td>
        <td>
          {order.shippingAddress.address}, {order.shippingAddress.city},{" "}
          {order.shippingAddress.country}, {order.shippingAddress.postalCode}
        </td>
        <td>${order.totalPrice}</td>
        <td>{order.user.name}</td>
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
        <td>
          {order.isDelivered ? (
            "-"
          ) : (
            <Switch
              checked={order.isDelivered}
              onChange={() => handlerDeliverOrder(order._id)}
              color="dark"
            />
          )}
        </td>
      </tr>
    ));

  return (
    <Layout>
      <Head title="Orders List | Admin" />

      <Card shadow="xl" radius="md">
        <Group sx={{ marginBottom: "1rem" }} direction="row" position="apart">
          <Text weight={700}>Orders</Text>
        </Group>
        {loading ? (
          <Loading />
        ) : (
          <Group position="center" direction="column">
            <Table horizontalSpacing="xl" verticalSpacing="xs" highlightOnHover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Order Items</th>
                  <th>Shipping Address</th>
                  <th>Total Price</th>
                  <th>User</th>
                  <th>Paid</th>
                  <th>Delivered</th>
                  <th>Mark as Delivered</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </Group>
        )}
      </Card>
    </Layout>
  );
};

export default OrdersList;
