import { Card, Text } from "@mantine/core";
import React from "react";
import { BsExclamationCircleFill } from "react-icons/bs";
import Head from "../components/Head";
import Layout from "../layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <Head title="Not Found | Techstop" description="Shop for gadgets" />

      <div
        style={{
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsExclamationCircleFill size="30" />
        <Text sx={{ marginTop: "1rem", fontSize: "30px" }} weight={700}>
          404 | Not Found
        </Text>
      </div>
    </Layout>
  );
};

export default NotFound;
