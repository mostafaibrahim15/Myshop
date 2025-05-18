import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProductYoCart } from '../../Slices/CartSlice';
import toast from 'react-hot-toast';












export default function ProductCard({data}) {


const navigator= useNavigate()
const dispatch=useDispatch()
const token= localStorage.getItem("myToken")

const addToCart=()=>{
  if(token)
  {
    dispatch(addProductYoCart({id:data.id,token}))
    toast.success("your product have been added successfully to your cart")
    
          
  }else{
    
    setTimeout(()=>{
      toast.error("you are not login ,pls login to add your product to the cart!")
    },1000)
  }
}




  return (
    <>
    <div >
        <Card sx={{ maxWidth: 345 }} >
        <CardHeader
       avatar={
        <Avatar sx={{ bgcolor:"#002884" }} aria-label="recipe" src={data.imageCover}/>
      
      }
       sx={{color:"#213448"}}
        title={data.title}
        onClick={()=>{
         
          navigator(`/productItem/${data.id}`)
        }}
        className='cursor-pointer'
      />
     
      <CardMedia
        component="img"
        height="194"
        image={data.imageCover}
        alt={data.title}
         onClick={()=>{
         
          navigator(`/productItem/${data.id}`)
        }}
      />
        <CardContent>
        <div className='flex justify-between items-center'>
          <p className='flex justify-center items-center text-[#213448]'>{data.price} L.E</p>
          <p className='flex justify-center items-center text-[#213448]'>{data.ratingsAverage} <StarBorderIcon sx={{color:"#fcd30d"}}/> </p>
        </div>
      </CardContent>
      <CardActions disableSpacing>
      
        <IconButton aria-label="shopping" onClick={()=>{
          addToCart()
          
        }}>
          <ShoppingCartIcon/>
        </IconButton>
      </CardActions> 
    </Card>
    </div>
   
    </>
  )
}
