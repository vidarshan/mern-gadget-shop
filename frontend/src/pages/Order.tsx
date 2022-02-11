import { Card, Text, Grid, Col, Alert, Image, Button } from "@mantine/core";
import Layout from "../layout/Layout";
import { BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsBox, BsCreditCard2Front } from "react-icons/bs";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import { State } from "../state";
import Head from "../components/Head";

const Order = () => {
  const params = useParams();

  const { cartItems } = useSelector((state: State) => state.cart);

  return (
    <Layout>
      <Head title={`Order ${params.order}`} />
      <Card withBorder shadow="sm" radius="xl" padding="xl">
        <Grid>
          <Col span={12}>
            <Text size="xl" weight={600}>
              Order 3942389489d84jfh3420482
            </Text>
          </Col>
          <Col span={12}>
            <Text>Shipping Address</Text>
            <Grid sx={{ marginTop: "10px" }}>
              <Col span={12}>
                <Card padding="xs" withBorder shadow="xs" radius="xl">
                  <Col sx={{ display: "flex", alignItems: "center" }} span={12}>
                    <BiUser />
                    <Text
                      sx={{ marginLeft: "10px" }}
                      color="gray"
                      weight={500}
                      size="sm"
                    >
                      John Doe
                    </Text>
                  </Col>
                  <Col sx={{ display: "flex", alignItems: "center" }} span={12}>
                    <HiOutlineMail />
                    <Text
                      sx={{ marginLeft: "10px" }}
                      color="gray"
                      weight={500}
                      size="sm"
                    >
                      johndoe@gmail.com
                    </Text>
                  </Col>
                  <Col sx={{ display: "flex", alignItems: "center" }} span={12}>
                    <BsBox />
                    <Text
                      sx={{ marginLeft: "10px" }}
                      color="gray"
                      weight={500}
                      size="sm"
                    >
                      No 2, Galle road, Moratuwa, Sri Lanka, 10400
                    </Text>
                  </Col>
                  <Col span={12}>
                    <Alert radius="xl" title="Not Delivered" color="red">
                      Your order has not been delivered yet.
                    </Alert>
                  </Col>
                </Card>
              </Col>
            </Grid>
          </Col>
          <Col span={12}>
            <Text>Payment</Text>
            <Grid sx={{ marginTop: "10px" }}>
              <Col span={12}>
                <Card padding="xs" withBorder shadow="xs" radius="xl">
                  <Col sx={{ display: "flex", alignItems: "center" }} span={12}>
                    <BsCreditCard2Front />
                    <Text
                      sx={{ marginLeft: "10px" }}
                      color="gray"
                      weight={500}
                      size="sm"
                    >
                      PayPal
                    </Text>
                  </Col>
                  <Col span={12}>
                    <Alert radius="xl" title="Not Paid" color="red">
                      Your have not paid yet.
                    </Alert>
                  </Col>
                  <Col span={12}>
                    <Alert radius="xl" title="Not Paid" color="green">
                      Paid on 10-Jan-2022 14:30
                    </Alert>
                  </Col>
                </Card>
              </Col>
            </Grid>
          </Col>
          <Col span={12}>
            <Text>Order Items</Text>
            <Grid sx={{ marginTop: "10px" }}>
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
            <Button color="dark" radius="xl" fullWidth>
              Debit Card or Credit Card
            </Button>
          </Col>
          <Col span={12}>
            <Button color="yellow" radius="xl" fullWidth>
              PayPal
            </Button>
          </Col>
        </Grid>
      </Card>
    </Layout>
  );
};

export default Order;
