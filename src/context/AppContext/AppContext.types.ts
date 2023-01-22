import {ConnectService} from 'types';

export type AppContextInterface = {
  services: Array<ConnectService>;
  addService: (service: ConnectService) => void;
};
