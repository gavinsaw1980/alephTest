'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useRouter, useSearchParams } from 'next/navigation'

export default function Step3Form () {
    const router = useRouter();
    const searchParams = useSearchParams();

    const nameDisplay = searchParams.get('name')
    const emailDisplay = searchParams.get('email')
    const ageDisplay = searchParams.get('age')
    const phoneDisplay = searchParams.get('phone')

    // validation
    const validationSchema = Yup.object().shape({
        state: Yup.string()
            .required('State is required'),
        food: Yup.string()
            .required('Food is required'),
        vibe: Yup.string()
            .required('Culture vibe is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    // display form data on success
    const onSubmit = (data:any) => {
        //console.log('SUCCESS!!\n\n' + JSON.stringify(data, null));
        router.push('/pages/store?name='+nameDisplay+'&email='+emailDisplay+'&age='+ageDisplay+'&phone='+phoneDisplay+'&state='+data.state+'&food='+data.food+'&vibe='+data.vibe);
    };
    const onError = (errors:any, e:any) => console.log(errors, e);

    return (
        <div className='flex flex-col'>
            <div className="w-full mb-5">
                <h1 className="font-thin text-xl lg:text-3xl text-left">Step 3: Pick An Answer That Best Fits You</h1>
            </div>
            <div className='w-full mb-10'>
                <p className='font-normal text-sm text-sky-700 mb-2'>Name: <span className='text-orange-500'>{nameDisplay}</span></p>
                <p className='font-normal text-sm text-sky-700 mb-2'>Email: <span className='text-orange-500'>{emailDisplay}</span></p>
                <p className='font-normal text-sm text-sky-700 mb-2'>Age: <span className='text-orange-500'>{ageDisplay}</span></p>
                <p className='font-normal text-sm text-sky-700'>Phone: <span className='text-orange-500'>{phoneDisplay}</span></p>
            </div>
            <div className="w-full">
                <form action="" method="post" onSubmit={handleSubmit(onSubmit, onError)} >
                    <div className="mb-4">
                        <select 
                            {...register('state')}
                            className={`bg-transparent w-full text-sm py-2.5 border-b border-sky-500 placeholder-gray-500 text-gray-500 focus:outline-none`}>
                            <option value="">Which state are you from?</option>
                            <option value="Johor">Johor</option>
                            <option value="Kedah">Kedah</option>
                            <option value="Kuala Lumpur">Kuala Lumpur</option>
                            <option value="Kelantan">Kelantan</option>
                            <option value="Labuan">Labuan</option>
                            <option value="Malacca">Malacca</option>
                            <option value="Negeri Sembilan">Negeri Sembilan</option>
                            <option value="Pahang">Pahang</option>
                            <option value="Penang">Penang</option>
                            <option value="Perak">Perak</option>
                            <option value="Putrajaya">Putrajaya</option>
                            <option value="Sabah">Sabah</option>
                            <option value="Sarawak">Sarawak</option>
                            <option value="Selangor">Selangor</option>
                            <option value="Terengganu">Terengganu</option>
                        </select>
                        <div className="mt-1 text-xs text-red-700">
                            {errors.state?.message}
                        </div>
                    </div>
                    <div className="mb-4">
                        <select 
                            {...register('food')}
                            className={`bg-transparent w-full text-sm py-2.5 border-b border-sky-500 placeholder-gray-500 text-gray-500 focus:outline-none`}>
                            <option value="">Your favourite food?</option>
                            <option value="Asean food">Asean food</option>
                            <option value="Western food">Western food</option>
                        </select>
                        <div className="mt-1 text-xs text-red-700">
                            {errors.food?.message}
                        </div>
                    </div>
                    <div className="mb-4">
                        <select 
                            {...register('vibe')}
                            className={`bg-transparent w-full text-sm py-2.5 border-b border-sky-500 placeholder-gray-500 text-gray-500 focus:outline-none`}>
                            <option value="">Your culture vibe?</option>
                            <option value="Congkak">Congkak</option>
                            <option value="Cafe hopping">Cafe hopping</option>
                            <option value="Indian oil lamp">Indian oil lamp</option>
                            <option value="Food discovery">Food discovery</option>
                        </select>
                        <div className="mt-1 text-xs text-red-700">
                            {errors.vibe?.message}
                        </div>
                    </div>
                    <div className="mt-10">
                        <button type="submit" className="uppercase bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}