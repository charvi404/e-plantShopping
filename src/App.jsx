import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Paradise Nursery 🌿</h1>
      <button onClick={() => window.location.href="/plants"}>
        Get Started
      </button>
    </div>
  );
}

export default App;