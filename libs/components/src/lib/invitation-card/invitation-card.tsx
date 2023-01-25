import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { StyledButton, StyledTitle } from "@freelance/components";
import { SelectOptions } from "utils/select-options/options";
import { SelectElement, Wrapper, Form } from "./invitation-card.styles";
import { useInvitationCardHook } from "./invitation-cardHook";

export interface InvitationCardProps {
	freelancer_id: string;
	onCancel: () => void;
}

export interface IInvitationForm {
	job_id?: SelectOptions;
}

export function InvitationCard({ freelancer_id, onCancel }: InvitationCardProps) {
	const { t } = useTranslation();
	const {
		handleSubmit,
		control,
		reset,
		formState: { isDirty },
	} = useForm<IInvitationForm>();
	const { sendInvitation, freelancerProposal, isLoading, isSuccess, options } =
		useInvitationCardHook({ freelancer_id });

	const onSubmit = async (values: IInvitationForm) => {
		const invitation = {
			job_id: values.job_id?.value,
			freelancer_id,
		};

		try {
			if (
				(freelancerProposal &&
					freelancerProposal.filter(item => item.value !== invitation.job_id).length > 0) ||
				[]
			) {
				await sendInvitation(invitation);
				onCancel();
				reset();
			} else {
				toast.error(t("talents.proposalNotify"));
			}
		} catch (error) {
			toast.error(t("talents.errorNotify"));
		}
	};

	useEffect(() => {
		isSuccess && toast.success(t("talents.successNotify"));
	}, [isSuccess, t]);

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
							value={
								!field.value
									? null
									: options?.find(o => {
											return o.value === field.value;
									  })
							}
							hideSelectedOptions={true}
							noOptionsMessage={() => "no options to show"}
							menuPosition="fixed"
							classNamePrefix="react-select"
							placeholder={t("talents.select")}
						/>
					)}
				/>
				{isLoading ? (
					<StyledButton
						type="submit"
						buttonSize="filter"
						buttonColor="lightRed"
						fontSize="md"
						disabled
					>
						<strong>{t("talents.sending")}</strong>
					</StyledButton>
				) : (
					<StyledButton
						type="submit"
						buttonSize="filter"
						buttonColor="lightRed"
						fontSize="md"
						disabled={!isDirty}
					>
						<strong>{t("talents.send")}</strong>
					</StyledButton>
				)}
			</Form>
		</Wrapper>
	);
}

export default InvitationCard;
