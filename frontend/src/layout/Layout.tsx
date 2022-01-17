import React, { PropsWithChildren, useState, useEffect } from "react";
import {
  Container,
  useMantineTheme,
  Header as Head,
  MediaQuery,
  Burger,
  TextInput,
  ActionIcon,
  Button,
} from "@mantine/core";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AiOutlineUsb } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BiShoppingBag, BiUser } from "react-icons/bi";

interface LayoutProps {
  children: any;
}

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const navigate = useNavigate();

  const openMobileNavbar = () => {
    if (opened) {
      return (
        <div>
          <div style={{ backgroundColor: "yellow", height: "100vh" }}>
            loremewjfnwjfnjsdasas
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            minHeight: "90vh",
          }}
        >
          <Container
            sx={{
              marginTop: "7rem",
              maxWidth: "1720px",
              backgroundColor: "red",
            }}
          >
            {children}
          </Container>
        </div>
      );
    }
  };

  useEffect(() => {}, [opened]);

  return (
    <>
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
          {/* {openMobileNavbar()} */}
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
      {openMobileNavbar()}

      <Footer />
    </>
  );
};

export default Layout;
