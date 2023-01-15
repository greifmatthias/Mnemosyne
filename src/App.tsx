import React, {useEffect, useMemo, useState} from 'react';
import SMBClient from 'react-native-smb';

import {ThemeProvider} from 'context';
import {Navigation} from 'navigation';

export const App = () => {
  const [list, setList] = useState<any>();

  const client = useMemo(
    () =>
      new SMBClient(
        '192.168.0.148', //ip
        '', //port
        'Data', //sharedFolder,
        '', //workGroup,
        'me', //username,
        '0889', //password,
        (data: any) => {
          console.log('new SMBClient data (callback): ' + JSON.stringify(data));
        },
      ),
    [],
  );

  useEffect(() => {
    if (client) {
      client.on('connect', (data: any) => {
        console.log('new SMBClient data (on connect): ' + JSON.stringify(data));
      });

      client.on('error', (data: any) => {
        console.log('error in SMBClient (on error): ' + JSON.stringify(data));
      });

      client.on('connectionStatus', (data: any) => {
        console.log(
          'connectionStatus data (on connectionStatus): ' +
            JSON.stringify(data),
        );
        console.log('connectionStatus is: ' + data.status); //connect or disconnect
      });

      client.list(
        'photos', //the path to list files and folders
        (data: any) => {
          //callback
          console.log('list data (callback): ' + JSON.stringify(data));

          setList(data);
        },
      );
    }

    return () => {
      if (client)
        client.disconnect((data: any) => {
          //callback
          console.log('disconnect data (callback): ' + JSON.stringify(data));
        });
    };
  }, [client]);

  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
};
