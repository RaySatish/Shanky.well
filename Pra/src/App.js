import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import ForgetPassword from "./pages/ForgetPassword";
import Start from "./pages/Start";
import Quiz from "./pages/Quiz";
import Question from "./components/Question";
import Report from "./pages/Report";
import Consult from "./pages/Consult";
import Main from "./pages/Main";
import StudentDashboard from "./pages/StudentDashboard";
import ChiefWardenDashboard from "./pages/ChiefWardenDashboard";
import WardenDashboard from "./pages/WardenDashboard";
import AdminDashboard from "./pages/AdminDashboard";

const DashboardPage = () => <h1>Dashboard Page</h1>;
const ProfilePage = () => <h1>Profile Page</h1>;
const SettingsPage = () => <h1>Settings Page</h1>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/warden" element={<WardenDashboard />} />
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="/admin/dashboard" element={<DashboardPage />} />
          <Route path="/admin/profile" element={<ProfilePage />} />
          <Route path="/admin/settings" element={<SettingsPage />} />
        </Route>
        <Route path="/chief-warden" element={<ChiefWardenDashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/start" element={<Start />} />
        <Route path="/question" element={<Question />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/report" element={<Report />} />
        <Route path="/main" element={<Main />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
