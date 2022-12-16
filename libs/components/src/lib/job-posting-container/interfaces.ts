export type Page = "firstPage" | "secondPage" | "thirdPage";

export interface IJobPostingFormProps {
	page: Page;
}

export interface IJobPostingThirdFormProps extends IJobPostingFormProps {
	textButtonHandler: (isLoaing: boolean) => void;
}
