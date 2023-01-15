import {TextInputProps as RNTextInputProps} from 'react-native';

export type TextInputProps = RNTextInputProps & {
  title?: string;
  textInputStyle?: RNTextInputProps['style'];
};
