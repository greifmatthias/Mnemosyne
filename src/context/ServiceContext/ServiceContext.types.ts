import {ConnectService} from 'types';

export type ServiceContextInterface = {
  services: Array<ConnectService>;
  addService: (service: ConnectService) => void;
};
