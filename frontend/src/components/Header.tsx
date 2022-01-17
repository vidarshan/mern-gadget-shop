import React, { useState } from "react";
import { BiShoppingBag, BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import {
  Header as Head,
  MediaQuery,
  Burger,
  Text,
  useMantineTheme,
  Button,
  ActionIcon,
  TextInput,
} from "@mantine/core";
import { AiOutlineUsb } from "react-icons/ai";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

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

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AiOutlineUsb />
          <Link className="header-home" to="/">
            Techstop
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextInput
            icon={<FiSearch />}
            radius="md"
            placeholder="Search for an item..."
          />
          <ActionIcon sx={{ margin: "10px" }} variant="outline" radius="md">
            <BiShoppingBag />
          </ActionIcon>

          <ActionIcon
            onClick={() => navigate("/profile")}
            sx={{ margin: "10px" }}
            variant="outline"
            radius="md"
          >
            <BiUser />
          </ActionIcon>
          <Button
            onClick={() => navigate("/signup")}
            size="sm"
            color="dark"
            sx={{ margin: "10px" }}
            radius="md"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </Head>
  );
};

export default Header;
