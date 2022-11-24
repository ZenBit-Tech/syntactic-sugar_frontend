import { StyledApp } from "./app.styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "@pages/Login";
import Signup from "@pages/Signup";
import { RecoverPasswordRequest } from "@pages/RecoverPasswordRequest";
import { CheckYourEmail } from "@pages/RecoverPasswordRequest/check-your-email";
import { RecoverPasswordReset } from "@pages/RecoverPasswordReset";
import { PasswordUpdated } from "@pages/RecoverPasswordReset/password-updated";
import store from "redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

export function App() {
	return (
		<StyledApp>
			<GoogleOAuthProvider clientId={`253619542281-miag0ub2aorap933406d1vg3bbte7j8m.apps.googleusercontent.com`}>
				<Provider store={store}>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/signup" element={<Signup />} />
							<Route path="/role" element={<h1>hello</h1>} />
							<Route path="/profile_1" element={<h1>profilePage3.1</h1>} />
							<Route path="/recover-password" element={<RecoverPasswordRequest />} />
							<Route path="/check-your-email" element={<CheckYourEmail />} />
							<Route path="/resetpassword/:token" element={<RecoverPasswordReset />} />
							<Route path="/password-updated" element={<PasswordUpdated />} />
						</Routes>
					</BrowserRouter>
				</Provider>
			</GoogleOAuthProvider>
		</StyledApp>
	);
}

export default App;
