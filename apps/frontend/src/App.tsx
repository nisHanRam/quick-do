import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { routePaths } from "./lib/routePaths";
import DashboardPage from "./pages/DashboardPage";
import TasksPage from "./pages/TasksPage";
import AuthPage from "./pages/AuthPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routePaths.AUTH} element={<AuthPage />} />
        <Route element={<MainLayout />}>
          <Route path={routePaths.DASHBOARD} element={<DashboardPage />} />
          <Route path={routePaths.TASKS} element={<TasksPage />} />
        </Route>
        <Route path="*" element={<Navigate to={routePaths.DASHBOARD} />} />
      </Routes>
    </Router>
  );
}

export default App;
