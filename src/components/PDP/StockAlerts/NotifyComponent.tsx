import CTAButton, { CTAButtonTypes } from '@assos/components/ui/CTAButton';
import FormTextInput from '@assos/components/ui/TextInput';
import { defineSchema, i18n, keys, regexSchemaPresets } from '@assos/lib';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Text, View } from 'react-native';
import { Formik, FormikConfig, FormikProps } from 'formik';
import { isIos } from '@assos/helpers';
import { assetsImages } from '@assos/styles';
import styles from './NotifyComponent.styles';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerEmail } from '@assos/state/user/selectors';
import { fetchStockAlerts } from '@assos/state/stockAlert';
import { magento } from '@assos/datasources';
import { getImage } from './lib';
import { Notification, NotificationType } from '@assos/components/ui';
import commonInputStyle from '@assos/components/forms/CommonImputStyles';

interface NotifyComponentProps {
  product: ProductControllersTypes.Product;
  resolve: () => void;
}
interface NotifyWhenAvailableFormFields {
  email: string;
}

const generateFormSchema = () =>
  defineSchema<NotifyWhenAvailableFormFields>({
    email: regexSchemaPresets().email
  });

const NotifyComponent = ({ product, resolve }: NotifyComponentProps) => {
  const [hasError, setHasError] = useState(false);
  const [success, setSuccess] = useState(false);
  const customerEmail = useSelector(getCustomerEmail);
  const dispatch = useDispatch();

  const handeNotifySubmit: FormikConfig<NotifyWhenAvailableFormFields>['onSubmit'] =
    async (values: NotifyWhenAvailableFormFields) => {
      const { email } = values;

      if (!email) {
        return;
      }
      magento
        .addStockAlert(product.id, email)
        .then(() => {
          fetchStockAlerts(dispatch).catch();
          setHasError(false);
          setSuccess(true);
        })
        .catch(() => setHasError(true));
    };

  const formikConfig: FormikConfig<NotifyWhenAvailableFormFields> = {
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: generateFormSchema(),
    initialValues: {
      email: customerEmail
    },
    onSubmit: handeNotifySubmit
  };

  const buttonTextKey = hasError ? keys.pdp.tryAgain : keys.pdp.notifyButton;

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{product.name}</Text>
        <View style={styles.itemDetailsContainer}>
          <Image
            resizeMode={'contain'}
            source={{ uri: getImage(product) }}
            style={styles.itemImage}
          />
          <View style={styles.itemDetails}>
            <View style={styles.itemColorContainer}>
              <Text style={styles.itemLabel}>
                {i18n.string(keys.pdp.color)}
              </Text>
              <Text style={styles.itemDetail}>
                {product.attributes.color_details.value}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row'
              }}
            >
              <Text style={styles.itemLabel}>{i18n.string(keys.pdp.size)}</Text>
              <Text style={styles.itemDetail}>
                {product.attributes.size.value}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20
              }}
            >
              <Image
                source={assetsImages.error}
                style={styles.itemOutOfStockIcon}
              />
              <Text style={styles.itemOutOfStockText}>
                {i18n.string(keys.pdp.outOfStock)}
              </Text>
            </View>
          </View>
        </View>
      </View>
      {success && !hasError ? (
        <View style={{ marginTop: 24 }}>
          <Notification type={NotificationType.SUCCESS}>
            {i18n.string(keys.pdp.modal.successNotification)}
          </Notification>
          <CTAButton
            type={CTAButtonTypes.primary}
            text={i18n.string(keys.pdp.modal.continueShopping)}
            styleText={styles.formSubmitText}
            handleOnPress={resolve}
          />
        </View>
      ) : (
        <Formik {...formikConfig}>
          {(props: FormikProps<NotifyWhenAvailableFormFields>) => {
            const {
              handleSubmit,
              setFieldValue,
              validateOnBlur,
              errors,
              values,
              touched,
              setFieldTouched
            } = props;

            const onPressEnter = () => {
              handleSubmit();
            };

            return (
              <KeyboardAvoidingView
                enabled
                behavior={isIos ? 'padding' : 'height'}
                keyboardVerticalOffset={100}
                style={{ marginTop: 24 }}
              >
                {hasError && (
                  <Notification type={NotificationType.ERROR}>
                    {i18n.string(keys.pdp.modal.errorNotification)}
                  </Notification>
                )}
                <FormTextInput
                  titleStyles={commonInputStyle.inputTitle}
                  requiredSymbolStyles={commonInputStyle.inputTitle}
                  textInputStyles={commonInputStyle.textInputStyles}
                  autoCompleteType='email'
                  inputAccessoryViewID='email'
                  required
                  title={i18n.string(keys.signInSection.emailAddress)}
                  errorsMessage={errors.email || ''}
                  formFieldName='email'
                  textContentType='emailAddress'
                  keyboardType='email-address'
                  returnKeyType='done'
                  setFormikField={setFieldValue}
                  setFormikFieldTouched={setFieldTouched}
                  formikValidateOnBlur={validateOnBlur}
                  touched={!!touched.email}
                  value={values.email}
                  onSubmitEditing={onPressEnter}
                />
                <CTAButton
                  type={
                    hasError ? CTAButtonTypes.secondary : CTAButtonTypes.primary
                  }
                  text={i18n.string(buttonTextKey)}
                  styleText={[
                    styles.formSubmitText,
                    hasError ? styles.formSubmitErrorText : null
                  ]}
                  handleOnPress={handleSubmit}
                />
              </KeyboardAvoidingView>
            );
          }}
        </Formik>
      )}
    </View>
  );
};

export default NotifyComponent;
