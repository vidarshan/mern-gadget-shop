import {
  Button,
  Col,
  Textarea,
  Grid,
  Image,
  NumberInput,
  Group,
  ActionIcon,
  NumberInputHandlers,
  Text,
  Card,
  Badge,
  Modal,
  Select,
  MediaQuery,
  Loader,
  List,
} from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router";
import banner from "../images/banner1.jpeg";
import Layout from "../layout/Layout";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getProduct } from "../actions/productActions";

const Product = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { product, loading, success } = useSelector(
    (state: RootStateOrAny) => state.product
  );

  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState<any>(1);
  const handlers = useRef<NumberInputHandlers>(null);

  const ratingLevels = [
    { value: "1", label: "1 - Poor" },
    { value: "2", label: "2 - Fair" },
    { value: "3", label: "3 - Good" },
    { value: "4", label: "4 - Very Good" },
    { value: "5", label: "5 - Excellent" },
  ];

  const renderFeaturesList = (description: any) => {
    const features = description.split(", ");
    console.log(features);

    return (
      <List>
        {features.map((feature: string) => {
          return <List.Item>{feature}</List.Item>;
        })}
      </List>
    );
  };

  useEffect(() => {
    dispatch(getProduct(params.id as string));
  }, [dispatch]);

  return (
    <Layout>
      <Modal
        title="Add Review"
        centered
        radius="md"
        opened={opened}
        closeOnClickOutside
        onClose={() => setOpened(false)}
      >
        <Grid>
          <Col span={12}>
            <Select
              radius="md"
              data={ratingLevels}
              icon={<AiOutlineStar />}
              placeholder="Your rating"
              label="Rating"
              required
            />
          </Col>
          <Col span={12}>
            <Textarea
              placeholder="Your review"
              label="Your review"
              radius="md"
              required
            />
          </Col>
          <Col span={12}>
            <Button color="dark" radius="md" fullWidth>
              Add Review
            </Button>
          </Col>
        </Grid>
      </Modal>
      {loading ? (
        <Loader />
      ) : (
        <Grid>
          <Card withBorder radius="md">
            <Grid>
              <Col
                xs={12}
                sm={12}
                md={5}
                lg={5}
                xl={5}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
                span={5}
              >
                <Grid>
                  <Col
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "2rem",
                      alignItems: "center",
                    }}
                    span={12}
                  >
                    <Image
                      radius="md"
                      fit="contain"
                      src={product.product.image}
                    ></Image>
                  </Col>
                </Grid>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={7}
                lg={7}
                xl={7}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "2rem",
                }}
                span={7}
              >
                <Grid>
                  <Col
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderBottom: "1px solid #E0E0E0",
                    }}
                    span={12}
                  >
                    <Text weight={600} size="xl">
                      {product.product.name}
                    </Text>

                    {product.product.countInStock === 0 ? (
                      <Badge
                        color="red"
                        sx={{ marginLeft: "10px" }}
                        variant="filled"
                      >
                        {" "}
                        Sold Out
                      </Badge>
                    ) : (
                      <Badge
                        color="green"
                        sx={{ marginLeft: "10px" }}
                        variant="filled"
                      >
                        {" "}
                        In Stock
                      </Badge>
                    )}
                  </Col>
                  <Col
                    sx={{ margin: "10px 0", borderBottom: "1px solid #E0E0E0" }}
                    span={12}
                  >
                    {renderFeaturesList(product.product.description)}
                  </Col>
                  <Col
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderBottom: "1px solid #E0E0E0",
                      marginBottom: "10px",
                    }}
                    span={12}
                  >
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <Text
                      sx={{ marginLeft: "10px" }}
                      color="gray"
                      weight={400}
                      size="md"
                    >
                      93 reviews
                    </Text>
                  </Col>
                  <Col span={12}>
                    <Text align="right" weight={700} size="xl">
                      $120.99
                    </Text>
                  </Col>

                  <Col
                    xs={12}
                    sm={6}
                    md={5}
                    lg={4}
                    xl={3}
                    sx={{
                      marginTop: "10px",
                    }}
                    span={3}
                  >
                    <Group spacing={5}>
                      <ActionIcon
                        size={36}
                        radius="md"
                        variant="filled"
                        color="dark"
                        onClick={() => handlers?.current?.decrement()}
                      >
                        –
                      </ActionIcon>
                      <NumberInput
                        hideControls
                        value={value}
                        onChange={(val) => setValue(val)}
                        handlersRef={handlers}
                        max={10}
                        min={1}
                        step={1}
                        styles={{ input: { width: 54, textAlign: "center" } }}
                        radius="md"
                      />
                      <ActionIcon
                        size={36}
                        radius="md"
                        variant="filled"
                        color="dark"
                        onClick={() => handlers?.current?.increment()}
                      >
                        +
                      </ActionIcon>
                    </Group>
                  </Col>
                  {/* </MediaQuery> */}
                  <Col
                    xs={12}
                    sm={6}
                    md={7}
                    lg={8}
                    xl={9}
                    sx={{
                      marginTop: "10px",
                    }}
                    span={9}
                  >
                    <Button
                      onClick={() => navigate("/cart/1")}
                      color="dark"
                      radius="md"
                      fullWidth
                    >
                      Add to Cart
                    </Button>
                  </Col>
                </Grid>
              </Col>
            </Grid>
          </Card>
          <Col sx={{ padding: "2rem 0" }} span={12}>
            <Text sx={{ margin: "10px 0" }} size="lg">
              Reviews (93)
            </Text>
            <Col sx={{ margin: "10px 0" }} span={12}>
              <Button
                color="dark"
                size="xs"
                radius="md"
                onClick={() => setOpened(true)}
                sx={{ margin: "0" }}
              >
                Add Review
              </Button>
            </Col>
            <Card sx={{ margin: "1rem 0" }} withBorder shadow="xl" radius="md">
              <Grid>
                <Col
                  xs={12}
                  sm={3}
                  md={2}
                  lg={2}
                  xl={2}
                  sx={{ display: "flex", alignItems: "center" }}
                  span={2}
                >
                  <Col span={12}>
                    <Text sx={{ marginBottom: "5px" }} weight={600}>
                      John Doe
                    </Text>
                    <Text sx={{ marginBottom: "5px" }} size="xs" weight={200}>
                      12-Jun-2021
                    </Text>
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </Col>
                </Col>
                <Col
                  xs={12}
                  sm={9}
                  md={10}
                  lg={10}
                  xl={10}
                  sx={{ display: "flex", alignItems: "center" }}
                  span={10}
                >
                  <Text>
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fuga id distinctio esse corrupti pariatur mollitia
                    asperiores perspiciatis ea corporis voluptatum!"
                  </Text>
                </Col>
              </Grid>
            </Card>
            <Card sx={{ margin: "1rem 0" }} withBorder shadow="xl" radius="md">
              <Grid>
                <Col
                  xs={12}
                  sm={3}
                  md={2}
                  lg={2}
                  xl={2}
                  sx={{ display: "flex", alignItems: "center" }}
                  span={2}
                >
                  <Col span={12}>
                    <Text sx={{ marginBottom: "5px" }} weight={600}>
                      John Doe
                    </Text>
                    <Text sx={{ marginBottom: "5px" }} size="xs" weight={200}>
                      12-Jun-2021
                    </Text>
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </Col>
                </Col>
                <Col
                  xs={12}
                  sm={9}
                  md={10}
                  lg={10}
                  xl={10}
                  sx={{ display: "flex", alignItems: "center" }}
                  span={10}
                >
                  <Text>
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fuga id distinctio esse corrupti pariatur mollitia
                    asperiores perspiciatis ea corporis voluptatum!" Lorem ipsum
                    dolor, sit amet consectetur adipisicing elit. Fugiat
                    provident quo distinctio nostrum cupiditate sapiente
                    reprehenderit! Laborum totam iure repellat.
                  </Text>
                </Col>
              </Grid>
            </Card>
          </Col>
        </Grid>
      )}
    </Layout>
  );
};

export default Product;
