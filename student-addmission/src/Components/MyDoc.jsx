import React,{useState, useEffect} from 'react'
import axios from 'axios'


function MyDoc({upload,setUpload}) {

  
  const [data,setData] = useState([])
  // console.log(upload)
    useEffect(()=>{
        axios.get('/api/up')
        .then((response)=>{
          setData(response.data);
            // console.log(upload.data[0]);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[upload])



    const upload_data = data.data;

  return (
    <>
            <div className='upload-docs w-50 m-4 rounded'>
              <div className='title text-white bgBlue rounded'>
                <h3 className='p-3'>My Uploaded Document</h3>
              </div>
              <div className='pt-3 mx-3'>
                <h4>Subjects :</h4>
                <ol>
                  {
                    upload_data && upload_data.map((item)=>{
                      return <li>{item.name}</li>;
                    })
                  }
                </ol>
              </div>
            </div>
    </>
  )
}

export default MyDoc