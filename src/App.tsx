import { CHAIN, TonConnectButton } from "@tonconnect/ui-react";
import "./App.css";
import { useTonConnect } from "./hooks/useTonConnect";
import { Address, beginCell, toNano } from "ton-core";
import { useState } from "react";

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

    let value = 0.05;
    if (level === 1) {
      value = 0.1;
    } else if (level === 2) {
      value = 0.2;
    } else if (level === 3) {
      value = 0.5;
    }

    console.log(
      await tonconnect.sender.send({
        to: Address.parse("kQAnL3H81TmUtzekaR1KH__dh-7-EH_Gt4UgnfONKM66HblG"),
        value: toNano(value.toString()),
        body: payload,
      })
    );
  }

  const [username, setUsername] = useState("");
  const [showForm, setShowForm] = useState(true);

  const handleContinue = () => {
    setShowForm(false); // Close the form
  };

  return (
    <>
      {showForm && (
        <div className="form-overlay">
          <div className="form-container">
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleContinue}>Continue</button>
          </div>
        </div>
      )}

      <div className="ton-connect-wrapper">
        <TonConnectButton />
      </div>

      <div>
        <h1>SCUNO</h1>
        <p>Buy levels</p>
      </div>

      <div className="user-info-container">
        <span>Welcome {username ? username : "N/A"}</span>
      </div>

      <div className="buttons-container">
        <span>
          {network
            ? network === CHAIN.MAINNET
              ? "mainnet"
              : "testnet"
            : "N/A"}
        </span>

        <div className="buttons-row">
          <button onClick={() => onBuyLevel(1)}>Buy level 1</button>
          <button onClick={() => onBuyLevel(2)}>Buy level 2</button>
          <button onClick={() => onBuyLevel(3)}>Buy level 3</button>
        </div>
      </div>
    </>
  );
}

export default App;
