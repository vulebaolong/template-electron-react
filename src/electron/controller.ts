import { win } from "./services/app.service.js";
import demoService from "./services/demo.service.js";
import { ipcEmit, ipcOnHandle, ipcOnRequest } from "./util.js";

export default function rootController() {
   ipcOnRequest("get-config", demoService.getConfig);
   ipcOnHandle("log-message", demoService.logMessage);

   let count = 1;
   setInterval(() => {
      console.log("🪵 Count:", count);
      ipcEmit("notify", { title: "Hello", message: "World" }, win);
      ipcEmit("count", { count: count++ }, win);
   }, 2000);
}
