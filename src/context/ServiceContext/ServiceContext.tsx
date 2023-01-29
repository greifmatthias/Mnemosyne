import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import {LocalServicesService} from 'services';
import {ConnectService} from 'types';

import {ServiceContextInterface} from './ServiceContext.types';

export const ServiceContext = createContext<ServiceContextInterface>({
  services: [],
  addService: (_service: ConnectService) => {},
});

export const ServiceProvider = ({children}: any) => {
  const [services, setServices] = useState<Array<ConnectService>>(() => []);

  //   Init load services
  useEffect(() => {
    LocalServicesService.load()
      .then(setServices)
      .catch(() => setServices([]));

    return () => {
      setServices([]);
    };
  }, []);

  //   Autosave services when changed
  useEffect(() => {
    LocalServicesService.save(services);
  }, [services]);

  //   Add new service
  const addService = useCallback((newService: ConnectService) => {
    setServices(x => [...x, newService]);
  }, []);

  return (
    <ServiceContext.Provider value={{services, addService}}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => useContext(ServiceContext);
