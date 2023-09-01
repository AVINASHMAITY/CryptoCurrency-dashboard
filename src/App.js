import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";

function App() {
  return (
    //this top level div contains Navbar and Main
    <div className="bg-gray-300 h-full">
      <div>
        <Navbar />
      </div>
      {/*This is main body of crypto currency dashboard*/}
      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;
