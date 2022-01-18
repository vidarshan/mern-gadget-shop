import {
  Button,
  Card,
  Col,
  Container,
  Grid,
  Pagination,
  Select,
} from "@mantine/core";
import ItemCard from "../components/items/ItemCard";
import { BiDollarCircle, BiLaptop, BiBuilding } from "react-icons/bi";
import Layout from "../layout/Layout";

const Shop = () => {
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
      <Grid>
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
      </Grid>
      <Grid>
        <Col className="flex-container" sx={{ margin: "1rem 0" }} span={12}>
          <Pagination total={10} color="dark" radius="md" />
        </Col>
      </Grid>
    </Layout>
  );
};

export default Shop;
