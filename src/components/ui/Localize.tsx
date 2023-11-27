import React, { Fragment, PropsWithChildren, ReactElement, useEffect, useState } from 'react';

import { i18n } from '@assos/lib';

export default function Localize(props: PropsWithChildren<any>): ReactElement {
  const { children } = props;

  const [locale, setLocale] = useState('en');

  useEffect(() => {
    i18n.addLocaleListener(setLocale);

    return () => {
      i18n.removeLocaleListener(setLocale);
    };
  }, []);

  return <Fragment key={locale}>{children}</Fragment>;
}
