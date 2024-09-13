import React, { useState } from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const initialvalues={
    application: "",
    deadline:""
};

const validateSchema=Yup.object({ 
    application: Yup.string().min(2).max(25).required("Enter application"),
    deadline: Yup.string().required("Enter date")
})

function Appform() {

    const [data,setdata] = useState([]);

    const {values,handleBlur,handleSubmit,errors,touched,handleChange} = useFormik({
        initialValues: initialvalues,
        validationSchema:validateSchema,
        onSubmit:(values)=>{ 
            setdata(values)
            axios.post('/api/app',values)
            .then((response)=>{
              console.log(response.data);
            })
            .catch((error)=>{
              console.log(error);
            })
        }
    })

    const navigate = useNavigate();
    const goBack =()=>{
        navigate(-1);
    }

  return (
    <>
        <div className='app-bg'>
        <form className='w-50 mt-5 login-wrapper' onSubmit={handleSubmit}>
        <h1>Application Form</h1>
            <div className="mb-3">
                <label for="formGroupExampleInput" class="form-label">Application</label>
                <input type="text" name="application" value={values.application} class="form-control" onChange={handleChange} onBlur={handleBlur}/>
                {errors.application && touched.application ? <span>{errors.application}</span> : null}
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Deadline </label>
                <input type="date" class="form-control" name="deadline" value={values.deadline} onChange={handleChange} onBlur={handleBlur}/>
                {errors.deadline && touched.deadline ? <span>{errors.deadline}</span> : null}
            </div>
            <div className="mb-3">
                <button type='submit' class="btn btn-primary">Add to Dashboard</button>
                <button type='reset' class="btn btn-primary mx-3" onClick={()=>goBack()}>Go to Dashboard</button>
            </div>
        </form>
        </div>
    </>
  )
}

export default Appform;