import { Col, Grid, Pagination } from "@mantine/core";
import ItemCard from "../components/items/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { useNotifications } from "@mantine/notifications";
import Head from "../components/Head";

import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import Loading from "../components/Loading";

const Shop = () => {
  const dispatch = useDispatch();
  const notifications = useNotifications();

  const [activePage, setActivePage] = useState(1);

  const { getProducts } = bindActionCreators(actionCreators, dispatch);

  const { products, error, loading } = useSelector(
    (state: State) => state.products
  );

  const handlerPageChange = (page: number) => {
    setActivePage(page);
    getProducts(page);
  };

  useEffect(() => {
    getProducts(1);
    // eslint-disable-next-line
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
      <Head title="Shop | Techstop" description="Shop for gadgets" />

      {loading ? (
        <Loading />
      ) : (
        <Grid gutter="xl">
          {Object.keys(products).includes("products") ? (
            products.products.map((product: any) => {
              return (
                <Col xs={12} sm={6} md={4} lg={4} xl={3} span={3}>
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
            })
          ) : (
            <></>
          )}
          <Col className="flex-container" sx={{ margin: "1rem 0" }} span={12}>
            <Pagination
              total={products.pages}
              color="dark"
              radius="xl"
              page={activePage}
              onChange={(e) => handlerPageChange(e)}
            />
          </Col>
        </Grid>
      )}
    </Layout>
  );
};

export default Shop;
