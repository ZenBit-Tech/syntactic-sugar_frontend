import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useAppSelector } from "redux/example-hooks";
import {
	useCreateFreelancerMutation,
	useAddPublishedMutation,
} from "redux/createFreelancer/freelancer-pageApi";
import { SEARCH_WORK } from "src/utils/constants/breakpoint";
import { setUserData } from "redux/userState/userSlice";
import { StyledButton } from "@freelance/components";

/* eslint-disable-next-line */

export function ModalWindow() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const freelancerState = useAppSelector(state => state.freelancer);
	const [createFreelancer, { data: userData, isSuccess, isError }] = useCreateFreelancerMutation();
	const [addPublished] = useAddPublishedMutation();
	const handlePublishedButton = async () => {
		try {
			await createFreelancer(freelancerState);
			await addPublished({ isPublished: true });
			navigate(SEARCH_WORK);
		} catch (error) {
			alert(error);
		}
	};

	const handleWithoutPublishButton = () => {
		createFreelancer(freelancerState);
		navigate(SEARCH_WORK);
	};

	useEffect(() => {
		if (isSuccess) {
			dispatch(setUserData({ token: userData?.token, role: userData?.role }));
		}
		if (isError) {
			toast.error(t("recoverPassForm.errorMessageServerError"));
		}
	}, [isSuccess, isError]);

	return (
		<>
			<StyledButton
				type="button"
				buttonColor="redGradient"
				buttonSize="sm"
				fontSize="md"
				onClick={handleWithoutPublishButton}
			>
				<strong>{t("freelancer.createProfile.modalBtnNo")}</strong>
			</StyledButton>
			<StyledButton
				type="button"
				buttonColor="redGradient"
				buttonSize="sm"
				fontSize="md"
				onClick={handlePublishedButton}
			>
				<strong>{t("freelancer.createProfile.modalBtnYes")}</strong>
			</StyledButton>
		</>
	);
}

export default ModalWindow;
