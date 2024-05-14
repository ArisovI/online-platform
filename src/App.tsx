import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Flex, AppShell, Burger, Paper, Button } from "@mantine/core";
import { FaSun, FaMoon } from "react-icons/fa";
import { useMantineColorScheme, useComputedColorScheme } from "@mantine/core";

import Buttons from "./components/Buttons";
import Text from "./components/Text";

import "./App.css";

function App() {
  const Component1: React.FC = () => <Buttons />;
  const Component2: React.FC = () => <Text />;

  const [opened, { toggle }] = useDisclosure();
  const [currentComponent, setCurrentComponent] = useState("component1");
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  console.log(computedColorScheme);

  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Flex
            justify="space-between"
            align="center"
            style={{ padding: "10px 20px" }}
          >
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <div>Quirky Mantine Tutorials</div>
            <Button size="sm" value="link" onClick={toggleColorScheme}>
              {computedColorScheme === "dark" ? <FaMoon /> : <FaSun />}
            </Button>
          </Flex>
        </AppShell.Header>

        <AppShell.Navbar p="md" style={{ gap: "10px" }}>
          <Button onClick={() => setCurrentComponent("component1")}>
            Component 1
          </Button>
          <Button onClick={() => setCurrentComponent("component2")}>
            Component 2
          </Button>
        </AppShell.Navbar>

        <AppShell.Main>
          {currentComponent === "component1" ? <Buttons /> : <Text />}
        </AppShell.Main>

        <AppShell.Footer p="lg">ETO THE FOOTER</AppShell.Footer>
      </AppShell>
    </>
  );
}

export default App;
