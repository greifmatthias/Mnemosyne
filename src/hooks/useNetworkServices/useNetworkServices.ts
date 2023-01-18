import {useEffect, useMemo, useState} from 'react';
import Zeroconf, {Service} from 'react-native-zeroconf';

import {useNetworkServiceMock} from './useNetworkServices.mock';
import {
  UseNetworkServicesInterface,
  UseNetworkServicesReturn,
} from './useNetworkServices.types';

export const useNetworkServices = ({
  isTest = false,
}: UseNetworkServicesInterface): UseNetworkServicesReturn => {
  const [services, setServices] = useState<Record<string, Partial<Service>>>(
    () => ({}),
  );

  const service = useMemo(() => new Zeroconf(), []);

  useEffect(() => {
    if (service) {
      service.scan();

      service.on('found', (name: string) =>
        setServices(x => ({...x, [name]: {name}})),
      );

      service.on('remove', (name: string) => {
        setServices(x => {
          delete x[name];

          return {...x};
        });
      });

      service.on('resolved', (newService: Service) =>
        setServices(x => {
          if (x[newService.name]) x[newService.name] = newService;

          return {...x};
        }),
      );

      service.on('error', (error: Error) => console.log(error));
    }

    return () => {
      setServices({});

      if (service) service.stop();
    };
  }, [service]);

  if (isTest) return useNetworkServiceMock;

  return {
    services,
  };
};
