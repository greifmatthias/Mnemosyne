import {ConnectService, NavigationedScreen} from 'types';

export type HomeScreenProps = NavigationedScreen<
  'HomeScreen',
  HomeScreenParams
>;

export class HomeScreenParams {
  selectedService?: ConnectService;

  static getDefault = (): HomeScreenParams => ({});
}
