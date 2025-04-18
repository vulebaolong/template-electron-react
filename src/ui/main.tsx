import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Provider from "./component/provider/Provider.tsx";

createRoot(document.getElementById("root")!).render(
   <Provider>
      <App />
   </Provider>
);
