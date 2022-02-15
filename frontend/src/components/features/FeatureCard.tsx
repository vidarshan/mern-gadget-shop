import { Card, Text } from "@mantine/core";
import React, { PropsWithChildren } from "react";

interface IFeatureCard {
  title: string;
  icon: any;
  backgroundColor: string;
  textColor: string;
}

const FeatureCard: React.FC<PropsWithChildren<IFeatureCard>> = ({
  title,
  icon,
  backgroundColor,
  textColor,
}) => {
  return (
    <Card
      // sx={{ backgroundColor }}
      shadow="xs"
      className="height-full-perc flex-container-vertical-align"
      padding="xl"
      withBorder
      radius="lg"
    >
      <Text
        // color={textColor}
        align="center"
      >
        {icon}
      </Text>
      <Text
        // color={textColor}
        size="xl"
        weight={600}
        align="center"
      >
        {title}
      </Text>
    </Card>
  );
};

export default FeatureCard;
