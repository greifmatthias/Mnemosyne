import {NavigationedScreen} from 'types';

export type HomeScreenProps = NavigationedScreen<'HomeScreen'>;

export class HomeScreenParams {
  static getDefault = (): HomeScreenParams => ({});
}
