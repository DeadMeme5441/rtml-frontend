import { useState } from "react";
import MainLayout from "./Components/PageLayout/MainLayout"
import MainContext from "./Components/MainContext"
import "./App.css";


function App() {

  const [folders, setFolders] = useState(null);

  const globalVars = {
    folders: folders,
    setFolders: setFolders
  };

  return (
    <MainContext.Provider value={globalVars}> {
      <div className="App">
        <MainLayout />
      </div>
    }
    </MainContext.Provider >
  );
}

export default App;
