import { Col, Grid, Text } from "@mantine/core";
import { BiSearch, BiDollarCircle } from "react-icons/bi";
import { FiBox, FiHeart } from "react-icons/fi";
import FeatureCard from "./features/FeatureCard";

const Features = ({ title, subTitle }: { title: string; subTitle: string }) => {
  const features = [
    {
      id: 1,
      title: "Search what you need easily.",
      icon: <BiSearch size="70" color="#84C8FF" />,
    },
    {
      id: 2,
      title: "Your items will be shipped with great care.",
      icon: <FiBox size="70" color="#FFCC84" />,
    },
    {
      id: 3,
      title: "Find the best deals and save more.",
      icon: <BiDollarCircle size="70" color="#C4FEB4" />,
    },
    {
      id: 4,
      title: "Great return policy on defected products.",
      icon: <FiHeart size="70" color="#FF8484" />,
    },
  ];

  return (
    <div style={{ margin: "50px 0" }}>
      <Text align="center" weight={700} sx={{ fontSize: "30px" }}>
        {title}
      </Text>
      <Text size="xl" align="center">
        {subTitle}
      </Text>
      <Grid sx={{ marginTop: "20px" }}>
        {features.map((feature) => {
          return (
            <Col key={feature.id} xs={12} sm={6} md={6} lg={6} xl={3} span={3}>
              <FeatureCard
                title={feature.title}
                icon={feature.icon}
                textColor="white"
                backgroundColor="black"
              />
            </Col>
          );
        })}
      </Grid>
    </div>
  );
};

export default Features;
