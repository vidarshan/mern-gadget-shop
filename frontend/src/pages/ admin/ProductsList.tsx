import { Card, Table, Image, Button, Pagination, Group } from "@mantine/core";
import Head from "../../components/Head";
import Layout from "../../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { BiDetail, BiTrash, BiTrashAlt } from "react-icons/bi";

const ProductsList = () => {
  const [activePage, setActivePage] = useState(1);
  const dispatch = useDispatch();

  const { getProducts } = bindActionCreators(actionCreators, dispatch);

  const { products, error, loading } = useSelector(
    (state: State) => state.products
  );

  const rows =
    products &&
    Object.keys(products).length >= 3 &&
    products.products.map((product: any) => (
      <tr key={product._id}>
        <td>{product.brand}</td>
        <td>{product.name}</td>
        <td>{product.description.substring(0, 50) + "..."}</td>
        <td>
          <Image
            fit="contain"
            height={50}
            width={60}
            src={product.image}
            alt={`Image of ${product.name}`}
          />
        </td>
        <td>{product.category}</td>
        <td>{product.countInStock}</td>
        <td>${product.price}</td>
        <td>
          <Button color="dark" radius="xl">
            <BiDetail />
          </Button>
        </td>
        <td>
          <Button color="red" radius="xl">
            <BiTrashAlt />
          </Button>
        </td>
      </tr>
    ));

  const handlerPageChange = (page: number) => {
    setActivePage(page);
    getProducts(page);
  };

  useEffect(() => {
    getProducts(1);
  }, [dispatch]);

  return (
    <Layout>
      <Head title="Products List | Admin" />
      <Card shadow="md" radius="lg">
        {loading ? (
          <Loading />
        ) : (
          <Group position="center" direction="column">
            {console.log(products)}
            <Table horizontalSpacing="xl" verticalSpacing="xs" highlightOnHover>
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Category</th>
                  <th>Count In Stock</th>
                  <th>Price</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
            <Pagination
              total={products.pages}
              color="dark"
              radius="xl"
              page={activePage}
              onChange={(e) => handlerPageChange(e)}
            />
          </Group>
        )}
      </Card>
    </Layout>
  );
};

export default ProductsList;
