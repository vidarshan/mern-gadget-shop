import {
  Card,
  Text,
  Grid,
  Col,
  Alert,
  Image,
  Loader,
  Group,
} from "@mantine/core";
import Layout from "../layout/Layout";
import { BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";
import {
  BsBox,
  BsCreditCard2Front,
  BsCheckCircleFill,
  BsXCircleFill,
} from "react-icons/bs";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators, State } from "../state";
import { bindActionCreators } from "redux";
import { useEffect, useState } from "react";

import Head from "../components/Head";
import { ActionType } from "../state/action-types";

const Order = () => {
  const params = useParams();

  const dispatch = useDispatch();

  const [sdkReady, setSdkReady] = useState(false);

  const { getOrder, payOrder } = bindActionCreators(actionCreators, dispatch);

  const { order } = useSelector((state: State) => state.order);

  const { success } = useSelector((state: State) => state.orderPay);

  const successPaymentHanlder = (paymentResult: any) => {
    payOrder(params.order, paymentResult);
  };

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/api/v1/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!order || success) {
      dispatch({ type: ActionType.ORDER_PAY_RESET });
    } else if (!order.isPaid) {
      if (!(window as any).paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    getOrder(params.order);
    if (success) {
      dispatch({ type: ActionType.CART_CLEAR_ITEMS });
    }
    // eslint-disable-next-line
  }, [dispatch, success]);

  return (
    <Layout>
      <Head title={`Order ${params.order}`} />
      {order && Object.keys(order).length ? (
        <Card withBorder shadow="sm" radius="lg" padding="xl">
          <Grid>
            <Col span={12}>
              <Text size="xl" weight={600}>
                {`Order ${params.order}`}
              </Text>
            </Col>
            <Col span={12}>
              <Text>Shipping Address</Text>
              {Object.keys(order).includes("user") ? (
                <Grid sx={{ marginTop: "10px" }}>
                  <Col span={12}>
                    <Card padding="xs" withBorder shadow="sm" radius="lg">
                      <Col
                        sx={{ display: "flex", alignItems: "center" }}
                        span={12}
                      >
                        <BiUser />
                        <Text
                          sx={{ marginLeft: "10px" }}
                          color="gray"
                          weight={500}
                          size="sm"
                        >
                          {order.user.name}
                        </Text>
                      </Col>
                      <Col
                        sx={{ display: "flex", alignItems: "center" }}
                        span={12}
                      >
                        <HiOutlineMail />
                        <Text
                          sx={{ marginLeft: "10px" }}
                          color="gray"
                          weight={500}
                          size="sm"
                        >
                          {order.user.email}
                        </Text>
                      </Col>
                      <Col
                        sx={{ display: "flex", alignItems: "center" }}
                        span={12}
                      >
                        <BsBox />
                        <Text
                          sx={{ marginLeft: "10px" }}
                          color="gray"
                          weight={500}
                          size="sm"
                        >
                          {order.shippingAddress.address},{" "}
                          {order.shippingAddress.city}{" "}
                          {order.shippingAddress.postalCode},{" "}
                          {order.shippingAddress.country}
                        </Text>
                      </Col>
                      <Col span={12}>
                        {order.isDelivered ? (
                          <Alert
                            icon={<BsCheckCircleFill />}
                            radius="lg"
                            title="Delivered"
                            color="green"
                          >
                            Your order has been delivered.
                          </Alert>
                        ) : (
                          <Alert
                            icon={<BsXCircleFill />}
                            radius="lg"
                            title="Not Delivered"
                            color="red"
                          >
                            Your order has not been delivered yet.
                          </Alert>
                        )}
                      </Col>
                    </Card>
                  </Col>
                </Grid>
              ) : (
                <Loader />
              )}
            </Col>
            <Col span={12}>
              <Text>Payment</Text>
              <Grid sx={{ marginTop: "10px" }}>
                <Col span={12}>
                  <Card padding="xs" withBorder shadow="sm" radius="lg">
                    <Col
                      sx={{ display: "flex", alignItems: "center" }}
                      span={12}
                    >
                      <BsCreditCard2Front />
                      <Text
                        sx={{ marginLeft: "10px" }}
                        color="gray"
                        weight={500}
                        size="sm"
                      >
                        {order.paymentMethod}
                      </Text>
                    </Col>
                    <Col span={12}>
                      {order.isPaid ? (
                        <Alert
                          icon={<BsCheckCircleFill />}
                          radius="lg"
                          title="Paid"
                          color="green"
                        >
                          Paid on 23-02-2022.
                        </Alert>
                      ) : (
                        <Alert
                          icon={<BsXCircleFill />}
                          radius="lg"
                          title="Not Delivered"
                          color="red"
                        >
                          Not paid yet.
                        </Alert>
                      )}
                    </Col>
                  </Card>
                </Col>
              </Grid>
            </Col>
            <Col span={12}>
              <Text>Order Items</Text>
              <Grid sx={{ marginTop: "10px" }}>
                <Col span={12}>
                  {order.orderItems && order.orderItems.length ? (
                    order.orderItems.map((item: any) => {
                      return (
                        <Card
                          sx={{ margin: "10px 0" }}
                          padding="sm"
                          withBorder
                          shadow="sm"
                          radius="lg"
                        >
                          <Grid>
                            <Col
                              sx={{ display: "flex", alignItems: "center" }}
                              span={5}
                            >
                              <Image
                                radius="lg"
                                fit="contain"
                                height={40}
                                width={40}
                                src={item.image}
                              />
                            </Col>
                            <Col
                              sx={{ display: "flex", alignItems: "center" }}
                              span={3}
                            >
                              <Text align="left" color="gray" weight={600}>
                                {item.name}
                              </Text>
                            </Col>
                            <Col
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                              }}
                              span={4}
                            >
                              <Text align="right" weight={600}>
                                {item.qty} x ${item.price}
                              </Text>
                            </Col>
                          </Grid>
                        </Card>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </Col>
              </Grid>
            </Col>
            <Col span={12}>
              <Text sx={{ margin: "10px 0" }}>Order Summary</Text>
              <Card withBorder shadow="sm" radius="lg">
                <Grid
                  sx={{ margin: "10px 0", borderBottom: "1px solid #E0E0E0" }}
                >
                  <Col span={6}>
                    <Text>Price</Text>
                  </Col>
                  <Col span={6}>
                    <Text align="right">$1399.99</Text>
                  </Col>
                </Grid>
                <Grid
                  sx={{ margin: "10px 0", borderBottom: "1px solid #E0E0E0" }}
                >
                  <Col span={6}>
                    <Text>Tax (2%)</Text>
                  </Col>
                  <Col span={6}>
                    <Text align="right">$13.00</Text>
                  </Col>
                </Grid>
                <Grid
                  sx={{ margin: "10px 0", borderBottom: "1px solid #E0E0E0" }}
                >
                  <Col span={6}>
                    <Text>Discount (5%)</Text>
                  </Col>
                  <Col span={6}>
                    <Text align="right">$299.00</Text>
                  </Col>
                </Grid>
                <Grid sx={{ margin: "10px 0" }}>
                  <Col span={6}>
                    <Text>Total</Text>
                  </Col>
                  <Col span={6}>
                    <Text align="right">$1099.99</Text>
                  </Col>
                </Grid>
              </Card>
            </Col>
          </Grid>

          <Group sx={{ marginTop: "1rem" }} position="right">
            {!order.isPaid && (
              <Col span={6}>
                {!sdkReady ? (
                  <Loader />
                ) : (
                  <PayPalButton
                    amount={order.totalPrice}
                    onSuccess={successPaymentHanlder}
                  />
                )}
              </Col>
            )}
          </Group>
        </Card>
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

export default Order;
