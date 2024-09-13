import React, { useState } from 'react'
import Application from './Application';
import { FaPlus } from "react-icons/fa";
import Note from './Note';
import { useNavigate } from 'react-router-dom';
import MyDoc from './MyDoc';
import UploadDoc from './UploadDoc';

function Main() {

  const navigate = useNavigate();
  const gotoAppForm=()=>{
    navigate('/Appform');
  }

  const [upload,setUpload] = useState(0)

  return (
    <>
        <div className='w-75'>
          <div className='d-flex'>
            <MyDoc upload={upload} setUpload={setUpload}/>
            <UploadDoc upload={upload} setUpload={setUpload}/>
          </div>

          <div className='d-flex'>
            <Application/>
            <Note/>
          </div>
          <button className="btn btn-primary mx-4 p-3" onClick={()=> gotoAppForm()} type="submit"><FaPlus /></button>
        </div>
    </>
  )
}

export default Main