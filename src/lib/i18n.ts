import FSI18n from '@brandingbrand/fsi18n';

const oldSetLocale = FSI18n.setLocale.bind(FSI18n);

let localeListeners: ((locale: string) => void)[] = [];

FSI18n.setLocale = (locale: string): void => {
  oldSetLocale(locale);
  localeListeners.forEach((func: (locale: string) => void) => {
    func(locale);
  });
};

FSI18n.addLocaleListener = (func: (locale: string) => void) => {
  localeListeners.push(func);
};

FSI18n.removeLocaleListener = (func: (locale: string) => void) => {
  localeListeners = localeListeners.filter((testFunc: (locale: string) => void) => {
    return func !== testFunc;
  });
};
