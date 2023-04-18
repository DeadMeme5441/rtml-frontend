import { useState } from "react";
import MainLayout from "./Components/PageLayout/MainLayout"
import MainContext from "./Components/MainContext"
import "./App.css";


function App() {

  const [folders, setFolders] = useState(null);
  const [currentFile, setCurrentFile] = useState(null);

  const globalVars = {
    folders: folders,
    setFolders: setFolders,
    currentFile: currentFile,
    setCurrentFile: setCurrentFile,
  };

  return (
    <MainContext.Provider value={globalVars}> {
      <div className="App">
        <MainLayout />
      </div>
    }
    </MainContext.Provider>
  );
}

export default App;
