'use client'

import React, { useState } from 'react';
import useSWR from 'swr';
import { motion, AnimatePresence } from 'framer-motion';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DisplayData() {    
    const [isDivVisible, setIsDivVisible] = useState(false);

    const toggleDivVisibility = () => {
        setIsDivVisible(!isDivVisible);
    };

    const url ='https://jsonblob.com/api/jsonBlob/1183740524065841152';
    const { data, isLoading, error } = useSWR(url, fetcher, { refreshInterval: 1000 });
    const jsonData = data;

    //console.log(jsonData)

    if (error) {
        return <div className="text-red-500 text-center"><p>Error loading</p></div>
    }

    if (isLoading) {
        return <div className="text-red-500 text-center"><p>Loading...</p></div>
    }

	return (  
        <div>    
            <div className='w-full text-center'> 
                <button onClick={toggleDivVisibility} className='bg-orange-400 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500'>
                    {isDivVisible ? 'Hide Json Data' : 'Show Json Data'}
                </button>
            </div>
            <AnimatePresence>
                {isDivVisible && 
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10'
                    >
                        {jsonData.map((item:any) => (
                            <div className='rounded-xl bg-slate-500 p-4 text-white transition ease-in-out hover:-translate-y-2 hover:bg-slate-800 duration-500' key={item.name}>
                                <h2 className='text-xl font-thin'>User Details</h2>
                                <hr className='h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded' />
                                <p className='text-sm mb-1'>Name: <span className='text-orange-500 font-semibold text-xs'>{item.name}</span></p>
                                <p className='text-sm'>Email: <span className='text-orange-500 font-semibold text-xs'>{item.email}</span></p>
                                <p className='text-sm'>Age: <span className='text-orange-500 font-semibold text-xs'>{item.age}</span></p>
                                <p className='text-sm'>Phone: <span className='text-orange-500 font-semibold text-xs'>{item.phone}</span></p>
                                <hr className='h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded' />
                                <p className='text-sm'>State: <span className='text-orange-500 font-semibold text-xs'>{item.state}</span></p>
                                <p className='text-sm'>Favourite Food: <span className='text-orange-500 font-semibold text-xs'>{item.food}</span></p>
                                <p className='text-sm'>Culture Vibe: <span className='text-orange-500 font-semibold text-xs'>{item.vibe}</span></p>
                            </div>
                        ))}
                    </motion.div>
                }
            </AnimatePresence>
        </div>  
	)
}