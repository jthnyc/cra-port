import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Intro } from "./components/index";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;
