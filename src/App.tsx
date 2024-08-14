import Header from "./components/header/Header";
import styles from "./App.module.sass";
import { Box } from "@mui/material";
import { Footer } from "./components/footer/Footer";
import { Main } from "./components/main/Main";

function App() {
  return (
      <Box className={styles.app}>
        <Header />
        <Main />
        <Footer />
      </Box>
  );
}

export default App;
