import { CHAIN, TonConnectButton } from "@tonconnect/ui-react";
import "./App.css";
// import { TonConnectButton, useTonConnectUI } from "@tonconnect/ui-react";
import { useTonConnect } from "./hooks/useTonConnect";
import { Address, beginCell, toNano } from "ton-core";

function App() {
  const tonconnect = useTonConnect();
  const network = tonconnect?.network;

  async function onBuyLevel(level: number) {
    console.log("Buying level", level);

    // const level = 1; // Example level
    const amount = 100; // Example amount in coins

    const payload = beginCell()
      .storeUint(0x5ae8724b, 32) // Header for BuyLevel
      .storeInt(level, 257) // Store level (int257)
      .storeCoins(amount) // Store amount (coins)
      .endCell();

    console.log(
      await tonconnect.sender.send({
        to: Address.parse("kQDbZhNgaMdYjS7UG__D7x1rMDDwjh-rwnDNZ4miAsmHbylK"),
        value: toNano("0.1"),
        body: payload,
      })
    );
  }

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
