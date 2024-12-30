import memoize from "lodash/memoize";
import "./App.css";
import ParentWrapper from "./containers/ParentWrapper";

function App() {
  return (
    <div className="App">
      <ParentWrapper />
    </div>
  );
}

export default memoize(App);
