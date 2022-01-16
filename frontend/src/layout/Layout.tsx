import React, { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface LayoutProps {
  children: any;
}

const Layout = (children: any) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
