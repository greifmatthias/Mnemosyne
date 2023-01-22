import {Service} from 'react-native-zeroconf';

import {NavigationedScreen} from 'types';

export type EditServiceScreenProps = NavigationedScreen<
  'EditServiceScreen',
  EditServiceScreenParams
>;

export class EditServiceScreenParams {
  service?: Service;

  static getDefault = (): EditServiceScreenParams => ({});
}
