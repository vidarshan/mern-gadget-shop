import { Col, Grid, Text } from "@mantine/core";
import { bindActionCreators } from "redux";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from ".././state";
import { useNavigate, useLocation } from "react-router";
import Loading from "./Loading";
import ItemCard from "./items/ItemCard";
import { useEffect } from "react";

const Featured = ({ title, subTitle }: { title: string; subTitle: string }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { topProducts, loading, error } = useSelector(
    (state: State) => state.topProducts
  );

  const { getTopProducts } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    getTopProducts();
  }, [dispatch]);

  return (
    <div style={{ margin: "50px 0" }}>
      <Text align="center" weight={700} sx={{ fontSize: "1.7rem" }}>
        {title}
      </Text>
      <Text
        sx={{ marginBottom: "2rem" }}
        align="center"
        weight={500}
        color="gray"
      >
        {subTitle}
      </Text>
      <Grid>
        {loading ? (
          <Col span={12}>
            <Loading />
          </Col>
        ) : (
          topProducts.map((product: any) => {
            return (
              <Col xs={12} sm={6} md={4} lg={3} span={3}>
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
                />
              </Col>
            );
          })
        )}
      </Grid>
    </div>
  );
};

export default Featured;
