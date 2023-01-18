import {Service} from 'react-native-zeroconf';

export type UseNetworkServicesInterface = {
  isTest?: boolean;
};

export type UseNetworkServicesReturn = {
  services: Record<string, Partial<Service>>;
};
