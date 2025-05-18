
import './order.css'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { Button, FormControlLabel, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { CreateCashOrder } from '../../Slices/OrderSlice'

import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function OrderForm() {
  const token = localStorage.getItem("myToken")
const Navigator = useNavigate()
    const dispatch= useDispatch()
    const {userCart}= useSelector(state=>state.cartItems)
    const{shippingAddresses}= useSelector(state=>state.shippingAddresses)




 // validation by Yup

const validationSchema = object({

  details:string().required("Re-entering your address details is required").min(15,"pls type correct address"),
  phone:string().required("Re-entering phone is required"),
  city:string().required("Re-entering your city is required").min(3,"type correct city ")
  
})
    // formik 
      const formik= useFormik({
        initialValues :
        {
        "details": "",
        "phone": "",
        "city": ""
       
        },
        validationSchema,
        onSubmit:sendData
      
      
      })

      function sendData(values) {
        dispatch(CreateCashOrder({id:userCart.cartId,token,values}))

        
        
        
      }

     const cashPayment = ()=>{
        if(shippingAddresses.status === "success")
        {
            toast.success("your order submit")
            setTimeout(()=>{
                Navigator(`/orders/${shippingAddresses.data.user}`)  
            },5000)          

        }else
        {
            toast.error("opps!!")
        }
     }
  return (
    <>
    <section className='OrderForm'>
        <div>
   <h1 className='text-slate-900 text-center py-20 text-2xl'>Make your order Now</h1>
    <form className=' w-[90%] md:w-[80%] lg:w-[60%] m-auto mt-9 py-4 px-2  text-center' onSubmit={formik.handleSubmit}>
   
    <TextField
     error ={formik.errors.details&& formik.touched.details ?true :false} 
          id="outlined-Details-input"
          label="Details"
          type={formik.errors.details && formik.touched.details ?"error":"text"}
          sx={{width:{
            xs:"99%",
            md:"70%"
          },mb:3 }}
          name='details'
          value={formik.values.details}
          onChange={formik.handleChange}
          helperText={formik.errors.details}
          onBlur={formik.handleBlur}
        />
    <TextField
     error ={formik.errors.phone&& formik.touched.phone ?true :false} 
          id="outlined-phone-input"
          label="Phone"
          type={formik.errors.email && formik.touched.email ?"error":"tel"}
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
    <TextField
     error ={formik.errors.city&& formik.touched.city ?true :false} 
          id="outlined-city-input"
          label="city"
          type={formik.errors.city && formik.touched.city ?"error":"text"}
          sx={{width:{
            xs:"99%",
            md:"70%"
          },mb:3 }}
          name='city'
          value={formik.values.city}
          onChange={formik.handleChange}
          helperText={formik.errors.city}
          onBlur={formik.handleBlur}
        />
    
        
       <div>
       <Button variant="contained" type='submit' sx={{width:"30%",mb:3,mr:2}} onClick={cashPayment} >Cash Payment</Button>
       <Button variant="contained" type='submit' sx={{width:"30%",mb:3}} >Online Payment</Button>
       </div>
      
    </form>
   </div>
    </section>
    
    
    
    </>
  )
}
