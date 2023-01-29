import {ConnectService} from 'types';

export type ServiceContextInterface = {
  services: Array<ConnectService>;
  add: (service: ConnectService) => void;
  edit: (service: ConnectService) => void;
  remove: (service: ConnectService) => void;
};
