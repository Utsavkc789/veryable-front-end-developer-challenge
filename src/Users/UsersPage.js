import React, { useState } from "react";
import datas from "../users.json";
import moment from "moment/moment";
import {
  Container,
  ActionIcon,
  Space,
  TextInput,
  NativeSelect,
  Grid,
} from "@mantine/core";
import { IconChevronsDown, IconChevronsUp } from "@tabler/icons-react";
import UserCardComponent from "./UserCardComponent";

const UsersPage = () => {
  const data = datas.map((item) => {
    return { ...item, isHidden: true };
  });

  const [list, setList] = useState(data);

  return (
    <Container>
      <Grid align="end">
        <Grid.Col span={8}>
          <TextInput
            placeholder="Search for User...."
            label="Search User"
            onChange={(e) => {
              const value = e.target.value.toLowerCase();
              if (!value) {
                setList(data);
              } else {
                const users = data.filter(
                  (x) =>
                    x.firstName.toLowerCase().includes(value) ||
                    x.lastName.toLowerCase().includes(value) ||
                    x.email.toLowerCase().includes(value) ||
                    x.phone.toLowerCase().includes(value) ||
                    x.role.toLowerCase().includes(value) ||
                    x.street.toLowerCase().includes(value) ||
                    x.city.toLowerCase().includes(value) ||
                    x.state.toLowerCase().includes(value) ||
                    x.zip.toLowerCase().includes(value)
                );
                setList(users);
              }
            }}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <NativeSelect
            label="Roles"
            data={[
              { value: "All", label: "All" },
              { value: "Administrator", label: "Admin" },
              { value: "Viewer", label: "Viewer" },
              { value: "User", label: "User" },
            ]}
            onChange={(e) => {
              if (e.target.value.toLowerCase() === "all") {
                setList(data);
              } else {
                setList(
                  data.filter(
                    (x) => x.role.toLowerCase() === e.target.value.toLowerCase()
                  )
                );
              }
            }}
          />
        </Grid.Col>

        <Grid.Col span={1}>
          <ActionIcon
            size={"lg"}
            onClick={(e) => {
              setList([...list.map((x) => ({ ...x, isHidden: !x.isHidden }))]);
            }}
          >
            {list.length === list.filter((x) => !x.isHidden).length ? (
              <IconChevronsUp />
            ) : (
              <IconChevronsDown />
            )}
          </ActionIcon>
        </Grid.Col>
      </Grid>
      <Space h={20} />
      {list.map((item, index) => {
        return <UserCardComponent info={item} key={index} data={data} />;
      })}
    </Container>
  );
};

export default UsersPage;
