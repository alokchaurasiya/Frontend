import React from 'react'

const addDataset = () => {
  return (
    <div>
        
        <Formik initialValues={{

        email:"",
        password:"",
      }} onSubmit={SignSubmit}>
        {({values,handleChange,handleSubmit})=>(
   <Formik onSubmit={handleSubmit}>

    <div>
    {/* title address: */}
    <div className=" mb-2">
    <label className="form-label" htmlFor="form2Example1">
    </label>
    <input type="title" id="" name='title' value={values.title} onChange={handleChange} className="form-control"  required />
    </div>
    
    {/* description: */}
    <div className="mb-4">
    <label className="form-label" htmlFor="form2Example2">
    </label>
    <input type="description" id="" name='description' value={values.description} onChange={handleChange} className="form-control"  required />
    </div>

    {/* Size: */}
    <div className="mb-4">
    <label className="form-label" htmlFor="form2Example2">
    </label>
    <input type="Size" id="" name="Size" value={values.Size} onChange={handleChange} className="form-control"  required />
    </div>


    {/* type: */}
    <div className="mb-4">
    <label className="form-label" htmlFor="form2Example2">
    </label>
    <input type="type" id="" name="type" value={values.type} onChange={handleChange} className="form-control"  required />
    </div>

    {/* details: */}
    <div className="mb-4">
    <label className="form-label" htmlFor="form2Example2">
    </label>
    <input type="details" id="" name="details" value={values.details} onChange={handleChange} className="form-control"  required />
    </div>

    {/* thumbnail: */}
    <div className="mb-4">
    <label className="form-label" htmlFor="form2Example2">
    </label>
    <input type="thumbnail" id="" name="thumbnail" value={values.thumbnail} onChange={handleChange} className="form-control"  required />
    </div>

    {/* filedata: */}
    <div className="mb-4">
    <label className="form-label" htmlFor="form2Example2">
    </label>
    <input type="filedata" id="" name="filedata" value={values.filedata} onChange={handleChange} className="form-control"  required />
    </div>

    {/* upvotes: */}
    <div className="mb-4">
    <label className="form-label" htmlFor="form2Example2">
    </label>
    <input type="upvotes" id="" name="upvotes" value={values.upvotes} onChange={handleChange} className="form-control"  required />
    </div>

    {/* createdAt: */}
    <div className="mb-4">
    <label className="form-label" htmlFor="form2Example2">
    </label>
    <input type="createdAt" id="" name="createdAt" value={values.createdAt} onChange={handleChange} className="form-control"  required />
    </div>

    </div>

    </Formik>


  )
}

export default addDataset;
