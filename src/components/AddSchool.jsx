'use client'
import { errorMessage, successMessage } from '@/message/message';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddSchool = () => {
  const { handleSubmit, control, register, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
  
    try {
      const result = await axios.post('/api/school', data)
    
      if(result.status === 200){
        if(result?.data?.message){
          errorMessage(result?.data?.message)
        }
        else{
          successMessage()
          reset()
        }
     
      }
      
    } catch (error) {
        errorMessage(error.message)
        console.log('client errror',error)
    }
  };

  return (
    <div>
      <p className='text-[24px] text-center font-bold'>Add New School</p>
    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
      <div className='flex flex-col'>
        <label className=''>Name</label>
        <input {...register('name', { required: true })} className='border-[2px] rounded-md outline-none px-2' placeholder='Enter School Name'/>
        {errors.name && <p className='text-red-500 text-[13px]'>This field is required</p>}
      </div>
      <div className='flex flex-col'>
        <label>Email</label>
        <input
          {...register('email_id', {
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
          className='border-[2px] rounded-md outline-none px-2' placeholder='Enter School Name'/>
        {errors.email_id && <p className='text-red-500 text-[13px]'>{errors.email_id.message}</p>}
      </div>
      <div className='flex flex-col'>
        <label>Address</label>
        <input {...register('address', { required: true })} className='border-[2px] rounded-md outline-none px-2' placeholder='Enter School Name'/>
        {errors.address && <p className='text-red-500 text-[13px]'>This field is required</p>}
      </div>
      <div className='flex flex-col'>
        <label>City</label>
        <input {...register('city', { required: true })} className='border-[2px] rounded-md outline-none px-2' placeholder='Enter School Name'/>
        {errors.city && <p className='text-red-500 text-[13px]'>This field is required</p>}
      </div>
      <div className='flex flex-col'>
        <label>State</label>
        <input {...register('state', { required: true })} className='border-[2px] rounded-md outline-none px-2' placeholder='Enter School Name'/>
        {errors.state && <p className='text-red-500 text-[13px]'>This field is required</p>}
      </div>

      
      <div className='flex flex-col'>
        <label>Contact</label>
        <input {...register('contact', { required: true })} className='border-[2px] rounded-md outline-none px-2' placeholder='Enter Contact'/>
        {errors.contact && <p className='text-red-500 text-[13px]'>This field is required</p>}
      
      </div>
      <div className='flex flex-col'>
        <label>Image</label>
        <input {...register('image', { required: true })} className='border-[2px] rounded-md outline-none px-2' placeholder='Enter image url'/>
        {errors.image && <p className='text-red-500 text-[13px]'>This field is required</p>}
      </div>
      <div className='w-full text-center sm:col-span-2'>
        <button type="submit" className='bg-blue-500 p-2 rounded-xl text-white'>Submit</button>
      </div>
    </form>

    <Link href='/showSchool' className='underline text-blue-500'>Go to School List</Link>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
    </div>
  );
};

export default AddSchool;
