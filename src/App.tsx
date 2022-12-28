import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import { dark } from "./styles/theme";

import AppRoutes from "./Routes";
import { BoardsProvider } from "./contexts/boardsContext";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <BoardsProvider>
        <AppRoutes />
        <GlobalStyle />
      </BoardsProvider>
    </ThemeProvider>
  );
}

export default App;
