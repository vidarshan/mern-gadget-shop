import { Button, Card, Col, Grid, Group, Image, Text } from "@mantine/core";
import React, { PropsWithChildren } from "react";

import { useNavigate } from "react-router";

interface IItemCard {
  id: string;
  name: string;
  image: string;
  brand: string;
  category: string;
  description: string;
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  reviews: any;
}

const ItemCard: React.FC<PropsWithChildren<IItemCard>> = ({
  id,
  name,
  image,
  brand,
  category,
  description,
  rating,
  numReviews,
  price,
  countInStock,
  reviews,
}) => {
  const navigate = useNavigate();

  return (
    <Card padding="xl" shadow="xs" radius="lg" withBorder>
      <Grid>
        <Col xs={12} sm={12} md={12} span={6}>
          <Card.Section sx={{ display: "flex", justifyContent: "center" }}>
            <Image
              fit="contain"
              height={200}
              width={300}
              src={image}
              alt={`Image of ${name}`}
            />
          </Card.Section>
        </Col>
        <Col xs={12} sm={12} md={12} span={6}>
          <Card.Section>
            <Text size="xl" weight={700}>
              {name.substring(0, 25) + "..."}
            </Text>
          </Card.Section>
          <Card.Section sx={{ marginTop: "1rem" }}>
            <Text size="sm" color="gray" align="justify" weight={500}>
              {description.substring(0, 90) + "..."}
            </Text>
          </Card.Section>{" "}
          <Card.Section sx={{ marginTop: "1rem" }}>
            <Text color="gray" align="left" size="xl" weight={700}>
              ${price}
            </Text>
          </Card.Section>
          <Card.Section sx={{ marginTop: "1rem" }}>
            <Button
              onClick={() => navigate(`/product/${id}`)}
              variant="filled"
              radius="lg"
              color="dark"
              fullWidth
            >
              View Product
            </Button>
          </Card.Section>
        </Col>
      </Grid>
    </Card>
  );
};

export default ItemCard;
