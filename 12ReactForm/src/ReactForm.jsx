import React, { useState } from 'react'
import {useForm} from "react-hook-form"

const ReactForm = () => {
  const {
    register,
    handleSubmit
  } = useForm();

  const [value, setValue] = useState(null);

  const onSubmit = (formData) => {
    setValue(formData);
  }
  console.log(value);
  
  return (
      <>
      <div className='h-screen bg-gray-800 flex justify-center items-center'>
        <div className='bg-white flex justify-center rounded max-w-md'>
          <form className='p-10' onSubmit={handleSubmit(onSubmit)}>
            <label className='block mb-2'>Name</label>
            <input className='w-full border px-3 py-1 rounded' type="text" placeholder='Enter your Email'
            {...register("name")} />
            <label className='block mb-2'>Email</label>
            <input className='w-full border px-3 py-1 rounded' type="text" placeholder='Enter your name'
              {...register("email")} />
            <label className='block mb-2'>Gender</label>
            <select {...register("gender")} className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-'>
              <option value="">Select the gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          
            <button className='rounded mt-3 w-full bg-blue-500 px-3 py-1' type={"submit"}>Submit</button>
          </form>
        </div>
        </div>
      </>
  )
}

export default ReactForm
