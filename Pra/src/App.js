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
import ChiefWardenDashboard from "./pages/ChiefWardenDashboard";
import WardenDashboard from "./pages/WardenDashboard";
import AdminDashboard from "./pages/AdminDashboard";
<<<<<<< HEAD
import ChatPage from "./pages/ChatPage";
import JoinPage from "./pages/JoinPage";
=======
import ChatPage from './pages/ChatPage';
import JoinPage from './pages/JoinPage';
import WardenDashboardMain from './components/WardenDashboardMain';
import ChiefWardenDashboardMain from './components/ChiefWardenDashboardMain';
import WardenDiagnosis from './components/WardenDiagnosis';
import ChiefWardenDiagnosis from './components/ChiefWardenDiagnosis';
>>>>>>> 5b351d38457ca30c203cbb94c589ab2ae93476cd

import VideoChatWithDoctor from "./pages/VideoChatWithDoctor";

import Appointment from "./components/AppointmentForm";
import Dashboard from "./pages/Dashboard";
import Action from "./pages/Action";

// const DashboardPage = () => <h1>Dashboard Page</h1>;
const ProfilePage = () => <h1>Profile Page</h1>;
const SettingsPage = () => <h1>Settings Page</h1>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/videochatwithdoctor" element={<VideoChatWithDoctor />} />
        <Route path="/login" element={<Login />} />

        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/warden" element={<WardenDashboard />} />
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/appointment" element={<Appointment />} />
          <Route path="/admin/settings" element={<SettingsPage />} />
          <Route path="/admin/action" element={<Action />} />
        </Route>
        <Route path="/warden" element={<WardenDashboard />}>
          <Route path="/warden/dashboard" element={<WardenDashboardMain />} />
          <Route path="/warden/diagnosis" element={<WardenDiagnosis />} />
          <Route path="/warden/report" element={<SettingsPage />} />
        </Route>
        <Route path="/cwarden" element={<ChiefWardenDashboard />}>
          <Route path="/cwarden/dashboard" element={<ChiefWardenDashboardMain />} />
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
        <Route path="/main" element={<Main />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/chat/joinpage" element={<JoinPage />} />
        <Route path="/chat/chatpage" element={<ChatPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
