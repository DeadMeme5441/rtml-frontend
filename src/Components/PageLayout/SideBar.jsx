import { useState, useEffect } from "react";
import ContextMenu from "./ContextMenu";

const SideBar = () => {
  const [contextMenu, setContextMenu] = useState("None");
  const [showMenu, setShowMenu] = useState(true);

  const setContext = (context) => {
    if (context === contextMenu) {
      setShowMenu(!showMenu);
    } else {
      setShowMenu(true);
      setContextMenu(context);
    }
  }

  return (
    <div className="flex flex-row">
      <div className="h-screen border-currentColor border-r-2">
        <div className="flex flex-col">
          <button type="button" onClick={() => setContext("explorer")}>
            <div className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M3 6H1v15h19v-2H3z">
                </path>
                <path fill="currentColor" d="M23 4h-9l-2-2H5.01L5 17h18V4z">
                </path>
              </svg>
            </div>
          </button>
          <button type="button" onClick={() => setContext("search")}>
            <div className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z">
                </path>
              </svg>
            </div>
          </button>
          <button type="button" onClick={() => setContext("run")}>
            <div className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8 5v14l11-7L8 5z">
                </path>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className="h-screen border-r-3">
        <ContextMenu context={contextMenu} show={showMenu} />
      </div>
    </div >
  )
};

export default SideBar;
