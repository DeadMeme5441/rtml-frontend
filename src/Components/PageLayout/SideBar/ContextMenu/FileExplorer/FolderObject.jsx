import FileObject from './FileObject';
import { useState } from 'react';

const FolderObject = ({ folder }) => {

  const [dropDown, setDropDown] = useState(false);

  function checkDropDown() {
    setDropDown(!dropDown);
  }

  return (
    <div className='flex flex-col'>
      <button className='rounded-none p-0 m-0 bg-zinc-200' onClick={() => checkDropDown()}>
        <div className="flex flex-row  p-1 border-b-2 w-64">
          <div className="flex p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M10.59 4.59C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-1.41-1.41z">
              </path>
            </svg>
          </div>
          <div className="flex p-1">
            {folder.name}
          </div>
        </div>
      </button>
      {
        folder.children && dropDown ? (
          folder.children.map((child) => (
            child.children ? (
              <FolderObject folder={child} />
            ) : (
              <div className='pl-3'>
                <FileObject file={child} />
              </div>
            )
          ))
        ) : (<div></div>)
      }
    </div>
  )
};

export default FolderObject;
