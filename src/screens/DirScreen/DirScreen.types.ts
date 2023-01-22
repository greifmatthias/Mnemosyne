import {ConnectService, NavigationedScreen} from 'types';

export type DirScreenProps = NavigationedScreen<'DirScreen', DirScreenParams>;

export class DirScreenParams {
  service?: ConnectService;

  static getDefault = (): DirScreenParams => ({});
}
