import { Button, Card, Image, Text } from "@mantine/core";
import React from "react";
import item from "../../images/item.jpeg";
import { useNavigate } from "react-router";

const ItemCard = () => {
  const navigate = useNavigate();

  return (
    <Card shadow="xl" radius="lg" withBorder>
      <Card.Section>
        <Image fit="cover" src={item} alt="Norway" />
      </Card.Section>
      <div style={{ margin: "10px 0" }}>
        <Card.Section>
          <Text size="xl" weight={600}>
            Apple Airtag
          </Text>
        </Card.Section>
        <Card.Section sx={{ marginTop: "1rem" }}>
          <Text weight={400}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            nostrum modi ipsum sit magnam possimus.
          </Text>
        </Card.Section>
        <Card.Section sx={{ marginTop: "1rem" }}>
          <Text size="xl" weight={600}>
            $12.99
          </Text>
        </Card.Section>
        <Card.Section sx={{ marginTop: "1rem" }}>
          <Button
            onClick={() => navigate("/product/83428428")}
            variant="filled"
            radius="md"
            color="dark"
            fullWidth
          >
            View Product
          </Button>
        </Card.Section>
      </div>
    </Card>
  );
};

export default ItemCard;
