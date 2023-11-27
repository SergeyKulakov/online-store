export interface StylePreferences {
  mens: boolean;
  womens: boolean;
  road: boolean;
  mountain: boolean;
  gravel: boolean;
  racing: boolean;
  comfort: boolean;
}

export type PreferenceKey = keyof StylePreferences;
