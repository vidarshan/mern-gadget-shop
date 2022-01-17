import { useState, useEffect } from "react";
import { BiShoppingBag, BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import {
  Header as Head,
  MediaQuery,
  Burger,
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

  const openMobileNavbar = () => {
    if (opened) {
      return (
        <div>
          <div style={{ backgroundColor: "yellow", height: "100vh" }}>
            loremewjfnwjfnjsdasas
          </div>
        </div>
      );
    }
  };

  useEffect(() => {}, [opened]);

  return (
    <Head height={70} padding="md" fixed>
      <div className="flex-container-horizontal-align-space-between height-full-perc ">
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        {openMobileNavbar()}
        <div className="flex-container-no-horizontal-align">
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <AiOutlineUsb />
          </MediaQuery>
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Link className="header-home" to="/">
              Techstop
            </Link>
          </MediaQuery>
        </div>

        <div className="flex-container-no-horizontal-align">
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <TextInput
              icon={<FiSearch />}
              radius="md"
              placeholder="Search for an item..."
            />
          </MediaQuery>

          <ActionIcon sx={{ margin: "10px" }} variant="default" radius="md">
            <BiShoppingBag />
          </ActionIcon>

          <ActionIcon
            onClick={() => navigate("/profile")}
            sx={{ margin: "10px" }}
            variant="default"
            radius="md"
          >
            <BiUser />
          </ActionIcon>
          <Button
            onClick={() => navigate("/signup")}
            color="dark"
            variant="filled"
            sx={{ margin: "10px" }}
            radius="md"
            size="xs"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </Head>
  );
};

export default Header;
