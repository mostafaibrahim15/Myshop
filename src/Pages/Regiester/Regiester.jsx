import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { object, ref, string,  } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { postRegisterData } from '../../Slices/Register';

export default function Regiester() {
  const navigator= useNavigate()
 
const dispatch= useDispatch()
const {data}= useSelector(state=>state.Register)
console.log("my new data is ",data);

  // validation by Yup

const validationSchema = object({
  name:string("your name must be string")
       .required("Re-entering name is required")
       .min(3,"your name must be at least 3 char")
       .max(25,"your name should't be more than 25char"),
  email:string().required("Re-entering email is required").email("type a valid email"),
  password:string().required("Re-entering password is required"),
  rePassword: string()
  .required("Re-entering password is required")
  .oneOf([ref('password')], "Passwords don't match"),
  phone:string().required("Re-entering phone is required")
})
// formik 
  const formik= useFormik({
    initialValues :
    {
    name: "",
    email:"",
    password:"",
    rePassword:"",
    phone:""
    },
    validationSchema,
    onSubmit:sendData
  
  
  })
  function sendData(values) {
    dispatch(postRegisterData(values))
    
  }

  useEffect(()=>{

    if(data.message === "success")
    {
      navigator("/login")
    }
  },[data,navigator])






  return (
    <>
   <div className='bg-slate-300 h-[150vh] overflow-hidden  relative top-[-80px]'>
   <h1 className='text-slate-900 text-center pt-25 text-2xl'>Register Now</h1>
    <form className=' w-[90%] md:w-[80%] lg:w-[60%] m-auto mt-9 py-10 shadow-2xl rounded-2xl px-2  text-center' onSubmit={formik.handleSubmit}>
    <TextField
        error ={formik.errors.name&& formik.touched.name ?true :false} 
          id="outlined-name-input"
          label={formik.errors.name && formik.touched.name ?"error":"name"}
          type="text"
          sx={{width:{
            xs:"99%",
            md:"70%"
          },mb:3 }}
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          helperText={formik.errors.name}
         onBlur={formik.handleBlur}
        />
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
    <TextField
     error ={formik.errors.rePassword&& formik.touched.rePassword ?true :false} 
          id="outlined-rePassword-input"
          label={formik.errors.rePassword && formik.touched.rePassword ?"error":"RePassword"}
          type="password"
          sx={{width:{
            xs:"99%",
            md:"70%"
          },mb:3 }}
          name='rePassword'
          value={formik.values.rePassword}
          onChange={formik.handleChange}
          helperText={formik.errors.rePassword}
          onBlur={formik.handleBlur}
        />
    <TextField
    error ={formik.errors.rePassword&& formik.touched.phone ?true :false} 
          id="outlined-phone-input"
          label="Phone"
          type={formik.errors.phone && formik.touched.phone ?"error":"RePassword"}
          sx={{width:{
            xs:"99%",
            md:"70%"
          },mb:3 }}
          name='phone'
          value={formik.values.phone}
          onChange={formik.handleChange}
          helperText={formik.errors.phone}
          onBlur={formik.handleBlur}
        />
       <div >
       <Button variant="contained" type='submit' sx={{width:"60%",mb:3}} >Register</Button>
       </div>
       <Link to={"/login"} className='text-blue-500  my-9' >You have an account?</Link>
    </form>
   </div>
    </>
  )
}
