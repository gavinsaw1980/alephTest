import React from 'react';
import Link from 'next/link';

export default function Header() {
    return ( 
        <div className='fixed top-0 left-0 z-10 w-full'>
            <div className='flex lg:flex-row flex-col py-4 bg-slate-600 items-center'>
                <div className='lg:basis-1/4 basis-full text-center lg:mb-0 mb-2'>
                    <Link href='/'>
                        <span className="font-extrabold text-xl md:text-2xl xl:text-3xl uppercase text-white">Next JS</span>
                    </Link>
                </div>
                <div className='lg:basis-2/4 basis-full text-center'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl text-orange-400'>Aleph Lab assessments</h1>
                </div>
                <div className='lg:basis-1/4 basis-full'>
                </div>
            </div>
        </div>
    )
}