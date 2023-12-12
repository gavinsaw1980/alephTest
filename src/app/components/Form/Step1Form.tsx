'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';

export default function Step1Form() {
  const [input, setInput] = useState('');
  const router = useRouter();

  // count character 
  const inputHandler = (e:any) => {
    setInput(e.target.value);
  };
  // validation
  const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .required('Email is required').email('Email is invalid')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  // display form data on success
  const onSubmit = (data:any) => {
    //console.log(data.name);
    //console.log(`Here are your details: \n`+JSON.stringify(data, null));
    router.push('/pages/step2?name='+data.name+'&email='+data.email);
  };
  const onError = (errors:any) => console.log(errors);

  return ( 
    <div className='flex flex-col'>
        <div className="w-full mb-10">
          <h1 className="font-thin text-xl lg:text-3xl text-left">Step 1: Tell Us More About You</h1>
        </div>
        <div className="w-full bg-white rounded-lg p-5 shadow-lg">
          <form action="" method="post" onSubmit={handleSubmit(onSubmit, onError)} >
            <div className="mb-2">
              <input 
                type="text" 
                autoComplete="off"
                placeholder='Name'
                maxLength={15} 
                {...register('name')} 
                onInput={inputHandler}
                className={`appearance-none bg-transparent border-b border-sky-500 text-sm w-full py-2 placeholder-gray-500 text-gray-500 leading-tight focus:outline-none focus:shadow-outline`} />
                <div className="mt-1 text-xs text-red-700">
                  {errors.name?.message}
                </div>
            </div>
            <div className='mb-4'>
              <p className='text-xs text-gray-500 text-right'>{15 - input.length} Charaters Remaining</p>
            </div>
            <div className="mb-4">
              <input 
                type="text" 
                autoComplete="off"
                placeholder='Email'
                {...register('email')}  
                className={`appearance-none bg-transparent border-b border-sky-500 text-sm w-full py-2 placeholder-gray-500 text-gray-500 leading-tight focus:outline-none focus:shadow-outline`} />
                <div className="mt-1 text-xs text-red-700">
                    {errors.email?.message}
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