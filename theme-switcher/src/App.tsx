import "./App.css";
import ThemeToggleButton from "./ThemeToggleButton";
import { ThemeProvider } from "./useTheme";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
