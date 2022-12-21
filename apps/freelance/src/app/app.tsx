import { GoogleOAuthProvider } from "@react-oauth/google";
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
import { ViewProfile } from "@pages/Freelancer/ViewProfile";
import { Role } from "@pages/Role";
import {
	JobPostingFirstPage,
	JobPostingSecondPage,
	JobPostingThirdPage,
} from "@pages/NewJobPosting";
import store from "redux/store";
import { SendProposal } from "@pages/SendProposal";
import { CreateProfile2 } from "@pages/Freelancer/CreateProfile2";
import { SearchWork } from "@pages/Freelancer/SearchWork";
import { EmployerJobsPage } from "@pages/EmployerJobsPage";
import { ProposalsPage } from "@pages/Freelancer/ProposalsPage";
import { StyledApp } from "./app.styled";

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
							<Route path="/resetpassword/:token" element={<RecoverPasswordReset />} />
							<Route path="/freelancer/send-proposal" element={<SendProposal />} />
							<Route path="/work-details" element={<h1>Work Details Page 4.1</h1>} />
							<Route path="/password-updated" element={<RecoverPasswordUpdate />} />
							<Route path="/resetpassword/:token" element={<RecoverPasswordReset />} />
							<Route path="/freelancer/create-profile1" element={<CreateProfile1 />} />
							<Route path="/freelancer/create-profile2" element={<CreateProfile2 />} />
							<Route path="/invitation" element={<Invitation />} />
							<Route path="/freelancer/view-profile" element={<ViewProfile />} />
							<Route path="/freelancer/create-profile1" element={<CreateProfile1 />} />
							<Route path="/freelancer/create-profile2" element={<CreateProfile2 />} />
							<Route path="/freelancer/searchwork" element={<SearchWork />} />
							<Route path="/freelancer/proposals" element={<ProposalsPage />} />
							<Route path="/employer/create-profile" element={<CreateEmployerProfile />} />
							<Route path="/employer/my-jobs-page" element={<EmployerJobsPage />} />
							<Route path="/employer/create-new-job-first-page" element={<JobPostingFirstPage />} />
							<Route
								path="/employer/create-new-job-second-page"
								element={<JobPostingSecondPage />}
							/>
							<Route path="/employer/create-new-job-third-page" element={<JobPostingThirdPage />} />
						</Routes>
					</BrowserRouter>
				</Provider>
			</GoogleOAuthProvider>
		</StyledApp>
	);
}

export default App;
