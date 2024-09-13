import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios'
import { MdDelete } from "react-icons/md";
import * as Yup from 'yup';
import { useFormik } from 'formik';

const initialValues={
  note:""
};

const validateSchema=Yup.object({
  note: Yup.string().min(1).max(40).required("Enter the note first")
})

function Note() {

  const [note,setNote] = useState([]);
  const [ref,setRef] = useState(0);
  // const [del,setDel] = useState(null);

  // const addTask = (event) => {
  //     setNewItem(" ");
  //     setAddItem([...addItem, newItem]);
  //     console.log(addItem);

  //       // setNewItem(event.target.value);
  //       axios.post('/api/note',event.target.value)
  //       .then((response)=>{
  //         console.log(response.data);
  //       })
  //       .catch((error)=>{
  //         console.log(error);
  //       })
      
  // }

  const {values,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:validateSchema,
    onSubmit:(values)=>{
      setNote(values)
      axios.post('/api/note',values)
      .then((response)=>{
        if(response.status===200){
          setRef(ref+1);
        }
        console.log(response.data);
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  })

  useEffect(()=>{
    axios.get('/api/note')
    .then((response)=>{
      setNote(response.data);
    })
    .catch((error)=>{
      console.log(error);
  })
  },[ref])

  // useEffect(()=>{
  //   if(del !== 0){
  //     const deleteNote = async () => {
  //       const res = await axios.delete(`/api/note/${del}`)
  //       .then((response)=>{
  //         console.log(response.data);
  //       })
  //       .catch((error)=>{
  //         console.log(error);
  //       })
  //     };
  //     deleteNote();
  //   }
  // },[del])

  const [dltId, setDltId] = useState(null); // Initialize dltId to null or some default value

  useEffect(() => {
    if (dltId !== null) {
      const deleteNote = async () => {
        try {
          const response = await axios.get(`/api/note/${dltId}`);
          console.log(response.data);
          setRef(ref+1);
        } catch (error) {
          console.error(error);
        }
      };

      deleteNote();
    }
  }, [dltId]); // This effect will run whenever dltId changes



  const note_data = note.data;

  return (
    <>
        <div className='upload-docs w-25 m-4 rounded position-relative h-note'>
              <div className='title text-white bgBlue rounded'>
                <h3 className='p-3'>Note</h3>
              </div>
              <div className='position-absolute top-10'>
                <ol className='text-container'>
                {
                  note_data && note_data.map((item) => {
                    return  <li>{item.note}
                              <button className='text-black rounded border-0 mx-2 p-0'  onClick={() => setDltId(item._id)}>
                                <MdDelete className='mx-1 p-0'/>
                              </button>
                            </li>;
                  })
                }
                </ol>
              </div>
              <div>
                <form onSubmit={handleSubmit} className='title bottom-0 w-100 d-flex justify-content-around position-absolute'>
                  <input type='text' name='note' value={values.note} className='w-75 rounded py-1' onChange={handleChange} onBlur={handleBlur}/>
                  <button className='text-white bgBlue rounded px-3'><FaArrowRight /></button>
                </form>
              </div>
        </div>
    </>
  )
}

export default Note