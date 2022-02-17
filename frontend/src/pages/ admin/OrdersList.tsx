import { Badge, Card, Group, List, Switch, Table, Text } from "@mantine/core";
import Head from "../../components/Head";
import Layout from "../../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import { useEffect } from "react";
import Loading from "../../components/Loading";
import moment from "moment";
import { useNotifications } from "@mantine/notifications";
import { ActionType } from "../../state/action-types";

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

  const { success, error: orderDeliverError } = useSelector(
    (state: State) => state.orderDeliver
  );

  const handlerDeliverOrder = (orderId: string) => {
    deliverOrder(orderId);
  };

  useEffect(() => {
    getOrders();
    // eslint-disable-next-line
  }, [dispatch, success]);

  useEffect(() => {
    if (orderDeliverError || error) {
      notifications.showNotification({
        title: "Oh no!",
        message: error && error.message,
        color: "red",
      });
    }
    // eslint-disable-next-line
  }, [error, orderDeliverError]);

  useEffect(() => {
    if (success) {
      notifications.showNotification({
        title: "Success!",
        message: "Marked as Delivered",
        color: "green",
      });
    }

    dispatch({
      type: ActionType.ORDER_DELIVER_RESET,
    });
    // eslint-disable-next-line
  }, [success]);

  const rows =
    orders &&
    Object.keys(orders).length &&
    orders.map((order: any) => (
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
          <Text size="sm" weight={600}>
            {order.user.name}
          </Text>
        </td>
        <td>
          {order.isPaid ? (
            <Badge radius="lg" variant="filled" color="green">
              {`Paid | ${moment(order.paidAt).format("DD-MMM-YYYY HH:mm")}`}
            </Badge>
          ) : (
            <Badge radius="lg" variant="filled" color="red">
              Not Paid
            </Badge>
          )}
        </td>
        <td>
          {order.isDelivered ? (
            <Badge radius="lg" variant="filled" color="green">
              {`Delivered | ${moment(order.deliveredAt).format(
                "DD-MMM-YYYY hh:mm"
              )}`}
            </Badge>
          ) : (
            <Badge radius="lg" variant="filled" color="red">
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

      <Card shadow="xl" radius="lg">
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
