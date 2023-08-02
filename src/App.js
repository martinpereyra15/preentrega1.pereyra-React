import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer saludo="hola bienvenidos"/> 

    </div>
  );
}

export default App;
