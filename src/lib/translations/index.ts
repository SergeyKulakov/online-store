import '../i18n';

import FSI18n from '@brandingbrand/fsi18n';

import { en } from './en';
import { fr } from './fr';
import { de } from './de';
import { it } from './it';
import { es } from './es';
import { ProjectTranslationKeys } from './types';

const translations = {
  en,
  de,
  it,
  fr,
  es
};

const keys = FSI18n.addTranslations<ProjectTranslationKeys<string>>(translations);

const i18n = FSI18n;

export default FSI18n;
export { i18n, keys };
