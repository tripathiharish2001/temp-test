import logo from "./logo.svg";
import logo1 from "./imgLogo.png";
import PrimNav from "./components/PrimNav";
import SecNav from "./components/SecNav";
import Hero from "./components/Hero";
import Article from "./components/Article";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SecNav />
      <PrimNav />
      <Hero />
      <Article />
    </div>
  );
}

export default App;
