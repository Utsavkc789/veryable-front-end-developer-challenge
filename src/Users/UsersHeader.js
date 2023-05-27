import React, { useState, useEffect, useContext } from "react";
import group from "../icons/group.svg";
import {
  Group,
  SegmentedControl,
  useMantineColorScheme,
  Box,
  Center,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
const UsersHeader = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        height: "64px",
        alignItems: "center",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        gap: "10px",
        fontSize: "22px",
        backgroundColor: "white",
      }}
    >
      <Group>
        <img src={group} style={{ height: "40px" }} />
        <p style={{ opacity: "0.7" }}>USERS</p>
      </Group>

      <SegmentedControl
        value={colorScheme}
        size="md"
        onChange={() => toggleColorScheme()}
        data={[
          {
            value: "light",
            label: (
              <Center>
                <IconSun /> <Box>Light</Box>
              </Center>
            ),
          },
          {
            value: "dark",
            label: (
              <Center>
                <IconMoon /> <Box>Dark</Box>
              </Center>
            ),
          },
        ]}
      ></SegmentedControl>
    </div>
  );
};

export default UsersHeader;
