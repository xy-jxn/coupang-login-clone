import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmailLogin from "./pages/EmailLogin";
import PhoneNumberLogin from "./pages/PhoneNumberLogin";
import QRcodeLogin from "./pages/QRcodeLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/email" element={<EmailLogin />} />
        <Route path="/phonenumber" element={<PhoneNumberLogin />} />
        <Route path="/QRcode" element={<QRcodeLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
