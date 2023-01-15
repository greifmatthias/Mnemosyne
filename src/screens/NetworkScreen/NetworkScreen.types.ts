import {NavigationedScreen} from 'types';

export type NetworkScreenProps = NavigationedScreen<'NetworkScreen'>;

export class NetworkScreenParams {
  static getDefault = (): NetworkScreenParams => ({});
}
