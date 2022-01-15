import React, { useState } from "react";
import { BiShoppingBag, BiUser } from "react-icons/bi";
import {
  Header as Head,
  MediaQuery,
  Burger,
  Text,
  useMantineTheme,
  Button,
  ActionIcon,
} from "@mantine/core";

const Header = () => {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <Head height={70} padding="md" fixed>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Text>Application header</Text>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ActionIcon sx={{ margin: "10px" }} variant="outline" radius="md">
            <BiShoppingBag />
          </ActionIcon>
          <ActionIcon sx={{ margin: "10px" }} variant="outline" radius="md">
            <BiUser />
          </ActionIcon>
          <Button color="dark" sx={{ margin: "10px" }} radius="md">
            Sign Up
          </Button>
        </div>
      </div>
    </Head>
  );
};

export default Header;
