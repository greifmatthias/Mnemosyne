import {Service} from 'react-native-zeroconf';
import {NavigationedScreen} from 'types';

export type DirScreenProps = NavigationedScreen<'DirScreen', DirScreenParams>;

export class DirScreenParams {
  service?: Service;

  static getDefault = (): DirScreenParams => ({});
}
