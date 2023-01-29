import {Service} from 'react-native-zeroconf';

export type ConnectService = {
  id: string;
  service: Partial<Service>;
  folder: string;
  username?: string;
  password?: string;
};
