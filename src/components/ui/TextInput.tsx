import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import { omit } from 'lodash-es';
import React, { forwardRef, useState } from 'react';

import { i18n, keys } from '@assos/lib';
import { assetsImages, fontFamily, fonts, lightMode as palette } from '@assos/styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    marginBottom: 30
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 3
  },
  requiredSymbol: {
    color: '#141414',
    fontFamily,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 13,
    letterSpacing: 1,
    marginRight: 1
  },
  requiredSymbolError: {
    color: palette.textError
  },
  title: {
    fontFamily,
    color: palette.textPrimary,
    fontWeight: '400',
    letterSpacing: 0.5,
    fontSize: 13,
    lineHeight: 13
  },
  titleError: {
    color: palette.textError
  },
  textInputContainer: {
    width: '100%'
  },
  textInput: {
    width: '100%',
    height: 55,
    // alignItems: 'center',
    fontFamily: fonts.maisonNeue,
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 18,
    letterSpacing: 0.5,
    color: palette.systemBackgroundPopover,
    borderWidth: 1,
    borderColor: '#767474',
    backgroundColor: palette.systemBackgroundPrimary,
    paddingHorizontal: 20
  },
  textInputError: {
    borderWidth: 2,
    borderColor: palette.textError
  },
  placeholder: {
    position: 'absolute',
    top: 18,
    left: 20,
    fontFamily,
    fontWeight: '500',
    fontSize: 17,
    letterSpacing: 0.5,
    color: palette.systemBackgroundPopover
  },
  activeInput: {
    borderWidth: 2
  },
  errorMessage: {
    fontFamily,
    marginTop: 1,
    color: palette.textError,
    marginRight: 20
  },
  errorContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7
  },
  errorIconStyle: {
    marginRight: 5
  },
  passwordShowButton: {
    position: 'absolute',
    right: 20,
    top: 20
  },
  innerContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export interface FormTextInputType extends TextInputProps {
  formFieldName: string;
  errorsMessage?: string;
  required?: boolean;
  requiredSymbol?: string;
  title?: string;
  innerButtonText?: string;
  placeholder?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  overwriteHandleChange?: boolean;
  formikValidateOnChange?: boolean;
  formikValidateOnBlur?: boolean;
  setFormikField?: (field: string, value: any, shouldValidate?: boolean) => void;
  setFormikFieldTouched?: (
    field: string,
    isTouched?: boolean,
    shouldValidate?: boolean
  ) => void;
  iconPress?: (value: any) => void;
  iconPressDisable?: boolean;
  iconUrl?: ImageSourcePropType;
  errorIcon?: ImageSourcePropType;
  containerStyles?: StyleProp<ViewStyle>;
  innerContainerStyle?: StyleProp<ViewStyle>;
  titleStyles?: StyleProp<TextStyle>;
  titleErrorStyles?: StyleProp<TextStyle>;
  requiredSymbolStyles?: StyleProp<TextStyle>;
  requiredSymbolErrorStyles?: StyleProp<TextStyle>;
  errorMessageStyle?: StyleProp<TextStyle>;
  placeholderStyles?: StyleProp<TextStyle>;
  innerButtonTextStyle?: StyleProp<TextStyle>;
  textInputContainerStyles?: StyleProp<TextStyle>;
  textInputStyles?: StyleProp<TextStyle>;
  textInputErrorStyles?: StyleProp<ViewStyle>;
  activeInputStyles?: StyleProp<ViewStyle>;
  imageWrapperStyle?: StyleProp<ViewStyle>;
  imageStyles?: StyleProp<ImageStyle>;
  errorContainer?: StyleProp<ViewStyle>;
  errorIconStyle?: StyleProp<ImageStyle>;
  innerButton?: boolean;
  innerButtonWrapperStyle?: StyleProp<ViewStyle>;
  innerButtonPress?: (value: string) => void;
  mask?: string;
  submitForm?: () => Promise<void>;
  disabledValidateOnTouch?: boolean;
  touched?: boolean;
}

type TextInputPropsOmit = Omit<TextInputProps,
  'onChangeText' | 'onFocus' | 'onBlur' | 'placeholder'>;

// tslint:disable-next-line:cyclomatic-complexity
const FormTextInput = forwardRef<TextInput, FormTextInputType>((props, ref) => {
  const {
    title,
    containerStyles,
    titleStyles,
    titleErrorStyles,
    requiredSymbolStyles,
    requiredSymbolErrorStyles,
    iconUrl,
    placeholder,
    placeholderStyles,
    textInputContainerStyles,
    textInputStyles,
    textInputErrorStyles,
    required,
    requiredSymbol,
    imageStyles,
    onBlur,
    onFocus,
    overwriteHandleChange,
    activeInputStyles,
    imageWrapperStyle,
    iconPress,
    keyboardType,
    errorsMessage,
    errorMessageStyle,
    maxLength,
    innerButton,
    errorIcon,
    errorContainer,
    errorIconStyle,
    innerButtonPress,
    innerButtonWrapperStyle,
    innerButtonText,
    formikValidateOnChange,
    formikValidateOnBlur,
    setFormikField,
    setFormikFieldTouched,
    formFieldName,
    value,
    innerButtonTextStyle,
    defaultValue,
    disabledValidateOnTouch,
    iconPressDisable,
    touched,
    innerContainerStyle
  } = props;
  const [inputValue, setInputValue] = useState<string>(defaultValue || '');
  const [activeInput, setActiveInput] = useState<boolean>(false);

  const touchedValidation: boolean = !disabledValidateOnTouch
    ? !!touched
    : true;

  const isError = !!errorsMessage && touchedValidation;

  const formatZip = (zipCode: string): string => {
    if (zipCode.length > 5) {
      const trimmed = zipCode.replace(/-/g, '');
      return (
        `${trimmed.substring(0, 5)}-${trimmed.substring(5)}`
      );
    } else {
      return zipCode;
    }
  };

  // @note(handleChange) text only
  const handleChange = (text: string): void => {
    if (!overwriteHandleChange) {
      if (formFieldName === 'postalCode') {
        setInputValue(formatZip(text));
        setFormikField?.(formFieldName, formatZip(text), formikValidateOnChange);
      } else {
        setInputValue(text);
        setFormikField?.(formFieldName, text, formikValidateOnChange);
      }
      if (formikValidateOnChange === false && !!touched) {
        setFormikFieldTouched?.(formFieldName, false);
      }
    }
  };

  const handlePressInnerButton = async () => {
    if (!!innerButtonPress) {
      innerButtonPress(inputValue || '');
    }
    if (!!props.submitForm) {
      props.submitForm().catch();
    }
  };

  const handleFocus = () => {
    setActiveInput(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setActiveInput(false);
    if (!!formikValidateOnBlur) {
      setFormikFieldTouched?.(formFieldName, true);
    }
    onBlur?.();
  };

  const isValueEmpty = value?.length === 0;
  const keyboardTypeValue = keyboardType || 'default';
  const restTextInputProps: TextInputPropsOmit =
    omit(props, ['onChangeText', 'onFocus', 'onBlur', 'placeholder']);

  return (
    <View
      style={[
        styles.container,
        containerStyles
      ]}
    >
      {!!title && (
        <View style={styles.titleContainer}>
          {!!required && (
            <Text
              style={[
                styles.requiredSymbol,
                requiredSymbolStyles,
                isError && styles.requiredSymbolError,
                isError && requiredSymbolErrorStyles
              ]}
            >
              {requiredSymbol || i18n.string(keys.inputTitles.required)}
            </Text>
          )}
          <Text
            style={[
              styles.title,
              titleStyles,
              isError && styles.titleError,
              isError && titleErrorStyles
            ]}
          >
            {title}
          </Text>
        </View>
      )}
      <View style={[styles.textInputContainer, textInputContainerStyles]}>
        <TextInput
          style={[
            styles.textInput,
            activeInput && styles.activeInput,
            activeInputStyles,
            textInputStyles,
            isError && styles.textInputError,
            isError && textInputErrorStyles
          ]}
          keyboardType={keyboardTypeValue}
          onBlur={handleBlur}
          onChangeText={handleChange}
          onFocus={handleFocus}
          value={value}
          ref={ref}
          maxLength={maxLength}
          placeholder={''}
          {...restTextInputProps}
        />
        {isValueEmpty && (
          <Text
            style={[
              styles.placeholder,
              placeholderStyles
            ]}
          >
            {placeholder}
          </Text>
        )}
        <View style={[styles.innerContainer, innerContainerStyle]}>
          {!!iconUrl && (
            <TouchableOpacity
              style={imageWrapperStyle}
              onPress={iconPress}
              disabled={!!iconPressDisable}
            >
              <Image
                source={iconUrl}
                style={imageStyles}
              />
            </TouchableOpacity>
          )}
          {!!innerButton && (
            <TouchableOpacity
              style={innerButtonWrapperStyle}
              onPress={handlePressInnerButton}
              disabled={formFieldName === 'password' ? false : !!errorsMessage}
            >
              <Text style={innerButtonTextStyle}>{innerButtonText}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      {isError && (
        <View
          style={[
            styles.errorContainer,
            errorContainer
          ]}
        >
          <Image
            source={errorIcon || assetsImages.warning}
            style={[
              styles.errorIconStyle,
              errorIconStyle
            ]}
          />
          <Text
            style={[
              styles.errorMessage,
              errorMessageStyle
            ]}
          >
            {errorsMessage}
          </Text>
        </View>
      )}
    </View>
  );
});

export default FormTextInput;
