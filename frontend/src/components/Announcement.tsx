import { Col, Grid, Image, Text } from "@mantine/core";
import announcement from "../images/announcement.png";

const Announcement = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
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
        <Col span={12}>
          <Image radius="xl" fit="contain" src={announcement} />
        </Col>
      </Grid>
    </div>
  );
};

export default Announcement;
