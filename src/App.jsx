import { Header } from "./components/Header"; //Named Import
import Body from "./components/Body"; //Default Import

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}

export default App;
