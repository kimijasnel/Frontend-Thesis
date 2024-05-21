import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { CssVarsProvider } from "@mui/joy";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";

// import Charts from "./pages/Charts";
function App() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        <Sidebar />
        <Header />
      </Box>
    </CssVarsProvider>
  );
}

export default App;
