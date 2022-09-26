import { Formik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';

const AddDataset = () => {
  

    const DatasetSubmit = async(formdata ,{resetForm}) =>{
    console.log(formdata)

    const response = await fetch('http://localhost:5000/data/add',{
      method:'POST',
      body : JSON.stringify(formdata),
      headers : {
        'Content-Type' :'application/json'
      }
    });

     if(response.status === 200){
      Swal.fire({
        icon : 'success',
        title : 'Success',
        text : 'Loggedin Succeddfully'
      })
     }else if(response.status === 401){
        Swal.fire({
          icon : 'error',
          title : 'Failed',
          text : 'Loggedin Failed'
        })
     }else{
      console.log('unknown error ');
     }
    
  }
  return (
    <div class="bg-transparent">
<div className='container mt-4  d-flex justify-content-center align-item-center'>
      <div className="col-md-5 col-lg-6">
      <div className='card px-4'>
      <h1 className='text-center'>ADD DATASET HERE</h1>

        <Formik initialValues={{
        title:"",
        discription:"",
        Size:"",
        type:"",
        details:"",
        thumbnail:"",
        filedata:"",
        upvotes:"",
        createdAt:new Date,

      }} onSubmit={DatasetSubmit}>
        {({values,handleChange,handleSubmit})=>(
   <form onSubmit={handleSubmit}>
    <div className="mb-2">
    {/* title address: */}
    <div >
    <label className="form-label" >TITLE</label>
    <input type="title" id="" name='title' value={values.title} onChange={handleChange} className="form-control mb-3" required />
    </div>
    
    {/* description: */}
    
    <label className="form-label" >DISCRIPTION</label>
    <input type="description" id="" name='description' value={values.description} onChange={handleChange} className="form-control mb-3"  required />
    

    {/* Size: */}
    
    <label className="form-label" >SIZE</label>
    <input type="Size" id="" name="Size" value={values.Size} onChange={handleChange} className="form-control mb-3"  required />
    


    {/* type: */}
    <label className="form-label" >TYPE</label>
    <input type="type" id="" name="type" value={values.type} onChange={handleChange} className="form-control mb-3"   required />
    

    {/* details: */}
    <label className="form-label" >DETAILE </label>
    <input type="details" id="" name="details" value={values.details} onChange={handleChange} className="form-control mb-3"  required />
    

    {/* thumbnail: */}
    <label className="form-label" >THUMBNAIL</label>
    <input type="thumbnail" id="" name="thumbnail" value={values.thumbnail} onChange={handleChange} className="form-control mb-3" required />
   
    {/* upvotes: */}
    <label className="form-label" >UP VOTES</label>
    <input type="upvotes" id="" name="upvotes" value={values.upvotes} onChange={handleChange} className="form-control mb-3"  required />

    {/* filedata: */}
    <label className="form-label">FILE DATA </label>
    <input type="file" id="" name="filedata" value={values.filedata} onChange={handleChange} className="form-control mb-3"  required />
   
    
    {/* Image: */}
    <label className="form-label">Upload Image</label>
    <input type="file" id="" name="Upload Image" value={values.UploadImage} onChange={handleChange} className="form-control mb-3"  required />
   

    {/* createdAt: */}
    <label className="form-label" >DATE</label>
    <input type="Date" id="" name="createdAt" value={values.createdAt} onChange={handleChange} className="form-control mb-3"  required />

    <button type="submit" className="btn btn-primary btn-block mt-4">
      SUBMIT
    </button>
   
    </div>


    </form>
        )}
        </Formik>
        </div>
        </div>
        </div>
        </div>

  )
}

export default AddDataset;
