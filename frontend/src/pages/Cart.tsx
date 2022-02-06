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
  Modal,
  NumberInput,
  Text,
  //NumberInputHandlers,
} from "@mantine/core";
//import { useState, useRef } from "react";
import banner from "../images/banner1.jpeg";
import { BiTrashAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  ADD_PRODUCT_TO_CART,
  GET_CART_PRODUCTS,
  UPDATE_CART_PRODUCT,
  DELETE_CART_PRODUCT,
} from "../constants/cartConstants";
import Layout from "../layout/Layout";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { addToCart, deleteCartProduct, getCart } from "../actions/cartActions";
import CartTotal from "../components/cart/CartTotal";
import { IoIosCloseCircle } from "react-icons/io";
import { useModals } from "@mantine/modals";

const Cart = () => {
  const numRef = useRef(null);
  const dispatch = useDispatch();
  const modals = useModals();

  const [opened, setOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [renderTotal, setRenderTotal] = useState(0);

  const { cartItems, loading, error } = useSelector(
    (state: RootStateOrAny) => state.cart
  );

  const openConfirmModal = (id: string) =>
    modals.openConfirmModal({
      title: "Please confirm your action",
      children: (
        <Text size="sm">Are you sure that you want to remove this item?</Text>
      ),
      labels: { confirm: "Remove", cancel: "Cancel" },
      onCancel: () => setOpened(false),
      onConfirm: () => handlerDelete(id),
    });

  const handlerUpdateCartItems = (value: number, id: string) => {
    dispatch(addToCart(id, value));
    setRenderTotal(1);
  };

  const handlerDelete = (id: string) => {
    setSelectedItem(id);
    dispatch(deleteCartProduct(id));
  };

  useEffect(() => {
    console.log("rednder");
  }, [renderTotal]);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <Layout>
      <Grid>
        <Col span={9}>
          {console.log(loading)}
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
                    key={item.product._id}
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
                        <Text weight={600} align="left" size="md">
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
                        <Text weight={600} align="left" size="md">
                          {" "}
                          ${item.product.price} x {item.quantity} = $
                          {item.product.price * item.quantity}
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
                          radius="xl"
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
                          radius="xl"
                          fullWidth
                          variant="filled"
                          color="red"
                          onClick={() => openConfirmModal(item.product._id)}
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
            <Divider sx={{ marginBottom: "1rem" }} label="Order Summary" />
            <CartTotal items={cartItems} />
          </>
        </Col>
      </Grid>
    </Layout>
  );
};

export default Cart;
