import {
  ActionIcon,
  Button,
  Card,
  Col,
  Container,
  Grid,
  Group,
  Image,
  NumberInput,
  Text,
  NumberInputHandlers,
} from "@mantine/core";
import { useState, useRef } from "react";
import banner from "../images/banner1.jpeg";
import { BiTrashAlt } from "react-icons/bi";

const Cart = () => {
  const [value, setValue] = useState<any>(1);
  const handlers = useRef<NumberInputHandlers>(null);
  return (
    <Container sx={{ maxWidth: "85vw" }}>
      <Grid sx={{ margin: "8rem 0" }}>
        <Col xs={12} sm={12} md={12} lg={8} xl={8} span={6}>
          <Text color="gray" size="lg" sx={{ marginBottom: "10px" }}>
            Cart Items
          </Text>
          <Card
            sx={{ marginBottom: "10px" }}
            shadow="xl"
            radius="md"
            withBorder
          >
            <Grid>
              <Col
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                xs={12}
                sm={2}
                md={2}
                lg={2}
                xl={2}
                span={2}
              >
                <Image radius="md" height={70} width={100} src={banner} />
              </Col>
              <Col
                xs={12}
                sm={3}
                md={3}
                lg={3}
                xl={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                span={3}
              >
                <Text size="md"> Apple iPhone 13 Pro Max (256GB)</Text>
              </Col>
              <Col
                xs={12}
                sm={3}
                md={3}
                lg={3}
                xl={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                span={3}
              >
                <Text size="md"> $1299.99 x 1</Text>
              </Col>
              <Col
                xs={6}
                sm={2}
                md={2}
                lg={2}
                xl={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                span={2}
              >
                <NumberInput
                  radius="md"
                  defaultValue={18}
                  placeholder="Your age"
                  required
                />
              </Col>
              <Col
                xs={6}
                sm={2}
                md={2}
                lg={2}
                xl={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                span={2}
              >
                <Button
                  size="sm"
                  radius="md"
                  fullWidth
                  variant="filled"
                  color="red"
                >
                  <BiTrashAlt />
                </Button>
              </Col>
            </Grid>
          </Card>
          <Card
            sx={{ marginBottom: "10px" }}
            shadow="xl"
            radius="md"
            withBorder
          >
            <Grid>
              <Col
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                xs={12}
                sm={2}
                md={2}
                lg={2}
                xl={2}
                span={2}
              >
                <Image radius="md" height={70} width={100} src={banner} />
              </Col>
              <Col
                xs={12}
                sm={3}
                md={3}
                lg={3}
                xl={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                span={3}
              >
                <Text size="md"> Apple iPhone 13 Pro Max (256GB)</Text>
              </Col>
              <Col
                xs={12}
                sm={3}
                md={3}
                lg={3}
                xl={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                span={3}
              >
                <Text size="md"> $1299.99 x 1</Text>
              </Col>
              <Col
                xs={6}
                sm={2}
                md={2}
                lg={2}
                xl={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                span={2}
              >
                <NumberInput
                  radius="md"
                  defaultValue={18}
                  placeholder="Your age"
                  required
                />
              </Col>
              <Col
                xs={6}
                sm={2}
                md={2}
                lg={2}
                xl={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                span={2}
              >
                <Button
                  size="sm"
                  radius="md"
                  fullWidth
                  variant="filled"
                  color="red"
                >
                  <BiTrashAlt />
                </Button>
              </Col>
            </Grid>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4} xl={4} span={6}>
          <Text color="gray" size="lg" sx={{ marginBottom: "10px" }}>
            Checkout
          </Text>
          <Card radius="md" withBorder shadow="xl">
            <Col sx={{ borderBottom: "1px solid #E0E0E0" }} span={12}>
              <Grid>
                <Col span={7}>
                  <Text size="lg">Subtotal (3) Items</Text>
                </Col>
                <Col span={5}>
                  <Text align="right" size="lg">
                    $5999.00
                  </Text>
                </Col>
              </Grid>
            </Col>
            <Col
              sx={{ margin: "10px 0", borderBottom: "1px solid #E0E0E0" }}
              span={12}
            >
              <Grid>
                <Col span={7}>
                  <Text color="gray" size="md">
                    Discount (5%)
                  </Text>
                </Col>
                <Col span={5}>
                  <Text align="right" color="gray" size="md">
                    $59.00
                  </Text>
                </Col>
              </Grid>
            </Col>
            <Col sx={{ margin: "10px 0" }} span={12}>
              <Button color="dark" fullWidth radius="md">
                Proceed to Checkout
              </Button>
            </Col>
          </Card>
        </Col>
      </Grid>
    </Container>
  );
};

export default Cart;
