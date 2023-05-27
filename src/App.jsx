import UsersPage from "./Users/UsersPage";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
function App() {
  const [colorScheme, setColorScheme] = useState("light");

  const toggleColorScheme = (value) => {
    localStorage.setItem("theme", colorScheme === "dark" ? "light" : "dark");
    setColorScheme(value || colorScheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setColorScheme(localStorage.getItem("theme") || "light");
  }, [colorScheme]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme: colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <div className="App">
          <Layout>
            <Router>
              <Routes>
                <Route path="/" element={<UsersPage />} />
              </Routes>
            </Router>
          </Layout>
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
