import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';
import { Formik, FormikConfig, FormikProps } from 'formik';

/** components */
import CTAButton, { CTAButtonTypes } from '../ui/CTAButton';
import { SignInSteps } from '../SignInStepper';
import FormTextInput from '@assos/components/ui/TextInput';

/** misc */
import i18n, { keys } from '../../lib/translations';
import { defineSchema, regexSchemaPresets } from '../../lib/formikPresets';
import { assetsImages } from '../../styles/variables';

/** styles */
import styles from './ResetPasswordEnterEmail.styles';
import { magento } from '@assos/datasources';
import commonInputStyle from '@assos/components/forms/CommonImputStyles';

interface ResetPasswordFormFields {
  email: string;
}

const generateFormSchema = () =>
  defineSchema<ResetPasswordFormFields>({
    email: regexSchemaPresets().email
  });

export interface ResetPasswordEnterEmailProps {
  userEmail?: string;
  onNextStep: (component: SignInSteps) => void;
  onSaveEmail: (email: string) => void;
}

const ResetPasswordEnterEmail: FC<ResetPasswordEnterEmailProps> = props => {
  const [showRemove, setShowRemove] = useState<boolean>(false);

  const handleResetSubmit: FormikConfig<ResetPasswordFormFields>['onSubmit'] = (
    values: ResetPasswordFormFields
  ) => {
    const { onNextStep, onSaveEmail } = props;
    const { email } = values;
    if (email === '') {
      return;
    }

    magento.passwordForgot(email).catch();
    onSaveEmail(email);
    onNextStep(SignInSteps.ResetPasswordGetMessage);
  };

  const formikConfig: FormikConfig<ResetPasswordFormFields> = {
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: generateFormSchema(),
    initialValues: {
      email: props.userEmail || ''
    },
    onSubmit: handleResetSubmit
  };

  const handleFocusEmail = () => {
    setShowRemove(true);
  };

  const handleBlurEmail = (value?: string) => () => {
    if (!value?.length) {
      setShowRemove(false);
    }
  };

  const handlePressIconEmail =
    (setFieldValue: (field: string, value: any) => void, field: string) =>
    () => {
      setFieldValue(field, '');
    };

  return (
    <View style={styles.container}>
      <Formik {...formikConfig}>
        {(props: FormikProps<ResetPasswordFormFields>) => {
          const {
            handleSubmit,
            setFieldValue,
            validateOnBlur,
            errors,
            values,
            touched,
            setFieldTouched
          } = props;

          return (
            <>
              <View>
                <Text style={styles.messageText}>
                  {i18n.string(keys.resetPasswordSection.enterYourEmail)}
                </Text>
              </View>
              <FormTextInput
                titleStyles={commonInputStyle.inputTitle}
                requiredSymbolStyles={commonInputStyle.inputTitle}
                textInputStyles={commonInputStyle.textInputStyles}
                errorMessageStyle={commonInputStyle.errorText}
                errorsMessage={errors.email || ''}
                required={true}
                title={i18n.string(keys.signInSection.emailAddress)}
                returnKeyType={'done'}
                autoCapitalize='none'
                textContentType={'emailAddress'}
                formFieldName={'email'}
                keyboardType='email-address'
                setFormikField={setFieldValue}
                setFormikFieldTouched={setFieldTouched}
                formikValidateOnBlur={validateOnBlur}
                touched={!!touched.email}
                value={values.email}
                iconUrl={(showRemove && !!values.email) && assetsImages.remove}
                imageWrapperStyle={commonInputStyle.iconWrapperStyle}
                innerContainerStyle={commonInputStyle.innerContainer}
                imageStyles={commonInputStyle.iconStyles}
                onFocus={handleFocusEmail}
                onBlur={handleBlurEmail(values.email)}
                iconPress={handlePressIconEmail(setFieldValue, 'email')}
              />
              <CTAButton
                type={CTAButtonTypes.primary}
                text={i18n.string(keys.resetPasswordSection.submit)}
                handleOnPress={handleSubmit}
                style={styles.submitBtn}
                styleText={styles.submitBtn__text}
              />
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default ResetPasswordEnterEmail;
