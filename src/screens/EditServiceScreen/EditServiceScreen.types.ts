import {NavigationedScreen} from 'types';

export type EditServiceScreenProps = NavigationedScreen<'EditServiceScreen'>;

export class EditServiceScreenParams {
  static getDefault = (): EditServiceScreenParams => ({});
}
