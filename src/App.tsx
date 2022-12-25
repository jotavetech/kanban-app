import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import { dark } from "./styles/theme";

import AppRoutes from "./Routes";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
