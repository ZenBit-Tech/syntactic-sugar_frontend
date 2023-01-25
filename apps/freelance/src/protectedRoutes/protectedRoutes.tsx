import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useGetCurrentUserQuery } from "src/redux/userApi";

export interface ProtectedRouteProps {
	children: JSX.Element;
	path: string;
}

// const { data } = useGetCurrentUserQuery();
// const profile = data?.employer ? data?.employer : data?.freelancer;

// console.log(profile);

export const PrivateRoute = ({ children, path }: ProtectedRouteProps) => {
	const token = useSelector((state: RootState) => state.user.token);
	return token ? children : <Navigate to={path} replace />;
};

export const PublicRoute = ({ children, path }: ProtectedRouteProps) => {
	const token = useSelector((state: RootState) => state.user.token);
	return !token ? children : <Navigate to={path} replace />;
};
