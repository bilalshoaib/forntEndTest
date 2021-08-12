import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import {appSettings} from '../setting';
import { useState } from 'react';
import { toast } from 'react-toastify';
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
const Product = ({changeStatus}) => {
    const classes = useStyles();
    const [products, setProducts] = useState([]);

    const getProduct = () => {
      axios.get(`${appSettings.apiBaseUrl}/get-products`)
      .then(res => {
        console.log(res.data)
        setProducts(res.data.data.product)})
      .catch(e=> console.log(e))
    }
    useEffect(() => {
      getProduct();
      }, []);

      const deleteProduct = (id) => {
        axios.delete(`${appSettings.apiBaseUrl}/delete-product/${id}`)
        .then(res=> {
          toast.success('product deleted');
          getProduct();
        })
        .catch(e=> console.log(e))
      }
     const submit = (id) => {
        confirmAlert({
          title: 'Confirm to Delete Product',
          message: 'Are you sure to delete this product',
          buttons: [
            {
              label: 'Yes',
              onClick: () => deleteProduct(id)
            },
            {
              label: 'No',
              // onClick: () => alert('Click No')
            }
          ]
        });
      };
  return (
    <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="center">Product Name</TableCell>
          <TableCell align="center">Category</TableCell>
          <TableCell align="center">Price</TableCell>
          <TableCell align="center">Location</TableCell>
          <TableCell align="center">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product, index) => (
          <TableRow key={index}>
            <TableCell align="center">
              {product.Name}
            </TableCell>
            <TableCell align="center">{product.category}</TableCell>
            <TableCell align="center">{product.price}</TableCell>
            <TableCell align="center">{product.location}</TableCell>
            <TableCell align="center"><Button
            type="button"
            onClick={()=> changeStatus(1, product)}
          ><EditIcon /> </Button><Button
          type="button"
          onClick={()=> submit(product._id)}
        ><DeleteIcon /></Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Product