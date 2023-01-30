import {useEffect, useMemo, useState} from 'react';
import SMBClient from 'react-native-smb';

import {smbClientListMock} from './useSmbClient.mock';
import {
  ConnectCallback,
  FileItem,
  SmbClient,
  UseSmbClientProps,
  UseSmbClientReturn,
} from './UseSmbClient.types';

export const useSmbClient = ({
  ip,
  sharedFolder = '',
  port = '445',
  workGroup = '',
  username = '',
  password = '',
  path = '',
  isTest = false,
}: UseSmbClientProps): UseSmbClientReturn => {
  const [isConnected, setConnected] = useState<boolean>(() => false);
  const [files, setFiles] = useState<Array<FileItem>>(() => []);

  const client: SmbClient | undefined = useMemo(() => {
    if (!ip || !sharedFolder) return undefined;

    return new SMBClient(
      ip,
      port,
      sharedFolder,
      workGroup,
      username,
      password,
      (data: ConnectCallback) => {
        console.log('new SMBClient data (callback): ' + JSON.stringify(data));
      },
    );
  }, [ip, port, sharedFolder, workGroup, username, password]);

  useEffect(() => {
    if (client) {
      client.on('connect', (data: ConnectCallback) =>
        setConnected(data.success),
      );

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
    }

    return () => {
      if (client)
        client.disconnect(data => {
          console.log('disconnect data (callback): ' + JSON.stringify(data));
        });
    };
  }, [client]);

  useEffect(() => {
    if (isTest) setFiles(smbClientListMock.list);

    if (client && isConnected && !isTest)
      client.list(path, ({list}) => setFiles(list));

    return () => {
      setFiles([]);
    };
  }, [client, isConnected, path, isTest]);

  return {
    isConnected,
    files,
  };
};
