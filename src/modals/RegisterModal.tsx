import { useDispatch, useSelector } from 'react-redux';
import { makeModal } from '@brandingbrand/fsapp';
import { getRegistrationError, registerUser } from '@assos/state/user';
import React, { useCallback, useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View
} from 'react-native';
import { useFormik } from 'formik';
import { ToggleButton } from '@brandingbrand/fscomponents';

/** components */
import FormTextInput, { FormTextInputType } from '@assos/components/ui/TextInput';
import CTAButton, { CTAButtonTypes } from '@assos/components/ui/CTAButton';
import ModalHeader from '@assos/components/ui/ModalHeader';
import { KeyboardAccessory } from '@assos/components/ui/KeyboardAccessory';

/** misc */
import { i18n, keys } from '@assos/lib';
import {
  FormFieldsNames,
  formValues,
  generateFormSchema,
  initialValues,
  passwordValidation,
  refs,
  RegisterFormValues
} from '@assos/components/forms/RegisterForm/formConfig';
import { focusRef, getRefById } from '@assos/helpers';

// ** styles *//
import { assetsImages } from '@assos/styles';
import styles from '@assos/components/forms/RegisterForm/styles';
import colors from '@assos/styles/colors';
import { S } from '@assos/components/PIP/FilterList/Filter/Filter.styles';
import commonInputStyle from '@assos/components/forms/CommonImputStyles';

const height = Dimensions.get('window').height;

const RegisterModal = makeModal<{}, {closeModals: () => Promise<void>}>(
  ({resolve, reject, closeModals}) => {

    const dispatch = useDispatch();
    const registrationError = useSelector(getRegistrationError);

    const handleRegister = useCallback(async (user: RegisterFormValues) => {
      await registerUser(dispatch, user);
      reject();
    }, []);

    const {
        setFieldValue,
        submitForm,
        values,
        errors,
        setFieldTouched,
        touched,
        validateField
      } = useFormik({
        initialValues,
        onSubmit: handleRegister,
        validationSchema: generateFormSchema
      });

    const scrollRef = useRef<ScrollView>(null);

    const handleScrollTo = () => {
      scrollRef.current?.scrollTo(height);
    };

    const [showPassword, setShowPassword] = useState(false);

    const handleFocusPassword = (fieldName: FormFieldsNames) => () => {
      if (fieldName === FormFieldsNames.password) {
        handleScrollTo();
      }
    };

    const handleClearPassword = () => {
      setFieldValue('password', '');
    };

    const renderAccessoryView = ({formFieldName}: FormTextInputType, idx: number) => {
      return (
        <KeyboardAccessory
          key={idx}
          isLeftArrowDisabled={formFieldName === FormFieldsNames.firstname}
          isRightArrowDisabled={formFieldName === FormFieldsNames.password}
          onLeftArrowPress={focusRef(refs, formFieldName, 'prev')}
          onRightArrowPress={focusRef(refs, formFieldName, 'next')}
          id={formFieldName}
        />
      );
    };

    const handleOnBlur = (field: string) => () => {
      validateField(field);
      return setFieldTouched(field, true, false);
    };

    const handleInputChange = (field: string, value: any) => {
      setFieldTouched(field, false);
      setFieldValue(field, value);
    };

    const handleInnerButtonPress = useCallback(() => {
      setShowPassword(value => !value);
    }, []);

    const renderTextInput =
      // tslint:disable-next-line:cyclomatic-complexity
      useCallback((formProps, idx) => {
        const {formFieldName} = formProps;

        const isPasswordField = formFieldName === FormFieldsNames.password;
        return (
          <View key={idx}>
            <FormTextInput
              value={values[formFieldName as FormFieldsNames]}
              inputAccessoryViewID={formFieldName}
              ref={getRefById(refs, formFieldName)}
              onBlur={handleOnBlur(formFieldName)}
              formFieldName={formFieldName}
              setFormikField={handleInputChange}
              touched={touched[formFieldName as FormFieldsNames]}
              errorsMessage={errors[formFieldName as FormFieldsNames]}
              onSubmitEditing={
                isPasswordField
                ? submitForm
                : focusRef(refs, formFieldName, 'next')
              }
              innerButtonPress={handleInnerButtonPress}
              onFocus={handleFocusPassword(formFieldName)}
              innerButtonText={
                isPasswordField
                && i18n.string(showPassword ? keys.joinNowForm.hide : keys.joinNowForm.show)
              }
              innerButtonTextStyle={commonInputStyle.showText}
              iconUrl={isPasswordField && !!values.password.length && assetsImages.remove}
              iconPress={handleClearPassword}
              imageWrapperStyle={commonInputStyle.iconWrapperStyle}
              errorContainer={commonInputStyle.errorContainer}
              innerButton={!!values.password.length && isPasswordField}
              innerButtonWrapperStyle={commonInputStyle.showWrapperStyle}
              secureTextEntry={isPasswordField ? !showPassword : false}
              innerContainerStyle={commonInputStyle.innerContainer}
              {...formProps}
            />
          </View>
        );
      }, [setFieldValue, touched, errors, showPassword, values]);

    const renderPasswordValidationNotes = useCallback((
      key: keyof typeof passwordValidation,
      i: number
    ) => {
      const isValid = passwordValidation[key].test(values.password);

      return (
        <View style={styles.validationMessageContainer} key={i}>
          <Image
            source={isValid ? assetsImages.circleCheckActive : assetsImages.circleCheck}
            style={[
              styles.checkIcon
            ]}
          />
          <Text style={styles.validationText}>
            {i18n.string(
              keys.registerModal.passwordValidation[key]
            )}
          </Text>
        </View>
      );
    }, [values.password, errors.password]);

    return (
      <View style={{marginHorizontal: 20, paddingBottom: 80}}>
        <ModalHeader
          title={i18n.string(keys.registerModal.title)}
          onClose={closeModals}
          containerStyle={[S.headerContainer, styles.header]}
          titleStyle={[S.headerTitleStyles, styles.headerTitle]}
        />
        {formValues.map(renderAccessoryView)}
        <KeyboardAvoidingView
          behavior={Platform.select({
            ios: 'padding',
            android: undefined
          })}
        >
          <ScrollView
            ref={scrollRef}
          >
            {formValues.map(renderTextInput)}
            <View style={styles.passwordWrapperContainer}>
              {Object
                .keys(passwordValidation)
                .map(
                  (
                    key,
                    i: number
                  ) => renderPasswordValidationNotes(
                    key as keyof typeof passwordValidation,
                    i
                  )
                )}
            </View>
            <View style={styles.faceIdContainer}>
              <Text style={styles.faceIdText}>{i18n.string(keys.registerModal.form.faceId)}</Text>
              <ToggleButton containerActiveColor={colors.buttonPrimary} />
            </View>
            {registrationError ? (
              <Text style={styles.errorMessage}>{registrationError}</Text>
            ) : null}
            <CTAButton
              style={styles.CTABtn}
              styleText={styles.btnRegister}
              handleOnPress={submitForm}
              type={CTAButtonTypes.primary}
              text={i18n.string(keys.account.ctaCreateAccount)}
            />
          </ScrollView>
        </KeyboardAvoidingView>

      </View>
    );
  });

export default RegisterModal;
