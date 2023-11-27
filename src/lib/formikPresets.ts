import * as yup from 'yup';
import ccValidator from 'card-validator';
import { i18n, keys } from '@assos/lib/translations';

export function defineSchema<T extends object>(fields: yup.ObjectSchemaDefinition<Partial<T>>):
  any {
  return yup.object().shape(fields);
}

const errorMessages = {
  required: 'This field is required',
  cc: 'Please enter a valid credit card.',
  expDate: 'Please enter a valid expiration date',
  cvv: 'Can contain only numbers'
};

export const regexSchemaPresets = () => {
  return {
    createAccountPassword: yup.string()
      .required('Password does not meet minimal requirements')
      .test(
        'test',
        'Password does not meet minimal requirements',
        item => !!item?.match(/[A-Za-z\d$@.!%*#?&]{8,}/)
      ),
    phone: yup.string().matches(
      /^[+]?[0-9]{1}[0-9 ]{3,20}$/, 'Please enter a valid phone number'),
    phone2: yup.string().matches(
      // tslint:disable-next-line:ter-max-len
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*) *?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Please enter a valid phone number'),
    email: yup.string().matches(
      // tslint:disable-next-line:ter-max-len
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
      i18n.string(keys.joinNowForm.requirements.email))
      .required(i18n.string(keys.joinNowForm.requirements.email)),
    expDate: yup.string().required('This field is required')
      .test('expDate', errorMessages.expDate, value => {
        if (!value) {
          return false;
        }
        const [month, year] = value.split('/');
        const dateString = `${month}/01/${year}`;
        return new Date(dateString).getTime() > new Date(Date.now()).getTime();
      })
    ,
    cvv: yup.string().required(errorMessages.required).matches(
      /^[0-9]+$/, errorMessages.cvv),
    creditCardNumber: (unmaskedCard: string) => yup.string().required('This field is required')
      .min(16, 'Card number must be at least 16 digits')
      .test('cardNumber', errorMessages.cc, value => {
        const updatedValue: string | undefined = value?.replace(/-/g, '');
        const validCreditCardTypes = ['american-express', 'discover', 'mastercard', 'visa'];
        const isMaskedCC = updatedValue?.includes('*');
        const ccNumber = isMaskedCC ? unmaskedCard.replace(/\s/g, '') :
          updatedValue?.replace(/\s/g, '');
        const creditCard = ccValidator.number(ccNumber ?? '');
        const ccType = creditCard.card?.type;
        return !!ccType && validCreditCardTypes.includes(ccType);
      })
  };
};
