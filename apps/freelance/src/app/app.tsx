import { StyledApp } from "./app.styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "@pages/Login";
import Signup from "@pages/Signup";
import { RecoverPasswordRequest } from "@pages/RecoverPasswordRequest";
import { RecoverPasswordCheck } from "@pages/RecoverPasswordCheck";
import { RecoverPasswordReset } from "@pages/RecoverPasswordReset";
import { CreateProfile1 } from "@pages/Freelancer/CreateProfile1";
import { CreateEmployerProfile } from "@pages/Employer/CreateProfile";
import { RecoverPasswordUpdate } from "@pages/RecoverPasswordUpdate";
import { Invitation } from "@pages/Invitation";
import { Role } from "@pages/Role";
import {
	JobPostingFirstPage,
	JobPostingSecondPage,
	JobPostingThirdPage,
} from "@pages/NewJobPosting";
import store from "redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import SendProposal from "@pages/SendProposal";
import CreateProfile2 from "@pages/Freelancer/CreateProfile2";
import SearchWork from "@pages/Freelancer/SearchWork";

export function App() {
	return (
		<StyledApp>
			<GoogleOAuthProvider clientId="253619542281-miag0ub2aorap933406d1vg3bbte7j8m.apps.googleusercontent.com">
				<Provider store={store}>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/signup" element={<Signup />} />
							<Route path="/role" element={<Role />} />
							<Route path="/recover-password" element={<RecoverPasswordRequest />} />
							<Route path="/check-your-email" element={<RecoverPasswordCheck />} />
							<Route path="/resetpassword/:token" element={<RecoverPasswordReset />} />
							<Route path="/freelancer/send-proposal" element={<SendProposal />} />
							<Route path="/work-details" element={<h1>Work Details Page 4.1</h1>} />
							<Route path="/password-updated" element={<RecoverPasswordUpdate />} />
							<Route path="/invitation" element={<Invitation />} />
							<Route path="/freelancer/create-profile1" element={<CreateProfile1 />} />
							<Route path="/freelancer/create-profile2" element={<CreateProfile2 />} />
							<Route path="/freelancer/searchwork" element={<SearchWork />} />
							<Route path="/employer/create-profile1" element={<CreateEmployerProfile />} />
							<Route path="/employer/my-jobs" element={<h1>My jobs page 3.0</h1>} />
							<Route path="/create-new-job-first-page" element={<JobPostingFirstPage />} />
							<Route path="/create-new-job-second-page" element={<JobPostingSecondPage />} />
							<Route path="/create-new-job-third-page" element={<JobPostingThirdPage />} />
						</Routes>
					</BrowserRouter>
				</Provider>
			</GoogleOAuthProvider>
		</StyledApp>
	);
}

export default App;
