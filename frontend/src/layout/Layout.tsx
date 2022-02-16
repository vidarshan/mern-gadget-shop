import React, { PropsWithChildren, useEffect, useState } from "react";
import {
  Container,
  useMantineTheme,
  Header as Head,
  MediaQuery,
  Burger,
  TextInput,
  ActionIcon,
  Button,
  Grid,
  Col,
  Text,
  Badge,
  Select,
} from "@mantine/core";
import Footer from "../components/Footer";
import { AiOutlineUsb } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BiLogOut, BiShoppingBag, BiUser } from "react-icons/bi";
import { bindActionCreators } from "redux";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from ".././state";
import { getProduct } from "../state/action-creators";
// import { logout } from "../actions/userActions";

interface LayoutProps {
  children: any;
}

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
  const [value, setValue] = useState("");
  const [keyword, setKeyword] = useState("");

  const { userInfo } = useSelector((state: State) => state.userLogin);
  const { cartItems } = useSelector((state: State) => state.cart);
  const { products } = useSelector((state: State) => state.products);
  const { quickSearch } = useSelector((state: State) => state.quickSearch);
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { logout, getProducts, quickSearchProducts } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handlerNavigate = (route: string) => {
    navigate(route);
    setOpened(false);
  };

  useEffect(() => {
    getProducts(1);
  }, [dispatch]);

  const openMobileNavbar = () => {
    if (opened) {
      return (
        <div className="mobile-header">
          <Grid>
            <Col
              onClick={() => handlerNavigate("/")}
              className="flex-container"
              sx={{ marginTop: "2rem" }}
              span={12}
            >
              <AiOutlineUsb />
              <Text weight={500} size="xl" align="center">
                Techstop
              </Text>
            </Col>
            <Col
              onClick={() => handlerNavigate("/")}
              sx={{ marginTop: "1rem" }}
              span={12}
            >
              <Text color="gray" weight={500} size="xl" align="center">
                Home
              </Text>
            </Col>
            <Col
              onClick={() => handlerNavigate("/shop")}
              sx={{ marginTop: "1rem" }}
              span={12}
            >
              <Text color="gray" weight={500} size="xl" align="center">
                Shop
              </Text>
            </Col>
            <Col
              onClick={() => handlerNavigate("/cart")}
              sx={{ marginTop: "1rem" }}
              span={12}
            >
              <Text color="gray" weight={500} size="xl" align="center">
                Cart
              </Text>
            </Col>
            <Col sx={{ marginTop: "1rem" }} span={12}>
              <Text
                onClick={() => handlerNavigate("/profile")}
                weight={500}
                size="xl"
                align="center"
                color="gray"
              >
                Profile
              </Text>
            </Col>
            <Col
              onClick={() => handlerNavigate("/login")}
              sx={{ marginTop: "1rem" }}
              span={12}
            >
              <Text color="gray" weight={500} size="xl" align="center">
                Log In
              </Text>
            </Col>
          </Grid>
        </div>
      );
    } else {
      return (
        <>
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
                maxWidth: "1620px",
                width: "100%",
              }}
            >
              {children}
            </Container>
          </div>

          <Footer />
        </>
      );
    }
  };

  const handlerSearch = (value: any) => {
    quickSearchProducts(value);
  };

  const handlerSearchSelect = (id: any) => {
    getProduct(id);
    navigate(`/product/${id}`);
  };

  const handlerLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (value !== "") {
      navigate(`/admin/${value}`);
    }
  }, [value]);

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
                Techstop{" "}
              </Link>
            </MediaQuery>
          </div>

          <div className="flex-container-no-horizontal-align">
            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              <Select
                placeholder="Search for an item..."
                size="sm"
                nothingFound="No products"
                icon={<FiSearch />}
                onSearchChange={(e) => handlerSearch(e)}
                onChange={(e) => handlerSearchSelect(e)}
                radius="lg"
                data={quickSearch}
                searchable
              />
              {/* <TextInput
                icon={<FiSearch />}
                size="sm"
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => handlerSearch(e.key)}
                radius="lg"
                placeholder="Search for an item..."
              /> */}
            </MediaQuery>

            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              <Button
                radius="lg"
                sx={{ margin: "10px", backgroundColor: "#373a40" }}
                leftIcon={<BiShoppingBag />}
                onClick={() => navigate("/cart")}
              >
                {cartItems && cartItems.length ? (
                  <Badge variant="filled" color="red">
                    {cartItems.length}
                  </Badge>
                ) : (
                  <Badge variant="filled" color="red">
                    0
                  </Badge>
                )}
              </Button>
            </MediaQuery>
            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              <ActionIcon
                size="lg"
                onClick={() => navigate("/profile")}
                sx={{ margin: "10px" }}
                variant="default"
                radius="lg"
              >
                <BiUser />
              </ActionIcon>
            </MediaQuery>
            {userInfo && (
              <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                <ActionIcon
                  color="red"
                  size="lg"
                  onClick={() => handlerLogout()}
                  sx={{ margin: "10px" }}
                  variant="outline"
                  radius="lg"
                >
                  <BiLogOut />
                </ActionIcon>
              </MediaQuery>
            )}
            {!userInfo && (
              <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                <Button
                  onClick={() => navigate("/signup")}
                  color="dark"
                  variant="filled"
                  sx={{ margin: "10px" }}
                  radius="lg"
                  size="sm"
                >
                  Sign Up
                </Button>
              </MediaQuery>
            )}
          </div>
        </div>
      </Head>
      {openMobileNavbar()}
    </>
  );
};

export default Layout;
