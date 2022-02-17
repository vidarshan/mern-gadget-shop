import { Col, Grid, Image, Text } from "@mantine/core";
import ad from "../images/ad.png";
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
        <Col xs={12} sm={12} md={9} lg={9} xl={9} span={9}>
          <Image radius="lg" fit="contain" src={announcement} />
        </Col>
        <Col
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={3}
          span={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image radius="lg" fit="contain" src={ad} />
        </Col>
      </Grid>
    </div>
  );
};

export default Announcement;
