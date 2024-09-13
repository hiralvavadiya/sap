import React, { useEffect, useState } from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Sidebar() {

    const intro ={
        "name":"Devin Bruce",
        "age":"19",
        "course":"journalism 1st year",
        "student_id":"1234",
        "campus_name":"Delhi Main",
        "email":"admin@gmail.com",
        "phone":"+91 123456789",
        "url_img":"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

    const navigate = useNavigate();
    // const [res,setres] = useState();

    const logOut=()=>{
        navigate('/login');
        axios.get('/logout')
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    // useEffect(()=>{
    //     axios.get('/api/reg')
    //     .then((response)=>{
    //         setres(response.data);
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    // },[])

    // const user_data = res.data;

  return (
    <>
        <div className='sidebar w-25 fixed'>
            <div className='w-100'>
                <h1 className='text-center pro-heading pt-3'>Student Portal</h1>
                <div className='profile text-center w-50'>
                    <img src={intro.url_img} className='img-thumbnail bg-dark w-100 h-100 rounded object-fit-cover overflow-hidden'/>
                </div>
                <div className='text-center text-white'>
                    <h2>{intro.name}</h2>
                    <h4>Age:{intro.age}</h4>
                </div>
            </div>
            <div className='m-5 pb-5'> 
                <div>
                    <h3 className='pro-heading'>COURSE</h3>
                    <h4 className='text-white'>{intro.course}</h4>
                </div>
                <div>
                    <h3 className='pro-heading'>STUDENT ID</h3>
                    <h4 className='text-white'>{intro.student_id}</h4>
                </div>
                <div>
                    <h3 className='pro-heading'>CAMPUS NAME</h3>
                    <h4 className='text-white'>{intro.campus_name}</h4>
                </div>
                <div>
                    <h3 className='pro-heading'>EMAIL</h3>
                    <h4 className='text-white'>{intro.email}</h4>
                </div>
                <div>
                    <h3 className='pro-heading'>PHONE</h3>
                    <h4 className='text-white'>{intro.phone}</h4>
                </div>
            </div>

            <div className='m-5'>
                <button type="button" className="btn btn-danger" onClick={()=>logOut()}>Logout</button>
            </div>
        </div>
    </>
  )
}

export default Sidebar