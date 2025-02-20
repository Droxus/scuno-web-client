import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

createRoot(document.getElementById("root")!).render(
  <TonConnectUIProvider manifestUrl="https://droxus.github.io/scuno-web-client/tonconnect-manifest.json">
    <StrictMode>
      <App />
    </StrictMode>
  </TonConnectUIProvider>
);
