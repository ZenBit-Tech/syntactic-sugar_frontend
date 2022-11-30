import { StyledApp } from "./app.styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "@pages/Login";
import Signup from "@pages/Signup";
import { RecoverPasswordRequest } from "@pages/RecoverPasswordRequest";
import { RecoverPasswordCheck } from "@pages/RecoverPasswordCheck";
import { RecoverPasswordReset } from "@pages/RecoverPasswordReset";
import { CreateProfile1 } from "@pages/Freelancer/CreateProfile1";
import { CreateProfile2 } from "@pages/Freelancer/CreateProfile2";
import { RecoverPasswordUpdate } from "@pages/RecoverPasswordUpdate";
import { Invitation } from "@pages/Invitation";
import { ViewProfile } from "@pages/Freelancer/ViewProfile";
import { Role } from "@pages/Role";

import store from "redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

export function App() {
	return (
		<StyledApp>
			<GoogleOAuthProvider clientId={`${process.env["NX_APP_GOOGLE_KEY"]}`}>
				<Provider store={store}>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/signup" element={<Signup />} />
							<Route path="/role" element={<Role />} />
							<Route path="/recover-password" element={<RecoverPasswordRequest />} />
							<Route path="/check-your-email" element={<RecoverPasswordCheck />} />
              <Route path="/password-updated" element={<RecoverPasswordUpdate />} />
							<Route path="/resetpassword/:token" element={<RecoverPasswordReset />} />
							<Route path="/freelancer/create-profile1" element={<CreateProfile1 />} />
							<Route path="/freelancer/create-profile2" element={<CreateProfile2 />} />
							<Route path="/invitation" element={<Invitation />} />
							<Route path="/freelancer/view-profile" element={<ViewProfile />} />
						</Routes>
					</BrowserRouter>
				</Provider>
			</GoogleOAuthProvider>
		</StyledApp>
	);
}

export default App;
