import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/store";
import { unsetUserData } from "redux/userState/userSlice";

export interface IUseLogout {
	handleLogout: () => void;
}

export const useLogout = (): IUseLogout => {
	const dispatch: AppDispatch = useDispatch();

	const handleLogout = (): void => {
		dispatch(unsetUserData());
	};

	return {
		handleLogout,
	};
};
