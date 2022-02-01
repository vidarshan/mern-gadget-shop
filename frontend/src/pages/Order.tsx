import { Card, Text, Grid, Col, Alert, Image, Button } from "@mantine/core";
import Layout from "../layout/Layout";
import { BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsBox, BsCreditCard2Front } from "react-icons/bs";
import banner from "../images/banner1.jpeg";

const Order = () => {
  return (
    <Layout>
      <Card withBorder shadow="sm" radius="md" padding="xl">
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
                <Card padding="xs" withBorder shadow="xs" radius="md">
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
                    <Alert title="Not Delivered" color="red">
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
                <Card padding="xs" withBorder shadow="xs" radius="md">
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
                    <Alert title="Not Paid" color="red">
                      Your have not paid yet.
                    </Alert>
                  </Col>
                  <Col span={12}>
                    <Alert title="Not Paid" color="green">
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
                <Card padding="xs" withBorder shadow="xs" radius="md">
                  <Grid>
                    <Col
                      sx={{ display: "flex", alignItems: "center" }}
                      span={4}
                    >
                      <Image radius="md" height={50} width={60} src={banner} />
                    </Col>
                    <Col
                      sx={{ display: "flex", alignItems: "center" }}
                      span={4}
                    >
                      <Text align="left" color="gray" weight={600}>
                        Apple Airpods 2
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
                        1 x $1399.00
                      </Text>
                    </Col>
                  </Grid>
                </Card>
              </Col>
            </Grid>
          </Col>
          <Col span={12}>
            <Text sx={{ margin: "10px 0" }}>Order Summary</Text>
            <Card withBorder shadow="xs" radius="md">
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
            <Button color="dark" radius="md" fullWidth>
              Debit Card or Credit Card
            </Button>
          </Col>
          <Col span={12}>
            <Button color="yellow" radius="md" fullWidth>
              PayPal
            </Button>
          </Col>
        </Grid>
      </Card>
    </Layout>
  );
};

export default Order;
