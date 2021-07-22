import "./App.css";
import AppRouter from "./router/AppRouter";
import { GlobalProvider } from "./context/GlobalState";
import "./lib/font-awesome/css/all.min.css";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <AppRouter />
      </GlobalProvider>
    </div>
  );
}

export default App;
