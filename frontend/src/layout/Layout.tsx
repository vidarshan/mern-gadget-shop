import React, { PropsWithChildren } from "react";
import { Container } from "@mantine/core";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface LayoutProps {
  children: any;
}

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "1920px",
        }}
      >
        <Container
          sx={{
            margin: "7rem 0",
            width: "100%",
          }}
        >
          {children}
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
