import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Application() {

  const [main,setmain]=useState([])

  useEffect(()=>{
    axios.get('/api/app')
    .then((response)=>{
      setmain(response.data);
      // console.log(main.data[0]);
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])

  const app_data = main.data;

  return (
    <>
            <div className='upload-docs w-75 m-4 rounded'>
              <div className='title text-white bgBlue rounded'>
                <h3 className='p-3'>My Applications</h3>
              </div>
              <div>
                <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Application</th>
                        <th scope="col">Deadline</th>
                        <th scope="col">Status</th>
                        <th scope="col">Apply Now</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        app_data && app_data.map((item)=>{
                          return (
                            <tr>
                              <td>{item.application}</td>
                              <td>{item.deadline}</td>
                              <td>{item.status}</td>
                              <td>{item.status==='applied' && 'Applied' ? <button className='btn btn-primary disabled'>Applied</button> : <button className='btn btn-primary'>Applied</button>}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                </table>
              </div>
            </div>
    </>
  )
}

export default Application