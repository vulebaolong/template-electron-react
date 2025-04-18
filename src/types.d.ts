interface Window {
   electron: {
      onNotify: (cb: (data: IpcEventMap["notify"]) => void) => () => void;
      onCount: (cb: (data: IpcEventMap["count"]) => void) => () => void;
      getConfig: () => Promise<Record<string, any>>;
      sendLogMessage: (msg: IpcEventMap["log-message"]) => void;
   };
}

interface IpcEventMap {
   "log-message": string;
   "get-config": Record<string, any>;
   "notify": { title: string; message: string };
   "count": { count: number };
}
