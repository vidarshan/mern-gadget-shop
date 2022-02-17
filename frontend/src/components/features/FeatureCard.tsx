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
}) => {
  return (
    <Card
      shadow="xs"
      className="height-full-perc flex-container-vertical-align"
      padding="xl"
      withBorder
      radius="lg"
    >
      <Text align="center">{icon}</Text>
      <Text size="xl" weight={700} align="center">
        {title}
      </Text>
    </Card>
  );
};

export default FeatureCard;
