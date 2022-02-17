import {
  Alert,
  Button,
  Card,
  Col,
  Grid,
  Image,
  Modal,
  NumberInput,
  Text,
} from "@mantine/core";
import { RiShoppingBagLine } from "react-icons/ri";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import { useNavigate } from "react-router";
import { BiTrashAlt } from "react-icons/bi";

const Cart = () => {
  const numRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [opened, setOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const { cartItems } = useSelector((state: State) => state.cart);

  const { addToCart, removeFromCart } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handlerUpdateCartItems = (value: number, id: string) => {
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
        radius="lg"
        onClose={() => setOpened(false)}
        opened={opened}
      >
        <Text weight={600} size="sm">
          Are you sure that you want to remove this item?
        </Text>
        <Grid sx={{ marginTop: "1rem" }}>
          <Col span={6}>
            {" "}
            <Button
              onClick={() => setOpened(false)}
              color="gray"
              radius="lg"
              fullWidth
            >
              Cancel
            </Button>
          </Col>
          <Col span={6}>
            <Button
              onClick={() => handlerDeleteCartItem(selectedItem)}
              color="red"
              radius="lg"
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
                  radius="lg"
                  shadow="xl"
                  withBorder
                >
                  <Grid>
                    <Col span={2}>
                      <Image
                        fit="contain"
                        radius="lg"
                        height={50}
                        width={50}
                        src={item.image}
                      />
                    </Col>
                    <Col
                      sx={{ display: "flex", alignItems: "center" }}
                      span={5}
                    >
                      <Text color="gray" weight={600}>
                        {item.name}
                      </Text>
                    </Col>
                    <Col
                      sx={{ display: "flex", alignItems: "center" }}
                      span={2}
                    >
                      <Text color="gray" weight={600}>
                        ${item.price} x {item.qty}
                      </Text>
                    </Col>
                    <Col
                      sx={{ display: "flex", alignItems: "center" }}
                      span={2}
                    >
                      <NumberInput
                        radius="lg"
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
                    <Col
                      sx={{ display: "flex", alignItems: "center" }}
                      span={1}
                    >
                      <Button
                        size="sm"
                        radius="lg"
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
              radius="lg"
            >
              No items in the cart
            </Alert>
          )}
        </Col>
        <Col sx={{ marginTop: ".5rem" }} span={3}>
          <Card sx={{ marginTop: ".5rem" }} radius="lg" shadow="xl" withBorder>
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
            {cartItems && cartItems.length ? (
              <Button
                sx={{ marginTop: ".5rem" }}
                color="dark"
                radius="lg"
                fullWidth
                onClick={() => navigate("/shipping")}
              >
                Proceed to Checkout
              </Button>
            ) : (
              <></>
            )}
          </Card>
        </Col>
      </Grid>
    </Layout>
  );
};

export default Cart;
