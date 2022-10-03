import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Browsing = () => {

    const [dataList, setDataList] = useState([])
    const getDatafromBackEnd=async()=>{
        const response=await fetch('http://localhost:5000/data/getall');
        const data = await response.json();
        console.log(data);
        setDataList(data);
    }



    useEffect(() =>{ 
    getDatafromBackEnd()}, [])

    const displayData=()=>{
        return(
            <div className='container'>
                <div className='row mt-4' >
                    <h1 className='text-center mt-2 mb-4 text-primary'>ALL DATA SET</h1>
                    {dataList.map(({_id,title,description,category,year,thumbnail,file})=>(
                        <div className='col-md-4' key={_id}>
                           <div class="bg-image hover-zoom">
                        <div className='card col mb-5 shadow mx-2' >
                            <img src={"http://localhost:5000/"+thumbnail} className="rounded-5 shadow " alt="" width={400} height={300}/>
                            <h5 className='px-1 mt-2  text-warning '>{year}</h5>
                            <h4 className='px-2 mt-2 mb-2'>{title}</h4>
                            <p className='px-3 text-muted'>{description}</p>
                            <div className='d-flex justify-content-around'>
                            <p className='text-success mx-4 w-50'>{category}.csv</p>
                            <a rel="stylesheet" href={"http://localhost:5000/"+file} className="my-auto">Click Download</a>
                            </div>
                        </div>
                        </div>
                        </div>
                    ))}
                </div>

            </div>
        )
    }

  return (
    <div>
    {displayData()}
    </div>
  )
}

export default Browsing
