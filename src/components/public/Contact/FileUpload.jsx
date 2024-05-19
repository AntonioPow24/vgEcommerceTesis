

import '../../../styles/form.css'
import { useRef, useState } from 'react';


const FileUpload = ({handleOnChange}) => {
  const inputRef = useRef();

  //Estado par las variables para leer la infomarcion
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("select"); //'uploading' | 'done'




  // Funciones
  
  const handleFileChange = (e) => {
    const { target } = e;

    if (target.files && target.files.length > 0) {
      try {
        setUploadStatus('uploading')

        setSelectedFile(target.files[0]);
  
        setTimeout(() => setUploadStatus('done'),3000)

        handleOnChange(e,selectedFile)
      } catch (error) {
        console.log(error);
      }
    }

  };


  const onChooseFile = async () => {
    inputRef.current.click();

  };


  const clearFile = () =>{
    inputRef.current.value=''

    setSelectedFile(null)

    setUploadStatus('select')
  }








  return (
    <div className="bg-formContactBg w-full rounded-md">
      <input
        type="file"
        ref={inputRef}
        name="document"
        onChange={handleFileChange}
        className="hidden"
      />

      <div
        className={`flex p-[12px] ${selectedFile && 'py-2 gap-5'} items-center cursor-pointer`}

      >
        <i className="fa-regular fa-file-lines text-4xl text-bgContactHeader"></i>

        {!selectedFile && (
          <div 
            className="flex-1 flex  justify-center items-center text-xl text-textInputForm 685:text-[14px] 685:text-center"
            onClick={onChooseFile}
          >
            <span>Sube un documento o imagen si lo requieres</span>
          </div>
        )}

        {selectedFile && (
          <div className=" h-full px-2 py-2 flex w-full">

            <div className="flex flex-1 gap-4 items-center">
              <div className="flex-1 flex flex-col gap-2">
                <h6 className="text-xl bigPhone:text-base">
                  {uploadStatus === 'uploading'? 'Cargando archivo...' : selectedFile.name}
                </h6>

                <div className="w-full h-[6px] rounded-md bg-[#c5c5c5d2]">
                  <div className={`h-full bg-bgContactHeader rounded-md ${uploadStatus}`}></div>
                </div>
              </div>

              <button 
                onClick={clearFile}
              >
                <i className="fa-solid fa-xmark text-4xl text-bgContactHeader"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
