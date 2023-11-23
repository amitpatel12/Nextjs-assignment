'use client'
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import axios from "axios";

const ShowSchool = () => {
  // const data = [
  //   {
  //     name: "Baba Sahab School",
  //     address: "lucknow",
  //     image:
  //       "https://uniformapp.in/admin_area/school_images/La_Martiniere_College_Lucknow_image1_7.jpeg",
  //     city: "Gomti Nagar",
  //   },
    
  // ];

  const [data, setData] = useState([])

  useEffect(()=> {
    const fetchData = async () => {
     try {
      const result = await axios('/api/school')
      setData(result?.data)
     } catch (error) {
      console.log(error);
     }
    }

    fetchData()
  },[])
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-10 main-container">
      <h2 className="text-[30px]">List of Schools</h2>
      <Link href='/' className="w-fit bg-[#4cae4c] p-2 rounded-xl text-white text-[15px] mb-4">Add New School</Link>

      <div className="xl:w-[80%] w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 shadow-2xl p-5 card-container">
        {
            data.map((item, i)=>(
                <div key={i} className="flex flex-col gap-2 rounded-b-xl border-[1px] group rounded-xl">
                   <div className="h-[233px] overflow-hidden">
                    <img src={item.image} alt={item.name} className="rounded-t-xl group-hover:rounded-none delay-500 transition-all group-hover:scale-125 overflow-hidden"/>
                    </div>
                    <div className="p-2 flex flex-col gap-2">
                      <div className="flex justify-between item-center">
                        <p>⭐⭐⭐⭐⭐</p>
                        <p className="text-[#337ab7] text-[13px]">CBSC</p>
                      </div>
                    <p className="text-[#337ab7] text-[13px]">{item.state}</p>
                    <p className="font-bold text-[18px] line-clamp-2 overflow-hidden h-[54px]">{item.name}</p>
                    <p className="text-[#808080] text-[15px]">{item.city}</p>
                    </div>
                    <button className="w-full bg-[#4cae4c] py-2 rounded-b-xl text-white text-[15px]">Apply Now</button>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default ShowSchool;
