import "./App.css";
import { TonConnectButton, CHAIN } from "@tonconnect/ui-react";
import { useTonConnect } from "./hooks/useTonConnect";

function App() {
  function onBuyLevel(level: number) {
    console.log("Buying level", level);
  }

  const network = useTonConnect().network;

  return (
    <>
      <TonConnectButton />
      <span>
        {network ? (network === CHAIN.MAINNET ? "mainnet" : "testnet") : "N/A"}
      </span>
      <button onClick={() => onBuyLevel(1)}>Buy level 1</button>
      <button onClick={() => onBuyLevel(2)}>Buy level 2</button>
      <button onClick={() => onBuyLevel(3)}>Buy level 3</button>
    </>
  );
}

export default App;
