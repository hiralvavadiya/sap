import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';

const initialValues = {
    email: "",
    password: "",
    address: "",
    age: "",
    campus: "",
    phone: "",
    course: ""
};

const validateSchema = Yup.object({
    email: Yup.string().min(1).max(50).required("Enter email"),
    password: Yup.string().min(1).max(25).required("Enter password"),
    address: Yup.string().min(1).max(25).required("Enter address"),
    age: Yup.number().min(1).max(25).required("Enter age"),
    campus: Yup.string().min(1).max(25).required("Enter campus"),
    phone: Yup.string().min(1).max(25).required("Enter phone"),
    course: Yup.string().min(1).max(25).required("Enter course")
});

function Register() {

    const [reg, setReg] = useState([]);

    const formik = useFormik({
        initialValues,
        validationSchema: validateSchema,
        onSubmit: async (values) => {
            setReg(values);
            console.log('Submitting form with values:', values); // Debugging: Log form values
            try {
                const response = await axios.post('/api/reg', values);
                console.log('Response from API:', response.data); // Debugging: Log API response
            } catch (error) {
                console.error('Error from API:', error); // Debugging: Log API error
            }
        }
    });

    return (
        <>
            <div className='register-bg'>
                <form className='w-50 mt-5 login-wrapper' onSubmit={formik.handleSubmit}>
                    <h2>Register Page</h2>

                    <div className="mt-2">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" id="inputEmail4" placeholder="Email" />
                        {formik.errors.email && formik.touched.email && <div>{formik.errors.email}</div>}
                    </div>
                    <div className="mt-2">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" id="inputPassword4" placeholder="Password" />
                        {formik.errors.password && formik.touched.password && <div>{formik.errors.password}</div>}
                    </div>
                    <div className="mt-2">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" name="address" value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        {formik.errors.address && formik.touched.address && <div>{formik.errors.address}</div>}
                    </div>
                    <div className="mt-2">
                        <label htmlFor="inputAge">Age</label>
                        <input type="text" name="age" value={formik.values.age} onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" id="inputAge" />
                        {formik.errors.age && formik.touched.age && <div>{formik.errors.age}</div>}
                    </div>
                    <div className="mt-2">
                        <label htmlFor="inputCity">Campus Name</label>
                        <input type="text" name="campus" value={formik.values.campus} onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" id="inputCampusName" />
                        {formik.errors.campus && formik.touched.campus && <div>{formik.errors.campus}</div>}
                    </div>
                    <div className="mt-2">
                        <label htmlFor="inputCity">Phone no.</label>
                        <input type="text" name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" id="inputPhone" />
                        {formik.errors.phone && formik.touched.phone && <div>{formik.errors.phone}</div>}
                    </div>
                    <div className="mt-2">
                        <label htmlFor="inputCourse">Course</label>
                        <input type="text" name="course" value={formik.values.course} onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" id="inputCourse" />
                        {formik.errors.course && formik.touched.course && <div>{formik.errors.course}</div>}
                    </div>
                    <button type="submit" className="w-100 btn btn-primary mt-2">Sign in</button>
                </form>
            </div>
        </>
    );
}

export default Register;
