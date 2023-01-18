export type UseSmbClientProps = {
  ip?: string;
  sharedFolder?: string;
  port?: string;
  workGroup?: string;
  username?: string;
  password?: string;
  path?: string;
  isTest?: boolean;
};

export type UseSmbClientReturn = {
  isConnected: boolean;
  files: Array<FileItem>;
};

export type SmbClient = {
  clientId: string;
  currentPath: string;
  handlers: {
    connect: () => void;
    connectionStatus: () => void;
    error: () => void;
  };
  ip: string;
  parentPath: string;
  password: string;
  port: string;
  sharedFolder: string;
  username: string;
  workGroup: string;
  on: (
    event: 'connect' | 'error' | 'connectionStatus',
    callback: (data: any) => void,
  ) => void;
  list: (path: string, callback: (data: SmbClientList) => void) => void;
  disconnect: (callback: (data: SmbClientEvent) => void) => void;
};

export type ConnectCallback = Omit<SmbClientEvent, 'message'> & {
  serverPort: string;
  serverIP: string;
  sharedFolder: string;
};

export type SmbClientEvent = {
  success: boolean;
  clientId: string;
  message: string;
  errorCode: string;
  name: string;
};

export type SmbClientList = SmbClientEvent & {
  list: Array<FileItem>;
};

export type FileItem = {
  size: string;
  hidden: boolean;
  readOnly: boolean;
  createTime: string;
  shortName: string;
  isDirectory: boolean;
  lastModified: string;
  name: string;
};
