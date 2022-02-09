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
  Divider,
  Anchor,
} from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router";
import { IoIosCloseCircle, IoIosUnlock, IoMdStar } from "react-icons/io";
import Layout from "../layout/Layout";
import { RiShoppingBagLine } from "react-icons/ri";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
// import { addReview, getProduct } from "../actions/productActions";
import ReviewCard from "../components/reviews/ReviewCard";
import { useForm } from "@mantine/hooks";
import { useNotifications } from "@mantine/notifications";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import Head from "../components/Head";
import filter from "lodash.filter";
import moment from "moment";

const Product = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notifications = useNotifications();

  const [value, setValue] = useState<any>(1);
  const [total, setTotal] = useState(0);
  const handlers = useRef<NumberInputHandlers>(null);

  const { getProduct, addReview, addToCart } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const { product, loading, error } = useSelector(
    (state: State) => state.product
  );

  const { cartItems } = useSelector((state: State) => state.cart);

  const {
    review,
    loading: reviewLoading,
    error: reviewError,
  } = useSelector((state: State) => state.review);

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

  const handlerAddToCart = (quantity: number, id: string) => {
    addToCart(product.product._id, quantity);
  };

  useEffect(() => {
    getProduct(params.id as string);
  }, [dispatch]);

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Card radius="md" shadow="xl">
            {Object.keys(product).includes("product") && (
              <Grid>
                <Col
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  span={4}
                >
                  {" "}
                  <Image
                    radius="md"
                    fit="contain"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    width={300}
                    height={300}
                    src={product.product.image}
                  ></Image>
                </Col>

                <Col span={8}>
                  <div>
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
                    <Divider />{" "}
                    <Group sx={{ margin: "1rem 0" }}>
                      {renderFeaturesList(product.product.description)}
                    </Group>
                    <Divider />
                    <Group position="apart" sx={{ margin: "1rem 0" }}>
                      <Group position="left">
                        <Group spacing={5}>
                          <ActionIcon
                            size={28}
                            radius="xl"
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
                            radius="xl"
                          />
                          <ActionIcon
                            size={28}
                            radius="xl"
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
                            value * product.product.price
                          )}
                        </Text>
                        <Button
                          leftIcon={<RiShoppingBagLine />}
                          radius="xl"
                          color="dark"
                          onClick={() =>
                            handlerAddToCart(value, product.product._id)
                          }
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
          <Card sx={{ marginTop: "1.5rem" }} radius="md" shadow="xl">
            {Object.keys(product).includes("product") && (
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
                    {product.product.rating.toFixed(1)}
                  </Text>
                  <AiFillStar color="orange" size="18" />
                </div>
              </Group>
            )}
            <Alert
              icon={<IoIosUnlock size={16} />}
              sx={{ marginTop: "1rem" }}
              color="blue"
              radius="md"
            >
              Log In to add a review
            </Alert>
            <Group sx={{ marginTop: "1rem" }} position="right">
              <Button
                variant="outline"
                leftIcon={<IoMdStar />}
                radius="xl"
                sx={{ marginLeft: "10px" }}
                color="dark"
                size="xs"
              >
                Add Review
              </Button>
            </Group>
            <div style={{ marginTop: "1rem" }}>
              {Object.keys(product).includes("product") &&
              product.product.reviews.length ? (
                product.product.reviews.map((review: any) => {
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
                  radius="md"
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
