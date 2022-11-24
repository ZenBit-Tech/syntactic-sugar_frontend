import * as yup from 'yup';

export const profilePageSchema = yup.object().shape({
  fullName:  yup.string().required('Name is required'),
  category: yup.string().required('Categoty is required'),
  position: yup.string().required('Position is required'),
  skills: yup.string().required('Skills is required'),
  employmentType: yup.string().required('Skills is required'),
  country: yup.string().required('Country is required'),
  hourRate: yup.string().required('Hour rate is required'),
  hoursAmount: yup.string().required('Hours amount is required'),
  experience: yup.string().required('Work experience is required'),
  englishLevel: yup.string().required('English level is required')
});