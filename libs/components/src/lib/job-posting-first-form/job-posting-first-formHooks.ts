import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addNewJobInfo } from "redux/jobs";
import { useAppDispatch } from "redux/hooks";
import { CREATE_NEW_JOB_SECOND_PAGE } from "utils/constants/links";
import { IJobPostingFirstForm, IUseJobPostingFirstForm } from "@freelance/components";

export const useJobPostingFirstFormHook = (): IUseJobPostingFirstForm => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const onSubmit: SubmitHandler<IJobPostingFirstForm> = data => {
		dispatch(addNewJobInfo(data));
		navigate(CREATE_NEW_JOB_SECOND_PAGE);
	};

	return {
		onSubmit,
	};
};
