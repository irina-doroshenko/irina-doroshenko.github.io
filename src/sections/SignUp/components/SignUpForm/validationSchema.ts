import * as Yup from 'yup';
import { SignUpFormData } from './types';

const phoneReqExp = /^[\+]{0,1}380([0-9]{9})$/;

const requiredErr = 'field is required';
const longNameErr = 'name is too long';
const shortNameErr = 'name is too short';
const invalidEmailErr = 'email is invalid';
const invalidPhoneErr = 'phone is invalid';
const maxFileSizeErr = 'max file size - 5MB';

export const SignUpSchema = Yup.object<SignUpFormData>().shape({
  name: Yup.string()
    .required(requiredErr)
    .min(2, shortNameErr)
    .max(60, longNameErr),
  email: Yup.string().required(requiredErr).email(invalidEmailErr),
  phone: Yup.string()
    .required(requiredErr)
    .matches(phoneReqExp, invalidPhoneErr),
  position_id: Yup.number().required(requiredErr),
  photo: Yup.mixed<File>()
    .nullable()
    .required('required')
    .test('is-correct-size', maxFileSizeErr, function (value) {
      return !(value.size > 5000000);
    }),
});
