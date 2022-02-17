import {
  Button,
  Col,
  Grid,
  Image,
  NumberInput,
  Group,
  ActionIcon,
  NumberInputHandlers,
  Text,
  Card,
  Badge,
  List,
  Alert,
  Divider,
  Modal,
  Select,
  Textarea,
} from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router";
import { IoIosCloseCircle, IoIosUnlock } from "react-icons/io";
import Layout from "../layout/Layout";
import { RiShoppingBagLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import ReviewCard from "../components/reviews/ReviewCard";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import Head from "../components/Head";
import Loading from "../components/Loading";
import { useForm } from "@mantine/hooks";
import { useNotifications } from "@mantine/notifications";
import { ActionType } from "../state/action-types";

const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const notifications = useNotifications();

  const form = useForm({
    initialValues: {
      rating: "",
      comment: "",
    },
    validationRules: {
      rating: (value) => value.trim().length >= 1,
      comment: (value) => value.trim().length >= 1,
    },
    errorMessages: {
      rating: "Rating is not valid",
      comment: "Comment is not valid",
    },
  });

  const { getProduct, addReview, addToCart } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const [value, setValue] = useState<any>(1);
  const [opened, setOpened] = useState(false);

  const handlers = useRef<NumberInputHandlers>(null);

  const { product, loading } = useSelector((state: State) => state.product);

  const { quickSearch } = useSelector((state: State) => state.quickSearch);

  const { userInfo } = useSelector((state: State) => state.userLogin);

  const {
    review,
    loading: reviewLoading,
    error: reviewError,
  } = useSelector((state: State) => state.review);

  const ratingLevels = [
    { value: "1", label: "1 - Poor" },
    { value: "2", label: "2 - Fair" },
    { value: "3", label: "3 - Good" },
    { value: "4", label: "4 - Very Good" },
    { value: "5", label: "5 - Excellent" },
  ];

  const renderFeaturesList = (description: any) => {
    const features = description.split(", ");

    return (
      <List size="md">
        {features.map((feature: string) => {
          return (
            <List.Item
              sx={{ color: "gray", lineHeight: "32px", fontWeight: "500" }}
            >
              {feature}
            </List.Item>
          );
        })}
      </List>
    );
  };

  const handlerAddReview = (values: any) => {
    const { rating, comment } = values;
    addReview(params.id as string, parseInt(rating), comment);
    setOpened(false);
    dispatch({
      type: ActionType.ADD_REVIEW_RESET,
    });
  };

  const handlerAddToCart = (quantity: number, id: string) => {
    addToCart(id, quantity);
  };

  useEffect(() => {
    if (reviewError !== null) {
      notifications.showNotification({
        title: "Error!",
        message: reviewError,
        color: "red",
      });
    }
    dispatch({
      type: ActionType.ADD_REVIEW_RESET,
    });
    // eslint-disable-next-line
  }, [reviewError]);

  useEffect(() => {
    if (review && Object.keys(review).includes("message")) {
      notifications.showNotification({
        title: "Success!",
        message: review.message,
        color: "green",
      });
    }
    // eslint-disable-next-line
  }, [review]);

  useEffect(() => {
    getProduct(params.id as string);
    // eslint-disable-next-line
  }, [dispatch, review, quickSearch]);

  return (
    <Layout>
      <Modal
        title="Add Review"
        opened={opened}
        onClose={() => setOpened(false)}
        radius="lg"
      >
        <form onSubmit={form.onSubmit((values) => handlerAddReview(values))}>
          <Select
            label="Your Rating"
            placeholder="Your Rating"
            {...form.getInputProps("rating")}
            error={form.errors.rating}
            value={value}
            data={ratingLevels}
            radius="lg"
            required
          />
          <Textarea
            sx={{ marginTop: "1rem" }}
            label="Your Comment"
            placeholder="Your Comment"
            {...form.getInputProps("comment")}
            error={form.errors.comment}
            radius="lg"
            required
          />
          <Button
            type="submit"
            sx={{ marginTop: "1rem" }}
            radius="lg"
            color="dark"
            loading={reviewLoading}
            fullWidth
          >
            Add Review
          </Button>
        </form>
      </Modal>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Card radius="lg" shadow="xs" withBorder>
            {Object.keys(product).length && (
              <Grid>
                <Head
                  title={product.name}
                  keywords={product.name}
                  description={`Buy ${product.name}`}
                />
                <Col
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={4}
                  span={4}
                >
                  {" "}
                  <Image
                    radius="lg"
                    fit="contain"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    width={300}
                    height={300}
                    src={product.image}
                  ></Image>
                </Col>

                <Col xs={12} sm={12} md={6} lg={8} xl={8} span={8}>
                  <div>
                    <Group>
                      <Text weight={600} size="xl">
                        {product.name}
                      </Text>

                      {product.countInStock === 0 ? (
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
                    <Divider />{" "}
                    <Group sx={{ margin: "1rem 0" }}>
                      {renderFeaturesList(product.description)}
                    </Group>
                    <Divider />
                    <Group position="apart" sx={{ margin: "1rem 0" }}>
                      <Group position="left">
                        <Group spacing={5}>
                          <ActionIcon
                            size={28}
                            radius="lg"
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
                            styles={{
                              input: { width: 54, textAlign: "center" },
                            }}
                            radius="lg"
                          />
                          <ActionIcon
                            size={28}
                            radius="lg"
                            variant="filled"
                            color="dark"
                            onClick={() => handlers?.current?.increment()}
                          >
                            +
                          </ActionIcon>
                        </Group>
                      </Group>
                      <Group position="left">
                        <Text color="gray" size="lg" weight={700}>
                          $
                          {new Intl.NumberFormat().format(
                            value * product.price
                          )}
                        </Text>
                        <Button
                          leftIcon={<RiShoppingBagLine />}
                          radius="lg"
                          color="dark"
                          onClick={() => handlerAddToCart(value, product._id)}
                        >
                          Add to Cart
                        </Button>
                      </Group>
                    </Group>
                  </div>
                </Col>
              </Grid>
            )}
          </Card>
          <Card sx={{ marginTop: "1.5rem" }} radius="lg" shadow="xl" withBorder>
            {Object.keys(product).length && (
              <Group position="apart">
                <Text color="gray" size="md" weight={600}>
                  Reviews
                </Text>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text weight={600} sx={{ marginRight: "10px" }}>
                    {product.rating.toFixed(1)}
                  </Text>
                  <AiFillStar color="orange" size="18" />
                </div>
              </Group>
            )}

            {!userInfo ? (
              <Alert
                icon={<IoIosUnlock size={16} />}
                sx={{ marginTop: "1rem" }}
                color="blue"
                radius="lg"
              >
                Log In to add a review
              </Alert>
            ) : (
              <Group sx={{ marginTop: "1rem" }} position="right">
                <Button
                  radius="lg"
                  sx={{ marginLeft: "10px" }}
                  color="dark"
                  size="xs"
                  onClick={() => setOpened(true)}
                >
                  Add Review
                </Button>
              </Group>
            )}

            <div style={{ marginTop: "1rem" }}>
              {Object.keys(product).length && product.reviews.length ? (
                product.reviews.map((review: any) => {
                  return (
                    <ReviewCard
                      comment={review.comment}
                      date={review.createdAt}
                      id={review._id}
                      name={review.name}
                      rating={review.rating}
                      key={review._id}
                    />
                  );
                })
              ) : (
                <Alert
                  icon={<IoIosCloseCircle size={16} />}
                  sx={{ marginTop: "1rem" }}
                  color="blue"
                  radius="lg"
                >
                  No reviews for this product
                </Alert>
              )}
            </div>
          </Card>
        </>
      )}
    </Layout>
  );
};

export default Product;
