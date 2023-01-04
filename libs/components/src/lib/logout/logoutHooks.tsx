import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/store";
import { unsetUserData } from "redux/userState/userSlice";

export interface IuseLogout {
    handleLogout: () => void;
}

export const useLogout = (): IuseLogout => {
    const dispatch: AppDispatch = useDispatch();

    const handleLogout = (): void => {
        dispatch(unsetUserData());
    }

    return {
        handleLogout,
    }
}