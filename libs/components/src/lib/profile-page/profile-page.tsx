import { useForm, SubmitHandler } from "react-hook-form";
import countries from 'utils/select-options/eu-coutries.json';
import categories from 'utils/select-options/categories.json';
import skills from 'utils/select-options/skills.json';
import english from 'utils/select-options/english-level.json';
import employment from 'utils/select-options/employment-type.json';
import experience from 'utils/select-options/experience.json';
import hourRate from 'utils/select-options/hour-rate.json';
import workHours from 'utils/select-options/hours-amount.json';
import { Link } from "react-router-dom";
import { string } from "yup/lib/locale";



/* eslint-disable-next-line */
export interface ProfilePageProps {}

interface IFormInput {
	fullName: string;
	category: string;
	position: string;
	skills: string;
	employmentType: string;
	country: string;
	hourRate: string;
	hoursAmount: string;
	experience: string;
	englishLevel: string;
  }

export function ProfilePage(props: ProfilePageProps) {
	const { register, handleSubmit } = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor="fullName">Full name
			{/* <input type="text" placeholder="Full name" name="full name" required/> */}
			<input placeholder="Full name" {...register("fullName")} required />
			</label>

			<label htmlFor="category">Category
			<select {...register("category")} required id="category">
				<option value="" disabled selected>--choose category--</option>
				{categories.map(({name}) => {
					return <option>{name}</option>
				})}
		    </select>
			</label>

			<label htmlFor="position">Position
			{/* <input type="text" placeholder="Position" name="position" required/> */}
			<input placeholder="Position" {...register("position")} />
			</label>

			<label htmlFor="skills">Skills
			<select {...register("skills")}id="skills" required>
			<option value="" disabled selected>--choose skills--</option>
				{skills.map(({name}) => {
					return <option>{name}</option>
				})}
			</select>
			</label>

			<label htmlFor="employmentType">Employment type
			<select {...register("employmentType")} id="employmentType" required>
			<option value="" disabled selected>--employment type--</option>
				{employment.map(({name}) => {
					return <option>{name}</option>
				})}
			</select>
			</label>

			<label htmlFor="country">Country
			<select {...register("country")} id="country" required>
			<option value="" disabled selected>--choose country--</option>
				{countries.map(({name}) => {
					return <option>{name}</option>
				})}
			</select>
			</label>

			<label htmlFor="hourRate">Hour rate(one price)
			<select {...register("hourRate")} id="hourRate" required>
			<option value="" disabled selected>--hour rate--</option>
			{hourRate.map(({name}) => {
					return <option>{name}</option>
				})}
			</select>
			</label>

			<label htmlFor="hoursAmount">The available amount of hours
			<select {...register("hoursAmount")} id="hoursAmount" required>
			<option value="" disabled selected>--amount of hours--</option>
			{workHours.map(({name}) => {
					return <option>{name}</option>
				})}
			</select>
			</label>

			<label htmlFor="experience">Work experience
			<select {...register("experience")} id="experience" required>
			<option value="" disabled selected>--work experience--</option>
				{experience.map(({name}) => {
					return <option>{name}</option>
				})}
			</select>
			</label>

			<label htmlFor="english">English level
			<select {...register("englishLevel")} id="english" required>
			<option value="" disabled selected>--english level--</option>
				{english.map(({name}) => {
					return <option>{name}</option>
				})}
			</select>
			</label>
			<button type="submit">Continue</button>			
		</form>
	)
}
	
export default ProfilePage;
