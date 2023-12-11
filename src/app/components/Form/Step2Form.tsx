'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useRouter, useSearchParams } from 'next/navigation'

export default function Step2Form() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const nameDisplay = searchParams.get('name')
  const emailDisplay = searchParams.get('email')
  // validation
  const validationSchema = Yup.object().shape({
    age: Yup.string()
        .required('Age is required'),
    phone: Yup.string()
        .required('Phone is required')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  // display form data on success
  const onSubmit = (data:any) => {
    //console.log(data);
    router.push('/pages/step3?name='+nameDisplay+'&email='+emailDisplay+'&age='+data.age+'&phone='+data.phone);
  };
  const onError = (errors:any, e:any) => console.log(errors, e);

  return ( 
    <div className='flex flex-col'>
        <div className="w-full mb-5">
          <h1 className="font-thin text-xl lg:text-3xl text-left">Step 2: Tell Us More About You</h1>
        </div>
        <div className='w-full mb-2'>
        <p className='font-normal text-sm text-sky-700 mb-2'>Name: <span className='text-orange-500'>{nameDisplay}</span></p>
          <p className='font-normal text-sm text-sky-700 mb-2'>Email: <span className='text-orange-500'>{emailDisplay}</span></p>
        </div>
        <div className="w-full">
          <form action="" method="post" onSubmit={handleSubmit(onSubmit, onError)} >
            <div className="mb-4">
              <input 
                type="text" 
                autoComplete="off"
                placeholder='age'
                maxLength={3} 
                {...register('age')}
                className={`appearance-none bg-transparent border-b border-sky-500 text-sm w-full py-2 placeholder-gray-500 text-gray-500 leading-tight focus:outline-none focus:shadow-outline`} />
                <div className="mt-1 text-xs text-red-700">
                  {errors.age?.message}
                </div>
            </div>
            <div className="mb-4">
              <input 
                type="text" 
                autoComplete="off"
                placeholder='Phone'
                {...register('phone')}  
                className={`appearance-none bg-transparent border-b border-sky-500 text-sm w-full py-2 placeholder-gray-500 text-gray-500 leading-tight focus:outline-none focus:shadow-outline`} />
                <div className="mt-1 text-xs text-red-700">
                    {errors.phone?.message}
                </div>
            </div>
            <div className="mt-10">
              <button type="submit" className="uppercase bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500">
                Next
              </button>
            </div>
          </form>
        </div>
    </div>
  )
}