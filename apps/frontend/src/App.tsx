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
import LandingPage from "./pages/LandingPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routePaths.AUTH} element={<AuthPage />} />
        <Route path={routePaths.LANDING} element={<LandingPage />} />
        <Route element={<MainLayout />}>
          <Route path={routePaths.DASHBOARD} element={<DashboardPage />} />
          <Route path={routePaths.TASKS} element={<TasksPage />} />
          <Route
            path={`${routePaths.TASKS}/:taskId`}
            element={<TaskDetailsPage />}
          />
        </Route>
        <Route path="*" element={<Navigate to={routePaths.DASHBOARD} />} />
      </Routes>
    </Router>
  );
}

export default App;
