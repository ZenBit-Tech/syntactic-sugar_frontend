import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { StyledButton, StyledTitle } from "@freelance/components";
import { useGetJobsByEmployerQuery } from "redux/jobs/jobs.api";
import { SelectOptions } from "utils/select-options/options";
import {
	useGetFreelancerByIdQuery,
	useSendInvitationMutation,
} from "redux/createFreelancer/freelancer-pageApi";
import { SelectElement, Wrapper, Form } from "./invitation-card.styles";

export interface InvitationCardProps {
	freelancer_id: string;
	onCancel: () => void;
}

export interface IInvitationForm {
	job_id?: SelectOptions;
}

export function InvitationCard({ freelancer_id, onCancel }: InvitationCardProps) {
	const { t } = useTranslation();
	const { data } = useGetJobsByEmployerQuery();
	const { data: oneFreelancer } = useGetFreelancerByIdQuery(freelancer_id);
	const { handleSubmit, control, reset } = useForm<IInvitationForm>();
	const [sendInvitation, { isLoading, isSuccess }] = useSendInvitationMutation();

	const employerJobsArr = data?.map(job => {
		return { value: job.id, label: job.title };
	});

	const employerJobsIdArr = employerJobsArr?.map(item => item.value);

	const freelancerInvitationsIdArr =
		oneFreelancer &&
		oneFreelancer.invitation
			.map(inv => inv.job)
			.map(i => i.id)
			.filter(item => item);

	const diff = function (arr1: string[], arr2: string[]) {
		return arr1
			?.filter((i: string) => !arr2.includes(i))
			.concat(arr2.filter((i: string) => !arr1.includes(i)));
	};

	const freeJobs =
		employerJobsIdArr && freelancerInvitationsIdArr
			? diff(employerJobsIdArr, freelancerInvitationsIdArr)
			: [];

	const options = employerJobsArr?.filter(
		item => freeJobs?.filter((inv: string) => inv === item.value).length > 0,
	);

	const freeOptions =
		options &&
		options.filter(
			option =>
				oneFreelancer &&
				oneFreelancer.proposals.filter(proposal => proposal?.job?.id === option.value).length > 0,
		);

	console.log(freeOptions);

	const onSubmit = async (values: IInvitationForm) => {
		const invitation = {
			job_id: values.job_id?.value,
			freelancer_id,
		};

		try {
			await sendInvitation(invitation);
		} catch (error) {
			toast.error(t("talents.errorNotify"));
		}
		reset();
		onCancel();
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
							options={freeOptions}
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
							isClearable
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
					<StyledButton type="submit" buttonSize="filter" buttonColor="lightRed" fontSize="md">
						<strong>{t("talents.send")}</strong>
					</StyledButton>
				)}
			</Form>
		</Wrapper>
	);
}

export default InvitationCard;
