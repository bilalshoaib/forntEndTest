import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {appSettings} from '../setting';
import { useState } from 'react';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const AddProduct = ({array, changeStatus}) => {
  const classes = useStyles();
  const [name, setName] = useState(array === null ?'': array.Name);
  const [price, setPrice] = useState(array === null ? null: array.price);
  const [category, setCategory] = useState(array === null ? '': array.category);
  const [location, setLocation] = useState(array === null ? '': array.location);
  const addProduct = () => {
    if(name === '' || price === null || category === '' || location === '') {
      return toast.error('fields required')
    }
    axios.post(`${appSettings.apiBaseUrl}/add-product`,{
      name,
      price,
      category,
      location  ,
    })
    .then(res=>{
       toast.success('Product created');
       changeStatus(0, null)
      })
    .catch(e=> console.log(e))
  }
  const editProduct = () => {
    if(name === '' || price === null || category === '' || location === '') {
      return toast.error('fields required')
    }
    axios.patch(`${appSettings.apiBaseUrl}/update-products/${array._id}`,{
      Name: name,
      price,
      category,
      location  ,
    })
    .then(res=>{
       toast.success('Product updated');
       changeStatus(0, null)
      })
    .catch(e=> console.log(e))
  }
  console.log(array)
  return (
    <div>
      <h1>Add Product</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic"
          defaultValue={array === null ? name : array.Name}
          onChange={e=> setName(e.target.value)}
          label="name" />
        <TextField id="filled-basic"
          defaultValue={array === null ? category : array.category}
          onChange={e=> setCategory(e.target.value)}
          label="Category"  />
        <TextField id="outlined-basic"
          defaultValue={array === null ? price: array.price} 
          onChange={e=> setPrice(e.target.value)}
          label="Price"  />
        <TextField id="outlined-basic" 
          defaultValue={array === null ? location: array.location}
          onChange={e=> setLocation(e.target.value)}
          label="Location"  />
        <Button
            type="button"
            fullWidth
            onClick={array === null ? addProduct : editProduct}
            variant="contained"
            color="primary"
            // className={classes.submit}
          >{array === null ? 'Add Product' : 'Edit Product'}</Button>
    </form>
  </div>
  )
}

export default AddProduct