import {ConnectService} from 'types';

import {DATALOCATIONS} from './DataLocations.enum';
import {StorageService} from './StorageService';

export class LocalServicesService extends StorageService {
  // Save Services
  static save = (services: Array<ConnectService>): Promise<void> =>
    super.doSave(DATALOCATIONS.SERVICES, services);

  // Load Services from storage
  static load = async (): Promise<Array<ConnectService>> => {
    const data = await super.doLoad(DATALOCATIONS.SERVICES);

    if (!data) return [];

    return data;
  };

  // Delete stored User
  static delete = (): Promise<void> => super.doDelete(DATALOCATIONS.SERVICES);
}
