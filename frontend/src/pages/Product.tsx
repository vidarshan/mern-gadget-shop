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
} from "@mantine/core";
import React, { useRef, useState } from "react";
import { FiUser } from "react-icons/fi";
import { AiOutlineStar, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import banner from "../images/banner1.jpeg";

const Product = () => {
  interface Number {
    value: any;
  }

  const [value, setValue] = useState<any>(1);
  const handlers = useRef<NumberInputHandlers>(null);

  return (
    <Container sx={{ maxWidth: "85vw" }}>
      <Grid sx={{ margin: "8rem 0" }}>
        <Col span={6}>
          <Grid>
            {/* <Col
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              span={1}
            >
              <Button color="dark" variant="white">
                <FiArrowLeft size="30" />
              </Button>
            </Col> */}
            <Col span={10}>
              <Image radius="lg" fit="contain" src={banner}></Image>
            </Col>
            {/* <Col
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              span={1}
            >
              <Button color="dark" variant="white">
                <FiArrowRight size="30" />
              </Button>
            </Col> */}
          </Grid>
        </Col>
        <Col
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
          span={6}
        >
          <Grid>
            <Col span={12}>
              <Text sx={{ fontSize: "30px" }} weight={600}>
                Apple Airpods 2
              </Text>
            </Col>
            <Col span={12}>
              <Text size="lg" color="gray">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                veniam quam. Quas accusamus, rerum deleniti recusandae quaerat
                laudantium.
              </Text>
            </Col>
            <Col sx={{ display: "flex", alignItems: "center" }} span={12}>
              <AiFillStar color="orange" size="30" />
              <AiFillStar color="orange" size="30" />
              <AiFillStar color="orange" size="30" />
              <AiOutlineStar size="30" />
              <AiOutlineStar size="30" />
              <Text sx={{ marginLeft: "5px" }}>4.3</Text>
            </Col>
            <Col sx={{ marginTop: "20px" }} span={12}>
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
            <Col sx={{ marginTop: "20px" }} span={12}>
              <Grid>
                <Col span={10}>
                  <Button color="dark" radius="md" fullWidth>
                    Add to Cart
                  </Button>
                </Col>
                <Col span={2}>
                  <Button radius="md" fullWidth variant="default">
                    <AiOutlineHeart />
                  </Button>
                </Col>
              </Grid>
            </Col>
          </Grid>
        </Col>

        <Col sx={{ marginTop: "10px" }} span={12}>
          <Card radius="md" withBorder shadow="xl">
            <Grid>
              <Col span={3}>
                <Col sx={{ display: "flex", alignItems: "center" }} span={12}>
                  <FiUser />
                  <Text weight={600} sx={{ marginLeft: "10px" }}>
                    John Doe
                  </Text>
                </Col>
                <Col span={12}>
                  <AiFillStar color="orange" />
                  <AiFillStar color="orange" />
                  <AiFillStar color="orange" />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </Col>
              </Col>
              <Col sx={{ display: "flex", alignItems: "center" }} span={9}>
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                  totam alias modi voluptate perferendis provident assumenda hic
                  iusto tempore laborum.
                </Text>
              </Col>
            </Grid>
          </Card>
        </Col>
        <Col sx={{ marginTop: "10px" }} span={12}>
          <Card radius="md" withBorder shadow="xl">
            <Grid>
              <Col span={3}>
                <Col sx={{ display: "flex", alignItems: "center" }} span={12}>
                  <FiUser />
                  <Text weight={600} sx={{ marginLeft: "10px" }}>
                    John Doe
                  </Text>
                </Col>
                <Col span={12}>
                  <AiFillStar color="orange" />
                  <AiFillStar color="orange" />
                  <AiFillStar color="orange" />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </Col>
              </Col>
              <Col sx={{ display: "flex", alignItems: "center" }} span={9}>
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                  totam alias modi voluptate perferendis provident assumenda hic
                  iusto tempore laborum.
                </Text>
              </Col>
            </Grid>
          </Card>
        </Col>
        <Col sx={{ marginTop: "10px" }} span={12}>
          <Card radius="md" withBorder shadow="xl">
            <Grid>
              <Col span={3}>
                <Col sx={{ display: "flex", alignItems: "center" }} span={12}>
                  <FiUser />
                  <Text weight={600} sx={{ marginLeft: "10px" }}>
                    John Doe
                  </Text>
                </Col>
                <Col span={12}>
                  <AiFillStar color="orange" />
                  <AiFillStar color="orange" />
                  <AiFillStar color="orange" />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </Col>
              </Col>
              <Col sx={{ display: "flex", alignItems: "center" }} span={9}>
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                  totam alias modi voluptate perferendis provident assumenda hic
                  iusto tempore laborum.
                </Text>
              </Col>
            </Grid>
          </Card>
        </Col>
        <Col sx={{ marginTop: "10px" }} span={12}>
          <Card radius="md" withBorder shadow="xl">
            <Grid>
              <Col span={3}>
                <Col sx={{ display: "flex", alignItems: "center" }} span={12}>
                  <FiUser />
                  <Text weight={600} sx={{ marginLeft: "10px" }}>
                    John Doe
                  </Text>
                </Col>
                <Col span={12}>
                  <AiFillStar color="orange" />
                  <AiFillStar color="orange" />
                  <AiFillStar color="orange" />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </Col>
              </Col>
              <Col sx={{ display: "flex", alignItems: "center" }} span={9}>
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                  totam alias modi voluptate perferendis provident assumenda hic
                  iusto tempore laborum.
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
