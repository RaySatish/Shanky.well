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
import About from "./pages/About"; // ABOUT
import Services from "./pages/Services";
import Consult from "./pages/Consult";
import Main from "./pages/Main";
import StudentDashboard from "./pages/StudentDashboard";
import WardenDashboard from "./pages/WardenDashboard";
import ChiefWardenDashboard from "./pages/ChiefWardenDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ChatPage from "./pages/ChatPage";
import JoinPage from "./pages/JoinPage";
import ChiefWardenDashboardMain from "./components/ChiefWardenDashboardMain";
import WardenDiagnosis from "./components/WardenDiagnosis";
import ChiefWardenDiagnosis from "./components/ChiefWardenDiagnosis";

import VideoChatWithDoctor from "./pages/VideoChatWithDoctor";

import Appointment from "./components/AppointmentForm";
import Dashboard from "./pages/Dashboard";
import Action from "./pages/Action";
import Doctors from "./components/Doctors";
import ReportEmail from "./pages/ReportEmail";

// const DashboardPage = () => <h1>Dashboard Page</h1>;
const ProfilePage = () => <h1>Profile Page</h1>;
const SettingsPage = () => <h1>Settings Page</h1>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/videochatwithdoctor" element={<VideoChatWithDoctor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/warden" element={<WardenDashboard />} />
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/appointment" element={<Appointment />} />
          <Route path="/admin/doctors" element={<Doctors />} />
          <Route path="/admin/report" element={<ReportEmail />} />
          <Route path="/admin/settings" element={<SettingsPage />} />
          <Route path="/admin/action" element={<Action />} />
        </Route>
        <Route path="/warden" element={<WardenDashboard />}>
          <Route path="/warden/dashboard" element={<WardenDiagnosis />} />
          <Route path="/warden/report" element={<SettingsPage />} />
        </Route>
        <Route path="/cwarden" element={<ChiefWardenDashboard />}>
          <Route
            path="/cwarden/dashboard"
            element={<ChiefWardenDashboardMain />}
          />
          <Route path="/cwarden/diagnosis" element={<ChiefWardenDiagnosis />} />
          <Route path="/cwarden/report" element={<SettingsPage />} />
        </Route>
        <Route path="/chief-warden" element={<ChiefWardenDashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/start" element={<Start />} />
        <Route path="/question" element={<Question />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/report" element={<Report />} />
        <Route path="/home" element={<Home />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/chat/joinpage" element={<JoinPage />} />
        <Route path="/chat/chatpage" element={<ChatPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
