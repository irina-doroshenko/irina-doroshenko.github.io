import { SignUpFormData } from '../sections/SignUp/components/SignUpForm/types';

export const formatSignUpValidationResponse = (errObj: {
  [key in keyof SignUpFormData]: string[];
}) => {
  return Object.entries(errObj).reduce((acc, [key, value]) => {
    return { ...acc, [key]: value.join(', ') };
  }, {});
};
