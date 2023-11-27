import { RefObject } from 'react';
import { TextInput } from 'react-native';

/** types */
interface FormFieldRef {
  id: string;
  ref: RefObject<TextInput>;
  type: 'text';
}

// dynamically determines which input we should focus on next
export const focusRef =
  (refs: FormFieldRef[], fieldId: string, type: 'prev' | 'next' = 'next') =>
  () => {
    const currRefIndex = refs.findIndex(refObj => refObj.id === fieldId);
    const nextRef = refs[currRefIndex + (type === 'next' ? 1 : -1)];
    nextRef.ref?.current?.focus();
  };

export const getRefById = (refs: FormFieldRef[], formKey: string) => {
  return refs.find(refObj => refObj.id === formKey)?.ref;
};
