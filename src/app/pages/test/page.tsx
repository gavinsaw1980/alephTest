'use client'

import React from 'react';
import useSWR from 'swr';
 
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Test() {
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
    
    const insertData = {
      "name": "test user",
      "email": "testuser@gmail.com",
      "phone": "0137888984"
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
      } else {
        console.log('fail - response: ' + res);
      }

    };

  return (
    <div className='flex h-screen flex-col items-center px-7 lg:px-0 mt-32'>
        <button onClick={saveData}>Save</button>
        <table className="table-auto mt-10">
        <thead>
          <tr className='bg-orange-400'>
            <th className="px-4 py-2">User</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((item:any) => (
            <tr key={item.name}>
              <td className="border px-4 py-2 border-none">{item.name}</td>
              <td className="border px-4 py-2 border-none">{item.email}</td>
              <td className="border px-4 py-2 border-none">{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}