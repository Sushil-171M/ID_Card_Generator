import "./styles.css";
import GeneratorIDCard from "./component/GeneratorIDCard";
import Header from "./component/Header";

export default function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div style={{ backgroundColor: "Grey", margin: "5px" }}>
        <GeneratorIDCard />
      </div>
    </div>
  );
}
