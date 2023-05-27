import React, { useState, useEffect, useContext } from "react";
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

const UserCardComponent = (props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [list, setList] = useState(props.data);
  const mainColor = colorScheme === "dark" ? "gray.0" : "#4A4A4A";
  const secColor = colorScheme === "dark" ? "gray.5" : "#7E7E7E";
  const icon =
    props.info.role.toLowerCase() === "administrator"
      ? "/icons/admin.svg"
      : props.info.role.toLowerCase() === "user"
      ? "/icons/user.svg"
      : "/icons/viewer.svg";

  return (
    <Card radius={"lg"} my={"sm"} key={props.info.index} shadow="sm">
      <Flex align={"start"} justify={"space-between"}>
        <Flex align={"start"}>
          <Avatar mr={"xs"} size={"lg"} src={icon} />

          <Flex align={"start"} justify={"start"} direction={"column"}>
            <Text
              color={colorScheme === "dark" ? "gray.0" : "#4A4A4A"}
              sx={{ fontSize: "12px", fontWeight: "bolder" }}
            >
              {props.info.firstName} {props.info.lastName}
            </Text>

            <Text
              color={colorScheme === "dark" ? "gray.2" : "#4A4A4A"}
              sx={{ fontSize: "10px" }}
            >
              {props.info.role}
            </Text>

            <Text color={secColor} sx={{ fontSize: "10px" }}>
              {props.info.email}
            </Text>

            {props.info.isHidden ? (
              <Space />
            ) : (
              <Flex align={"start"} direction={"column"}>
                <Space h={15} />
                <Text color={mainColor} size={"11px"} fw={"bolder"}>
                  Address
                </Text>
                <Text color={mainColor} size={"11px"}>
                  {props.info.street}, {props.info.city}, {props.info.state}{" "}
                  {props.info.zip}
                </Text>
                <Space h={15} />
                <Text color={mainColor} size={"11px"} fw={"bolder"}>
                  Phone
                </Text>
                <Text color={mainColor} size={"11px"}>
                  {props.info.phone
                    .replace(/\D/g, "")
                    .replace(/^(\d{3})(\d{3})(\d{4})$/, "($1) $2-$3")}
                </Text>
                <Space h={15} />
                <Text color={mainColor} size={"11px"} fw={"bolder"}>
                  Created At
                </Text>
                <Text color={mainColor} size={"11px"}>
                  {moment(props.info.createdAt).format("M/d/YY h:mm A")}
                </Text>
                <Space h={15} />
                <Text color={mainColor} size={"11px"} fw={"bolder"}>
                  Last Logged In
                </Text>
                <Text color={mainColor} size={"11px"}>
                  {moment(props.info.lastLoggedIn).format("M/d/YY h:mm A")}
                </Text>
              </Flex>
            )}
          </Flex>
        </Flex>
        <ActionIcon
          onClick={() => {
            props.info.isHidden = !props.info.isHidden;
            setList([...list]);
          }}
        >
          {props.info.isHidden ? <IconChevronDown /> : <IconChevronUp />}
        </ActionIcon>
      </Flex>
    </Card>
  );
};

export default UserCardComponent;
