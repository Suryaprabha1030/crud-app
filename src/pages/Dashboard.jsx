import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getData } from '../redux/slicer/SymbolSlicer';

const Dashboard = () => {
    const [data,setData]=useState([])
    const dispatch=useDispatch()
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/todos");
          const json = await res.json(); // Convert response to JSON
          setData(json); // Update state with data
          dispatch(getData({fetchData:res}))
        } catch (error) {
          console.error("Error fetching data:", error); // Handle errors properly
        }
      };
  
      fetchData();
    }, []);
 
  console.log(data,"surya")

  
  
  return (
    // how to get other row set automatically tha row fill
    <div className='w-full h-full flex flex-row flex-wrap gap-20 justify-center items-center overflow-hidden'>
      {data.map ((dat)=>(<div className='w-[10rem] h-[10rem] flex flex-col gap-5 justify-center items-center   bg-white shadow-lg rounded-md border border-gray-200'>
          <span>{dat.userId}</span>
          <span className='text-center'>{dat.title}</span>
      </div>))  }  
    </div>
  )
}

export default Dashboard
