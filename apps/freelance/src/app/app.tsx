import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "redux/store";
import { getProfile, getRole } from "src/redux/userState/userSlice";
import { EMPLOYER, FREELANCER, GUEST } from "src/utils/constants/breakpoint";
import Login from "@pages/Login";
import Signup from "@pages/Signup";
import { RecoverPasswordRequest } from "@pages/RecoverPasswordRequest";
import { RecoverPasswordCheck } from "@pages/RecoverPasswordCheck";
import { RecoverPasswordReset } from "@pages/RecoverPasswordReset";
import { CreateProfile1 } from "@pages/Freelancer/CreateProfile1";
import { CreateEmployerProfile } from "@pages/Employer/CreateProfile";
import { RecoverPasswordUpdate } from "@pages/RecoverPasswordUpdate";
import { ViewProfile } from "@pages/Freelancer/ViewProfile";
import { Role } from "@pages/Role";
import {
	JobPostingFirstPage,
	JobPostingSecondPage,
	JobPostingThirdPage,
} from "@pages/NewJobPosting";
import { CreateProfile2 } from "@pages/Freelancer/CreateProfile2";
import { SearchWork } from "@pages/Freelancer/SearchWork";
import { EmployerJobsPage } from "@pages/Employer/EmployerJobsPage";
import { PrivateRoute, PublicRoute } from "src/protectedRoutes/protectedRoutes";
import TalentsPage from "@pages/Employer/Talents";
import NotFound from "@pages/NotFound";
import { StyledApp } from "./app.styled";

export function App() {
	const role = useSelector(getRole);
	const isProfile = useSelector(getProfile);

	return (
		<StyledApp>
			<GoogleOAuthProvider clientId={`${process.env["NX_APP_GOOGLE_KEY"]}`}>
				<Provider store={store}>
					<BrowserRouter>
						<Routes>
							{role === GUEST && (
								<>
									<Route element={<PrivateRoute />}>
										<Route element={<Role />} path="role" />
										<Route element={<SearchWork />} path="freelancer/searchwork" />
										<Route element={<EmployerJobsPage />} path="employer/my-jobs-page" />
										<Route element={<TalentsPage />} path="employer/talents" />
										<Route element={<CreateProfile1 />} path="/freelancer/create-profile1" />
										<Route element={<CreateProfile2 />} path="/freelancer/create-profile2" />
										<Route element={<ViewProfile />} path="/freelancer/view-profile" />
										<Route element={<CreateEmployerProfile />} path="/employer/create-profile" />
									</Route>
									<Route element={<PublicRoute path="role" />}>
										<Route element={<Login />} path="/" />
										<Route element={<Signup />} path="/signup" />
									</Route>
									<Route element={<Login />} path="/" />
								</>
							)}
							{role === FREELANCER && (
								<>
									<Route element={<PrivateRoute />}>
										{isProfile && <Route element={<SearchWork />} path="freelancer/searchwork" />}
										<Route element={<CreateProfile1 />} path="/freelancer/create-profile1" />
										<Route element={<CreateProfile2 />} path="/freelancer/create-profile2" />
										<Route element={<ViewProfile />} path="/freelancer/view-profile" />
									</Route>
									<Route element={<PublicRoute path="freelancer/searchwork" />}>
										<Route element={<Login />} path="/" />
										<Route element={<Signup />} path="/signup" />
									</Route>
									<Route element={<PublicRoute path="/freelancer/create-profile1" />}>
										<Route element={<Role />} path="role" />
									</Route>
									{!isProfile && (
										<Route element={<PublicRoute path="/freelancer/create-profile1" />}>
											<Route element={<SearchWork />} path="freelancer/searchwork" />
										</Route>
									)}
									<Route element={<Login />} path="/" />
								</>
							)}
							{role === EMPLOYER && (
								<>
									<Route element={<PrivateRoute />}>
										{isProfile && (
											<>
												<Route element={<EmployerJobsPage />} path="employer/my-jobs-page" />
												<Route element={<TalentsPage />} path="employer/talents" />
											</>
										)}

										<Route element={<CreateEmployerProfile />} path="/employer/create-profile" />
										<Route
											element={<JobPostingFirstPage />}
											path="/employer/create-new-job-first-page"
										/>
										<Route
											element={<JobPostingSecondPage />}
											path="/employer/create-new-job-second-page"
										/>
										<Route
											element={<JobPostingThirdPage />}
											path="/employer/create-new-job-third-page"
										/>
									</Route>
									<Route element={<PublicRoute path="employer/my-jobs-page" />}>
										<Route element={<Login />} path="/" />
										<Route element={<Signup />} path="/signup" />
									</Route>
									<Route element={<PublicRoute path="/employer/create-profile" />}>
										<Route element={<Role />} path="role" />
									</Route>
									{!isProfile && (
										<Route element={<PublicRoute path="/employer/create-profile" />}>
											<Route element={<EmployerJobsPage />} path="employer/my-jobs-page" />
											<Route element={<TalentsPage />} path="employer/talents" />
										</Route>
									)}
									<Route element={<Login />} path="/" />
								</>
							)}

							<Route element={<PublicRoute path="recover" />}>
								<Route path="recover-password" element={<RecoverPasswordRequest />} />
								<Route path="check-your-email" element={<RecoverPasswordCheck />} />
								<Route path="resetpassword/:token" element={<RecoverPasswordReset />} />
								<Route path="password-updated" element={<RecoverPasswordUpdate />} />
							</Route>

							<Route element={<Signup />} path="/signup" />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</BrowserRouter>
				</Provider>
			</GoogleOAuthProvider>
		</StyledApp>
	);
}

export default App;
