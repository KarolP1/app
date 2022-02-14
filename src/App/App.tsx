import { useSelector } from "react-redux";
import { RootState } from "../store";
import "./App.css";
import SelectRoutes from "../routes";
import Header from "../components/Header";

function App() {
  const ad = useSelector((state: RootState) => state.AppDependecies);
  console.log(ad);
  return (
    <div className="App">
      <Header />
      <SelectRoutes />
    </div>
  );
}

export default App;
