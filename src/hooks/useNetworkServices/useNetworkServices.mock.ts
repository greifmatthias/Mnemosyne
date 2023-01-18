import {UseNetworkServicesReturn} from './useNetworkServices.types';

export const useNetworkServiceMock: UseNetworkServicesReturn = {
  services: {
    truenas: {
      addresses: ['192.168.0.160'],
      fullName: '192.168.0.160._http._tcp',
      host: '192.168.0.160',
      name: 'truenas',
      port: 80,
      txt: {},
    },
  },
};
