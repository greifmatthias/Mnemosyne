import {ConnectService, NavigationedScreen} from 'types';

export type EditServiceScreenProps = NavigationedScreen<
  'EditServiceScreen',
  EditServiceScreenParams
>;

export class EditServiceScreenParams {
  service?: ConnectService;

  static getDefault = (): EditServiceScreenParams => ({});
}
