import { IpcRendererEvent } from "electron";

const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electron", {
   onNotify: (cb: (data: IpcEventMap["notify"]) => void) => onIpc("notify", cb),
   onCount: (cb: (data: IpcEventMap["count"]) => void) => onIpc("count", cb),
   getConfig: () => invokeIpc("get-config"),
   sendLogMessage: (msg: IpcEventMap["log-message"]) => sendIpc("log-message", msg),
});

// Lắng nghe sự kiện main gửi cho FE, có return về hàm huỷ lắng
function onIpc<T = any>(channel: string, callback: (payload: T) => void): () => void {
   const wrapped = (_event: IpcRendererEvent, payload: T) => callback(payload);
   electron.ipcRenderer.on(channel, wrapped);
   return () => electron.ipcRenderer.off(channel, wrapped);
}

// Gửi yêu cầu và chờ main process trả về kết quả (promise)
function invokeIpc<T = any>(channel: string): Promise<T> {
   return electron.ipcRenderer.invoke(channel);
}

// Gửi một sự kiện không đòi hỏi trả về dữ liệu
function sendIpc<T = any>(channel: string, payload: T): void {
   electron.ipcRenderer.send(channel, payload);
}
