export interface Theme {
  // Background
  systemBackgroundPrimary: string;
  systemBackgroundSecondary: string;
  systemBackgroundTertiary: string;
  systemBackgroundHover: string;
  systemBackgroundSelected: string;
  systemBackgroundPopover: string;
  systemBackgroundBanner: string;
  systemBackgroundHeader: string;
  systemBackgroundError: string;
  headerBackgroundPIP: string;
  ghostBackground: string;

  // Text
  textPrimary: string;
  textPrimaryLM: string;
  textSecondary: string;
  textButtonLabelPrimary: string;
  textButtonLabelSecondary: string;
  textLinkPrimary: string;
  textLinkPrimaryHover: string;
  textClearance: string;
  textError: string;
  textSuccess: string;
  textBanner: string;
  textNotification: string;
  topBarTextColor: string;
  preferredText: string;
  textOos: string;

  // Icons
  iconActive: string;
  iconPrimaryHover: string;
  iconPrimary: string;
  iconSecondary: string;
  iconError: string;
  iconSuccess: string;
  iconTertiary: string;
  iconStrokeSelected: string;
  iconBanner: string;
  iconInactive: string;

  // Fields
  fieldBackground: string;
  fieldActiveStroke: string;
  fielErrorStroke: string;

  // Buttons
  buttonPrimary: string;
  buttonPrimaryHover: string;
  buttonSecondary: string;
  buttonBorderSecondary: string;
  buttonSecondaryHover: string;
  buttonInactive: string;
  buttonTertiary: string;

  // Separators
  separatorPrimary: string;
  separatorSecondary: string;

  // Borders
  bordersPrimary: string;
  borderLight: string;
  bordersInactive: string;

  // Custom
  accessoryBlue: string;
  white: string;
  facebookBtnAlt: string;
  googleBtnAlt: string;
  grey: string;
}

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  success: '#43A047',
  error: '#D40300',
  h_0c0c0c: '#0C0C0C',
  h_2b2b2b: '#2B2B2B',
  h_707070: '#707070',
  h_9e9e9e: '#9E9E9E',
  h_f7f8f9: '#F7F8F9',
  h_333132: '#333132',
  h_020202: '#020202',
  h_d6d6d6: '#D6D6D6',
  h_565555: '#565555',
  h_efefef: '#EFEFEF',
  h_dbdbdb: '#DBDBDB',
  h_858585: '#858585',
  modalInputTitle: '#999999',
  fineText: '#565656'
};

export const lightMode: Theme = {
  // Background
  systemBackgroundPrimary: colors.white,
  systemBackgroundSecondary: colors.black,
  systemBackgroundTertiary: colors.h_0c0c0c,
  systemBackgroundHover: '#F9F9F9',
  systemBackgroundSelected: '#F7FAFD',
  systemBackgroundPopover: colors.white,
  systemBackgroundBanner: colors.h_0c0c0c,
  systemBackgroundHeader: colors.white,
  systemBackgroundError: '#CC0000',
  headerBackgroundPIP: '#000000',
  ghostBackground: '#F0F0F0',

  // Text
  textPrimary: colors.h_0c0c0c,
  textPrimaryLM: colors.h_333132,
  textSecondary: colors.h_2b2b2b,
  textButtonLabelPrimary: colors.white,
  textButtonLabelSecondary: colors.h_0c0c0c,
  textLinkPrimary: colors.h_0c0c0c,
  textLinkPrimaryHover: colors.h_0c0c0c,
  textClearance: colors.h_707070,
  textError: colors.error,
  textSuccess: colors.success,
  textBanner: colors.white,
  textNotification: colors.white,
  topBarTextColor: '#141414',
  preferredText: '#000000',
  textOos: '#c7c7c7',

  // Icons
  iconActive: '#231F20',
  iconPrimaryHover: '#0255B0',
  iconPrimary: colors.h_0c0c0c,
  iconSecondary: '#565555',
  iconError: colors.error,
  iconSuccess: colors.success,
  iconTertiary: '#777777',
  iconStrokeSelected: '#333132',
  iconBanner: '#333132',
  iconInactive: colors.h_9e9e9e,

  // Fields
  fieldBackground: colors.white,
  fieldActiveStroke: colors.h_0c0c0c,
  fielErrorStroke: colors.error,

  // Buttons
  buttonPrimary: colors.h_020202,
  buttonPrimaryHover: colors.h_d6d6d6,
  buttonSecondary: colors.white,
  buttonBorderSecondary: colors.h_565555,
  buttonSecondaryHover: colors.h_d6d6d6,
  buttonInactive: colors.h_d6d6d6,
  buttonTertiary: colors.h_efefef,

  // Separators
  separatorPrimary: colors.h_dbdbdb,
  separatorSecondary: colors.h_858585,

  // Borders
  bordersPrimary: '#000000',
  borderLight: '#CCCCCC',
  bordersInactive: '#767474',

  // Custom
  accessoryBlue: '#3478F6',
  white: '#ffffff',
  facebookBtnAlt: '#1A75F0',
  googleBtnAlt: '#4285F4',
  grey: '#E6E6E6'
};

export const lightModeHighContrast: Theme = {
  // Background
  systemBackgroundPrimary: '#FFFFFF',
  systemBackgroundSecondary: '#F6F6F6',
  systemBackgroundTertiary: '#F6F6F6',
  systemBackgroundHover: '#FA0CFF',
  systemBackgroundSelected: '#FA0CFF',
  systemBackgroundPopover: '#111010',
  systemBackgroundBanner: '#F6F6F6',
  systemBackgroundHeader: '#FFFFFF',
  systemBackgroundError: '#CC0000',
  headerBackgroundPIP: '#000000',
  ghostBackground: '#F0F0F0',

  // Text
  textPrimary: '#111010',
  textPrimaryLM: colors.h_333132,
  textSecondary: '#434343',
  textButtonLabelPrimary: '#FFFFFF',
  textButtonLabelSecondary: '#434343',
  textLinkPrimary: '#111010',
  textLinkPrimaryHover: '#FA0CFF',
  textClearance: colors.h_707070,
  textError: '#912C31',
  textSuccess: '#2D6E66',
  textBanner: '#111010',
  textNotification: '#FFFFFF',
  topBarTextColor: '#141414',
  preferredText: '#000000',
  textOos: '#c7c7c7',

  // Icons
  iconActive: '#231F20',
  iconPrimaryHover: '#004694',
  iconPrimary: '#111010',
  iconSecondary: '#434343',
  iconError: '#912C31',
  iconSuccess: '#2D6E66',
  iconTertiary: '#434343',
  iconStrokeSelected: '#111010',
  iconBanner: '#111010',
  iconInactive: '#707070',

  // Fields
  fieldBackground: '#FFFFFF',
  fieldActiveStroke: '', // TODO - Not present in designs
  fielErrorStroke: colors.error,

  // Buttons
  buttonPrimary: '#111010',
  buttonPrimaryHover: '#004694',
  buttonSecondary: '#FFFFFF',
  buttonBorderSecondary: '#434343',
  buttonSecondaryHover: '#F2F2F2',
  buttonInactive: '#ADADAD',
  buttonTertiary: '', // TODO - Not present in designs

  // Separators
  separatorPrimary: '#ADADAD',
  separatorSecondary: '#777777',

  // Borders
  bordersPrimary: '#000000',
  borderLight: '#CCCCCC',
  bordersInactive: '#767474',

  // Custom
  accessoryBlue: '#3478F6',
  white: '#ffffff',
  facebookBtnAlt: '#1A75F0',
  googleBtnAlt: '#4285F4',
  grey: '#E6E6E6'
};

export const darkMode: Theme = {
  // Background
  systemBackgroundPrimary: '#141313',
  systemBackgroundSecondary: '#333132',
  systemBackgroundTertiary: '#333132',
  systemBackgroundHover: '#FA0CFF',
  systemBackgroundSelected: '#FA0CFF',
  systemBackgroundPopover: '#EFEFEF',
  systemBackgroundBanner: '#5A5A5A',
  systemBackgroundHeader: '#3D3B3C',
  systemBackgroundError: '#CC0000',
  headerBackgroundPIP: '#000000',
  ghostBackground: '#F0F0F0',

  // Text
  textPrimary: '#F2F2F2',
  textPrimaryLM: colors.h_333132,
  textSecondary: '#AEAEAE',
  textButtonLabelPrimary: '#FFFFFF',
  textButtonLabelSecondary: '#AEAEAE',
  textLinkPrimary: '#F2F2F2',
  textLinkPrimaryHover: '#FA0CFF',
  textClearance: colors.h_707070,
  textError: '#CD666C',
  textSuccess: '#479E94',
  textBanner: '#FFFFFF',
  textNotification: '#111010',
  topBarTextColor: '#141414',
  preferredText: '#000000',
  textOos: '#c7c7c7',

  // Icons
  iconActive: '#231F20',
  iconPrimaryHover: '#94C2F6',
  iconPrimary: '#F2F2F2',
  iconSecondary: '#AEAEAE',
  iconError: '#CD666C',
  iconSuccess: '#3D948A',
  iconTertiary: '#777777',
  iconStrokeSelected: '#FFFFFF',
  iconBanner: '#FFFFFF',
  iconInactive: '#777777',

  // Fields
  fieldBackground: '#424141',
  fieldActiveStroke: '', // TODO - Not present in designs
  fielErrorStroke: colors.error,

  // Buttons
  buttonPrimary: '#F2F2F2',
  buttonPrimaryHover: '#94C2F6',
  buttonSecondary: '#3D3B3C',
  buttonBorderSecondary: '#AEAEAE',
  buttonSecondaryHover: '#FA0CFF',
  buttonInactive: '#5C5C5C',
  buttonTertiary: '', // TODO - Not present in designs

  // Separators
  separatorPrimary: '#5C5C5C',
  separatorSecondary: '#777777',

  // Borders
  bordersPrimary: '#000000',
  borderLight: '#CCCCCC',
  bordersInactive: '#767474',

  // Custom
  accessoryBlue: '#3478F6',
  white: '#ffffff',
  facebookBtnAlt: '#1A75F0',
  googleBtnAlt: '#4285F4',
  grey: '#E6E6E6'
};

export const darkModeHighContrast: Theme = {
  // Background
  systemBackgroundPrimary: '#141313',
  systemBackgroundSecondary: '#282727',
  systemBackgroundTertiary: '#282727',
  systemBackgroundHover: '#FA0CFF',
  systemBackgroundSelected: '#FA0CFF',
  systemBackgroundPopover: '#FFFFFF',
  systemBackgroundBanner: '#414040',
  systemBackgroundHeader: '#333132',
  systemBackgroundError: '#CC0000',
  headerBackgroundPIP: '#000000',
  ghostBackground: '#F0F0F0',

  // Text
  textPrimary: '#FFFFFF',
  textPrimaryLM: colors.h_333132,
  textSecondary: '#D2D2D2',
  textButtonLabelPrimary: '#FFFFFF',
  textButtonLabelSecondary: '#D2D2D2',
  textLinkPrimary: '#FFFFFF',
  textLinkPrimaryHover: '#FA0CFF',
  textClearance: colors.h_707070,
  textError: '#E2A5A8',
  textSuccess: '#7FC0B8',
  textBanner: '#FFFFFF',
  textNotification: '#111010',
  topBarTextColor: '#141414',
  preferredText: '#000000',
  textOos: '#c7c7c7',

  // Icons
  iconActive: '#231F20',
  iconPrimaryHover: '#BEDBFA',
  iconPrimary: '#FFFFFF',
  iconSecondary: '#D2D2D2',
  iconError: '#E2A5A8',
  iconSuccess: '#7FC0B8',
  iconTertiary: '#ADADAD',
  iconStrokeSelected: '#FFFFFF',
  iconBanner: '#FFFFFF',
  iconInactive: '#ADADAD',

  // Fields
  fieldBackground: '#333132',
  fieldActiveStroke: '', // TODO - Not present in designs
  fielErrorStroke: colors.error,

  // Buttons
  buttonPrimary: '#FFFFFF',
  buttonPrimaryHover: '#BEDBFA',
  buttonSecondary: '#333132',
  buttonBorderSecondary: '#D2D2D2',
  buttonSecondaryHover: '#FA0CFF',
  buttonInactive: '#999999',
  buttonTertiary: '', // TODO - Not present in designs

  // Separators
  separatorPrimary: '#999999',
  separatorSecondary: '#777777',

  // Borders
  bordersPrimary: '#000000',
  borderLight: '#CCCCCC',
  bordersInactive: '#767474',

  // Custom
  accessoryBlue: '#3478F6',
  white: '#ffffff',
  facebookBtnAlt: '#1A75F0',
  googleBtnAlt: '#4285F4',
  grey: '#E6E6E6'
};

export default lightMode;
