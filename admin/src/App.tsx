import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "./routes";
import { Login } from "@mui/icons-material";

function App() {
  return (
    <div className="App dark">
      <div className="bg-gray-900">
        <Routes>
          <Route element={<MainLayout />}>{routes}</Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
