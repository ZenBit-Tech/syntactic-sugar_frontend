import {
	Control,
	FieldArrayWithId,
	useFieldArray,
	UseFieldArrayAppend,
	UseFieldArrayRemove,
} from "react-hook-form";
import { IEditFreelancerForm } from "@freelance/components";

interface IUseFreelancerExperienceEditFormParams {
	control: Control<IEditFreelancerForm>;
}

interface IUseFreelancerExperienceEditForm {
	workHistoryFields: FieldArrayWithId<IEditFreelancerForm, "workHistory", "id">[];
	append: UseFieldArrayAppend<IEditFreelancerForm, "workHistory">;
	remove: UseFieldArrayRemove;
}

export const useFreelancerExperienceEditForm = ({
	control,
}: IUseFreelancerExperienceEditFormParams): IUseFreelancerExperienceEditForm => {
	const {
		fields: workHistoryFields,
		append,
		remove,
	} = useFieldArray({ control, name: "workHistory" });

	return {
		workHistoryFields,
		append,
		remove,
	};
};
