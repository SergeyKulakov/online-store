import { FormikTouched } from 'formik';

export type FormikSetTouched = (
  touched: FormikTouched<SignInFormFields>,
  shouldValidate?: boolean | undefined
) => void;

export interface SignInComponentProps {
  login: (email: string, password: string) => void;
  onForgotPassword: () => void;
  onJoinNowPress: () => void;
  closeModal: () => Promise<void>;
  isModal?: boolean;
  showForgotPassword?: boolean;
  loginError?: boolean;
  loading?: boolean;
}

export interface SignInFormFields {
  email: string;
  password: string;
}
