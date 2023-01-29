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
  add: (_service: ConnectService) => {},
  edit: (_service: ConnectService) => {},
  remove: (_service: ConnectService) => {},
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
  const add = useCallback((newService: ConnectService) => {
    setServices(x => [...x, newService]);
  }, []);

  //   Remove service
  const edit = useCallback((editedService: ConnectService) => {
    setServices(x => {
      const oldServices = [...x].filter(y => y.id !== editedService.id);

      return [editedService, ...oldServices];
    });
  }, []);

  //   Remove service
  const remove = useCallback(({id}: ConnectService) => {
    setServices(x => x.filter(y => y.id !== id));
  }, []);

  return (
    <ServiceContext.Provider value={{services, add, edit, remove}}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => useContext(ServiceContext);
