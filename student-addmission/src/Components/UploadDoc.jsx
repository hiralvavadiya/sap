import React, { useEffect, useState } from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from 'axios';

function UploadDoc({upload,setUpload}) {

  function filenameadd(fname){
    axios.post('/api/up',{name:fname})
    .then((response)=>{
  
      setUpload(upload+1)
     return response.data;
      
        // setUpload(response.data);
        // console.log(upload.data[0]);
      

    })
    .catch((error)=>{
        console.log(error);
    })
    
  }

  const upload_file=(e)=>{
    // console.log(e.target.files[0].name);
    filenameadd(e.target.files[0].name)

  }

  

  return (
    <>
            <div className='upload-docs w-50 m-4 rounded'>
              <div className='title text-white bgBlue rounded'>
                <h3 className='p-3'>Uploaded Document ?</h3>
              </div>
              <div>
                <form className='pt-3 mx-3 d-flex justify-content-center'>
                  <h4 className='mx-2'><FaCloudUploadAlt /></h4>
                  <input type='file'  class="btn btn-primary mx-3" onChange={upload_file}/>
                  <button type="button" class="btn btn-light border mx-2">Cancel</button>
                </form>
              </div>
            </div>
    </>
  )
}

export default UploadDoc