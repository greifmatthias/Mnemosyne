import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import {LocalServicesService} from 'services';
import {ConnectService} from 'types';

import {AppContextInterface} from './AppContext.types';

export const AppContext = createContext<AppContextInterface>({
  services: [],
  addService: (_service: ConnectService) => {},
});

export const AppProvider = ({children}: any) => {
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
    <AppContext.Provider value={{services, addService}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
