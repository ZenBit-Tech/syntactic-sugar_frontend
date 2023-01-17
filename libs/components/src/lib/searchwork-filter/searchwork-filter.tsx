import { Controller } from "react-hook-form";
import { JobsInterface } from "redux/jobs";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { SubmitHandler } from "react-hook-form/dist/types";
import { StyledButton } from "@freelance/components";
import { useOptions, SelectOptions } from "utils/select-options/options";
import {
	BtnText,
	Form,
	HeaderButton,
	HeaderButtonWrapp,
	Input,
	Label,
	OpenFilterBtn,
	SelectElement,
	ButtonWrapper,
} from "./searchwork-filter.styled";
import { JOBS_PAGE } from "utils/constants/breakpoint";

export interface IFormInput {
	category: SelectOptions;
	position: string;
	skills: SelectOptions[];
	employmentType: SelectOptions;
	englishLevel: SelectOptions;
	hourRate: SelectOptions;
	availableAmountOfHour: SelectOptions;
	typePage?: "proposals" | "jobs";
}

interface IFilterProps {
	openFilter: () => void;
	onSubmit: SubmitHandler<IFormInput>;
	setFilter: (freelancerFilter: IFormInput | Record<string, never>) => void;
	setToggleFilter: React.Dispatch<React.SetStateAction<string>>;
	filterJobs?: JobsInterface[];
	setFilterJobs: React.Dispatch<React.SetStateAction<JobsInterface[] | undefined>>;
	data?: JobsInterface[];
	freelancerFilter: IFormInput | Record<string, never>;
	disabled: boolean;
	typePage?: "proposals" | "jobs";
}

export const SearchWorkFilter = ({
	openFilter,
	onSubmit,
	setFilter,
	setToggleFilter,
	setFilterJobs,
	data,
	freelancerFilter,
	disabled,
	typePage,
}: IFilterProps) => {
	const { t } = useTranslation();
	const { handleSubmit, control, reset } = useForm<IFormInput>();
	const { categories, skills, employmentType, hourRate, hoursAmount, englishLevel } = useOptions();

	const emptyValue = {
		value: "",
		label: "",
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<OpenFilterBtn
				type="button"
				buttonColor="redGradient"
				buttonSize="sm"
				fontSize="lg"
				onClick={openFilter}
				disabled={disabled}
			>
				<BtnText>{t("freelancer.searchWork.buttonFilter")}</BtnText>
			</OpenFilterBtn>
			{typePage === JOBS_PAGE && (
				<HeaderButtonWrapp>
					<HeaderButton
						type="reset"
						buttonColor="redGradient"
						buttonSize="sm"
						fontSize="md"
						onClick={() => {
							setToggleFilter("reset");
							setFilterJobs(data);
							reset();
						}}
					>
						{t("freelancer.searchWork.buttonAll")}
					</HeaderButton>
					<HeaderButton
						type="reset"
						buttonColor="redGradient"
						buttonSize="sm"
						fontSize="md"
						onClick={() => {
							setToggleFilter("filter");
							setFilter(freelancerFilter);
							reset();
						}}
					>
						{t("freelancer.searchWork.buttonProfile")}
					</HeaderButton>
				</HeaderButtonWrapp>
			)}

			<Controller
				name="position"
				control={control}
				render={({ field }) => (
					<>
						<Label htmlFor="position">{t(`freelancer.createProfile.positionPlaceholder`)}</Label>
						<Input {...field} defaultValue="" />
					</>
				)}
			/>
			<Controller
				name="category"
				control={control}
				defaultValue={emptyValue}
				render={({ field }) => (
					<>
						<Label htmlFor="category">{t(`freelancer.createProfile.selectOption.category`)}</Label>
						<SelectElement
							id="category"
							options={categories}
							{...field}
							isSearchable
							classNamePrefix="react-select"
						/>
					</>
				)}
			/>
			<Controller
				name="skills"
				control={control}
				defaultValue={[]}
				render={({ field }) => (
					<>
						<Label htmlFor="skills">{t(`freelancer.createProfile.selectOption.skills`)}</Label>
						<SelectElement
							id="skills"
							options={skills}
							{...field}
							isSearchable
							isMulti
							classNamePrefix="react-select"
						/>
					</>
				)}
			/>
			<Controller
				name="employmentType"
				control={control}
				defaultValue={emptyValue}
				render={({ field }) => (
					<>
						<Label htmlFor="employmentType">
							{t(`freelancer.createProfile.selectOption.employmentType`)}
						</Label>
						<SelectElement
							id="employmentType"
							options={employmentType}
							{...field}
							isSearchable
							classNamePrefix="react-select"
						/>
					</>
				)}
			/>
			<Controller
				name="englishLevel"
				control={control}
				defaultValue={emptyValue}
				render={({ field }) => (
					<>
						<Label htmlFor="englishLevel">
							{t(`freelancer.createProfile.selectOption.englishLevel`)}
						</Label>
						<SelectElement
							id="englishLevel"
							options={englishLevel}
							{...field}
							isSearchable
							classNamePrefix="react-select"
						/>
					</>
				)}
			/>
			<Controller
				name="hourRate"
				control={control}
				defaultValue={emptyValue}
				render={({ field }) => (
					<>
						<Label htmlFor="hourRate">{t(`freelancer.createProfile.selectOption.hourRate`)}</Label>
						<SelectElement
							id="hourRate"
							options={hourRate}
							{...field}
							isSearchable
							classNamePrefix="react-select"
						/>
					</>
				)}
			/>
			<Controller
				name="availableAmountOfHour"
				control={control}
				defaultValue={emptyValue}
				render={({ field }) => (
					<>
						<Label htmlFor="availableAmountOfHour">
							{t(`freelancer.createProfile.selectOption.availableAmountOfHour`)}
						</Label>
						<SelectElement
							id="availableAmountOfHour"
							options={hoursAmount}
							{...field}
							isSearchable
							classNamePrefix="react-select"
						/>
					</>
				)}
			/>
			<ButtonWrapper>
				<StyledButton type="submit" buttonColor="redGradient" buttonSize="sm" fontSize="md">
					{t("freelancer.searchWork.filter")}
				</StyledButton>
				<StyledButton
					type="reset"
					onClick={() => {
						setFilterJobs(data);
						setToggleFilter("reset");
						reset();
					}}
					buttonColor="redGradient"
					buttonSize="sm"
					fontSize="md"
				>
					{t("freelancer.searchWork.unFilter")}
				</StyledButton>
			</ButtonWrapper>
		</Form>
	);
};
