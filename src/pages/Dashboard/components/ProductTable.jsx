import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TablePagination,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import smartphone from "../../../images/smartphone.jpg";
import smartwatch from "../../../images/smartwatch.jpg";
import headphone from "../../../images/headphone.jpg";
import tshirt from "../../../images/tshirt.jpg";
import laptop from "../../../images/laptop.jpg";
import sneakers from "../../../images/sneakers.jpg"
import backpack from "../../../images/backpack.jpg"
import jacket from "../../../images/jacket.jpg"
import jeans from "../../../images/jeans.jpg"
import tablet from "../../../images/tablet.jpg"

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Swal from 'sweetalert2';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display:"flex",
  justifyContent:"center",
  borderRadius:'1em'
};


const ProductTable = () => {
  // Sample data with more products
  const [rows,setRows] = useState( [
    {
      uid: "P001",
      product: "Smartphone",
      category: "Electronics",
      brand: "Brand A",
      price: 699,
      stock: 50,
      rating: 4.5,
      order: 150,
      sales: 10000,
      image: smartphone,
    },
    {
      uid: "P002",
      product: "Laptop",
      category: "Electronics",
      brand: "Brand B",
      price: 999,
      stock: 30,
      rating: 4.8,
      order: 80,
      sales: 8000,
      image: laptop,
    },
    {
      uid: "P003",
      product: "T-Shirt",
      category: "Clothing",
      brand: "Brand C",
      price: 20,
      stock: 200,
      rating: 4.2,
      order: 300,
      sales: 6000,
      image: tshirt,

    },
    {
      uid: "P004",
      product: "Smartwatch",
      category: "Electronics",
      brand: "Brand D",
      price: 199,
      stock: 100,
      rating: 4.7,
      order: 200,
      sales: 5000,
      image: smartwatch,

    },
    {
      uid: "P005",
      product: "Headphones",
      category: "Electronics",
      brand: "Brand E",
      price: 129,
      stock: 150,
      rating: 4.3,
      order: 120,
      sales: 4000,
      image:headphone,
    },
    {
      uid: "P006",
      product: "Tablet",
      category: "Electronics",
      brand: "Brand F",
      price: 450,
      stock: 75,
      rating: 4.6,
      order: 90,
      sales: 3000,
      image:tablet,

    },
    {
      uid: "P007",
      product: "Jeans",
      category: "Clothing",
      brand: "Brand G",
      price: 40,
      stock: 180,
      rating: 4.1,
      order: 250,
      sales: 7000,
      image:jeans,

    },
    {
      uid: "P008",
      product: "Jacket",
      category: "Clothing",
      brand: "Brand H",
      price: 60,
      stock: 120,
      rating: 4.4,
      order: 150,
      sales: 4500,
      image:jacket,

    },
    {
      uid: "P009",
      product: "Sneakers",
      category: "Footwear",
      brand: "Brand I",
      price: 75,
      stock: 90,
      rating: 4.3,
      order: 100,
      sales: 3000,
      image:sneakers,
    },
    {
      uid: "P010",
      product: "Backpack",
      category: "Accessories",
      brand: "Brand J",
      price: 50,
      stock: 200,
      rating: 4.0,
      order: 250,
      sales: 5000,
      image:backpack,

    },
  ])
  // let rows =

  // Pagination states
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleView = (image)=>{
    setZoomImg(image)
    setOpen(true)
  }
  const handleEdit = (uid) => console.log(`Edit item with UID: ${uid}`);
  const handleDelete = (uid) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(`Deleted item with UID: ${uid}`);
        const newRows = rows.filter(f=>f.uid!==uid)
        setRows(newRows)
        Swal.fire(
          'Deleted!',
          'The product has been deleted.',
          'success'
        );
      }
    });
  
  };

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page when rows per page changes
  };


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [zoomImg,setZoomImg] = useState(sneakers)

  return (
    <>
    
    <Paper>
      <TableContainer>
        <Table
          sx={{ minWidth: 650, border: "1px solid rgba(224, 224, 224, 1)" }}
        >
          <TableHead sx={{ backgroundColor: "#1976d2" }}>
            <TableRow>
              <TableCell sx={{ color: "white", padding: "5px" }}>UID</TableCell>
              <TableCell sx={{ color: "white", padding: "5px" }}>
                PRODUCT
              </TableCell>
              <TableCell sx={{ color: "white", padding: "5px" }}>
                IMAGE
              </TableCell>
              <TableCell sx={{ color: "white", padding: "5px" }}>
                CATEGORY
              </TableCell>
              <TableCell sx={{ color: "white", padding: "5px" }}>
                BRAND
              </TableCell>
              <TableCell sx={{ color: "white", padding: "5px" }}>
                PRICE
              </TableCell>
              <TableCell sx={{ color: "white", padding: "5px" }}>
                STOCK
              </TableCell>
              <TableCell sx={{ color: "white", padding: "5px" }}>
                RATING
              </TableCell>
              <TableCell sx={{ color: "white", padding: "5px" }}>
                ORDER
              </TableCell>
              <TableCell sx={{ color: "white", padding: "5px" }}>
                SALES
              </TableCell>
              <TableCell sx={{ color: "white", padding: "5px" }}>
                ACTION
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow
                  key={row.uid}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff", // Alternating colors
                    borderBottom: "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  <TableCell sx={{ padding: "5px" }}>{row.uid}</TableCell>
                  <TableCell sx={{ padding: "5px" }}>{row.product}</TableCell>
                  <TableCell sx={{ padding: "5px" }}>
                    {" "}
                    <img
                      style={{ height: "70px", mixBlendMode: "multiply" }}
                      src={row.image}
                      alt=""
                    />
                  </TableCell>

                  <TableCell sx={{ padding: "5px" }}>{row.category}</TableCell>
                  <TableCell sx={{ padding: "5px" }}>{row.brand}</TableCell>
                  <TableCell sx={{ padding: "5px" }}>${row.price}</TableCell>
                  <TableCell sx={{ padding: "5px" }}>{row.stock}</TableCell>
                  <TableCell sx={{ padding: "5px" }}>{row.rating}</TableCell>
                  <TableCell sx={{ padding: "5px" }}>{row.order}</TableCell>
                  <TableCell sx={{ padding: "5px" }}>${row.sales}</TableCell>
                  <TableCell sx={{ padding: "5px" }}>
                    <IconButton
                      color="primary"
                      onClick={() => handleView(row.image)}
                    >
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => handleEdit(row.uid)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(row.uid)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <img style={{mixBlendMode:'multiply'}} src={zoomImg} height="400px" alt="" />
        </Box>
      </Modal>
    </div>
    </>

  );
};

export default ProductTable;
