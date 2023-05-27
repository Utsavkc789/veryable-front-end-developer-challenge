import React, { useState, useEffect, useContext } from "react";
import datas from "../users.json";
import moment from "moment/moment";
import {
  Container,
  Card,
  Flex,
  Avatar,
  Text,
  Image,
  ActionIcon,
  Space,
  useMantineColorScheme,
  TextInput,
  NativeSelect,
  Grid,
} from "@mantine/core";
import {
  IconChevronUp,
  IconChevronDown,
  IconChevronsDown,
  IconChevronsUp,
} from "@tabler/icons-react";
const UsersPage = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const data = datas.map((item) => {
    return { ...item, isHidden: true };
  });

  const [list, setList] = useState(data);

  return (
    <Container>
      <Grid align="end">
        <Grid.Col span={8}>
          <TextInput
            placeholder="Search User...."
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
                    x.phone.toLowerCase().includes(value)
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
        const icon =
          item.role.toLowerCase() === "administrator"
            ? "/icons/admin.svg"
            : item.role.toLowerCase() === "user"
            ? "/icons/user.svg"
            : "/icons/viewer.svg";
        const mainColor = colorScheme === "dark" ? "gray.0" : "#4A4A4A";
        const secColor = colorScheme === "dark" ? "gray.5" : "#7E7E7E";
        return (
          <Card radius={"lg"} my={"sm"} key={index} shadow="sm">
            <Flex align={"start"} justify={"space-between"}>
              <Flex align={"start"}>
                <Avatar mr={"xs"} size={"lg"} src={icon} />

                <Flex align={"start"} justify={"start"} direction={"column"}>
                  <Text
                    color={colorScheme === "dark" ? "gray.0" : "#4A4A4A"}
                    sx={{ fontSize: "12px", fontWeight: "bolder" }}
                  >
                    {item.firstName} {item.lastName}
                  </Text>

                  <Text
                    color={colorScheme === "dark" ? "gray.2" : "#4A4A4A"}
                    sx={{ fontSize: "10px" }}
                  >
                    {item.role}
                  </Text>

                  <Text color={secColor} sx={{ fontSize: "10px" }}>
                    {item.email}
                  </Text>

                  {item.isHidden ? (
                    <Space />
                  ) : (
                    <Flex align={"start"} direction={"column"}>
                      <Space h={15} />
                      <Text color={mainColor} size={"10px"} fw={"bolder"}>
                        Address
                      </Text>
                      <Text color={mainColor} size={"10px"}>
                        {item.street}, {item.city}, {item.state} {item.zip}
                      </Text>
                      <Space h={15} />
                      <Text color={mainColor} size={"10px"} fw={"bolder"}>
                        Phone
                      </Text>
                      <Text color={mainColor} size={"10px"}>
                        {item.phone
                          .replace(/\D/g, "")
                          .replace(/^(\d{3})(\d{3})(\d{4})$/, "($1) $2-$3")}
                      </Text>
                      <Space h={15} />
                      <Text color={mainColor} size={"10px"} fw={"bolder"}>
                        Created At
                      </Text>
                      <Text color={mainColor} size={"10px"}>
                        {moment(item.createdAt).format("M/d/YY h:mm A")}
                      </Text>
                      <Space h={15} />
                      <Text color={mainColor} size={"10px"} fw={"bolder"}>
                        Last Logged In
                      </Text>
                      <Text color={mainColor} size={"10px"}>
                        {moment(item.lastLoggedIn).format("M/d/YY h:mm A")}
                      </Text>
                    </Flex>
                  )}
                </Flex>
              </Flex>
              <ActionIcon
                onClick={() => {
                  item.isHidden = !item.isHidden;
                  setList([...list]);
                }}
              >
                {item.isHidden ? <IconChevronDown /> : <IconChevronUp />}
              </ActionIcon>
            </Flex>
          </Card>
        );
      })}
    </Container>
  );
};

export default UsersPage;
