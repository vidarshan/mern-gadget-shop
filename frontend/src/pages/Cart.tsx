import {
  //ActionIcon,
  Button,
  Card,
  Col,
  Grid,
  Image,
  NumberInput,
  Text,
  //NumberInputHandlers,
} from "@mantine/core";
//import { useState, useRef } from "react";
import banner from "../images/banner1.jpeg";
import { BiTrashAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { addToCart, deleteCartProduct, getCart } from "../actions/cartActions";
import CartTotal from "../components/cart/CartTotal";

const Cart = () => {
  const numRef = useRef(null);
  const dispatch = useDispatch();
  const { loading, error, cartItems } = useSelector(
    (state: RootStateOrAny) => state.cart
  );

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

  const getTotalQuantity = (items: any) => {
    let totalQuantity = 0;
    items.map((item: any) => {
      totalQuantity = totalQuantity + item.quantity;
    });

    return totalQuantity;
  };

  const handlerUpdateCartItems = (value: number, id: string) => {
    dispatch(addToCart(id, value));
  };

  const handlerDeleteItem = (id: string) => {
    dispatch(deleteCartProduct(id));
  };

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  // const [value, setValue] = useState<any>(1);
  // const handlers = useRef<NumberInputHandlers>(null);
  return (
    <Layout>
      <Grid>
        <Col xs={12} sm={12} md={12} lg={8} xl={8} span={6}>
          <Text color="gray" size="lg" sx={{ marginBottom: "10px" }}>
            Cart Items
          </Text>
          {console.log(cartItems)}
          {cartItems.length &&
            cartItems.map((item: any) => {
              return (
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
                      <Image
                        radius="md"
                        height={70}
                        width={100}
                        src={item.product.image}
                      />
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
                      <Text size="md"> {item.product.name}</Text>
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
                      <Text size="md">
                        {" "}
                        ${item.product.price} x {item.quantity}
                      </Text>
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
                        defaultValue={item.quantity}
                        ref={numRef}
                        placeholder="Your age"
                        onChange={(e) =>
                          handlerUpdateCartItems(e as number, item.product._id)
                        }
                        min={1}
                        max={10}
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
                        onClick={() => handlerDeleteItem(item.product._id)}
                      >
                        <BiTrashAlt />
                      </Button>
                    </Col>
                  </Grid>
                </Card>
              );
            })}
        </Col>
        <Col xs={12} sm={12} md={12} lg={4} xl={4} span={6}>
          <Text color="gray" size="lg" sx={{ marginBottom: "10px" }}>
            Checkout
          </Text>
          <Card radius="md" withBorder shadow="xl">
            <Col sx={{ borderBottom: "1px solid #E0E0E0" }} span={12}>
              <Grid>
                <Col span={7}>
                  <Text size="lg">Subtotal (4) Items</Text>
                </Col>
                <Col span={5}>
                  <Text align="right" size="lg">
                    $3000
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
                    $4290.00
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
        </Col>
      </Grid>
    </Layout>
  );
};

export default Cart;
