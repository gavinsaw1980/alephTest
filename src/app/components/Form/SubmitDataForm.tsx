'use client'

import React from 'react';
import useSWR from 'swr';
import { useForm } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function SubmitDataForm(){
    const router = useRouter();
    const searchParams = useSearchParams();

    const nameDisplay = searchParams.get('name')
    const emailDisplay = searchParams.get('email')
    const ageDisplay = searchParams.get('age')
    const phoneDisplay = searchParams.get('phone')
    const stateDisplay = searchParams.get('state')
    const foodDisplay = searchParams.get('food')
    const vibeDisplay = searchParams.get('vibe')

    // get functions to build form with useForm() hook
    const { handleSubmit, formState } = useForm();

    const url ='https://jsonblob.com/api/jsonBlob/1183740524065841152';
    const { data, isLoading, error } = useSWR(url, fetcher, { refreshInterval: 1000 });
    const jsonData = data;

    if (error) {
        return <div className="text-red-500 text-center"><p>Error loading</p></div>
    }

    if (isLoading) {
        return <div className="text-red-500 text-center"><p>Loading...</p></div>
    }

    const insertData = {
        "name": nameDisplay,
        "email": emailDisplay,
        "age": ageDisplay,
        "phone": phoneDisplay,
        "state": stateDisplay,
        "food": foodDisplay,
        "vibe": vibeDisplay,
      };

      const saveData = async (e:any) => {
        e.preventDefault();
    
        jsonData.push(insertData);  
        const myJSON = JSON.stringify(jsonData)
        //console.log(myJSON);
  
        const res = await fetch(url,{
          method: 'PUT',
          body: myJSON,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        
        //console.log(res)
        if (res.ok) {
          console.log('success - response: ' + res);
          router.push('/pages/final');
        } else {
          console.log('fail - response: ' + res);
        }
    }

    return (
        <div className='flex flex-col'>
            <div className="w-full mb-5">
                <h1 className="font-thin text-xl lg:text-3xl text-left">step 4: Submit Data to Json</h1>
            </div>
            <div className='w-full mb-10'>
                <p className='font-normal text-sm text-sky-700 mb-2'>Name: <span className='text-orange-500'>{nameDisplay}</span></p>
                <p className='font-normal text-sm text-sky-700 mb-2'>Email: <span className='text-orange-500'>{emailDisplay}</span></p>
                <p className='font-normal text-sm text-sky-700 mb-2'>Age: <span className='text-orange-500'>{ageDisplay}</span></p>
                <p className='font-normal text-sm text-sky-700 mb-2'>Phone: <span className='text-orange-500'>{phoneDisplay}</span></p>
                <p className='font-normal text-sm text-sky-700 mb-2'>State: <span className='text-orange-500'>{stateDisplay}</span></p>
                <p className='font-normal text-sm text-sky-700 mb-2'>Favourite food: <span className='text-orange-500'>{foodDisplay}</span></p>
                <p className='font-normal text-sm text-sky-700'>Culture vibe: <span className='text-orange-500'>{vibeDisplay}</span></p>
            </div>
            <div className="w-full">
                    <div className="mt-10">
                        <button onClick={saveData} className="uppercase bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500">
                           Save to Json
                        </button>
                    </div>
            </div>
        </div>
    )
}