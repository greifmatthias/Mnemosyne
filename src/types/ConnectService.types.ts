import {Service} from 'react-native-zeroconf';

export type ConnectService = {
  service: Partial<Service>;
  folder: string;
  username?: string;
  password?: string;
};
