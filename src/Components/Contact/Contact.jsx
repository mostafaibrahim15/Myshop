import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { object, string } from 'yup'

export default function Contact() {

const validationSchema = object({
  name:string("your name must be string")
       .required("Re-entering name is required")
       .min(3,"your name must be at least 3 char")
       .max(25,"your name should't be more than 25char"),
  email:string().required("Re-entering email is required").email("type a valid email"),
 
})

const formik= useFormik({
    initialValues :
    {
    name: "",
    email:"",
    feedback:""
    },
    validationSchema,
    onSubmit:sendData
  
  
  })

function sendData(values) {
    console.log(values);
    
    
  }

  return (
  <>
    <section className='my-32 py-6 flex justify-between items center shadow-2xl rounded-3xl'>
         <div className='w-[35%] ml-2 px-2 py-9'>
            <h1 className=' text-xl md:text-2xl mb-3'>Contact </h1>
            <p className=' typography text-[.5rem] md:text-[.8rem] lg:text-[1rem] my-3 text-slate-600 opacity-50 leading-3 md:leading-5 lg:leading-9 '>
                "You can now contact us and share your feedback about our products, 
                or let us know if you face any issues. We will get in touch with you promptly to
                 resolve any problem you encounter. Don’t forget to leave your opinion about us — we always care about you."
            </p>
            
            

           
        </div>
        <div className='w-[50%]  mr-3'>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                        error ={formik.errors.name&& formik.touched.name ?true :false} 
                          id="outlined-name-input"
                          label={formik.errors.name && formik.touched.name ?"error":"name"}
                          type="text"
                          sx={{width:{
                            xs:"99%",
                            md:"90%"
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
                            md:"90%"
                          },mb:3 }}
                          name='email'
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          helperText={formik.errors.email}
                          onBlur={formik.handleBlur}
                        />
                         <TextField
                        error ={formik.errors.feedback&& formik.touched.feedback ?true :false} 
                          id="outlined-name-input"
                          label={formik.errors.feedback && formik.touched.feedback ?"error":"feedback"}
                          type="text"
                          sx={{width:{
                            xs:"99%",
                            md:"90%"
                          },mb:3 }}
                          name="feedback"
                          value={formik.values.feedback}
                          onChange={formik.handleChange}
                          helperText={formik.errors.feedback}
                         onBlur={formik.handleBlur}
                        />
                        <Button variant="contained" type='submit' sx={{width:"90%",mb:3}} >send</Button>
            </form>
        </div>


    </section>
  
  
  </>
  )
}
