import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const About = () => {
  const data=useSelector((state)=>state.Symbol.dataArr)
  console.log(data,"data")

  return (
    <div>
      hello
    </div>
  )
}

export default About
