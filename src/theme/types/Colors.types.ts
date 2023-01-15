export type ColorDefinition = {
  base: string;
  shade10: string;
  shade20: string;
  shade40: string;
  tint10: string;
  tint20: string;
  tint40: string;
  tint80: string;
};

type NeutralColorDefinition = {
  neutral00: string;
  neutral02: string;
  neutral05: string;
  neutral10: string;
  neutral20: string;
  neutral60: string;
  neutral80: string;
  neutral90: string;
  neutral100: string;
};

export type AccentColors = {
  primary: ColorDefinition;
  secondary: ColorDefinition;
  tertiary: ColorDefinition;
};

export type Colors = AccentColors & {
  neutral: NeutralColorDefinition;
  text: string;
  invertedtext: string;
};

type PrimaryColor = `primary.${keyof ColorDefinition}`;
type SecondaryColor = `secondary.${keyof ColorDefinition}`;
type TertiaryColor = `tertiary.${keyof ColorDefinition}`;
type NeutralColor = `neutral.${keyof NeutralColorDefinition}`;

export type Color =
  | PrimaryColor
  | SecondaryColor
  | TertiaryColor
  | NeutralColor
  | 'text'
  | 'invertedtext';
