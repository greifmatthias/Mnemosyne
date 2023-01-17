import Zeroconf, {Service} from 'react-native-zeroconf';

export type UseNetworkServicesReturn = {
  service?: Zeroconf;
  services: Record<string, Partial<Service>>;
};
