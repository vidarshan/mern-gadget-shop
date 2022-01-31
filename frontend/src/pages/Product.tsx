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
  Loader,
  List,
  Alert,
  ThemeIcon,
  Divider,
} from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router";
import banner from "../images/banner1.jpeg";
import { IoIosCloseCircle } from "react-icons/io";
import Layout from "../layout/Layout";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { addReview, getProduct } from "../actions/productActions";
import moment from "moment";
import ReviewCard from "../components/reviews/ReviewCard";
import { useForm } from "@mantine/hooks";
import { useNotifications } from "@mantine/notifications";
import { ADD_REVIEW_RESET } from "../constants/productConstants";

const Product = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notifications = useNotifications();

  const { product, loading, error } = useSelector(
    (state: RootStateOrAny) => state.product
  );

  const {
    review,
    loading: reviewLoading,
    error: reviewError,
  } = useSelector((state: RootStateOrAny) => state.review);

  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState<any>(1);
  const [total, setTotal] = useState(0);
  const handlers = useRef<NumberInputHandlers>(null);

  const ratingLevels = [
    { value: "1", label: "1 - Poor" },
    { value: "2", label: "2 - Fair" },
    { value: "3", label: "3 - Good" },
    { value: "4", label: "4 - Very Good" },
    { value: "5", label: "5 - Excellent" },
  ];

  const form = useForm({
    initialValues: {
      rating: 5,
      comment: "",
    },
    validationRules: {
      comment: (value) => value.trim().length >= 1,
    },
    errorMessages: {
      rating: "Rating is not valid",
      comment: "Comment is not valid",
    },
  });

  const renderFeaturesList = (description: any) => {
    const features = description.split(", ");

    return (
      <List size="sm">
        {features.map((feature: string) => {
          return <List.Item>{feature}</List.Item>;
        })}
      </List>
    );
  };

  const renderRatingsList = (rating: number) => {
    const stars = [];

    for (let i = 1; i <= rating; i++) {
      stars.push(<AiFillStar color="orange" size="18" />);
    }

    let remainingStars = 5 - stars.length;

    for (let i = 1; i <= remainingStars; i++) {
      stars.push(<AiOutlineStar size="18" />);
    }

    return <div style={{ display: "flex", alignItems: "center" }}>{stars}</div>;
  };

  const handlerAddReview = (values: any) => {
    const { rating, comment } = values;
    dispatch(addReview(params.id as string, parseInt(rating), comment));
    form.reset();
    setOpened(false);
    dispatch(getProduct(params.id as string));
  };

  useEffect(() => {
    dispatch(getProduct(params.id as string));
  }, [dispatch]);

  useEffect(() => {
    if (product) {
      setTotal(product.product.price * value);
    }
  }, [product]);

  useEffect(() => {
    if (reviewError) {
      notifications.showNotification({
        title: "Note!",
        message: reviewError,
        color: "orange",
      });
    }
    dispatch({ type: ADD_REVIEW_RESET });
  }, [reviewError]);

  useEffect(() => {
    if (product && Object.keys(product).includes("product")) {
      let newTotal = value * product.product.price;
      setTotal(+newTotal.toFixed(2));
    }
  }, [value]);

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
        <form onSubmit={form.onSubmit((values) => handlerAddReview(values))}>
          <Grid>
            <Col span={12}>
              <Select
                radius="md"
                data={ratingLevels}
                icon={<AiOutlineStar />}
                placeholder="Your rating"
                label="Rating"
                {...form.getInputProps("rating")}
                error={form.errors.rating}
                required
              />
            </Col>
            <Col span={12}>
              <Textarea
                placeholder="Your review"
                label="Your review"
                radius="md"
                {...form.getInputProps("comment")}
                error={form.errors.comment}
              />
            </Col>
            <Col span={12}>
              <Button
                loading={reviewLoading}
                type="submit"
                color="dark"
                radius="md"
                fullWidth
              >
                Add Review
              </Button>
            </Col>
          </Grid>
        </form>
      </Modal>
      {loading ? (
        <Loader />
      ) : product ? (
        <Grid>
          <Col span={12}>
            <Card shadow="md" withBorder radius="md">
              {" "}
              <Grid>
                <Col xs={12} sm={12} md={5} lg={5} xl={5} span={5}>
                  {" "}
                  <Image
                    radius="md"
                    fit="contain"
                    src={product.product.image}
                  ></Image>
                </Col>
                <Col
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  xs={12}
                  sm={12}
                  md={7}
                  lg={7}
                  xl={7}
                  span={7}
                >
                  <Group>
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
                  </Group>
                  <Divider />
                  <Group sx={{ margin: "1rem 0" }}>
                    {renderFeaturesList(product.product.description)}
                  </Group>
                  <Divider />
                  <Group position="apart" sx={{ margin: "1rem 0" }}>
                    <Group position="left">
                      {renderRatingsList(product.product.rating)}
                      <Text color="gray" weight={600} size="sm">
                        (
                        {product.product.rating > 0
                          ? product.product.rating.toFixed(1)
                          : "Unrated"}
                        )
                      </Text>
                    </Group>
                    <Group position="left">
                      <Text align="right" weight={700} size="xl">
                        ${total}
                      </Text>
                    </Group>
                  </Group>
                  <Divider />
                  <Grid sx={{ marginTop: "1rem" }}>
                    <Col xs={12} sm={6} md={5} lg={4} xl={3} span={6}>
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
                    <Col xs={12} sm={6} md={7} lg={8} xl={9} span={9}>
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
          </Col>
          <Col sx={{ padding: "2rem 0" }} span={12}>
            <Text sx={{ margin: "10px 0" }} size="lg">
              Reviews ({product.product.reviews.length})
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
            {product.product.reviews.length > 0 ? (
              product.product.reviews.map((review: any) => {
                return (
                  <ReviewCard
                    id={review._id}
                    name={review.name}
                    date={review.createdAt}
                    comment={review.comment}
                    rating={review.rating}
                  />
                );
              })
            ) : (
              <Alert
                icon={<IoIosCloseCircle size={16} />}
                title="No reviews!"
                color="indigo"
                radius="md"
              >
                Be the first to review this item
              </Alert>
            )}
          </Col>
        </Grid>
      ) : (
        <Grid>
          <Card radius="md" withBorder>
            <Group direction="column" align="center">
              <BsFillExclamationTriangleFill size="40" />
              <Text weight={600} size="xl">
                Product Not Found
              </Text>
              <Button
                onClick={() => navigate("/shop")}
                color="dark"
                size="xs"
                fullWidth
              >
                Back to the shop
              </Button>
            </Group>
          </Card>
        </Grid>
      )}
    </Layout>
  );
};

export default Product;
