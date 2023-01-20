import React, {createContext, useContext, useEffect, useState} from 'react';
import {Service} from 'react-native-zeroconf';

import {LocalServicesService} from 'services';

import {AppContextInterface} from './AppContext.types';

export const AppContext = createContext<AppContextInterface>({
  services: [],
});

export const AppProvider = ({children}: any) => {
  const [services, setServices] = useState<Array<Service>>(() => []);

  useEffect(() => {
    LocalServicesService.load()
      .then(setServices)
      .catch(() => setServices([]));

    return () => {
      setServices([]);
    };
  }, []);

  return (
    <AppContext.Provider value={{services}}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
