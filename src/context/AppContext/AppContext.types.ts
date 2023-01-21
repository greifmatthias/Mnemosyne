import {Service} from 'react-native-zeroconf';

export type AppContextInterface = {
  services: Array<Service>;
  addService: (service: Service) => void;
};
