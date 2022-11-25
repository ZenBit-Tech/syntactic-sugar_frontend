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
import SendProposal from "@pages/SendProposal";

export function App() {
	return (
		<StyledApp>
			<GoogleOAuthProvider clientId="110800861359-ddacb8lgsjcjbjoftnuvmmsr56tt65m3.apps.googleusercontent.com">
				<Provider store={store}>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/signup" element={<Signup />} />
							<Route path="/role" element={<h1>hello</h1>} />
							<Route path="/recover-password" element={<RecoverPasswordRequest />} />
							<Route path="/check-your-email" element={<CheckYourEmail />} />
							<Route path="/resetpassword/:token" element={<RecoverPasswordReset />} />
							<Route path="/password-updated" element={<PasswordUpdated />} />
							<Route path="/send-proposal-freelancer" element={<SendProposal />} />
						</Routes>
					</BrowserRouter>
				</Provider>
			</GoogleOAuthProvider>
		</StyledApp>
	);
}

export default App;
