import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

export interface ProtectedRouteProps {
    children?: any;
    path: string;
}

export const PrivateRoute = ({ children, path }: ProtectedRouteProps) => {
    const token = useSelector((state: RootState) => state.user.token);
    return token ? children : <Navigate to={path} replace />;
};

export const PublicRoute = ({ children, path }: ProtectedRouteProps) => {
    const token = useSelector((state: RootState) => state.user.token);
    return !token ? children : <Navigate to={path} replace />;
};