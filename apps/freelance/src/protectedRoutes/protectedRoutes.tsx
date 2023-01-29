import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

export interface ProtectedRouteProps {
	path: string;
}

export const PrivateRoute = () => {
	const token = useSelector((state: RootState) => state.user.token);
	return token ? <Outlet /> : <Navigate to="/" />;
};

export const PublicRoute = ({ path }: ProtectedRouteProps) => {
	const token = useSelector((state: RootState) => state.user.token);
	return !token ? <Outlet /> : <Navigate to={path} replace />;
};
