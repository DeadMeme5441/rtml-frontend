import { open } from '@tauri-apps/api/dialog';
import { homeDir } from '@tauri-apps/api/path';

// const selected = await open({
//   directory: true,
//   multiple: false,
//   defaultPath: await homeDir(),
// });


const FileExplorer = () => {


  return (
    <div className="relative w-64 border-r-2 h-screen">
      <div className="grid grid-cols-2  p-3 border-b-2">
        <div className="flex justify-start p-1">
          Explorer
        </div>
        <div className="flex justify-end">
          <button className='p-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z">
              </path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
};


export default FileExplorer;
