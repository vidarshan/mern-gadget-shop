import {
  Alert,
  //ActionIcon,
  Button,
  Card,
  Col,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Modal,
  NumberInput,
  Text,
  //NumberInputHandlers,
} from "@mantine/core";
//import { useState, useRef } from "react";
import banner from "../images/banner1.jpeg";
import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

import CartTotal from "../components/cart/CartTotal";
import { IoIosCloseCircle } from "react-icons/io";
import { useModals } from "@mantine/modals";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import { BiTrashAlt } from "react-icons/bi";

const Cart = () => {
  const numRef = useRef(null);
  const dispatch = useDispatch();

  const { addToCart, removeFromCart, saveShippingAddress, savePaymentMethod } =
    bindActionCreators(actionCreators, dispatch);

  const modals = useModals();

  const [opened, setOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const { cartItems } = useSelector((state: State) => state.cart);

  const openConfirmModal = (id: string) =>
    modals.openConfirmModal({
      title: "Please confirm your action",
      children: (
        <Text weight={500} size="sm">
          Are you sure that you want to remove this item?
        </Text>
      ),
      labels: { confirm: "Yes", cancel: "Cancel" },
      onCancel: () => setOpened(false),
      onConfirm: () => handlerDeleteCartItem(id),
    });

  const handlerUpdateCartItems = (value: number, id: string) => {
    modals.closeAll();
    dispatch(addToCart(id, value));
  };

  const selectItem = (id: string) => {
    setOpened(true);
    setSelectedItem(id);
  };

  const handlerDeleteCartItem = (id: string) => {
    setOpened(false);
    dispatch(removeFromCart(id));
  };

  return (
    <Layout>
      <Modal
        title="Delete Item?"
        radius="md"
        onClose={() => setOpened(false)}
        opened={opened}
      >
        <Text weight={600} size="sm">
          Are you sure that you want to remove this item?
        </Text>
        <Grid sx={{ marginTop: "1rem" }}>
          <Col span={6}>
            {" "}
            <Button color="gray" radius="xl" fullWidth>
              Cancel
            </Button>
          </Col>
          <Col span={6}>
            <Button
              onClick={() => handlerDeleteCartItem(selectedItem)}
              color="red"
              radius="xl"
              fullWidth
            >
              Yes
            </Button>
          </Col>
        </Grid>
      </Modal>
      <Grid>
        <Col span={9}>
          {cartItems && cartItems.length ? (
            cartItems.map((item: any) => {
              return (
                <Card
                  sx={{ marginTop: "1rem" }}
                  radius="md"
                  shadow="xl"
                  withBorder
                >
                  <Grid>
                    <Col span={2}>
                      <Image
                        fit="contain"
                        radius="md"
                        height={70}
                        width={70}
                        src={item.image}
                      />
                    </Col>
                    <Col span={5}>
                      <Text color="gray" weight={600}>
                        {item.name}
                      </Text>
                    </Col>
                    <Col span={2}>
                      <Text color="gray" weight={600}>
                        ${item.price} x {item.qty}
                      </Text>
                    </Col>
                    <Col span={2}>
                      <NumberInput
                        radius="xl"
                        value={item.qty}
                        ref={numRef}
                        onChange={(e) =>
                          handlerUpdateCartItems(e as number, item.product)
                        }
                        min={1}
                        max={item.countInStock}
                        required
                      />
                    </Col>
                    <Col span={1}>
                      <Button
                        size="sm"
                        radius="xl"
                        variant="filled"
                        color="red"
                        onClick={() => selectItem(item.product)}
                      >
                        <BiTrashAlt />
                      </Button>
                    </Col>
                  </Grid>
                </Card>
              );
            })
          ) : (
            <Alert
              icon={<RiShoppingBagLine size={16} />}
              sx={{ marginTop: "1rem" }}
              color="blue"
              radius="md"
            >
              No items in the cart
            </Alert>
          )}
        </Col>
        <Col sx={{ marginTop: ".5rem" }} span={3}>
          <Card sx={{ marginTop: ".5rem" }} radius="md" shadow="xl" withBorder>
            <Text color="gray" sx={{ marginBottom: "1rem" }} weight={600}>
              Subtotal (
              {cartItems.reduce((acc: any, item: any) => acc + item.qty, 0)})
              Items
            </Text>

            <Text size="xl" sx={{ marginTop: ".5rem" }} weight={700}>
              $
              {cartItems
                .reduce((acc: any, item: any) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </Text>
          </Card>
        </Col>
      </Grid>
    </Layout>
  );
};

export default Cart;
