import { Button, Card, Col, Grid, Image, Text } from "@mantine/core";
import { useNavigate } from "react-router";
import Steps from "../components/Steps";
import Layout from "../layout/Layout";
import banner from "../images/banner1.jpeg";
import { BsCreditCard2Front, BsBox } from "react-icons/bs";
import { useSelector } from "react-redux";
import { State } from "../state";
import Head from "../components/Head";

const PlaceOrder = () => {
  const navigate = useNavigate();

  const { cartItems } = useSelector((state: State) => state.cart);

  return (
    <Layout>
      <Head title="Place Order" />
      <Card withBorder shadow="sm" radius="xl" padding="xl">
        <Steps active={3} />
        <Grid sx={{ marginTop: "2rem" }}>
          <Col span={12}>
            <Text>Shipping Address</Text>
            <Grid>
              <Col span={12}>
                <Card
                  withBorder
                  shadow="xs"
                  radius="xl"
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
                    No 2, Galle road, Moratuwa, Sri Lanka, 10400
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
                  radius="xl"
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
                    PayPal
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
                        radius="xl"
                      >
                        <Grid>
                          <Col
                            sx={{ display: "flex", alignItems: "center" }}
                            span={5}
                          >
                            <Image
                              radius="xl"
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
            <Card withBorder shadow="xs" radius="xl">
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
          <Col span={12}>
            <Button
              onClick={() => navigate("/order/2342348284")}
              color="dark"
              radius="xl"
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
