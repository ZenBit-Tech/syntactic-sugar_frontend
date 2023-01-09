import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledButton, StyledTitle } from "@freelance/components";
import { JobsInterface, useGetJobsByEmployerQuery } from "redux/jobs/jobs.api";
import { useSendInvitationMutation } from "redux/invitation/invitationApi";
import { SelectOptions } from "utils/select-options/options";
import { SelectElement, Wrapper, Form } from "./invitation-card.styles";

export interface InvitationCardProps {
	freelancer_id?: string;
	onCancel: () => void;
}

export interface IInvitation {
	job_id?: SelectOptions;
}

export function InvitationCard({ freelancer_id, onCancel }: InvitationCardProps) {
	const { t } = useTranslation();
	const { data } = useGetJobsByEmployerQuery();
	const [options, setOptions] = useState<SelectOptions[]>();
	const { handleSubmit, control, reset } = useForm<IInvitation>();
	const [sendInvitation, { isSuccess, isError }] = useSendInvitationMutation();

	useEffect(() => {
		const option = data?.map(job => {
			return { value: job.id, label: job.title };
		});

		setOptions(option);
	}, [data]);

	const onSubmit = async (values: IInvitation) => {
		const invitation = {
			job_id: values.job_id?.value,
			freelancer_id,
		};

		try {
			await sendInvitation(invitation);
		} catch (error) {
			toast.error("Error");
		}

		reset();
		onCancel();
	};

	return (
		<Wrapper>
			<StyledTitle tag="h1" fontSize="lg" fontWeight={500}>
				{t("talents.invitation")}
			</StyledTitle>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="job_id"
					control={control}
					render={({ field }) => (
						<SelectElement
							options={options}
							{...field}
							hideSelectedOptions={true}
							noOptionsMessage={() => "no options to show"}
							menuPosition="fixed"
							isClearable
							classNamePrefix="react-select"
							placeholder={t("talents.select")}
						/>
					)}
				/>

				<StyledButton type="submit" buttonSize="filter" buttonColor="lightRed" fontSize="md">
					<strong>{t("talents.send")}</strong>
				</StyledButton>
				<ToastContainer />
			</Form>
		</Wrapper>
	);
}

export default InvitationCard;
