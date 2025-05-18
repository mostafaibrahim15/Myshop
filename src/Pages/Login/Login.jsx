import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { object,  string,  } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { postLoginData } from '../../Slices/SigninSlice';
import { login } from '../../Slices/TokenSlice';

export default function Login() {
  const navigator= useNavigate()
 
const dispatch= useDispatch()
const {signin}= useSelector(state=>state.signin)
console.log("my new data is ",signin);

  // validation by Yup

const validationSchema = object({

  email:string().required("Re-entering email is required").email("type a valid email"),
  password:string().required("Re-entering password is required"),
  
})
// formik 
  const formik= useFormik({
    initialValues :
    {
    email: "",
    password:"",
   
    },
    validationSchema,
    onSubmit:sendData
  
  
  })
  function sendData(values) {
    dispatch(postLoginData(values))
    
  }

  useEffect(()=>{

    if(signin?.message === "success")
    {
      navigator("/")
      dispatch(login(signin.token))
    }
  },[signin,navigator])


 




  return (
    <>
   <div className='bg-slate-300 h-[150vh] overflow-hidden  relative top-[-80px]'>
   <h1 className='text-slate-900 text-center pt-25 text-2xl'>Login Now</h1>
    <form className=' w-[90%] md:w-[80%] lg:w-[60%] m-auto mt-9 py-32 px-2  text-center rounded-2xl shadow-2xl' onSubmit={formik.handleSubmit}>
   
    <TextField
     error ={formik.errors.email&& formik.touched.email ?true :false} 
          id="outlined-Email-input"
          label="Email"
          type={formik.errors.email && formik.touched.email ?"error":"email"}
          sx={{width:{
            xs:"99%",
            md:"70%"
          },mb:3 }}
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          helperText={formik.errors.email}
          onBlur={formik.handleBlur}
        />
    <TextField
     error ={formik.errors.password&& formik.touched.password ?true :false} 
          id="outlined-password-input"
          label="Password"
          type={formik.errors.password && formik.touched.password ?"error":"password"}
          autoComplete="current-password"
          sx={{width:{
            xs:"99%",
            md:"70%"
          },mb:3 }}
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          helperText={formik.errors.password}
          onBlur={formik.handleBlur}
        />
        <div className='flex justify-between items-center w-[90%] md:w-[80%] lg:w-[60%] m-auto px-2 mb-4 mt-0 '>
             
            <Link to={"/resetPassword"} className='text-slate-800 text-sm'>forgot your password?</Link>
        </div>
       <div>
       <Button variant="contained" type='submit' sx={{width:"60%",mb:3}} >Login</Button>
       </div>
       <Link to={"/Register"} className='text-blue-500  my-9' >You don't have an account?</Link>
    </form>
   </div>
    </>
  )
}
