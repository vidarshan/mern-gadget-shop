import {
  Button,
  Col,
  Container,
  Grid,
  Image,
  NumberInput,
  Group,
  ActionIcon,
  NumberInputHandlers,
  Text,
  Card,
  Badge,
} from "@mantine/core";
import React, { useRef, useState } from "react";
import { FiUser, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { AiOutlineStar, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import banner from "../images/banner1.jpeg";

const Product = () => {
  const [value, setValue] = useState<any>(1);
  const handlers = useRef<NumberInputHandlers>(null);

  return (
    <Container sx={{ maxWidth: "85vw" }}>
      <Grid sx={{ margin: "8rem 0" }}>
        <Col
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={5}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
          span={5}
        >
          <Grid>
            <Col
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "2rem",
                alignItems: "center",
              }}
              span={12}
            >
              <Image radius="md" fit="contain" src={banner}></Image>
            </Col>
          </Grid>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={7}
          lg={7}
          xl={7}
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "2rem",
          }}
          span={7}
        >
          <Card withBorder radius="md" shadow="xl">
            <Grid>
              <Col
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid #E0E0E0",
                }}
                span={12}
              >
                <Text weight={600} size="xl">
                  Apple Airpods 2
                </Text>
                <Badge
                  color="green"
                  sx={{ marginLeft: "10px" }}
                  variant="filled"
                >
                  In Stock
                </Badge>
              </Col>
              <Col
                sx={{ margin: "10px 0", borderBottom: "1px solid #E0E0E0" }}
                span={12}
              >
                <Text color="gray" weight={400} size="md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur cupiditate blanditiis aut sapiente atque fugiat ipsum
                  saepe. Cupiditate nobis optio laudantium facilis. Consequuntur
                  debitis voluptatum, suscipit beatae et ab.
                </Text>
              </Col>
              <Col
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid #E0E0E0",
                  marginBottom: "10px",
                }}
                span={12}
              >
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <Text
                  sx={{ marginLeft: "10px" }}
                  color="gray"
                  weight={400}
                  size="md"
                >
                  93 reviews
                </Text>
              </Col>
              <Col
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid #E0E0E0",
                  marginBottom: "10px",
                }}
                span={12}
              >
                <Text color="gray" weight={400} size="lg">
                  $120.99
                </Text>
              </Col>

              <Col
                xs={12}
                sm={6}
                md={5}
                lg={4}
                xl={3}
                sx={{
                  marginTop: "10px",
                }}
                span={3}
              >
                <Group spacing={5}>
                  <ActionIcon
                    size={36}
                    radius="md"
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
                    styles={{ input: { width: 54, textAlign: "center" } }}
                    radius="md"
                  />
                  <ActionIcon
                    size={36}
                    radius="md"
                    variant="filled"
                    color="dark"
                    onClick={() => handlers?.current?.increment()}
                  >
                    +
                  </ActionIcon>
                </Group>
              </Col>
              <Col
                xs={12}
                sm={6}
                md={7}
                lg={8}
                xl={9}
                sx={{
                  marginTop: "10px",
                }}
                span={9}
              >
                <Button color="dark" radius="md" fullWidth>
                  Add to Cart
                </Button>
              </Col>
            </Grid>
          </Card>
        </Col>
        <Col sx={{ padding: "2rem" }} span={12}>
          <Text sx={{ margin: "10px 0" }} size="lg">
            Reviews (93)
          </Text>
          <Card sx={{ margin: "1rem 0" }} withBorder shadow="xl" radius="md">
            <Grid>
              <Col
                xs={12}
                sm={3}
                md={2}
                lg={2}
                xl={2}
                sx={{ display: "flex", alignItems: "center" }}
                span={2}
              >
                <Col span={12}>
                  <Text sx={{ marginBottom: "5px" }} weight={600}>
                    John Doe
                  </Text>
                  <Text sx={{ marginBottom: "5px" }} size="xs" weight={200}>
                    12-Jun-2021
                  </Text>
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </Col>
              </Col>
              <Col
                xs={12}
                sm={9}
                md={10}
                lg={10}
                xl={10}
                sx={{ display: "flex", alignItems: "center" }}
                span={10}
              >
                <Text>
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fuga id distinctio esse corrupti pariatur mollitia asperiores
                  perspiciatis ea corporis voluptatum!"
                </Text>
              </Col>
            </Grid>
          </Card>
          <Card sx={{ margin: "1rem 0" }} withBorder shadow="xl" radius="md">
            <Grid>
              <Col
                xs={12}
                sm={3}
                md={2}
                lg={2}
                xl={2}
                sx={{ display: "flex", alignItems: "center" }}
                span={2}
              >
                <Col span={12}>
                  <Text sx={{ marginBottom: "5px" }} weight={600}>
                    John Doe
                  </Text>
                  <Text sx={{ marginBottom: "5px" }} size="xs" weight={200}>
                    12-Jun-2021
                  </Text>
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </Col>
              </Col>
              <Col
                xs={12}
                sm={9}
                md={10}
                lg={10}
                xl={10}
                sx={{ display: "flex", alignItems: "center" }}
                span={10}
              >
                <Text>
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fuga id distinctio esse corrupti pariatur mollitia asperiores
                  perspiciatis ea corporis voluptatum!" Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Fugiat provident quo
                  distinctio nostrum cupiditate sapiente reprehenderit! Laborum
                  totam iure repellat.
                </Text>
              </Col>
            </Grid>
          </Card>
        </Col>
      </Grid>
    </Container>
  );
};

export default Product;
