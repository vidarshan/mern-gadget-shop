import { Button, Card, Col, Grid, Image, Text } from "@mantine/core";
import { useNavigate } from "react-router";
import Steps from "../components/Steps";
import Layout from "../layout/Layout";
import banner from "../images/banner1.jpeg";
import { BsCreditCard2Front, BsBox } from "react-icons/bs";

const PlaceOrder = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Card withBorder shadow="sm" radius="md" padding="xl">
        <Steps active={3} />
        <Grid sx={{ marginTop: "2rem" }}>
          <Col span={12}>
            <Text>Shipping Address</Text>
            <Grid>
              <Col span={12}>
                <Card
                  withBorder
                  shadow="xs"
                  radius="md"
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
                  radius="md"
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
                <Card
                  sx={{ margin: "10px 0" }}
                  padding="xs"
                  withBorder
                  shadow="xs"
                  radius="md"
                >
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
            <Button
              onClick={() => navigate("/order/2342348284")}
              color="dark"
              radius="md"
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
