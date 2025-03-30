import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getData } from '../redux/slicer/SymbolSlicer';

const Navbar = () => {
  const dispatch=useDispatch()
   useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos");
            const json = await res.json(); // Convert response to JSON
            // setData(json); // Update state with data
            // dispatch(getData({fetchdata:json}))
            dispatch(getData({ fetchdata: json
             }));
          } catch (error) {
            console.error("Error fetching data:", error); // Handle errors properly
          }
        };
    
        fetchData();
      }, []);
   
  return (
    <div className='w-full h-10 bg-white shadow-2xl flex flex-row justify-between items-center px-10'>
        <div className='w-1/4'>suryaTech</div>
        <span className='w-3/4 flex flex-row justify-end gap-20 items-center'>
        <span><Link to="/" >Home</Link> </span>
        <span><Link to="/about" >About</Link></span>
        <span><Link to="/dashboard" >Dashboard</Link> </span>
       </span> 
    </div>
  )
}

export default Navbar
