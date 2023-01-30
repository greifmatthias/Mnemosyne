import {Service} from 'react-native-zeroconf';

export type ConnectService = Omit<Service, 'fullName' | 'addresses' | 'txt'> & {
  id: string;
  folder: string;
  username?: string;
  password?: string;
};
