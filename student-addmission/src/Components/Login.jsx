import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';

const initialValues = {
  email: "",
  password: ""
};

const validateSchema = Yup.object({
  email: Yup.string().min(2).max(50).required("Enter email"),
  password: Yup.string().min(2).max(50).required("Enter password")
});

function Login() {

  const navigate = useNavigate();
  const gotoRegister = () => {
    navigate('/register');
  };

  const [data, setData] = useState([]);

  const { values, handleSubmit, handleBlur, handleChange, errors, touched } = useFormik({
    initialValues,
    validationSchema: validateSchema,
    onSubmit: (values) => {
      setData(values);
      axios.post('/login', values)
        .then((response) => {
          console.log(response.data);
          navigate('/');  // Move to the dashboard on successful response
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  return (
    <>
      <div className='login-bg'>
        <div>
          <form className='w-25 d-flex flex-column justify-content-center mt-5 login-wrapper' onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <div className="form-group mt-2">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" name='email' className="form-control" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Enter email" />
              {errors.email && touched.email ? <span>{errors.email}</span> : null}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" name='password' className="form-control" placeholder="Password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
              {errors.password && touched.password ? <span>{errors.password}</span> : null}
            </div>
            <button type="submit" className="btn btn-primary mt-4">Login</button>
            <h6 className='text-center'>OR</h6>
            <button type="button" className="btn btn-primary" onClick={gotoRegister}>Register</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
