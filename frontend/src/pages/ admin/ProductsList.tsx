import {
  Card,
  Table,
  Image,
  Button,
  Pagination,
  Group,
  Modal,
  TextInput,
  Textarea,
  NumberInput,
  Text,
  Loader,
  Select,
} from "@mantine/core";
import Head from "../../components/Head";
import Layout from "../../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { BiDetail, BiTrash, BiTrashAlt } from "react-icons/bi";
import { useForm } from "@mantine/hooks";
import axios from "axios";

const ProductsList = () => {
  const dispatch = useDispatch();

  const [activePage, setActivePage] = useState(1);
  const [opened, setOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);

  const { getProducts, createProduct } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const { products, error, loading } = useSelector(
    (state: State) => state.products
  );

  const {
    productCreate,
    error: createProductError,
    loading: createProductLoading,
  } = useSelector((state: State) => state.createProduct);

  const form = useForm({
    initialValues: {
      name: selectedItem,
      brand: "",
      description: "",
      category: "",
      price: 10,
      count: 100,
    },
    validationRules: {
      name: (value) => value.trim().length > 2,
      brand: (value) => value.trim().length > 2,
      description: (value) => value.trim().length > 2,
      category: (value) => value.trim().length > 2,
      price: (value) => value > 0,
      count: (value) => value > 0,
    },
    errorMessages: {
      name: "Provide a valid name",
      brand: "Provide a valid brand",
      description: "Provide a valid description",
      category: "Provide a valid category",
      price: "Provide a valid price",
      count: "Provide a valid count",
    },
  });

  const handlerSetDetails = (product: any) => {
    form.setValues({
      name: product.name,
      brand: product.brand,
      description: product.description,
      category: product.category,
      price: product.price,
      count: product.countInStock,
    });
    setSelectedItem(product);
    setOpened(true);
  };

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
          <Button
            color="dark"
            radius="xl"
            onClick={() => handlerSetDetails(product)}
            disabled
          >
            <BiDetail />
          </Button>
        </td>
        <td>
          <Button color="red" radius="xl" disabled>
            <BiTrashAlt />
          </Button>
        </td>
      </tr>
    ));

  const uploadFileHandler = async (e: any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const handlerPageChange = (page: number) => {
    setActivePage(page);
    getProducts(page);
  };

  const handlerOpenForm = () => {
    setOpened(true);
    form.reset();
  };

  const handlerEditProduct = (values: any) => {
    const {
      name,
      price,
      brand,
      category,
      countInStock,
      numReviews,
      description,
    } = values;

    createProduct(
      name,
      price,
      image,
      brand,
      category,
      countInStock,
      numReviews,
      description
    );
  };

  useEffect(() => {
    getProducts(1);
  }, [dispatch]);

  return (
    <Layout>
      <Head title="Products List | Admin" />
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Product Details"
        radius="lg"
      >
        <form onSubmit={form.onSubmit((values) => handlerEditProduct(values))}>
          <Group direction="column" grow>
            <TextInput
              label="Product Name"
              placeholder="Product Name"
              {...form.getInputProps("name")}
              radius="lg"
              error={form.errors.name}
            />
            <TextInput
              label="Product Brand"
              placeholder="Product Brand"
              {...form.getInputProps("brand")}
              radius="lg"
              error={form.errors.brand}
            />
            <Textarea
              label="Product Description"
              placeholder="Product Description"
              {...form.getInputProps("description")}
              radius="lg"
              error={form.errors.description}
            />
            <Select
              data={[
                { value: "Laptops", label: "Laptops" },
                { value: "Desktops", label: "Desktops" },
                { value: "Phones", label: "Phones" },
                { value: "Accessories", label: "Accessories" },
              ]}
              radius="lg"
              label="Product Category"
              placeholder="Product Category"
              {...form.getInputProps("category")}
              error={form.errors.category}
            />
            <NumberInput
              label="Product Count"
              placeholder="Product Count"
              {...form.getInputProps("count")}
              radius="lg"
              error={form.errors.count}
            />
            {image && <Text>{image}</Text>}

            {uploading ? (
              <Loading />
            ) : (
              <input
                type="file"
                id="myfile"
                name="myfile"
                onChange={uploadFileHandler}
              />
            )}

            <NumberInput
              label="Product Price"
              placeholder="Product Price"
              {...form.getInputProps("price")}
              error={form.errors.price}
              radius="lg"
            />
            <Button type="submit" color="dark" radius="lg">
              Add Product
            </Button>
          </Group>
        </form>
      </Modal>
      <Card shadow="md" radius="lg">
        <Group sx={{ marginBottom: "1rem" }} direction="row" position="apart">
          <Text weight={700}>Products</Text>
          <Button
            radius="lg"
            color="dark"
            onClick={() => handlerOpenForm()}
            disabled
          >
            Add new Product
          </Button>
        </Group>
        {loading ? (
          <Loading />
        ) : (
          <Group position="center" direction="column">
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
