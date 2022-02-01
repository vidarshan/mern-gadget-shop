import { Col, Container, Grid, Text } from "@mantine/core";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { AiOutlineUsb } from "react-icons/ai";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#000", padding: "2rem" }}>
      <Container sx={{ maxWidth: "85vw" }}>
        <Grid>
          <Col
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            span={4}
            xs={12}
            sm={4}
            md={5}
            lg={4}
            xl={4}
          >
            <AiOutlineUsb color="white" size="28px" />
            <Text weight={700} sx={{ fontSize: "28px", color: "white" }}>
              Techstop
            </Text>
          </Col>
          <Col span={8} xs={12} sm={8} md={5} lg={8} xl={8}>
            <Grid>
              <Col span={6} xs={12} sm={12} md={12} lg={8} xl={9}>
                <Text
                  sx={{ margin: "10px 0", color: "white" }}
                  weight={600}
                  size="xl"
                >
                  About
                </Text>
                <Text
                  sx={{ margin: "10px 0", color: "white" }}
                  weight={600}
                  size="xl"
                >
                  Shop
                </Text>
                <Text
                  sx={{ margin: "10px 0", color: "white" }}
                  weight={600}
                  size="xl"
                >
                  Terms and Conditions
                </Text>
                <Text
                  sx={{ margin: "10px 0", color: "white" }}
                  weight={600}
                  size="xl"
                >
                  Privacy Policy
                </Text>
              </Col>
              <Col
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                span={6}
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={3}
              >
                <Col
                  span={12}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <FiTwitter color="white" size="30px" />
                  </div>
                  <div style={{ margin: "0 10px" }}>
                    <FiFacebook color="white" size="30px" />
                  </div>
                  <div>
                    <FiInstagram color="white" size="30px" />
                  </div>
                </Col>
              </Col>
            </Grid>
          </Col>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
