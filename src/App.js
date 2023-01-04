import { Tabel } from "./components/tabela";
import { createGlobalStyle } from "styled-components";
import "./App.css"

function App() {
  return (
    <section>
      <GlobalStyle/>
      <Tabel/>
    </section>
  );
}


const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
  body{
    width:100%;
    height:100%;
  }
  html{
    width:100%;
    height:100%;
  }
`;
export default App;
