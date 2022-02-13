import { Button, Card, Group, Table, Text } from "@mantine/core";
import React from "react";
import Head from "../../components/Head";
import Layout from "../../layout/Layout";

const UsersList = () => {
  const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ];

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));

  return (
    <Layout>
      <Head title="Users List | Admin" />

      <Card withBorder shadow="sm" radius="md" padding="xl">
        <Group sx={{ marginBottom: "1rem" }} direction="row" position="apart">
          <Text weight={700}>Users</Text>
          <Button radius="lg" color="dark">
            Add new Users
          </Button>
        </Group>
        <Table
          horizontalSpacing="xl"
          verticalSpacing="xs"
          striped
          highlightOnHover
        >
          <thead>
            <tr>
              <th>Element position</th>
              <th>Element name</th>
              <th>Symbol</th>
              <th>Atomic mass</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Card>
    </Layout>
  );
};

export default UsersList;
