import {
  Image,
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import React from 'react';
import * as yup from 'yup';
import { Formik, FormikConfig, FormikHelpers } from 'formik';
import { Accordion, AccordionProps } from '@brandingbrand/fscomponents';

import { defineSchema, i18n, keys } from '@assos/lib';
import { fontFamily, lightMode as palette } from '@assos/styles';

import FormTextInput from './TextInput';

const styles = StyleSheet.create({
  componentWrapper: {
    borderTopWidth: 1,
    borderTopColor: palette.separatorPrimary,
    borderBottomWidth: 1,
    borderBottomColor: palette.separatorPrimary
  },
  accordionContainer: {
    borderBottomWidth: 0,
    borderTopWidth: 0
  },
  accordionTouchControl: {
    height: 80
  },
  accordionTitleContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  accordionTitleContainerReverseRow: {
    justifyContent: 'flex-end',
    flexDirection: 'row-reverse'
  },
  accordionTitle: {
    fontFamily,
    fontSize: 15,
    lineHeight: 22,
    color: palette.textPrimary,
    letterSpacing: 0.5
  },
  accordionIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain'
  },
  accordionPlusMinus: {
    fontFamily,
    fontSize: 13,
    lineHeight: 18,
    color: palette.textPrimary,
    letterSpacing: 0.5
  },
  accordionContent: {
    paddingBottom: 30
  },
  formFieldContainer: {
    marginBottom: 0
  },
  innerButtonWrapperStyle: {
    position: 'absolute',
    width: 62,
    height: 31,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.systemBackgroundBanner,
    top: 30,
    right: 9
  },
  activePromosContainer: {
    paddingHorizontal: 20,
    paddingBottom: 25
  },
  activePromoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10
  },
  activePromoContainerLast: {
    marginBottom: 0
  },
  activePromoRightContentContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  activePromoClearIconContainer: {
    marginLeft: 5
  }
});

const icons = {
  plus: require('@assets/icons/Plus.png'),
  minus: require('@assets/icons/Minus.png'),
  clearIcon: require('@assets/icons/iconCloseWithGroup.png'),
  error: require('@assets/icons/Error.png')
};

interface PromoFormInput {
  promoCode: string;
}

const PromoFormInitialValues: PromoFormInput = {
  promoCode: ''
};

const generateFormSchema = () => defineSchema<PromoFormInput>({
  promoCode: yup.string().required(i18n.string(keys.errors.promoCode))
});

const formKeys = {
  promoCode: 'promoCode'
};

interface FormFieldsItem {
  title: string;
  formField: string;
  keyboardType?: KeyboardTypeOptions;
}

type FormFieldsType = FormFieldsItem[];

const formFields: FormFieldsType = [
  {
    title: i18n.string(keys.promoForm.inputTitle),
    formField: formKeys.promoCode
  }
];

export interface Promo {
  id: string;
  title: string;
  discount: number;
}

interface PromoFormState {
  activePromos: Promo[];
  errorMessage: string;
}

interface PromoFormAccordionProps extends Omit<
  AccordionProps,
  'style' |
  'openStyle' |
  'title'
> {}

interface PromoFormProps extends PromoFormAccordionProps {
  promoInputTitle?: string;
  innerButtonText?: string;
  errorMessage?: string;
  accordionTitleText?: string;
  accordionTitleLayout?: 'row' | 'reverse-row';

  // Styles
  componentWrapperStyle?: StyleProp<ViewStyle>;
  accordionContainerStyle?: StyleProp<ViewStyle>;
  accordionOpenContainerStyle?: StyleProp<ViewStyle>;
  accordionTitleStyle?: StyleProp<TextStyle>;
  accordionContentStyle?: StyleProp<ViewStyle>;
  formFieldContainerStyle?: StyleProp<TextStyle>;
  innerButtonWrapperStyle?: StyleProp<ViewStyle>;
  activePromosContainerStyle?: StyleProp<ViewStyle>;
  activePromoClearIconContainer?: StyleProp<ViewStyle>;
}

class PromoForm extends React.PureComponent<PromoFormProps, PromoFormState> {
  formikConfig: FormikConfig<PromoFormInput>;

  constructor(props: any) {
    super(props);

    this.state = {
      activePromos: [],
      errorMessage: ''
    };

    this.formikConfig = {
      validateOnChange: true,
      validateOnBlur: true,
      initialValues: PromoFormInitialValues,
      validationSchema: generateFormSchema(),
      onSubmit: this.handleSubmitPromoForm
    };
  }

  handleSubmitPromoForm = async (
    values: PromoFormInput,
    actions: FormikHelpers<PromoFormInput>
  ) => {
    const { activePromos } = this.state;
    this.fetchPromoCode(values.promoCode)
      .then((newPromoCode: Promo) => {
        if (!!newPromoCode) {
          this.setState({ activePromos: [...activePromos, newPromoCode] });
        }
      })
      .catch(() => {
        actions.setFieldError(formKeys.promoCode, i18n.string(keys.promoForm.errorMessage));
      });
  }

  // TODO: it's hardcode for get Promo in API
  fetchPromoCode = async (value: string): Promise<Promo> => {
    return new Promise((resolve, reject) => {
      if (value !== 'ECOMMERCE_PROMO') {
        resolve({
          id: `${value.toUpperCase()}_${this.state.activePromos.length + 1}`,
          title: value,
          discount: 10
        });
      } else {
        reject(new Error(i18n.string(keys.promoForm.errorMessage)));
      }
    });
  }

  handleRemovePromoCode = (id: string) => () => {
    const { activePromos } = this.state;
    const newActivePromos = activePromos.filter(el => el.id !== id);
    this.setState({ activePromos: newActivePromos });
  }

  renderAccordionTitle = () => {
    return (
      <Text style={[styles.accordionTitle, this.props.accordionTitleStyle]}>
        {this.props.accordionTitleText || i18n.string(keys.cart.haveAPromo)}
      </Text>
    );
  }

  renderPromoForm = () => {
    const {
      accordionContentStyle,
      innerButtonText,
      innerButtonWrapperStyle,
      formFieldContainerStyle,
      promoInputTitle
    } = this.props;

    return (
      <View style={[styles.accordionContent, accordionContentStyle]}>
        <Formik {...this.formikConfig}>
          {props => {
            const { setFieldValue, submitForm, errors } = props;

            return (
              <>
                {!!formFields && formFields.map((elem, i: number) => {
                  const currentError = errors[elem.formField as keyof PromoFormInput];

                  return (
                    <FormTextInput
                      key={i}
                      formFieldName={elem.formField}
                      title={promoInputTitle || elem.title}
                      errorsMessage={currentError || ''}
                      errorIcon={icons.error}
                      setFormikField={setFieldValue}
                      submitForm={submitForm}
                      containerStyles={[
                        styles.formFieldContainer, formFieldContainerStyle
                      ]}
                      innerButtonText={
                        innerButtonText || i18n.string(keys.promoForm.innerButtonText)
                      }
                      innerButton={true}
                      innerButtonWrapperStyle={[
                        styles.innerButtonWrapperStyle, innerButtonWrapperStyle
                      ]}
                    />
                  );
                })}
              </>
            );
          }}
        </Formik>
      </View>
    );
  }

  renderActivePromo = (el: Promo, id: number) => {
    const discountSum = `${i18n.string(keys.promoForm.currency)}${el.discount}`;
    return (
      <View
        key={el.id}
        style={[
          styles.activePromoContainer,
          this.state.activePromos.length - 1 === id && styles.activePromoContainerLast
        ]}
      >
        <Text>{el.title}</Text>
        <View style={styles.activePromoRightContentContainer}>
          <Text>{discountSum}</Text>
          <TouchableOpacity
            style={[styles.activePromoClearIconContainer, this.props.activePromoClearIconContainer]}
            onPress={this.handleRemovePromoCode(el.id)}
          >
            <Image source={icons.clearIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render(): JSX.Element {
    const {
      accordionContainerStyle,
      accordionOpenContainerStyle,
      accordionTitleLayout,
      titleTouchStyle,
      iconFormat,
      openIconImage,
      openIconStyle,
      closedIconImage,
      closedIconStyle,
      plusMinusStyle,
      activePromosContainerStyle
    } = this.props;
    const titleContainerStyle = accordionTitleLayout !== 'reverse-row' ?
      styles.accordionTitleContainerRow : styles.accordionTitleContainerReverseRow;

    return (
      <View style={[styles.componentWrapper, this.props.componentWrapperStyle]}>
        <Accordion
          style={[styles.accordionContainer, accordionContainerStyle]}
          openStyle={accordionOpenContainerStyle}
          titleTouchStyle={[styles.accordionTouchControl, titleTouchStyle]}
          titleContainerStyle={[titleContainerStyle, this.props.titleContainerStyle]}
          title={this.renderAccordionTitle()}
          iconFormat={iconFormat || 'image'}
          openIconImage={openIconImage || icons.minus}
          closedIconImage={closedIconImage || icons.plus}
          openIconStyle={[styles.accordionIcon, openIconStyle]}
          closedIconStyle={[styles.accordionIcon, closedIconStyle]}
          plusMinusStyle={[styles.accordionPlusMinus, plusMinusStyle]}
          content={this.renderPromoForm()}
        />
        {this.state.activePromos.length > 0 && (
          <View style={[styles.activePromosContainer, activePromosContainerStyle]}>
            {this.state.activePromos.map(this.renderActivePromo)}
          </View>
        )}
      </View>
    );
  }
}

export default PromoForm;
