import { Button, Card, Col, Container, Grid, Select } from "@mantine/core";
import ItemCard from "../components/items/ItemCard";
import { BiDollarCircle, BiLaptop, BiBuilding } from "react-icons/bi";

const Shop = () => {
  return (
    <Container sx={{ marginTop: "6rem", maxWidth: "85vw" }}>
      <Card radius="md" withBorder sx={{ marginBottom: "2rem" }}>
        <Grid>
          <Col span={3}>
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
          <Col span={3}>
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
          <Col span={3}>
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
          <Col span={3}>
            <Button
              variant="white"
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
        <Col span={2}>
          <ItemCard />
        </Col>
        <Col span={2}>
          <ItemCard />
        </Col>
        <Col span={2}>
          <ItemCard />
        </Col>
        <Col span={2}>
          <ItemCard />
        </Col>
      </Grid>
    </Container>
  );
};

export default Shop;
