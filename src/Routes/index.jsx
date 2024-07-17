//import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import VerifyOtpPage from "../Pages/VerifyOtpPage";
import LoginPage from "../Pages/LoginPage";
import UserSignupPage from "../Pages/UserSignupPage";
import NotFoundPage from "../Pages/NotFoundPage";
import ForgotPage from "../Pages/ForgotPage";



function AppRoutes() {
	return (
		<Router>
			<Routes>
      <Route path="/" element={<UserSignupPage/>} />
			<Route path="/verify-otp" element={<VerifyOtpPage/>} />
			<Route path="/login" element={<LoginPage/>} />
			<Route path="forgot-password" element={<ForgotPage/>} />
			<Route path="*" element={<NotFoundPage/>} />
			</Routes>
		</Router>
	);
}

export default AppRoutes;

