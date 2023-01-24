import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { SubmitHandler } from "react-hook-form/dist/types";
import { StyledButton } from "@freelance/components";
import { useOptions, SelectOptions } from "utils/select-options/options";
import { IResponse } from "redux/createFreelancer/freelancer-pageApi";
import { RESET } from "utils/constants/breakpoint";
import {
	BtnText,
	Form,
	Input,
	Label,
	OpenFilterBtn,
	SelectElement,
	ButtonWrapper,
} from "./talents-filter.styled";

interface IFormInput {
	category: SelectOptions;
	position: string;
	skills: SelectOptions[];
	employmentType: SelectOptions;
	englishLevel: SelectOptions;
	hourRate: SelectOptions;
	availableAmountOfHour: SelectOptions;
}

interface IFilterProps {
	openFilter: () => void;
	onSubmit: SubmitHandler<IFormInput>;
	setToggleFilter: React.Dispatch<React.SetStateAction<string>>;
	setFilterTalents: React.Dispatch<React.SetStateAction<IResponse[] | undefined>>;
	talents?: IResponse[];
	disabled: boolean;
}

export const TalentsFilter = ({
	openFilter,
	onSubmit,
	setToggleFilter,
	setFilterTalents,
	talents,
	disabled,
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
						setFilterTalents(talents);
						setToggleFilter(RESET);
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
