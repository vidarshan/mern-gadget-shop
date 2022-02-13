import { Button, Card, Group, Pagination, Table, Text } from "@mantine/core";
import React from "react";
import Head from "../../components/Head";
import Layout from "../../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import moment from "moment";
import { BiDetail, BiTrashAlt } from "react-icons/bi";

const UsersList = () => {
  const dispatch = useDispatch();
  const { getUsers } = bindActionCreators(actionCreators, dispatch);

  const { users, error, loading } = useSelector((state: State) => state.users);

  const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ];

  useEffect(() => {
    getUsers();
  }, [dispatch]);

  const rows =
    users &&
    Object.keys(users).length >= 3 &&
    users.map((user: any) => (
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.isAdmin ? "Yes" : "No"}</td>
        <td>{moment(user.createdAt).format("DD-MMM-YYYY hh:mm")}</td>

        <td>
          <Button color="dark" radius="xl">
            <BiDetail />
          </Button>
        </td>
        <td>
          <Button color="red" radius="xl" disabled>
            <BiTrashAlt />
          </Button>
        </td>
      </tr>
    ));

  return (
    <Layout>
      <Head title="Users List | Admin" />

      <Card shadow="md" radius="lg">
        <Group sx={{ marginBottom: "1rem" }} direction="row" position="apart">
          <Text weight={700}>Users</Text>
          <Button radius="lg" color="dark">
            Add new User
          </Button>
        </Group>
        {loading ? (
          <Loading />
        ) : (
          <Group position="center" direction="column">
            <Table horizontalSpacing="xl" verticalSpacing="xs" highlightOnHover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Is Admin</th>
                  <th>Joined Date</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </Group>
        )}
      </Card>
    </Layout>
  );
};

export default UsersList;
