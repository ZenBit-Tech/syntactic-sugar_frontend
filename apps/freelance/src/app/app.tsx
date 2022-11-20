import { StyledApp } from "./app.styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import LoginPage from "@pages/login-page/login-page";
import SignupPage from "@pages/signup-page/signup-page";
import { RecoverPassFirstPage, CheckYourEmail } from "@pages/recoverpass-first-page";
import { RecoverPasswordThirdPage } from "@pages/recoverpass-third-page/recoverpassword-third-page";
import { PasswordUpdated } from "@pages/recoverpass-third-page/password-updated";

import store from "redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

export function App() {
	return (
		<StyledApp>
			<GoogleOAuthProvider clientId={`${process.env["NX_APP_GOOGLE_KEY"]}`}>
				<Provider store={store}>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<LoginPage />} />
							<Route path="/signup" element={<SignupPage />} />
							<Route path="/role" element={<h1>hello</h1>} />
							<Route path="/recover-password" element={<RecoverPassFirstPage />} />
							<Route path="/check-your-email" element={<CheckYourEmail />} />
							<Route path="/resetpassword/:token" element={<RecoverPasswordThirdPage />} />
							<Route path="/password-updated" element={<PasswordUpdated />} />
						</Routes>
					</BrowserRouter>
				</Provider>
			</GoogleOAuthProvider>
		</StyledApp>
	);
}

export default App;
