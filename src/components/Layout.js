import {
  AppShell,
  Avatar,
  Flex,
  Header,
  Group,
  SegmentedControl,
  useMantineColorScheme,
  Box,
  Center,
  Text,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

function Layout({ children }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <AppShell
      header={
        <Header height={80}>
          <Flex h={80} justify={"space-around"} align={"center"}>
            <Group>
              <Avatar src={"/icons/group.svg"} />
              <Text
                fw={700}
                color={colorScheme === "dark" ? "gray.4" : "gray.9"}
              >
                USERS
              </Text>
            </Group>

            <Group position="center">
              <SegmentedControl
                value={colorScheme}
                size="sm"
                onChange={() => toggleColorScheme()}
                data={[
                  {
                    value: "light",
                    label: (
                      <Center>
                        <IconSun stroke={1.5} /> <Box>Light</Box>
                      </Center>
                    ),
                  },
                  {
                    value: "dark",
                    label: (
                      <Center>
                        <IconMoon stroke={1.5} /> <Box>Dark</Box>
                      </Center>
                    ),
                  },
                ]}
              ></SegmentedControl>
            </Group>
          </Flex>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}

export default Layout;
