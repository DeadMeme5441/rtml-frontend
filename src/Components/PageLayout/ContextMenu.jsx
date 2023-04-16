import FileExplorer from "./FileExplorer"

const ContextMenu = ({ context, show }) => {
  if (show == true) {
    if (context == "explorer") {
      return (
        <FileExplorer />
      )
    }
    else if (context == "search") {
      return (
        <div className="relative w-64 border-r-2 h-screen">
          <div className="container p-3 border-b-2">
            <div className="relative text-left">
              Search
            </div>
          </div>
          <div>
            <ul>
              <li>1</li>
              <li>2</li>
            </ul>
          </div>
        </div>
      )
    }
    else if (context == "run") {
      return (
        <div className="relative w-64 border-r-2 h-screen">
          <div className="container p-3 border-b-2">
            <div className="relative text-left">
              Run
            </div>
          </div>
          <div>
            <ul>
              <li>1</li>
              <li>2</li>
            </ul>
          </div>
        </div>
      )
    }
    else {
      return (<div></div>);
    }
  } else {
    return (<div></div>);
  }

};

export default ContextMenu;
