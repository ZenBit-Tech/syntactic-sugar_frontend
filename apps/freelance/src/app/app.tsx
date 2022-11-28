import { StyledApp } from "./app.styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "@pages/Login";
import Signup from "@pages/Signup";
import { RecoverPasswordRequest } from "@pages/RecoverPasswordRequest";
import { RecoverPasswordCheck } from "@pages/RecoverPasswordCheck";
import { RecoverPasswordReset } from "@pages/RecoverPasswordReset";
import { ProfilePage } from "@freelance/components";
import { RecoverPasswordUpdate } from "@pages/RecoverPasswordUpdate";
import { Invitation } from "@pages/Invitation";

import store from "redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

export function App() {
	return (
		<StyledApp>
			<GoogleOAuthProvider clientId="253619542281-miag0ub2aorap933406d1vg3bbte7j8m.apps.googleusercontent.com">
				<Provider store={store}>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<ProfilePage />} />
							<Route path="/signup" element={<Signup />} />
							<Route path="/role" element={<h1>hello</h1>} />
							<Route path="/profile_1" element={<h1>profilePage3.1</h1>} />
							<Route path="/recover-password" element={<RecoverPasswordRequest />} />
							<Route path="/check-your-email" element={<RecoverPasswordCheck />} />
							<Route path="/resetpassword/:token" element={<RecoverPasswordReset />} />
							<Route path="/password-updated" element={<RecoverPasswordUpdate />} />
							<Route path="/invitation" element={<Invitation />} />
						</Routes>
					</BrowserRouter>
				</Provider>
			</GoogleOAuthProvider>
		</StyledApp>
	);
}

export default App;
