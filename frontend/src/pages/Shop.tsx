import {
  Button,
  Card,
  Col,
  Grid,
  Loader,
  Pagination,
  Select,
} from "@mantine/core";
import ItemCard from "../components/items/ItemCard";
import { BiDollarCircle, BiLaptop, BiBuilding } from "react-icons/bi";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Layout from "../layout/Layout";
import { getProducts } from "../actions/productActions";
import { useNotifications } from "@mantine/notifications";

const Shop = () => {
  const dispatch = useDispatch();
  const notifications = useNotifications();

  const { products, loading, error } = useSelector(
    (state: RootStateOrAny) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      notifications.showNotification({
        title: "Error!",
        message: error,
        color: "red",
      });
    }
    // eslint-disable-next-line
  }, [error]);

  return (
    <Layout>
      <Card radius="md" withBorder sx={{ marginBottom: "2rem" }}>
        <Grid>
          <Col xs={12} sm={6} md={3} lg={3} xl={3} span={3}>
            <Select
              icon={<BiBuilding />}
              variant="default"
              radius="md"
              size="sm"
              placeholder="Brand"
              data={[
                { value: "react", label: "React" },
                { value: "ng", label: "Angular" },
                { value: "svelte", label: "Svelte" },
                { value: "vue", label: "Vue" },
              ]}
            />
          </Col>
          <Col xs={12} sm={6} md={3} lg={3} xl={3} span={3}>
            <Select
              icon={<BiLaptop />}
              radius="md"
              size="sm"
              placeholder="Model"
              data={[
                { value: "react", label: "React" },
                { value: "ng", label: "Angular" },
                { value: "svelte", label: "Svelte" },
                { value: "vue", label: "Vue" },
              ]}
            />
          </Col>
          <Col xs={12} sm={6} md={3} lg={3} xl={3} span={3}>
            <Select
              icon={<BiDollarCircle />}
              radius="md"
              size="sm"
              placeholder="Price"
              data={[
                { value: "react", label: "React" },
                { value: "ng", label: "Angular" },
                { value: "svelte", label: "Svelte" },
                { value: "vue", label: "Vue" },
              ]}
            />
          </Col>
          <Col xs={12} sm={6} md={3} lg={3} xl={3} span={3}>
            <Button
              variant="filled"
              radius="md"
              size="sm"
              fullWidth
              color="dark"
            >
              Reset Filters
            </Button>
          </Col>
        </Grid>
      </Card>
      {loading ? (
        <Loader></Loader>
      ) : (
        <Grid gutter="xl">
          {products &&
            products.products.map((product: any) => {
              return (
                <Col xs={12} sm={6} md={4} lg={4} xl={3} span={3}>
                  {" "}
                  <ItemCard
                    id={product._id}
                    name={product.name}
                    image={product.image}
                    brand={product.brand}
                    category={product.category}
                    description={product.description}
                    rating={product.rating}
                    numReviews={product.numReviews}
                    price={product.price}
                    countInStock={product.countInStock}
                    reviews={product.reviews}
                  />{" "}
                </Col>
              );
            })}
        </Grid>
      )}

      {/* <Grid gutter="xl">
        <Col xs={12} sm={6} md={4} lg={4} xl={3} span={3}>
          <ItemCard />
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} xl={3} span={3}>
          <ItemCard />
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} xl={3} span={3}>
          <ItemCard />
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} xl={3} span={3}>
          <ItemCard />
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} xl={3} span={3}>
          <ItemCard />
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} xl={3} span={3}>
          <ItemCard />
        </Col>
      </Grid> */}
      <Grid>
        <Col className="flex-container" sx={{ margin: "1rem 0" }} span={12}>
          <Pagination total={10} color="dark" radius="md" />
        </Col>
      </Grid>
    </Layout>
  );
};

export default Shop;
