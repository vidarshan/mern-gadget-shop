import { Button, Card, Col, Grid, Image, Text } from "@mantine/core";
import { useNavigate } from "react-router";
import Steps from "../components/Steps";
import Layout from "../layout/Layout";
import { BsCreditCard2Front, BsBox } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators, State } from "../state";
import Head from "../components/Head";
import { bindActionCreators } from "redux";
import { useEffect } from "react";

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { createOrder } = bindActionCreators(actionCreators, dispatch);

  const { cartItems, shippingAddress, paymentMethod } = useSelector(
    (state: State) => state.cart
  );

  const { orderCreate, loading: createOrderLoading } = useSelector(
    (state: State) => state.orderCreate
  );

  const addDecimals = (num: number) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cartItems.itemsPrice = addDecimals(
    cartItems.reduce((acc: any, item: any) => acc + item.price * item.qty, 0)
  );
  cartItems.shippingPrice = addDecimals(cartItems.itemsPrice > 100 ? 0 : 100);
  cartItems.taxPrice = addDecimals(
    Number((0.15 * cartItems.itemsPrice).toFixed(2))
  );
  cartItems.totalPrice = (
    Number(cartItems.itemsPrice) +
    Number(cartItems.shippingPrice) +
    Number(cartItems.taxPrice)
  ).toFixed(2);

  const handlerOrderCreate = () => {
    dispatch(
      createOrder(
        cartItems,
        shippingAddress,
        paymentMethod,
        cartItems.itemsPrice,
        cartItems.taxPrice,
        cartItems.shippingPrice,
        cartItems.totalPrice
      )
    );
  };

  useEffect(() => {
    if (Object.keys(orderCreate).length) {
      navigate(`/order/${orderCreate._id}`);
    }
    // eslint-disable-next-line
  }, [createOrder]);

  return (
    <Layout>
      <Head title="Place Order" />
      <Card withBorder shadow="sm" radius="lg" padding="xl">
        <Steps active={3} />
        <Grid sx={{ marginTop: "2rem" }}>
          <Col span={12}>
            <Text>Shipping Address</Text>
            <Grid>
              <Col span={12}>
                <Card
                  withBorder
                  shadow="xs"
                  radius="lg"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    margin: "10px 0",
                  }}
                >
                  <BsBox size="30" />
                  <Text
                    color="gray"
                    sx={{ marginLeft: "10px" }}
                    weight={500}
                    size="sm"
                  >
                    {shippingAddress.address}, {shippingAddress.city}{" "}
                    {shippingAddress.postalCode}, {shippingAddress.country}
                  </Text>
                </Card>
              </Col>
            </Grid>
          </Col>
          <Col span={12}>
            <Text>Payment Method</Text>
            <Grid>
              <Col span={12}>
                <Card
                  withBorder
                  shadow="xs"
                  radius="lg"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    margin: "10px 0",
                  }}
                >
                  <BsCreditCard2Front size="30" />
                  <Text
                    sx={{ marginLeft: "10px" }}
                    color="gray"
                    weight={500}
                    size="sm"
                  >
                    {paymentMethod}
                  </Text>
                </Card>
              </Col>
            </Grid>
          </Col>
          <Col sx={{ margin: "10px 0" }} span={12}>
            <Text>Order Items</Text>
            <Grid>
              <Col span={12}>
                {cartItems && cartItems.length ? (
                  cartItems.map((item: any) => {
                    return (
                      <Card
                        sx={{ margin: "10px 0" }}
                        padding="sm"
                        withBorder
                        shadow="xs"
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
            <Card withBorder shadow="xs" radius="lg">
              <Grid
                sx={{ margin: "10px 0", borderBottom: "1px solid #E0E0E0" }}
              >
                <Col span={6}>
                  <Text>Price</Text>
                </Col>
                <Col span={6}>
                  <Text align="right">
                    ${" "}
                    {cartItems
                      .reduce(
                        (acc: any, item: any) => acc + item.qty * item.price,
                        0
                      )
                      .toFixed(2)}
                  </Text>
                </Col>
              </Grid>
              <Grid
                sx={{ margin: "10px 0", borderBottom: "1px solid #E0E0E0" }}
              >
                <Col span={6}>
                  <Text>Tax (2%)</Text>
                </Col>
                <Col span={6}>
                  <Text align="right">${cartItems.taxPrice}</Text>
                </Col>
              </Grid>

              <Grid sx={{ margin: "10px 0" }}>
                <Col span={6}>
                  <Text>Total</Text>
                </Col>
                <Col span={6}>
                  <Text align="right">${cartItems.totalPrice}</Text>
                </Col>
              </Grid>
            </Card>
          </Col>
          <Col span={12}>
            <Button
              onClick={() => handlerOrderCreate()}
              loading={createOrderLoading}
              color="dark"
              radius="lg"
              fullWidth
            >
              Place Order
            </Button>
          </Col>
        </Grid>
      </Card>
    </Layout>
  );
};

export default PlaceOrder;
