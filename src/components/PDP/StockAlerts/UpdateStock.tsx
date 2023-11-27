import CTAButton, { CTAButtonTypes } from '@assos/components/ui/CTAButton';
import FormTextInput from '@assos/components/ui/TextInput';
import { isIos } from '@assos/helpers';
import { defineSchema, i18n, keys, regexSchemaPresets } from '@assos/lib';
import { assetsImages } from '@assos/styles';
import { Formik, FormikConfig, FormikProps } from 'formik';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Text, View } from 'react-native';
import styles from './UpdateStock.style';
import { useDispatch, useSelector } from 'react-redux';
import { getAlertForProduct } from '@assos/state/stockAlert/selectors';
import { fetchStockAlerts } from '@assos/state/stockAlert';
import { magento } from '@assos/datasources';
import { AppStore } from '@assos/state';
import { getImage } from './lib';
import commonInputStyle from '@assos/components/forms/CommonImputStyles';

interface UpdateStockProps {
  productId: number;
  resolve: () => void;
}

interface UpdateStockFormFields {
  email: string;
}

const generateFormSchema = () =>
  defineSchema<UpdateStockFormFields>({
    email: regexSchemaPresets().email
  });

const UpdateStockComponent = ({productId, resolve}: UpdateStockProps) => {
  const dispatch = useDispatch();
  const alert = useSelector(state => getAlertForProduct(state as AppStore, productId));
  const [hasError, setHasError] = useState(false);
  const handleDelete = async () => {
    if (!alert) { return; }
    magento.removeStockAlert(alert.id.toString()).then(() => {
      fetchStockAlerts(dispatch).catch();
      setHasError(false);
      resolve();
    }).catch(() => setHasError(true));
  };
  const handleUpdateStockSubmit: FormikConfig<UpdateStockFormFields>['onSubmit'] = (
    values: UpdateStockFormFields
  ) => {
    console.log('Update Stock Alert sent');
  };

  const formikConfig: FormikConfig<UpdateStockFormFields> = {
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: generateFormSchema(),
    initialValues: {
      email: alert?.customer_email ?? ''
    },
    onSubmit: handleUpdateStockSubmit
  };

  if (!alert) { return null; }

  const buttonText = hasError ? i18n.string(keys.pdp.tryAgain) : i18n.string(keys.pdp.removeAlert);

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>
          {alert.product_data.name}
        </Text>
        <View style={styles.itemDetailsContainer}>
          <Image source={{uri: getImage(alert.product_data)}} style={styles.itemImage} />
          <View style={styles.itemDetails}>
            <View style={styles.itemColorContainer}>
              <Text style={styles.itemLabel}>
                {i18n.string(keys.pdp.color)}
              </Text>
              <Text style={styles.itemDetail}>
                {alert.product_data.attributes.color_details.value}
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.itemLabel}>
                {i18n.string(keys.pdp.size)}
              </Text>
              <Text style={styles.itemDetail}>
                {alert.product_data.attributes.size.value}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <Image source={assetsImages.error} style={styles.itemOutOfStockIcon} />
              <Text style={styles.itemOutOfStockText}>
                {i18n.string(keys.pdp.outOfStock)}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Formik {...formikConfig}>
        {(props: FormikProps<UpdateStockFormFields>) => {
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
            <KeyboardAvoidingView
              enabled
              behavior={isIos ? 'padding' : 'height'}
              keyboardVerticalOffset={100}
              style={{ marginTop: 24 }}
            >
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
              />
              <CTAButton
                disabled={!values.email && touched.email}
                type={CTAButtonTypes.primary}
                text={i18n.string(keys.pdp.getInStockAlert)}
                styleText={styles.formSubmitText}
                handleOnPress={handleSubmit}
              />
              <CTAButton
                type={CTAButtonTypes.secondary}
                text={buttonText}
                style={{ marginTop: 16 }}
                styleText={styles.removeAlertText}
                handleOnPress={handleDelete}
              />
            </KeyboardAvoidingView>
          );
        }}
      </Formik>
    </View>
  );
};

export default UpdateStockComponent;
