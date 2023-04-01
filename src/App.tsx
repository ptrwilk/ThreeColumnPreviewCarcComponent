import { ThemeProvider, createTheme } from "@mui/material";
import "./styles.css";
import ThreeCardsPreview from "./Components/ThreeCardsPreview/ThreeCardsPreview";

const theme = createTheme({
  typography: {
    body1: {
      fontSize: 15,
    },
    h1: {
      fontSize: 40,
    },
    fontFamily: "Lexend Deca",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <ThreeCardsPreview />
      </div>
    </ThemeProvider>
  );
}

export default App;
