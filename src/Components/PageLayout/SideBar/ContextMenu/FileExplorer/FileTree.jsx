import { Component } from 'react';
import FileObject from './FileObject';
import FolderObject from './FolderObject';

const FileTree = ({ object }) => {

  return (
    <div className='flex flex-row'>
      {
        object.children && object.name !== ".git" ? (
          <div>
            <FolderObject folder={object} />
          </div>
        ) : (
          <FileObject file={object} />
        )
      }
    </div>
  );

};

export default FileTree;
