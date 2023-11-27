import { Dispatch, SetStateAction, useCallback, useState } from 'react';

import { useMountedRef } from './useMountedRef';

export const useMountedState = <T>(value: T): [T, Dispatch<SetStateAction<T>>] => {
  const mountedRef = useMountedRef();
  const [state, setState] = useState(value);

  const setMountedState = useCallback(
    newState => {
      if (mountedRef.current) {
        setState(newState);
      }
    },
    [mountedRef]
  );

  return [state, setMountedState];
};
