import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './addProduct.module.css'; // Import the CSS module
import Swal from 'sweetalert2';

const AddProduct = () => {

  const formik = useFormik({
    initialValues: {
      uid: '',
      product: '',
      image: '',
      category: '',
      brand: '',
      price: '',
    },
    validationSchema: Yup.object({
      uid: Yup.string().required('UID is required').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}$/, 'UID must be exactly 8 characters, containing letters and digits'),
      
      product: Yup.string().required('Product name is required'),
      image: Yup.string().url('Invalid URL format').required('Image URL is required'),
      category: Yup.string().required('Category is required'),
      brand: Yup.string().required('Brand is required'),
      price: Yup.number().typeError('Price must be a number').positive('Price must be positive').required('Price is required'),
    }),
    onSubmit: values => {
    //   alert(JSON.stringify(values, null, 2));
      Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to add this product?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, add it!',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          // Proceed with the form submission if confirmed
          Swal.fire({
            title: 'Product Successfully added',icon:'success'})
          // Optionally reset the form after successful submission
          formik.resetForm();
        }
      });
        
    },
  });


  return (
    
    <form onSubmit={formik.handleSubmit} className={styles.form}>
        <h2 className={styles.h2}>Add Product</h2>
      <label htmlFor="uid" className={styles.label}>UID</label>
      <input
        id="uid"
        name="uid"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.uid}
        className={styles.input}
      />
      {formik.touched.uid && formik.errors.uid ? (
        <div className={styles.error}>{formik.errors.uid}</div>
      ) : null}

      <label htmlFor="product" className={styles.label}>Product</label>
      <input
        id="product"
        name="product"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.product}
        className={styles.input}
      />
      {formik.touched.product && formik.errors.product ? (
        <div className={styles.error}>{formik.errors.product}</div>
      ) : null}

      <label htmlFor="image" className={styles.label}>Image URL</label>
      <input
        id="image"
        name="image"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.image}
        className={styles.input}
      />
      {formik.touched.image && formik.errors.image ? (
        <div className={styles.error}>{formik.errors.image}</div>
      ) : null}

      <label htmlFor="category" className={styles.label}>Category</label>
      <input
        id="category"
        name="category"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.category}
        className={styles.input}
      />
      {formik.touched.category && formik.errors.category ? (
        <div className={styles.error}>{formik.errors.category}</div>
      ) : null}

      <label htmlFor="brand" className={styles.label}>Brand</label>
      <input
        id="brand"
        name="brand"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.brand}
        className={styles.input}
      />
      {formik.touched.brand && formik.errors.brand ? (
        <div className={styles.error}>{formik.errors.brand}</div>
      ) : null}

      <label htmlFor="price" className={styles.label}>Price</label>
      <input
        id="price"
        name="price"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.price}
        className={styles.input}
      />
      {formik.touched.price && formik.errors.price ? (
        <div className={styles.error}>{formik.errors.price}</div>
      ) : null}

      <button type="submit" className={styles.button}>Submit</button>
    </form>

  );
};

export default AddProduct;
