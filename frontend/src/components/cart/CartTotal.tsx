import {
  Button,
  Card,
  Col,
  Grid,
  Image,
  NumberInput,
  Text,
} from "@mantine/core";
import React, { PropsWithChildren } from "react";
import banner from "../../images/banner1.jpeg";
import { BiTrashAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

interface ICartTotal {
  items: any;
}
const CartTotal: React.FC<PropsWithChildren<ICartTotal>> = ({ items }) => {
  const getTotalQuantity = (items: any) => {
    let totalQuantity = 0;
    items.map((item: any) => {
      totalQuantity = totalQuantity + item.quantity;
    });

    return totalQuantity;
  };

  const getTotalAmount = (items: any) => {
    let total = 0;
    items.map((item: any) => {
      total = total + item.product.price * item.quantity;
    });

    return total;
  };

  const getDiscount = (amount: number, items: any) => {
    let totalQuantity = getTotalAmount(items);
    return totalQuantity - (amount / 100) * totalQuantity;
  };

  return (
    <Card radius="md" withBorder shadow="xl">
      <Col sx={{ borderBottom: "1px solid #E0E0E0" }} span={12}>
        <Grid>
          <Col span={7}>
            <Text size="lg">Subtotal ({getTotalQuantity(items)}) Items</Text>
          </Col>
          <Col span={5}>
            <Text align="right" size="lg">
              ${getTotalAmount(items)}
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
              ${getDiscount(5, items)}
            </Text>
          </Col>
        </Grid>
      </Col>
      <Col sx={{ margin: "10px 0" }} span={12}>
        <Link to="/login">
          <Button color="dark" fullWidth radius="md">
            Proceed to Checkout
          </Button>
        </Link>
      </Col>
      <Col sx={{ margin: "10px 0" }} span={12}>
        <Link to="/shipping">
          <Button color="dark" fullWidth radius="md">
            Shipping
          </Button>
        </Link>
      </Col>
    </Card>
  );
};

export default CartTotal;
