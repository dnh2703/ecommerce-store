import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "./routes";
import Login from "./pages/Login";
import NotFoundPage from "./components/common/NotFoundPage";

function App() {
  return (
    <div className="App dark bg-gray-900">
      <div className="bg-gray-900 h-full">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<MainLayout />}>{routes}</Route>
          <Route path="/not-found" element={<NotFoundPage />} />
          {/* <Route path="*" element={<Navigate to="/not-found" />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
