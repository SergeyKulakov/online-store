import React, { createRef, FC, RefObject, useCallback, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Formik, FormikConfig, FormikProps, FormikTouched } from 'formik';
import { minWidth, ResponsiveView } from '@brandingbrand/fsresponsive';

/** components */
import CTAButton, { CTAButtonTypes } from '@assos/components/ui/CTAButton';
import FormTextInput from '@assos/components/ui/TextInput';
import { KeyboardAccessory } from '@assos/components/ui/KeyboardAccessory';
import { SignInOptions } from '@assos/components/account/SignIn/SignInOptions';

/** misc */
import i18n, { keys } from '@assos/lib/translations';
import { defineSchema, regexSchemaPresets } from '@assos/lib/formikPresets';
import { focusRef, getRefById, noop } from '@assos/helpers';
import * as yup from 'yup';

/** styles */
import styles from './SignInComponent.styles';
import commonInputStyle from '@assos/components/forms/CommonImputStyles';

/** types */
import { FormikSetTouched, SignInComponentProps, SignInFormFields } from './SignInComponent.types';
import { assetsImages } from '@assos/styles';

const icons = {
  remove: require('../../../../assets/icons/removeIcon.png')
};

const generateFormSchema = () =>
  defineSchema<SignInFormFields>({
    email: regexSchemaPresets().email,
    password: yup
      .string()
      .required(i18n.string(keys.signInSection.passwordRequired))
  });

const FORMIK_VALIDATE_ON_CHANGE = false;
const FORMIK_VALIDATE_ON_BLUR = true;

export const SignInComponent: FC<SignInComponentProps> = props => {
  const [showClearEmail, setShowClearEmail] = useState(false);
  const [showClearPassword, setShowClearPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const refs: {
    id: keyof SignInFormFields;
    ref: RefObject<TextInput>;
    type: 'text';
  }[] = [
    { id: 'email', ref: createRef<TextInput>(), type: 'text' },
    { id: 'password', ref: createRef<TextInput>(), type: 'text' }
  ];

  const handleFocusEmail = () => {
    setShowClearEmail(true);
  };

  const handleBlurEmail = useCallback(
    (setTouched: FormikSetTouched) => (): void => {
      setTouched({
        email: true,
        password: true
      });
    },
    [setShowClearEmail]
  );

  const handleFocusPassword = useCallback(
    (setTouched: FormikSetTouched, touched: FormikTouched<SignInFormFields>) =>
      (): void => {
        setTouched({
          ...touched,
          password: false
        });
        setShowClearEmail(false);
        setShowClearPassword(true);
      },
    []
  );

  const handleBlurPassword = useCallback(
    (setTouched: FormikSetTouched, password?: string) => (): void => {
      setTouched({
        email: true,
        password: true
      });
      if (!password?.length) {
        setShowClearPassword(false);
      }
    },
    []
  );

  const handleClearInput = (
      setFieldValue: (field: string, value: any) => void,
      field: 'email' | 'password',
      setShowClearField: (val: boolean) => void
    ) =>
    (): void => {
      setFieldValue(field, '');
      setShowClearField(false);
    };

  const handlePressShowButton = useCallback((): void => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const goToForgotPassword = useCallback((): void => {
    props.onForgotPassword();
  }, []);

  const handleLoginSubmit: FormikConfig<SignInFormFields>['onSubmit'] = (
    values: SignInFormFields
  ) => {
    props.login(values.email, values.password);
  };

  const formikConfig: FormikConfig<SignInFormFields> = {
    validateOnChange: FORMIK_VALIDATE_ON_CHANGE,
    validateOnBlur: FORMIK_VALIDATE_ON_BLUR,
    validationSchema: generateFormSchema(),
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: handleLoginSubmit
  };

  return (
    <View style={styles.container}>
      <SignInOptions closeModal={props.closeModal} />
      {props.loginError && (
        <View style={styles.errorContainer}>
        <Image style={styles.errorIcon} source={assetsImages.whiteError} />
        <Text style={styles.errorText}>
          {i18n.string(keys.signInSection.signInError)}
        </Text>
      </View>
        )
      }
      <View>
        <Formik {...formikConfig}>
          {(formikProps: FormikProps<SignInFormFields>) => {
            const {
              handleSubmit,
              setFieldValue,
              errors,
              values,
              touched,
              setTouched
            } = formikProps;
            return (
              <ResponsiveView
                style={styles.form}
                breakpoints={minWidth(768, { width: 400 })}
              >
                <KeyboardAccessory
                  id={'email'}
                  isLeftArrowDisabled={true}
                  isRightArrowDisabled={false}
                  onLeftArrowPress={noop}
                  onRightArrowPress={focusRef(refs, 'email', 'next')}
                />
                <FormTextInput
                  autoCapitalize='none'
                  titleStyles={commonInputStyle.inputTitle}
                  requiredSymbolStyles={commonInputStyle.inputTitle}
                  autoCompleteType='off'
                  autoCorrect={false}
                  textContentType={'emailAddress'}
                  inputAccessoryViewID={'email'}
                  errorsMessage={errors.email || ''}
                  required={true}
                  title={i18n.string(keys.signInSection.emailAddress)}
                  formFieldName={'email'}
                  keyboardType={'email-address'}
                  formikValidateOnChange={FORMIK_VALIDATE_ON_CHANGE}
                  formikValidateOnBlur={FORMIK_VALIDATE_ON_BLUR}
                  setFormikField={setFieldValue}
                  setFormikFieldTouched={formikProps.setFieldTouched}
                  value={values.email}
                  touched={!!touched.email}
                  textInputStyles={commonInputStyle.textInputStyles}
                  onFocus={handleFocusEmail}
                  onBlur={handleBlurEmail(setTouched)}
                  ref={getRefById(refs, 'email') as RefObject<TextInput>}
                  returnKeyType={'next'}
                  onSubmitEditing={focusRef(refs, 'email')}
                  iconUrl={(!!values.email && showClearEmail) && icons.remove}
                  iconPress={handleClearInput(
                    setFieldValue,
                    'email',
                    setShowClearEmail
                  )}
                  imageWrapperStyle={commonInputStyle.iconWrapperStyle}
                  imageStyles={commonInputStyle.iconStyles}
                  innerContainerStyle={commonInputStyle.innerContainer}
                  errorMessageStyle={commonInputStyle.errorText}
                  errorIconStyle={commonInputStyle.errorIcon}
                />
                <KeyboardAccessory
                  id={'password'}
                  isLeftArrowDisabled={false}
                  isRightArrowDisabled={true}
                  onLeftArrowPress={focusRef(refs, 'password', 'prev')}
                  onRightArrowPress={noop}
                />
                <FormTextInput
                  titleStyles={commonInputStyle.inputTitle}
                  requiredSymbolStyles={commonInputStyle.inputTitle}
                  autoCompleteType={'password'}
                  textContentType={'password'}
                  inputAccessoryViewID={'password'}
                  textInputStyles={commonInputStyle.textInputStyles}
                  errorsMessage={errors.password || ''}
                  required={true}
                  iconUrl={(showClearPassword && !!values.password) && icons.remove}
                  imageWrapperStyle={commonInputStyle.iconWrapperStyle}
                  imageStyles={commonInputStyle.iconStyles}
                  title={i18n.string(keys.signInSection.password)}
                  onFocus={handleFocusPassword(setTouched, touched)}
                  onBlur={handleBlurPassword(setTouched, values.password)}
                  iconPress={handleClearInput(
                    setFieldValue,
                    'password',
                    setShowClearPassword
                  )}
                  innerButton={true}
                  innerButtonText={
                    i18n.string(!showPassword ? keys.signInSection.show : keys.signInSection.hide)
                  }
                  innerButtonWrapperStyle={commonInputStyle.showWrapperStyle}
                  innerButtonTextStyle={commonInputStyle.innerCTA}
                  innerButtonPress={handlePressShowButton}
                  formFieldName={'password'}
                  formikValidateOnChange={FORMIK_VALIDATE_ON_CHANGE}
                  formikValidateOnBlur={FORMIK_VALIDATE_ON_BLUR}
                  setFormikField={setFieldValue}
                  setFormikFieldTouched={formikProps.setFieldTouched}
                  value={values.password}
                  secureTextEntry={!showPassword}
                  touched={!!touched.password}
                  ref={getRefById(refs, 'password') as RefObject<TextInput>}
                  returnKeyType={'done'}
                  innerContainerStyle={commonInputStyle.innerContainer}
                  errorMessageStyle={commonInputStyle.errorText}
                  errorIconStyle={commonInputStyle.errorIcon}
                />
                <TouchableOpacity
                  style={styles.forgotTouchContainer}
                  onPress={goToForgotPassword}
                >
                  <Text style={styles.forgotText}>
                    {i18n.string(keys.signInSection.forgotPassword)}
                  </Text>
                </TouchableOpacity>
                <CTAButton
                  style={styles.loginBtn}
                  type={CTAButtonTypes.primary}
                  text={i18n.string(keys.signInSection.logIn)}
                  styleText={styles.loginText}
                  handleOnPress={handleSubmit}
                  loading={props.loading}
                />
              </ResponsiveView>
            );
          }}
        </Formik>
      </View>
    </View>
  );
};
