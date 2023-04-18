import React, { useState } from 'react';

import MainContext from "../../../../MainContext";


const FileObject = ({ file }) => {
  const myContext = React.useContext(MainContext);

  const [currentFile, setCurrentFile] = useState(null);

  function selectFile() {
    myContext.setCurrentFile(file.path);
    console.log(myContext.currentFile);
  }

  return (
    <div className="flex flex-row  p-1 border-b-2  w-full">
      <button className="rounded-none p-0 m-0" onClick={selectFile}>
        <div className="fs justify-start p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z">
            </path>
          </svg>
        </div>
        <div className="flex justify-end p-1">
          {file.name}
        </div>
      </button>
    </div>
  );
};

export default FileObject;
