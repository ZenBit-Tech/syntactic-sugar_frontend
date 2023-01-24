import {
	Control,
	FieldArrayWithId,
	useFieldArray,
	UseFieldArrayAppend,
	UseFieldArrayRemove,
} from "react-hook-form";
import { IEditFreelancerForm } from "@freelance/components";

interface IUseFreelancerEducationEditFormParams {
	control: Control<IEditFreelancerForm>;
}

interface IUseFreelancerEducationEditForm {
	educationFields: FieldArrayWithId<IEditFreelancerForm, "education", "id">[];
	append: UseFieldArrayAppend<IEditFreelancerForm, "education">;
	remove: UseFieldArrayRemove;
}

export const useFreelancerEducationEditForm = ({
	control,
}: IUseFreelancerEducationEditFormParams): IUseFreelancerEducationEditForm => {
	const { fields: educationFields, append, remove } = useFieldArray({ name: "education", control });

	return {
		educationFields,
		append,
		remove,
	};
};
