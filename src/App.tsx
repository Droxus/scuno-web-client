import "./App.css";

function App() {
  function onBuyLevel(level: number) {
    console.log("Buying level", level);
  }

  return (
    <>
      <button onClick={() => onBuyLevel(1)}>Buy level 1</button>
      <button onClick={() => onBuyLevel(2)}>Buy level 2</button>
      <button onClick={() => onBuyLevel(3)}>Buy level 3</button>
    </>
  );
}

export default App;
