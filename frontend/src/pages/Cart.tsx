import {
  Alert,
  //ActionIcon,
  Button,
  Card,
  Col,
  Container,
  Divider,
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
import { IoIosCloseCircle } from "react-icons/io";

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
        <Col span={9}>
          <>
            <Divider sx={{ marginBottom: "1rem" }} label="Cart Items" />
            {!cartItems.length ? (
              <Alert
                icon={<IoIosCloseCircle size={16} />}
                title="No items"
                color="blue"
                radius="md"
              >
                No items in the cart.
              </Alert>
            ) : (
              cartItems.map((item: any) => {
                return (
                  <Card
                    sx={{ marginBottom: "1rem" }}
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
                          fit="contain"
                          radius="md"
                          height={70}
                          width={70}
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
                        <Text weight={700} align="left" size="md">
                          {" "}
                          {item.product.name}
                        </Text>
                      </Col>
                      <Col
                        xs={12}
                        sm={3}
                        md={3}
                        lg={3}
                        xl={5}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        span={5}
                      >
                        <Text weight={700} align="left" size="md">
                          {" "}
                          ${item.product.price} x {item.quantity}
                        </Text>
                      </Col>
                      <Col
                        xs={6}
                        sm={2}
                        md={2}
                        lg={2}
                        xl={1}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        span={1}
                      >
                        <NumberInput
                          radius="md"
                          defaultValue={item.quantity}
                          ref={numRef}
                          placeholder="Your age"
                          onChange={(e) =>
                            handlerUpdateCartItems(
                              e as number,
                              item.product._id
                            )
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
                        xl={1}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        span={1}
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
              })
            )}
          </>
        </Col>
        <Col span={3}>
          <>
            <Divider sx={{ marginBottom: "1rem" }} label="Cart Items" />
            <CartTotal items={cartItems} />
          </>
        </Col>
      </Grid>
    </Layout>
  );
};

export default Cart;
