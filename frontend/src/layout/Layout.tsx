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

          minHeight: "90vh",
        }}
      >
        <Container
          sx={{
            marginTop: "7rem",
            maxWidth: "1720px",
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
