import {ConnectCallback, SmbClient, SmbClientList} from './UseSmbClient.types';

export const onConnectCallbackMock: ConnectCallback = {
  serverPort: '',
  serverIP: '192.168.0.160',
  success: true,
  sharedFolder: 'Data',
  clientId: '30cd',
  errorCode: '0000',
  name: 'connect',
};

export const useSmbClientMock: SmbClient = {
  clientId: '0e1d',
  currentPath: '',
  handlers: {
    connect: () => {},
    connectionStatus: () => {},
    error: () => {},
  },
  ip: '192.168.0.160',
  parentPath: '',
  password: '0889',
  port: '',
  sharedFolder: 'Data',
  username: 'me',
  workGroup: '',
  on: () => {},
  list: () => {},
  disconnect: () => {},
};

export const smbClientListMock: SmbClientList = {
  list: [
    {
      size: '0',
      hidden: false,
      readOnly: false,
      createTime: 'Fri Jan 13 15:54:59 GMT+01:00 2023',
      shortName: '',
      isDirectory: true,
      lastModified: 'Fri Jan 13 19:15:15 GMT+01:00 2023',
      name: '.',
    },
    {
      size: '0',
      hidden: false,
      readOnly: false,
      createTime: 'Fri Jan 13 15:53:31 GMT+01:00 2023',
      shortName: '',
      isDirectory: true,
      lastModified: 'Sun Jan 15 00:18:48 GMT+01:00 2023',
      name: '..',
    },
    {
      size: '6148',
      hidden: true,
      readOnly: false,
      createTime: 'Fri Jan 13 16:20:13 GMT+01:00 2023',
      shortName: '',
      isDirectory: false,
      lastModified: 'Sat Jan 14 01:39:18 GMT+01:00 2023',
      name: '.DS_Store',
    },
    {
      size: '0',
      hidden: false,
      readOnly: false,
      createTime: 'Wed Sep 07 23:15:04 GMT+02:00 2022',
      shortName: '',
      isDirectory: true,
      lastModified: 'Wed Sep 07 23:15:04 GMT+02:00 2022',
      name: 'content',
    },
    {
      size: '0',
      hidden: false,
      readOnly: false,
      createTime: 'Wed Sep 07 21:20:12 GMT+02:00 2022',
      shortName: '',
      isDirectory: true,
      lastModified: 'Wed Sep 07 21:20:12 GMT+02:00 2022',
      name: 'shots.lrcat-data',
    },
    {
      size: '0',
      hidden: false,
      readOnly: false,
      createTime: 'Sun Oct 23 22:22:55 GMT+02:00 2022',
      shortName: '',
      isDirectory: true,
      lastModified: 'Sun Oct 23 22:22:55 GMT+02:00 2022',
      name: 'shots-v12.lrcat-data',
    },
    {
      size: '0',
      hidden: false,
      readOnly: false,
      createTime: 'Wed Sep 07 21:20:21 GMT+02:00 2022',
      shortName: '',
      isDirectory: true,
      lastModified: 'Fri Jan 13 19:14:25 GMT+01:00 2023',
      name: 'shots Previews.lrdata',
    },
    {
      size: '40730624',
      hidden: false,
      readOnly: false,
      createTime: 'Wed Sep 07 21:20:12 GMT+02:00 2022',
      shortName: '',
      isDirectory: false,
      lastModified: 'Tue Jan 10 12:45:26 GMT+01:00 2023',
      name: 'shots.lrcat',
    },
    {
      size: '0',
      hidden: false,
      readOnly: false,
      createTime: 'Wed Sep 07 21:20:12 GMT+02:00 2022',
      shortName: '',
      isDirectory: true,
      lastModified: 'Wed Sep 07 21:20:12 GMT+02:00 2022',
      name: 'shots Helper.lrdata',
    },
    {
      size: '0',
      hidden: false,
      readOnly: false,
      createTime: 'Wed Sep 07 22:57:28 GMT+02:00 2022',
      shortName: '',
      isDirectory: true,
      lastModified: 'Wed Sep 07 22:57:28 GMT+02:00 2022',
      name: 'Backups',
    },
  ],
  success: true,
  clientId: 'a713',
  message: 'path [photos] list successfully.',
  errorCode: '0000',
  name: 'list',
};
