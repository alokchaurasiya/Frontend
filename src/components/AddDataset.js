import { Formik } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';


const AddDataset = () => {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  
  const url="http://localhost:5000"
  const [selFile, setSelFile] = useState("");
  const [selThumbnail, setSelThumbnail] = useState("");

    const DatasetSubmit = async(formdata ,{resetForm}) =>{
    console.log(formdata)
      formdata.thumbnail=selThumbnail;
      formdata.file=selFile;
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
        text : 'Data Saved'
      })
      setCurrentUser(true);
     }else if(response.status === 401){
        Swal.fire({
          icon : 'error',
          title : 'Failed',
          text : 'Data Not Saved'
        })
     }else{
      console.log('unknown error ');
     }
    resetForm();
  }

  const uploadthumbnail = (e) => {
    const file = e.target.files[0];
    setSelThumbnail(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch( url+ "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Image Uploaded!!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    });
  };
  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch( url+ "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Image Uploaded!!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    });
  };
    if(currentUser){
      return <div class="bg-transparent">
<div className='container mt-4  d-flex justify-content-center align-item-center'>
      <div className="col-md-5 col-lg-6">
      <div className='card px-4'>
      <h1 className='text-center'>ADD DATASET HERE</h1>

        <Formik initialValues={{
        title:"",
        description:"",
        year :"",
        category:"",
        createdAt:new Date(),

      }} onSubmit={DatasetSubmit}>
        {({values,handleChange,handleSubmit})=>(
   <form onSubmit={handleSubmit}>
    <div className="mb-2">
    {/* title address: */}
    <div >
    <label className="form-label" htmlFor='title' >TITLE</label>
    <input type="text" id="title" name='title' value={values.title} onChange={handleChange} className="form-control mb-3" required />
    </div>
    
    {/* description: */}
    
    <label className="form-label" htmlFor='description'>DESCRIPTION</label>
    <input type="text" id="description" name='description' value={values.description} onChange={handleChange} className="form-control mb-3"  required />
    
    {/* year: */}
    
    <label className="form-label" htmlFor='year'>YEAR</label>
    <input type="number" id="year" name='year' value={values.year} onChange={handleChange} className="form-control mb-3"  required />

    {/* category: */}
    
    <label className="form-label" htmlFor='category'>CATEGORY</label>
    <input type="text" id="category" name='category' value={values.category} onChange={handleChange} className="form-control mb-3"  required />
    

    {/* thumbnail: */}
    <label className="form-label" htmlFor='thumbnail' >THUMBNAIL</label>
    <input type="file" id="thumbnail" name="thumbnail" onChange={uploadthumbnail} className="form-control mb-3" required accept='.JPG ,.PNG , .SVG ,.JPEG'/>

    {/* filedata: */}
    <label className="form-label">FILE DATA </label>
    <input type="file" id="" name="filedata"  onChange={uploadFile} className="form-control mb-3"  required accept='.csv ,.Zip'/>
  
   
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

        }
}

export default AddDataset;
