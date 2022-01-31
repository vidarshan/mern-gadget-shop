import { Card, Grid, Text, Col } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import moment from "moment";

interface IReviewCard {
  id: string;
  name: string;
  date: Date;
  comment: string;
  rating: number;
}

const renderRatingsList = (rating: number) => {
  const stars = [];

  for (let i = 1; i <= rating; i++) {
    stars.push(<AiFillStar />);
  }

  let remainingStars = 5 - stars.length;

  for (let i = 1; i <= remainingStars; i++) {
    stars.push(<AiOutlineStar />);
  }

  return <div>{stars}</div>;
};

const ReviewCard: React.FC<PropsWithChildren<IReviewCard>> = ({
  id,
  name,
  date,
  comment,
  rating,
}) => {
  return (
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
              {name}
            </Text>
            <Text sx={{ marginBottom: "5px" }} size="xs" weight={200}>
              {moment(date).format("DD-MMM-YYYY")}
            </Text>
            {renderRatingsList(rating)}
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
          <Text>"{comment}"</Text>
        </Col>
      </Grid>
    </Card>
  );
};

export default ReviewCard;
