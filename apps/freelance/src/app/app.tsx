import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
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
import { CreateProfile2 } from "@pages/Freelancer/CreateProfile2";
import { SearchWork } from "@pages/Freelancer/SearchWork";
import { EmployerJobsPage } from "@pages/Employer/EmployerJobsPage";
import { StyledApp } from "./app.styled";
import { PrivateRoute, PublicRoute } from "src/protectedRoutes/protectedRoutes";
import { ROLES } from "src/utils/constants/roles";
import { getRole } from "src/redux/userState/userSlice";
import TalentsPage from "@pages/Employer/Talents";

export function App() {
	const role = useSelector(getRole);
	console.log(role)
	
	return (
		<StyledApp>
			<GoogleOAuthProvider clientId={`${process.env["NX_APP_GOOGLE_KEY"]}`}>
				<Provider store={store}>
					<BrowserRouter>
						<Routes>
							<Route path="/signup" element={<Signup />} />
							{role === "GUEST" && (
								<>
									<Route path="/role" element={
										<PrivateRoute path="/">
											<Role />
										</PrivateRoute>} />
									<Route path="/" element={
											<PublicRoute path="/role">
												<Login />
											</PublicRoute>}/>
								</>
							)}
							{role !== "EMPLOYER"  && (
								<>
									<Route path="/freelancer/searchwork" element={
											<PrivateRoute path="/">
												<SearchWork />
											</PrivateRoute>
										}
									/>
									<Route path="/" element={
											<PublicRoute path="/freelancer/searchwork">
												<Login />
											</PublicRoute>
										}
									/>
									<Route path="/role" element={<PublicRoute path="/freelancer/view-profile" />}/>
								</>
							)}
							{role !== "FREELANCER" && (
								<>
									<Route path="/employer/my-jobs-page" element={
											<PrivateRoute path="/">
												<EmployerJobsPage />
											</PrivateRoute>
										}
									/>
									<Route path="/" element={
											<PublicRoute path="employer/my-jobs-page">
												<Login />
											</PublicRoute>
										}
									/>
								</>
							)}
							
							<Route path="/recover-password" element={<RecoverPasswordRequest />} />
							<Route path="/check-your-email" element={<RecoverPasswordCheck />} />
							<Route path="/resetpassword/:token" element={<RecoverPasswordReset />} />
							<Route path="/password-updated" element={<RecoverPasswordUpdate />} />
						
							<Route path="/freelancer/create-profile1" element={<CreateProfile1 />} />
							<Route path="/freelancer/create-profile2" element={<CreateProfile2 />} />
							<Route path="/freelancer/view-profile" element={<ViewProfile />} />
							
							<Route path="/employer/create-profile" element={<CreateEmployerProfile />} />

							<Route path="/employer/create-new-job-first-page" element={<JobPostingFirstPage />} />
							<Route
								path="/employer/create-new-job-second-page"
								element={<JobPostingSecondPage />}
							/>
							<Route path="/employer/create-new-job-third-page" element={<JobPostingThirdPage />} />
							<Route path="/employer/talents" element={<TalentsPage />} />

						</Routes>
					</BrowserRouter>
				</Provider>
			</GoogleOAuthProvider>
		</StyledApp>
	);
}

export default App;
