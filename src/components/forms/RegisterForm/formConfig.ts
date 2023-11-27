import * as yup from 'yup';
import { FormTextInputType } from '@assos/components';
import { defineSchema, i18n, keys, regexSchemaPresets } from '@assos/lib';
import { TextInput } from 'react-native';
import { createRef, RefObject } from 'react';
import commonInputStyle from '@assos/components/forms/CommonImputStyles';


export enum FormFieldsNames {
  firstname = 'firstname',
  lastname = 'lastname',
  email = 'email',
  password = 'password'
}

export const initialValues: RegisterFormFields = {
  [FormFieldsNames.firstname]: '',
  [FormFieldsNames.lastname]: '',
  [FormFieldsNames.email]: '',
  [FormFieldsNames.password]: ''
};

export interface RegisterFormFields {
  [FormFieldsNames.firstname]: string;
  [FormFieldsNames.lastname]: string;
  [FormFieldsNames.email]: string;
  [FormFieldsNames.password]: string;
}

export const refs: { id: keyof RegisterFormFields; ref: RefObject<TextInput>; type: 'text' }[] = [
  { id: FormFieldsNames.firstname, ref: createRef<TextInput>(), type: 'text' },
  { id: FormFieldsNames.lastname, ref: createRef<TextInput>(), type: 'text' },
  { id: FormFieldsNames.email, ref: createRef<TextInput>(), type: 'text' },
  { id: FormFieldsNames.password, ref: createRef<TextInput>(), type: 'text' }
];

export const inputFieldDefaultProp = {
  textInputStyles: commonInputStyle.textInputStyles,
  formikValidateOnChange: false,
  errorIconStyle: commonInputStyle.errorIcon,
  errorMessageStyle: commonInputStyle.errorText
};

export type RegisterFormValues = typeof initialValues;

export const generateFormSchema = () => defineSchema<RegisterFormValues>({
  email: regexSchemaPresets().email,
  password: regexSchemaPresets().createAccountPassword,
  firstname: yup.string().required(i18n.string(keys.joinNowForm.requirements.firstName)),
  lastname: yup.string().required(i18n.string(keys.joinNowForm.requirements.lastName))
});

export const formValues: FormTextInputType[] = [
  {
    formFieldName: FormFieldsNames.firstname,
    title: i18n.string(keys.registerModal.form.firstName),
    autoCompleteType: 'username',
    keyboardType: 'default',
    required: true,
    ...inputFieldDefaultProp
  },
  {
    formFieldName: FormFieldsNames.lastname,
    title: i18n.string(keys.registerModal.form.lastName),
    autoCompleteType: 'name',
    keyboardType: 'default',
    required: true,
    ...inputFieldDefaultProp
  },
  {
    formFieldName: FormFieldsNames.email,
    keyboardType: 'email-address',
    autoCompleteType: 'email',
    title: i18n.string(keys.registerModal.form.email),
    required: true,
    ...inputFieldDefaultProp
  },
  {
    formFieldName: FormFieldsNames.password,
    returnKeyType: 'go',
    textContentType: 'password',
    ...inputFieldDefaultProp,
    title: i18n.string(keys.registerModal.form.password)
  }
];

export const passwordValidation = {
  chars: /.{8,}$/,
  uppercase: /=*[A-Z]/,
  lowercase: /=*[a-z]/,
  digit: /.*\d/,
  specialChar: /.*\W/
};

